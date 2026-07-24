// app/api/auth/signup/route.js

import { NextResponse } from "next/server";
import crypto from "node:crypto";

import connectDB from "@/lib/db";
import User from "@/models/UserSchema";
import OtpVerification from "@/models/OtpVerificationSchema";

// OTP configuration
const OTP_EXPIRY_MINUTES = 5;
const RESEND_COOLDOWN_SECONDS = 60;

// Basic validation limits
const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 80;
const EMAIL_MAX_LENGTH = 254;

/**
 * Normalize an email before storing/comparing it.
 */
function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

/**
 * Normalize an Indian mobile number to E.164 format.
 *
 * Accepted examples:
 * 9876543210
 * +919876543210
 * 919876543210
 */
function normalizeIndianMobile(mobile) {
  const cleaned = String(mobile).replace(/[\s()-]/g, "");

  if (/^[6-9]\d{9}$/.test(cleaned)) {
    return `+91${cleaned}`;
  }

  if (/^91[6-9]\d{9}$/.test(cleaned)) {
    return `+${cleaned}`;
  }

  if (/^\+91[6-9]\d{9}$/.test(cleaned)) {
    return cleaned;
  }

  return null;
}

/**
 * Hash OTP before storing it.
 *
 * The raw OTP must never be stored in MongoDB.
 */
function hashOtp(otp) {
  const secret = process.env.OTP_HASH_SECRET;

  if (!secret) {
    throw new Error("OTP_HASH_SECRET is not configured.");
  }

  return crypto
    .createHmac("sha256", secret)
    .update(otp)
    .digest("hex");
}

export async function POST(request) {
  try {
    /*
     * 1. Parse request body.
     */
    let body;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request body.",
        },
        { status: 400 }
      );
    }

    let { name, email, mobile } = body ?? {};

    /*
     * 2. Validate required primitive fields.
     *
     * Reject objects/arrays so values cannot accidentally become
     * "[object Object]" during normalization.
     */
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof mobile !== "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and mobile number are required.",
        },
        { status: 400 }
      );
    }

    /*
     * 3. Normalize incoming values.
     */
    name = name.trim().replace(/\s+/g, " ");
    email = normalizeEmail(email);
    mobile = normalizeIndianMobile(mobile);

    /*
     * 4. Validate name.
     */
    if (
      name.length < NAME_MIN_LENGTH ||
      name.length > NAME_MAX_LENGTH
    ) {
      return NextResponse.json(
        {
          success: false,
          message: `Name must be between ${NAME_MIN_LENGTH} and ${NAME_MAX_LENGTH} characters.`,
        },
        { status: 400 }
      );
    }

    /*
     * 5. Validate email.
     *
     * Keep API-side validation intentionally practical.
     * Mongoose schema validation should provide another validation layer.
     */
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      email.length > EMAIL_MAX_LENGTH ||
      !emailRegex.test(email)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    /*
     * 6. Validate/normalize Indian mobile.
     */
    if (!mobile) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid Indian mobile number.",
        },
        { status: 400 }
      );
    }

    /*
     * 7. Connect to MongoDB only after cheap input validation succeeds.
     */
    await connectDB();

    /*
     * 8. Check whether an account already owns this email or mobile.
     *
     * A single query avoids unnecessary DB round trips.
     */
    const existingUser = await User.findOne({
      $or: [{ email }, { mobile }],
    })
      .select("email mobile")
      .lean();

    if (existingUser) {
      if (existingUser.email === email) {
        return NextResponse.json(
          {
            success: false,
            code: "EMAIL_ALREADY_REGISTERED",
            message:
              "An account with this email already exists. Please log in.",
          },
          { status: 409 }
        );
      }

      if (existingUser.mobile === mobile) {
        return NextResponse.json(
          {
            success: false,
            code: "MOBILE_ALREADY_REGISTERED",
            message:
              "An account with this mobile number already exists. Please log in.",
          },
          { status: 409 }
        );
      }
    }

    /*
     * 9. Check for a recent pending signup.
     *
     * Prevent users/bots from requesting another OTP immediately.
     */
    const existingVerification =
      await OtpVerification.findOne({
        mobile,
        purpose: "signup",
      })
        .select("lastSentAt")
        .lean();

    if (existingVerification?.lastSentAt) {
      const elapsedSeconds = Math.floor(
        (Date.now() -
          new Date(existingVerification.lastSentAt).getTime()) /
          1000
      );

      if (elapsedSeconds < RESEND_COOLDOWN_SECONDS) {
        const retryAfter =
          RESEND_COOLDOWN_SECONDS - elapsedSeconds;

        return NextResponse.json(
          {
            success: false,
            code: "OTP_COOLDOWN",
            message: `Please wait ${retryAfter} seconds before requesting another OTP.`,
            retryAfter,
          },
          {
            status: 429,
            headers: {
              "Retry-After": String(retryAfter),
            },
          }
        );
      }
    }

    /*
     * 10. Generate a cryptographically secure 6-digit OTP.
     *
     * crypto.randomInt() is preferable to Math.random()
     * for security-sensitive random values.
     */
    const otp = crypto
      .randomInt(0, 1_000_000)
      .toString()
      .padStart(6, "0");

    const otpHash = hashOtp(otp);

    const now = new Date();

    const expiresAt = new Date(
      now.getTime() + OTP_EXPIRY_MINUTES * 60 * 1000
    );

    /*
     * 11. Create/update the temporary pending signup.
     *
     * The permanent User is NOT created here.
     *
     * A user will only be created after successful OTP
     * verification in /api/auth/verify-otp.
     */
    await OtpVerification.findOneAndUpdate(
      {
        mobile,
        purpose: "signup",
      },
      {
        $set: {
          name,
          email,
          mobile,

          purpose: "signup",

          otpHash,

          expiresAt,
          lastSentAt: now,

          attempts: 0,
          verified: false,
        },
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
      }
    );

    /*
     * 12. Send OTP through your SMS provider.
     *
     * IMPORTANT:
     *
     * Replace this section with the actual provider integration
     * (MSG91, Twilio Verify, etc.).
     *
     * Never return `otp` to the frontend in production.
     */

    // Example:
    //
    // await sendOtpSms({
    //   mobile,
    //   otp,
    // });

    /*
     * Until SMS integration is added, DO NOT expose the OTP
     * in the JSON response.
     */

    /*
     * 13. Return only safe information required by the frontend.
     */
    return NextResponse.json(
      {
        success: true,
        message: "OTP sent successfully.",
        data: {
          mobile,
          expiresIn: OTP_EXPIRY_MINUTES * 60,
          resendAfter: RESEND_COOLDOWN_SECONDS,
        },
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Signup OTP request failed:", error);

    /*
     * MongoDB duplicate-key protection.
     *
     * Your schemas should still have appropriate unique indexes,
     * because application-level findOne() checks alone cannot
     * prevent race conditions.
     */
    if (error?.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message:
            "An account or verification request with these details already exists.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to process the signup request. Please try again.",
      },
      { status: 500 }
    );
  }
}
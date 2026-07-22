"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

import {
  normalizePhone,
  validatePhone,
} from "@/lib/validation/auth";

const initialValues = {
  phone: "",
  otp: "",
};

export default function LoginForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState("phone");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handlePhoneChange(event) {
    const sanitizedPhone = event.target.value
      .replace(/[^\d+\-()\s]/g, "")
      .slice(0, 25);

    setValues((current) => ({
      ...current,
      phone: sanitizedPhone,
    }));

    if (errors.phone) {
      setErrors((current) => ({
        ...current,
        phone: "",
      }));
    }
  }

  function handleOtpChange(event) {
    const sanitizedOtp = event.target.value
      .replace(/\D/g, "")
      .slice(0, 6);

    setValues((current) => ({
      ...current,
      otp: sanitizedOtp,
    }));

    if (errors.otp) {
      setErrors((current) => ({
        ...current,
        otp: "",
      }));
    }
  }

  async function handleSendOtp(event) {
    event.preventDefault();

    const phoneError = validatePhone(values.phone);

    if (phoneError) {
      setErrors({
        phone: phoneError,
      });

      return;
    }

    setIsSubmitting(true);

    try {
      const phone = normalizePhone(values.phone);

      /*
        BACKEND INTEGRATION LATER:

        POST /api/auth/login/send-otp

        {
          phone
        }

        Server should:
        - normalize and validate the number again
        - check account/auth policy
        - generate OTP securely
        - store only a protected/hashed OTP representation
        - set a short expiry
        - rate-limit requests
        - send OTP through your SMS provider
      */

      console.log("Request login OTP for:", phone);

      // Move this after a successful API response later.
      setStep("otp");
    } catch {
      setErrors({
        form: "Unable to send the verification code. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleVerifyOtp(event) {
    event.preventDefault();

    if (!/^\d{6}$/.test(values.otp)) {
      setErrors({
        otp: "Enter the 6-digit verification code.",
      });

      return;
    }

    setIsSubmitting(true);

    try {
      const verificationPayload = {
        phone: normalizePhone(values.phone),
        otp: values.otp,
      };

      /*
        BACKEND INTEGRATION LATER:

        POST /api/auth/login/verify-otp

        Server should:
        - verify OTP securely
        - check expiry
        - enforce attempt limits
        - invalidate OTP after successful use
        - create the authenticated session

        Never verify the real OTP only in React.
      */

      console.log("Login verification ready:", {
        phone: verificationPayload.phone,
      });
    } catch {
      setErrors({
        form: "The code is invalid or has expired.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (step === "otp") {
    return (
      <>
        <div>
          <div
            className="
              mb-5 flex h-11 w-11
              items-center justify-center
              rounded-xl
              border border-neutral-200
              bg-neutral-50
            "
          >
            <ShieldCheck
              aria-hidden="true"
              className="h-5 w-5 text-neutral-800"
            />
          </div>

          <p className="text-sm font-medium text-neutral-500">
            Secure verification
          </p>

          <h2
            className="
              mt-2 text-3xl font-semibold
              tracking-[-0.035em]
              text-neutral-950
            "
          >
            Check your phone
          </h2>

          <p className="mt-2 text-sm leading-6 text-neutral-500">
            Enter the 6-digit verification code sent to{" "}
            <span className="font-medium text-neutral-800">
              {maskPhone(values.phone)}
            </span>
            .
          </p>
        </div>

        <form
          onSubmit={handleVerifyOtp}
          noValidate
          className="mt-8 space-y-5"
        >
          <div>
            <label
              htmlFor="login-otp"
              className="
                mb-2 block
                text-sm font-medium
                text-neutral-800
              "
            >
              Verification code
            </label>

            <input
              id="login-otp"
              name="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={values.otp}
              onChange={handleOtpChange}
              maxLength={6}
              autoFocus
              placeholder="000000"
              aria-invalid={Boolean(errors.otp)}
              aria-describedby={
                errors.otp ? "login-otp-error" : undefined
              }
              className={`
                h-14 w-full
                rounded-xl border
                bg-white
                px-4
                text-center
                text-xl font-semibold
                tracking-[0.45em]
                text-neutral-950
                outline-none
                transition-all duration-200
                placeholder:text-neutral-300

                ${
                  errors.otp
                    ? `
                      border-red-300
                      focus:border-red-400
                      focus:ring-4
                      focus:ring-red-500/5
                    `
                    : `
                      border-neutral-200
                      hover:border-neutral-300
                      focus:border-blue-400
                      focus:ring-4
                      focus:ring-blue-500/5
                    `
                }
              `}
            />

            {errors.otp && (
              <p
                id="login-otp-error"
                role="alert"
                className="mt-1.5 text-xs text-red-600"
              >
                {errors.otp}
              </p>
            )}
          </div>

          {errors.form && (
            <p
              role="alert"
              className="
                rounded-xl bg-red-50
                px-4 py-3
                text-xs text-red-700
              "
            >
              {errors.form}
            </p>
          )}

          <button
            type="submit"
            disabled={
              isSubmitting || values.otp.length !== 6
            }
            className="
              group flex h-12 w-full
              items-center justify-center gap-2
              rounded-xl
              bg-neutral-950
              px-5
              text-sm font-semibold text-white
              transition-all duration-300
              hover:bg-neutral-800
              hover:shadow-[0_8px_25px_rgba(0,0,0,0.14)]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {isSubmitting ? "Verifying..." : "Verify & sign in"}

            {!isSubmitting && (
              <ArrowRight
                aria-hidden="true"
                className="
                  h-4 w-4
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                "
              />
            )}
          </button>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                setStep("phone");
                setValues((current) => ({
                  ...current,
                  otp: "",
                }));
                setErrors({});
              }}
              className="
                flex items-center gap-1.5
                text-xs font-medium
                text-neutral-500
                transition-colors
                hover:text-neutral-950
              "
            >
              <ArrowLeft
                aria-hidden="true"
                className="h-3.5 w-3.5"
              />

              Change number
            </button>

            <button
              type="button"
              className="
                text-xs font-semibold
                text-neutral-700
                transition-colors
                hover:text-neutral-950
              "
            >
              Resend code
            </button>
          </div>
        </form>
      </>
    );
  }

  return (
    <>
      <div>
        <p className="text-sm font-medium text-neutral-500">
          Account access
        </p>

        <h2
          className="
            mt-2 text-3xl font-semibold
            tracking-[-0.035em]
            text-neutral-950
          "
        >
          Welcome back
        </h2>

        <p className="mt-2 text-sm leading-6 text-neutral-500">
          Enter your registered mobile number and we&apos;ll send
          you a secure one-time verification code.
        </p>
      </div>

      <form
        onSubmit={handleSendOtp}
        noValidate
        className="mt-8 space-y-5"
      >
        <div>
          <label
            htmlFor="login-phone"
            className="
              mb-2 block
              text-sm font-medium
              text-neutral-800
            "
          >
            Mobile number
          </label>

          <input
            id="login-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handlePhoneChange}
            maxLength={25}
            placeholder="+91 98765 43210"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={
              errors.phone ? "login-phone-error" : undefined
            }
            className={`
              h-12 w-full
              rounded-xl border
              bg-white px-4
              text-sm text-neutral-950
              outline-none
              transition-all duration-200
              placeholder:text-neutral-400

              ${
                errors.phone
                  ? `
                    border-red-300
                    focus:border-red-400
                    focus:ring-4
                    focus:ring-red-500/5
                  `
                  : `
                    border-neutral-200
                    hover:border-neutral-300
                    focus:border-blue-400
                    focus:ring-4
                    focus:ring-blue-500/5
                  `
              }
            `}
          />

          {errors.phone && (
            <p
              id="login-phone-error"
              role="alert"
              className="mt-1.5 text-xs text-red-600"
            >
              {errors.phone}
            </p>
          )}
        </div>

        {errors.form && (
          <p
            role="alert"
            className="
              rounded-xl bg-red-50
              px-4 py-3
              text-xs text-red-700
            "
          >
            {errors.form}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            group flex h-12 w-full
            items-center justify-center gap-2
            rounded-xl
            bg-neutral-950
            px-5
            text-sm font-semibold text-white
            transition-all duration-300
            hover:bg-neutral-800
            hover:shadow-[0_8px_25px_rgba(0,0,0,0.14)]
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <span>
            {isSubmitting ? "Sending code..." : "Continue with OTP"}
          </span>

          {!isSubmitting && (
            <ArrowRight
              aria-hidden="true"
              className="
                h-4 w-4
                transition-transform duration-300
                group-hover:translate-x-0.5
              "
            />
          )}
        </button>
      </form>

      <div className="mt-7 border-t border-neutral-100 pt-6">
        <p className="text-center text-sm text-neutral-500">
          New to Leadwala?{" "}
          <Link
            href="/signup"
            className="
              font-semibold text-neutral-950
              underline-offset-4
              hover:underline
            "
          >
            Create an account
          </Link>
        </p>
      </div>
    </>
  );
}

function maskPhone(phone) {
  const digits = phone.replace(/\D/g, "");

  if (digits.length <= 4) {
    return phone;
  }

  return `••••••${digits.slice(-4)}`;
}
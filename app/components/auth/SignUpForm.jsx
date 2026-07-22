"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import {
  normalizeEmail,
  normalizeName,
  normalizePhone,
  validateEmail,
  validateName,
  validatePhone,
} from "@/lib/validation/auth";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  otp: "",
  acceptedTerms: false,
};

export default function SignupForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState("details");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    let nextValue =
      type === "checkbox" ? checked : value;

    if (name === "phone") {
      nextValue = value
        .replace(/[^\d+\-()\s]/g, "")
        .slice(0, 25);
    }

    if (name === "otp") {
      nextValue = value
        .replace(/\D/g, "")
        .slice(0, 6);
    }

    setValues((current) => ({
      ...current,
      [name]: nextValue,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }
  }

  function handleBlur(event) {
    const { name, value } = event.target;

    let error = "";

    switch (name) {
      case "fullName":
        error = validateName(value);

        if (!error) {
          setValues((current) => ({
            ...current,
            fullName: normalizeName(value),
          }));
        }

        break;

      case "email":
        error = validateEmail(value);

        if (!error) {
          setValues((current) => ({
            ...current,
            email: normalizeEmail(value),
          }));
        }

        break;

      case "phone":
        error = validatePhone(value);
        break;

      default:
        break;
    }

    setErrors((current) => ({
      ...current,
      [name]: error,
    }));
  }

  async function handleSendOtp(event) {
    event.preventDefault();

    const nextErrors = {
      fullName: validateName(values.fullName),
      email: validateEmail(values.email),
      phone: validatePhone(values.phone),

      acceptedTerms: values.acceptedTerms
        ? ""
        : "You must accept the Terms and Privacy Policy.",
    };

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const signupPayload = {
        fullName: normalizeName(values.fullName),
        email: normalizeEmail(values.email),
        phone: normalizePhone(values.phone),
      };

      /*
        BACKEND LATER:

        POST /api/auth/signup/send-otp

        Server should:
        - validate everything again
        - normalize the phone number
        - check whether the account already exists
        - rate-limit OTP requests
        - generate a secure OTP
        - store protected OTP + expiry
        - send OTP via SMS provider

        Do NOT create a fully verified account yet.
      */

      console.log("Signup OTP request:", signupPayload);

      // Move after successful API response later.
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
        fullName: normalizeName(values.fullName),
        email: normalizeEmail(values.email),
        phone: normalizePhone(values.phone),
        otp: values.otp,
      };

      /*
        BACKEND LATER:

        POST /api/auth/signup/verify-otp

        Server should:
        1. Verify OTP.
        2. Check expiry and attempts.
        3. Invalidate OTP after success.
        4. Create/activate the user.
        5. Mark phoneVerified = true.
        6. Create authenticated session.
        7. Optionally trigger the consented WhatsApp
           welcome workflow separately.
      */

      console.log("Signup verification ready:", {
        fullName: verificationPayload.fullName,
        email: verificationPayload.email,
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
            Mobile verification
          </p>

          <h2
            className="
              mt-2 text-3xl font-semibold
              tracking-[-0.035em]
              text-neutral-950
            "
          >
            Verify your number
          </h2>

          <p className="mt-2 text-sm leading-6 text-neutral-500">
            We sent a 6-digit verification code to{" "}
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
              htmlFor="signup-otp"
              className="
                mb-2 block
                text-sm font-medium
                text-neutral-800
              "
            >
              Verification code
            </label>

            <input
              id="signup-otp"
              name="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={values.otp}
              onChange={handleChange}
              maxLength={6}
              autoFocus
              placeholder="000000"
              aria-invalid={Boolean(errors.otp)}
              aria-describedby={
                errors.otp ? "signup-otp-error" : undefined
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
                id="signup-otp-error"
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
            {isSubmitting
              ? "Verifying..."
              : "Verify & create account"}

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
                setStep("details");
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

              Change details
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
          Create your account
        </p>

        <h2
          className="
            mt-2 text-3xl font-semibold
            tracking-[-0.035em]
            text-neutral-950
          "
        >
          Get started with Leadwala
        </h2>

        <p className="mt-2 text-sm leading-6 text-neutral-500">
          Create your account with a verified mobile number.
          No password required.
        </p>
      </div>

      <form
        onSubmit={handleSendOtp}
        noValidate
        className="mt-7 space-y-4"
      >
        <FormField
          id="signup-name"
          name="fullName"
          label="Full name"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.fullName}
          autoComplete="name"
          maxLength={80}
          placeholder="Your full name"
        />

        <FormField
          id="signup-email"
          name="email"
          label="Email"
          type="email"
          inputMode="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          autoComplete="email"
          maxLength={254}
          placeholder="you@gmail.com"
        />

        <FormField
          id="signup-phone"
          name="phone"
          label="Mobile number"
          type="tel"
          inputMode="tel"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.phone}
          autoComplete="tel"
          maxLength={25}
          placeholder="+91 98765 43210"
        />

        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={values.acceptedTerms}
              onChange={handleChange}
              className="
                mt-0.5 h-4 w-4
                rounded
                border-neutral-300
                accent-neutral-950
              "
            />

            <span className="text-xs leading-5 text-neutral-500">
              I agree to the{" "}
              <Link
                href="/terms"
                className="
                  font-medium text-neutral-800
                  underline-offset-4
                  hover:underline
                "
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="
                  font-medium text-neutral-800
                  underline-offset-4
                  hover:underline
                "
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          {errors.acceptedTerms && (
            <p
              role="alert"
              className="mt-1.5 text-xs text-red-600"
            >
              {errors.acceptedTerms}
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
            {isSubmitting
              ? "Sending code..."
              : "Continue & verify mobile"}
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

      <div className="mt-6 border-t border-neutral-100 pt-6">
        <p className="text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="
              font-semibold text-neutral-950
              underline-offset-4
              hover:underline
            "
          >
            Sign in with OTP
          </Link>
        </p>
      </div>
    </>
  );
}

function FormField({
  id,
  name,
  label,
  type,
  value,
  onChange,
  onBlur,
  error,
  autoComplete,
  inputMode,
  maxLength,
  placeholder,
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-neutral-800"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`
          h-12 w-full
          rounded-xl border
          bg-white px-4
          text-sm text-neutral-950
          outline-none
          transition-all duration-200
          placeholder:text-neutral-400

          ${
            error
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

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 text-xs text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function maskPhone(phone) {
  const digits = phone.replace(/\D/g, "");

  if (digits.length <= 4) {
    return phone;
  }

  return `••••••${digits.slice(-4)}`;
}
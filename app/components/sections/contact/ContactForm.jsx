"use client";

import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const INITIAL_FORM = {
  mobile: "",
  requirement: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    const nextValue =
      name === "mobile"
        ? value.replace(/\D/g, "").slice(0, 10)
        : value;

    setForm((current) => ({
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

  function validateForm() {
    const nextErrors = {};

    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      nextErrors.mobile =
        "Enter a valid 10-digit Indian mobile number.";
    }

    if (form.requirement.trim().length < 5) {
      nextErrors.requirement =
        "Tell us briefly what kind of data you are looking for.";
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      /*
        Connect this later to your API:

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile: `+91${form.mobile}`,
            requirement: form.requirement.trim(),
          }),
        });

        if (!response.ok) {
          throw new Error("Unable to submit enquiry.");
        }

        setForm(INITIAL_FORM);
      */

      console.log({
        mobile: `+91${form.mobile}`,
        requirement: form.requirement.trim(),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-8 space-y-5"
    >
      {/* Mobile */}
      <div>
        <label
          htmlFor="mobile"
          className="mb-2 block text-sm font-medium text-slate-900"
        >
          Mobile number

          <span
            aria-hidden="true"
            className="ml-1 text-violet-600"
          >
            *
          </span>
        </label>

        <div
          className={`flex overflow-hidden rounded-xl border bg-white transition-colors ${
            errors.mobile
              ? "border-red-400"
              : "border-slate-300 focus-within:border-slate-600"
          }`}
        >
          <span className="flex items-center border-r border-slate-200 px-4 text-sm font-medium text-slate-700">
            +91
          </span>

          <input
            id="mobile"
            name="mobile"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            maxLength={10}
            value={form.mobile}
            onChange={handleChange}
            aria-invalid={Boolean(errors.mobile)}
            aria-describedby={
              errors.mobile ? "mobile-error" : undefined
            }
            placeholder="Enter your 10-digit mobile number"
            className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm text-slate-950 outline-none placeholder:text-slate-400"
          />
        </div>

        {errors.mobile && (
          <p
            id="mobile-error"
            role="alert"
            className="mt-2 text-xs text-red-600"
          >
            {errors.mobile}
          </p>
        )}
      </div>

      {/* Requirement */}
      <div>
        <label
          htmlFor="requirement"
          className="mb-2 block text-sm font-medium text-slate-900"
        >
          What data are you looking for?

          <span
            aria-hidden="true"
            className="ml-1 text-violet-600"
          >
            *
          </span>
        </label>

        <textarea
          id="requirement"
          name="requirement"
          rows={4}
          value={form.requirement}
          onChange={handleChange}
          aria-invalid={Boolean(errors.requirement)}
          aria-describedby={
            errors.requirement
              ? "requirement-error"
              : "requirement-hint"
          }
          placeholder="Describe the audience, industry, or data you need"
          className={`w-full resize-none rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 ${
            errors.requirement
              ? "border-red-400"
              : "border-slate-300 focus:border-slate-600"
          }`}
        />

        {errors.requirement ? (
          <p
            id="requirement-error"
            role="alert"
            className="mt-2 text-xs text-red-600"
          >
            {errors.requirement}
          </p>
        ) : (
          <p
            id="requirement-hint"
            className="mt-2 text-xs leading-5 text-slate-500"
          >
            e.g. real estate agents in Maharashtra or business owners
            in Kolkata.
          </p>
        )}
      </div>

      {/* Privacy reassurance */}
      <div className="flex items-start gap-2 text-xs leading-5 text-slate-500">
        <ShieldCheck
          aria-hidden="true"
          className="mt-0.5 h-4 w-4 shrink-0"
        />

        <p>
          We use your details only to respond to your enquiry.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Requirement"}

        {!isSubmitting && (
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </button>
    </form>
  );
}
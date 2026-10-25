"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  WifiOff,
  Phone,
  RefreshCw,
} from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const INITIAL_FORM = {
  mobile: "",
  requirement: "",
};

const CONTACT_NUMBER = process.env.NEXT_PUBLIC_CONTACT_NUMBER;

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const updateConnection = () => {
      setIsOnline(navigator.onLine);
    };

    updateConnection();

    window.addEventListener("online", updateConnection);
    window.addEventListener("offline", updateConnection);

    return () => {
      window.removeEventListener("online", updateConnection);
      window.removeEventListener("offline", updateConnection);
    };
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    const nextValue =
      name === "mobile" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setForm((current) => ({
      ...current,
      [name]: nextValue,
    }));

    setStatus("");

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
      nextErrors.mobile = "Enter a valid 10-digit Indian mobile number.";
    }

    if (form.requirement.trim().length < 5) {
      nextErrors.requirement =
        "Tell us briefly what kind of data you are looking for.";
    }

    return nextErrors;
  }

  function saveDraft() {
    const draft = {
      version: 1,
      updatedAt: new Date().toISOString(),
      mobile: form.mobile,
      requirement: form.requirement.trim(),
    };

    try {
      localStorage.setItem("datatreasure-contact-draft", JSON.stringify(draft));
    } catch (error) {
      console.error("Could not save enquiry locally:", error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    setStatus("");

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    // Preserve the enquiry before checking connectivity.
    saveDraft();

    if (!navigator.onLine) {
      setIsOnline(false);
      setStatus(
        "Your enquiry is saved on this device. Reconnect to continue on WhatsApp, or call our team.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const message =
        `Hello DataTreasure, I am looking for the following data: ` +
        `${form.requirement.trim()}. You can reach me at +91${form.mobile}.`;

      openWhatsApp(message);

      // Keep the form filled: opening WhatsApp does not mean
      // the customer has actually sent the message.
      setStatus(
        "WhatsApp was opened with your enquiry. Please send the message there to complete your request.",
      );
    } catch (error) {
      console.error("Unable to open WhatsApp:", error);

      setStatus(
        "We couldn't open WhatsApp. Please try again or call our team.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleRetry() {
    const online = navigator.onLine;
    setIsOnline(online);

    if (!online) {
      setStatus("You're still offline. Please reconnect or call our team.");
      return;
    }

    setStatus("Connection detected. You can retry sending your enquiry.");
  }

  const callNumber = CONTACT_NUMBER?.replace(/\D/g, "");

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-3 space-y-5 sm:mt-5 lg:mt-8"
    >
      {/* Mobile */}
      <div>
        <label
          htmlFor="mobile"
          className="mb-2 block text-sm font-medium text-slate-900"
        >
          Mobile number
          <span aria-hidden="true" className="ml-1 text-violet-600">
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
            aria-describedby={errors.mobile ? "mobile-error" : undefined}
            placeholder="Enter your 10-digit mobile number"
            className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-slate-950 outline-none placeholder:text-slate-400 sm:py-3 md:py-3.5"
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
          <span aria-hidden="true" className="ml-1 text-violet-600">
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
            errors.requirement ? "requirement-error" : "requirement-hint"
          }
          placeholder="Describe the audience, industry, or data you need"
          className={`w-full resize-none rounded-xl border bg-white px-4 py-2 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 sm:py-3 md:py-3.5 ${
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
            e.g. real estate agents in Maharashtra or business owners in
            Kolkata.
          </p>
        )}
      </div>

      {/* Privacy reassurance */}
      <div className="flex items-start gap-2 text-xs leading-5 text-slate-500">
        <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
        <p>We use your details only to respond to your enquiry.</p>
      </div>

      {/* Offline and submission feedback */}
      {!isOnline && (
        <div className="space-y-3">
          {/* Compact offline badge */}
          <div
            role="status"
            className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5"
          >
            <WifiOff
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 text-amber-700"
            />

            <span className="text-xs font-medium text-amber-900">
              No internet connection
            </span>
          </div>

          {/* Direct call fallback */}
          {callNumber && (
            <a
              href={`tel:${callNumber}`}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Call DataTreasure
            </a>
          )}
        </div>
      )}

      {/* Submission feedback */}
      {status && (
        <p role="status" className="text-xs leading-5 text-slate-600">
          {status}
        </p>
      )}

      {isOnline && (
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Opening WhatsApp..." : "Send Requirement"}

          {!isSubmitting && (
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          )}
        </button>
      )}
    </form>
  );
}

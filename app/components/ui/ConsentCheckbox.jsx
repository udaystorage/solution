"use client";

import Link from "next/link";

export default function ConsentCheckbox({
  checked,
  onChange,
}) {
  return (
    <div >
      <div className="flex items-start gap-3 border-none">
        <input
          id="legal-consent"
          type="checkbox"
          checked={checked}
          onChange={() => onChange(!checked)}
          required
          className="
            mt-1
            h-4
            w-4
            cursor-pointer
            rounded
            border border-stone-300
            text-cyan-600
           
          "
        />

        <label
          htmlFor="legal-consent"
          className="text-sm leading-6 text-stone-600"
        >
          I have read and agree to the{" "}
          <Link
            href="/terms-and-conditions"
            target="_blank"
            className="font-medium text-cyan-700 transition hover:text-cyan-800 hover:underline"
          >
            Terms &amp; Conditions
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            target="_blank"
            className="font-medium text-cyan-700 transition hover:text-cyan-800 hover:underline"
          >
            Privacy Policy
          </Link>
          , and consent to sharing this enquiry with LeadWala via WhatsApp.
        </label>
      </div>
    </div>
  );
}
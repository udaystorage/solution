"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919999999999"; // Replace with yours

export default function WhatsappButton({ request }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleClick() {
    setError("");

    // Basic validation

    if (!request.location.trim()) {
      return setError("Please choose a target location.");
    }

    if (!request.customer.name.trim()) {
      return setError("Please enter your name.");
    }

    if (!request.customer.phone.trim()) {
      return setError("Please enter your mobile number.");
    }

    setLoading(true);

    try {
      const payload = {
        version: 1,
        updatedAt: new Date().toISOString(),
        ...request,
      };

      localStorage.setItem(
        "leadwala_database_request",
        JSON.stringify(payload)
      );

      const message = createWhatsappMessage(request);

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

      // tiny premium delay

      await new Promise((resolve) => setTimeout(resolve, 900));

      window.open(url, "_blank");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full sm:w-auto">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        aria-disabled={loading}
        className="
          group
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-stone-900
          px-8
          py-4
          font-medium
          text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-black
          hover:shadow-2xl
          disabled:cursor-not-allowed
          disabled:opacity-80
        "
      >
        {loading ? (
          <>
            <LoaderCircle
              size={18}
              className="animate-spin"
            />

            Preparing Request...
          </>
        ) : (
          <>
            <FaWhatsapp
  className="relative z-10  transition-colors
    duration-300
    group-hover:text-[#25D366]"
  size={20} 
/>

            <span className="whitespace-nowrap">Open Whatsapp</span>

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      <div className="mt-3 h-5">
        {loading ? (
          <p className="flex items-center gap-2 text-sm text-cyan-700">
            <CheckCircle2 size={15} />
            Opening WhatsApp...
          </p>
        ) : (
          <p className="text-sm text-red-500">
            {error || "\u00A0"}
          </p>
        )}
      </div>
    </div>
  );
}

function createWhatsappMessage(request) {
  return `
Hi Leadwala 👋

I'd like to request a database.

━━━━━━━━━━━━━━

Database:
${request.category}

Target Region:
${request.location}

Quantity:
${request.quantity}

Quality:
${
  request.quality === "premium"
    ? "Premium"
    : "Standard"
}

━━━━━━━━━━━━━━

Requirements:

${request.requirements || "None"}

━━━━━━━━━━━━━━

Contact Details

Name:
${request.customer.name}

Phone:
${request.customer.phone}

Email:
${request.customer.email || "Not provided"}

━━━━━━━━━━━━━━

Please share the pricing and availability.

Thank you.
`;
}
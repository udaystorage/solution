"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Phone,
  WifiOff,
  RefreshCw,
  LoaderCircle,
  CheckCircle2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { openWhatsApp } from "@/lib/whatsapp";

const CONTACT_NUMBER = process.env.NEXT_PUBLIC_CONTACT_NUMBER;

export default function WhatsappButton({ request, accepted }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isOnline, setIsOnline] = useState(true);

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

  const callNumber = CONTACT_NUMBER?.replace(/\D/g, "");

  async function handleClick() {
    setError("");

    if (!request.location.trim()) {
      setError("Please choose a target location.");
      return;
    }

    if (!request.customer.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!request.customer.phone.trim()) {
      setError("Please enter your mobile number.");
      return;
    }

    if (!accepted) {
      setError("Please accept the Terms & Conditions and Privacy Policy.");
      return;
    }

    // Check connectivity before attempting WhatsApp.
    if (!navigator.onLine) {
      setIsOnline(false);
      setError("");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        version: 1,
        updatedAt: new Date().toISOString(),
        ...request,
      };

      // Preserve the request locally before opening WhatsApp.
      localStorage.setItem(
        "datatreasure_database_request",
        JSON.stringify(payload),
      );

      const message = createWhatsappMessage(request);

      // Open synchronously within the user click to reduce popup blocking.
      openWhatsApp(message);
    } catch (err) {
      console.error("Unable to prepare the WhatsApp request:", err);
      setError(
        "We couldn't prepare your request. Please try again or call our team.",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleRetry() {
    const online = navigator.onLine;
    setIsOnline(online);

    if (online) {
      handleClick();
    }
  }

  return (
    <div className="w-full min-w-0 shrink-0 sm:w-67.5">
      {!isOnline ? (
        <div className="space-y-3">
          <div
            role="status"
            className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-3 py-3"
          >
            <WifiOff
              size={17}
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-amber-700"
            />

            <div>
              <p className="text-sm font-medium text-stone-900">
                You&apos;re offline
              </p>
              <p className="mt-1 text-xs leading-5 text-stone-600">
                Reconnect to continue on WhatsApp, or call US.
              </p>
            </div>
          </div>

          {callNumber && (
            <a
              href={`tel:${callNumber}`}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-stone-900 px-5 py-4 font-medium text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              <Phone size={18} aria-hidden="true" />
              Call DataTreasure
            </a>
          )}

          <button
            type="button"
            onClick={handleRetry}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <RefreshCw size={15} aria-hidden="true" />
            Check connection and retry
          </button>
        </div>
      ) : (
        <>
          <button
            type="button"
            onClick={handleClick}
            disabled={loading}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-stone-900 px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-80"
          >
            {loading ? (
              <>
                <LoaderCircle size={18} className="animate-spin" />
                Preparing Request...
              </>
            ) : (
              <>
                <FaWhatsapp
                  aria-hidden="true"
                  className="relative z-10 text-[#25D366] transition-colors duration-300 group-hover:text-[#25D366] lg:text-white"
                  size={20}
                />

                <span className="whitespace-nowrap">Open WhatsApp</span>

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </>
            )}
          </button>

          <div className="mt-3 min-h-5">
            {loading ? (
              <p className="flex items-center gap-2 text-sm text-cyan-700">
                <CheckCircle2 size={15} aria-hidden="true" />
                Preparing WhatsApp...
              </p>
            ) : error ? (
              <p role="alert" className="text-sm text-red-600">
                {error}
              </p>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}

function createWhatsappMessage(request) {
  return `
Hi DataTreasure 👋

I'd like to request a database.

━━━━━━━━━━━━━━

Database:
${request.category}

Target Region:
${request.location}

Quantity:
${request.quantity}

Quality:
${request.quality === "premium" ? "Premium" : "Standard"}

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
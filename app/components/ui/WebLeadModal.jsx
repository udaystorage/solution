'use client';

import React, { useEffect, useSyncExternalStore } from 'react';
import { openWhatsApp } from '@/lib/whatsapp';

// Custom hook to check if the component has hydrated on the client
const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,  // Client snapshot
    () => false  // Server snapshot
  );
}

export default function WhatsAppModal({ 
  isWebLeadCardClicked, 
  setIsWebLeadCardClicked, 
}) {
  const isMounted = useIsMounted();

  // Lock or restore body scroll when modal toggles
  useEffect(() => {
    if (!isMounted) return;

    if (isWebLeadCardClicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isWebLeadCardClicked, isMounted]);

  // Don't render anything during SSR or when closed
  if (!isMounted || !isWebLeadCardClicked) return null;

  const handleClose = () => {
    setIsWebLeadCardClicked(false);
  };

  const handleWhatsAppRedirect = () => {
    const message = "I would like to inquire about ₹25 verified leads.";
    openWhatsApp(message);
    handleClose();
  };

 return (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
      onClick={handleClose}
    />

    {/* Modal */}
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
      className="
        relative z-10 w-full max-w-105
        overflow-hidden rounded-[28px]
        border border-white/10
        bg-slate-900
        text-white
        shadow-[0_30px_100px_rgba(0,0,0,0.45)]
        animate-[modalIn_0.25s_ease-out]
      "
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none absolute
          -right-24 -top-24
          h-64 w-64
          rounded-full
          bg-violet-600/15
          blur-[90px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-24 -left-24
          h-64 w-64
          rounded-full
          bg-cyan-500/10
          blur-[90px]
        "
      />

      {/* Subtle top highlight */}
      <div
        className="
          pointer-events-none absolute inset-x-10 top-0
          h-px
          bg-linear-to-r
          from-transparent via-cyan-400/50 to-transparent
        "
      />

      {/* Close */}
      <button
        onClick={handleClose}
        aria-label="Close modal"
        className="
          absolute right-4 top-4 z-20
          flex h-9 w-9 items-center justify-center
          rounded-full
          border border-white/5
          bg-white/4
          text-slate-400
          transition-all duration-200
          hover:bg-white/9
          hover:text-white
        "
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="relative px-6 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-9">

        {/* WhatsApp icon */}
        <div className="flex justify-center">
          <div
            className="
              relative flex h-14.5 w-14.5
              items-center justify-center
              rounded-[18px]
              bg-linear-to-br
              from-emerald-400 to-emerald-600
              shadow-[0_12px_35px_rgba(16,185,129,0.25)]
            "
          >
            <svg
              className="h-8 w-8 fill-white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-1.001zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="mt-5 text-center">
          <h3
            id="whatsapp-modal-title"
            className="
              text-[25px] font-semibold
              leading-tight tracking-tight
              sm:text-[27px]
            "
          >
            Continue on WhatsApp?
          </h3>

          <p
            className="
              mx-auto mt-3 max-w-[320px]
              text-[14px] leading-6
              text-slate-400
            "
          >
            Get a quick response from our lead specialist with a detaild quote.
          </p>
        </div>

        {/* Price */}
        <div className="mt-5 flex justify-center">
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-cyan-400/15
              bg-white/[0.035]
              px-3.5 py-1.5
            "
          >
            <span
              className="
                h-1.5 w-1.5 rounded-full
                bg-cyan-400
                shadow-[0_0_8px_rgba(34,211,238,0.8)]
              "
            />

            <span className="text-[11px] font-medium tracking-wide text-cyan-300">
              ₹25 / VERIFIED LEAD
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <button
            onClick={handleWhatsAppRedirect}
            className="
              group flex w-full items-center
              justify-center gap-2.5
              rounded-xl
              bg-emerald-500
              px-6 py-3.5
              text-[14px] font-semibold
              text-white
              shadow-[0_10px_30px_rgba(16,185,129,0.18)]
              transition-all duration-200
              hover:bg-emerald-400
              hover:shadow-[0_12px_35px_rgba(16,185,129,0.28)]
              active:scale-[0.985]
            "
          >
            <span>Connect on WhatsApp</span>

            <svg
              className="
                h-4.5 w-4.5
                transition-transform duration-200
                group-hover:translate-x-0.5
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

        {/* Secondary action */}
        <button
          onClick={handleClose}
          className="
            mt-3 w-full
            py-3.5
            rounded-xl
            text-[13px] font-medium
            text-slate-500
            transition-all duration-200
            hover:text-slate-300
            hover:bg-white/5 active:scale-[0.98]
          "
        >
          Maybe later
        </button>

        {/* Trust microcopy */}
        <p className="mt-1 text-center text-[10px] text-slate-600">
          No commitment · Speak directly with our team
        </p>
      </div>
    </div>
  </div>
);
}
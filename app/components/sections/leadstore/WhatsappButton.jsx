"use client";

import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  MessageCircle,
} from "lucide-react";

export default function WhatsappButton({
  loading,
  error,
  onClick,
}) {
  return (
    <div className="w-full sm:w-auto">
      <button
        type="button"
        onClick={onClick}
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
            <MessageCircle size={18} />

            Continue on WhatsApp

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
"use client";

import { Check, Sparkles } from "lucide-react";

const QUANTITIES = [
  {
    value: 2000,
    label: "2000",
  },
  {
    value: 5000,
    label: "5,000",
    recommended: true,
  },

  {
    value: 10000,
    label: "10,000",
  },
  {
    value: 20000,
    label: "20,000",
  },
  {
    value: 50000,
    label: "50,000",
  },
  {
    value: "custom",
    label: "Custom",
  },
];

export default function QuantitySelector({ value, onChange }) {
  return (
    <section className="space-y-4">
      {/* Heading */}
      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
          Database Size
        </p>

        <h3 className="text-lg font-semibold tracking-tight text-stone-900 sm:text-xl">
          How many records do you need?
        </h3>

        <p className="text-sm leading-5 text-stone-500">
          Select a quantity or choose Custom for a tailored request.
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
        {QUANTITIES.map((option) => {
          const active = value === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={active}
              className={`
            group relative flex min-h-32 flex-col
            items-start rounded-2xl border p-3.5
            text-left transition-colors duration-200
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-cyan-500
            focus-visible:ring-offset-2
            sm:min-h-0 sm:p-4
            ${
              active
                ? "border-cyan-500 bg-cyan-50"
                : "border-stone-200 bg-white hover:border-cyan-300 hover:bg-stone-50/50"
            }
          `}
            >
              {/* Selected Icon */}
              <div
                className={`
              mb-3 flex size-7 items-center justify-center
              rounded-full transition-colors
              ${
                active
                  ? "bg-cyan-600 text-white"
                  : "bg-stone-100 text-transparent group-hover:text-stone-400"
              }
            `}
              >
                <Check size={15} aria-hidden="true" />
              </div>

              {/* Popular Badge */}
              {option.recommended && (
                <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-cyan-100 px-2 py-1 text-[9px] font-medium text-cyan-700">
                  <Sparkles size={10} aria-hidden="true" />
                  Popular
                </span>
              )}

              <h4 className="text-lg font-semibold tracking-tight text-stone-900">
                {option.label}
              </h4>

              <p className="mt-1 text-xs leading-4 text-stone-500">
                {option.value === "custom"
                  ? "Specify your quantity"
                  : "Verified contact records"}
              </p>
            </button>
          );
        })}
      </div>

      {/* Compact Helper */}
      <p className="text-xs leading-5 text-stone-500">
        Need more records? Choose{" "}
        <span className="font-medium text-stone-800">Custom</span> and specify
        your requirements below.
      </p>
    </section>
  );
}

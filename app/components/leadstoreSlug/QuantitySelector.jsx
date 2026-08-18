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
    <section className="space-y-5">
      {/* Heading */}

      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500 sm:text-xs">
          Database Size
        </p>

        <h3 className="text-lg font-semibold tracking-[-0.03em] text-stone-900 sm:text-xl md:text-2xl">
          How many records do you need?
        </h3>

        <p className="max-w-xl text-sm leading-6 text-stone-500">
          Choose the approximate database size. You can always request a custom
          quantity if your campaign requires something different.
        </p>
      </div>

      {/* Options */}

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {QUANTITIES.map((option) => {
          const active = value === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`
group
relative
overflow-hidden
rounded-2xl
border
p-3.5
sm:rounded-3xl
sm:p-5
text-left
transition-all
duration-300

${
  active
    ? "border-cyan-500 bg-cyan-50 shadow-[0_15px_40px_rgba(8,145,178,.15)]"
    : "border-stone-200 bg-white hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
}
`}
            >
              {/* Recommended */}

              {option.recommended && (
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-cyan-100 px-2 py-1 text-[10px] font-medium text-cyan-700 sm:right-4 sm:top-4 sm:px-2.5 sm:text-[11px]">
                  <Sparkles size={12} />
                  Popular
                </div>
              )}

              {/* Selected Icon */}

              <div
                className={`
    mb-5
    flex
    h-8
    w-8
    items-center
    justify-center
    rounded-full
    transition-all
    sm:mb-8
    sm:h-10
    sm:w-10

    ${
      active
        ? "bg-cyan-600 text-white"
        : "bg-stone-100 text-transparent group-hover:text-stone-400"
    }
  `}
              >
                <Check className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
              </div>

              {/* Label */}

              <h4 className="text-lg font-semibold tracking-[-0.03em] text-stone-900 sm:text-xl lg:text-2xl">
                {option.label}
              </h4>

              <p className="mt-1.5 text-xs leading-5 text-stone-500 sm:mt-2 sm:text-sm">
                {option.value === "custom"
                  ? "Tell us your exact requirement."
                  : "Verified contact records"}
              </p>
            </button>
          );
        })}
      </div>

      {/* Helper */}

      <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 sm:rounded-2xl sm:px-5 sm:py-4">
        <p className="text-sm leading-6 text-stone-600">
          Need a larger or highly customized dataset? Select{" "}
          <span className="font-medium text-stone-900">Custom</span> and mention
          your preferred quantity in the requirements section.
        </p>
      </div>
    </section>
  );
}

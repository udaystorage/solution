"use client";

import { BadgeCheck, ShieldCheck } from "lucide-react";

const OPTIONS = [
  {
    value: "premium",
    title: "Premium",
    description:
      "Our freshest and most accurate database with maximum verification.",
    badge: "Most Recommended",
    icon: BadgeCheck,
    accent: "cyan",
  },
  {
    value: "standard",
    title: "Standard",
    description:
      "Great for broader outreach with an excellent balance of quality and pricing.",
    badge: null,
    icon: ShieldCheck,
    accent: "stone",
  },
];

export default function QualitySelector({ value, onChange }) {
  return (
    <section className="space-y-4">
      {/* Heading */}
      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
          Data Quality
        </p>

        <h3 className="text-lg font-semibold tracking-tight text-stone-900 sm:text-xl">
          Choose your database quality
        </h3>

        <p className="text-sm leading-5 text-stone-500">
          Select the verification level for your campaign.
        </p>
      </div>

      {/* Quality Options */}
      <div className="grid gap-3 sm:grid-cols-2">
        {OPTIONS.map((option) => {
          const active = value === option.value;
          const Icon = option.icon;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={active}
              className={`
            group relative flex h-full flex-col
            rounded-2xl border p-4 text-left
            transition-colors duration-200
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-cyan-500
            focus-visible:ring-offset-2
            ${
              active
                ? "border-cyan-500 bg-cyan-50"
                : "border-stone-200 bg-white hover:border-cyan-300 hover:bg-stone-50/50"
            }
          `}
            >
              {/* Badge */}
              {option.badge && (
                <span className="absolute right-3 top-3 max-w-[60%] rounded-full bg-cyan-100 px-2 py-1 text-[9px] font-medium text-cyan-700 sm:text-[10px]">
                  {option.badge}
                </span>
              )}

              {/* Icon */}
              <div
                className={`
              flex size-9 shrink-0 items-center justify-center
              rounded-xl transition-colors
              ${
                active
                  ? "bg-cyan-600 text-white"
                  : "bg-stone-100 text-stone-500 group-hover:bg-cyan-100 group-hover:text-cyan-700"
              }
            `}
              >
                <Icon size={19} aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="mt-3">
                <h4 className="text-lg font-semibold tracking-tight text-stone-900">
                  {option.title}
                </h4>

                <p className="hidden md:block mt-1.5 text-sm leading-5 text-stone-600">
                  {option.description}
                </p>
              </div>

              {/* Features */}
              <div className="mt-4 space-y-2 border-t border-stone-200/80 pt-3">
                <Feature
                  text={
                    option.value === "premium"
                      ? "Recently Refreshed Records"
                      : "Reliable Contact Coverage"
                  }
                />

                <Feature
                  text={
                    option.value === "premium"
                      ? "Higher Conversion Potential"
                      : "Suitable For Broad Outreach"
                  }
                />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-start gap-2">
      <span
        aria-hidden="true"
        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-500"
      />

      <span className="text-xs leading-4 text-stone-600">{text}</span>
    </div>
  );
}

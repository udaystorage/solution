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

export default function QualitySelector({
  value,
  onChange,
}) {
  return (
    <section className="space-y-5">

      {/* Heading */}

      <div className="space-y-1">

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
          Data Quality
        </p>

        <h3 className="text-xl font-semibold tracking-[-0.03em] text-stone-900">
          Choose your database quality
        </h3>

        <p className="max-w-xl text-sm leading-6 text-stone-500">
          Select the verification level that best matches your campaign and
          business goals.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-5 lg:grid-cols-2">

        {OPTIONS.map((option) => {
          const active = value === option.value;
          const Icon = option.icon;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                p-6
                text-left
                transition-all
                duration-300

                ${
                  active
                    ? "border-cyan-500 bg-cyan-50 shadow-[0_15px_45px_rgba(8,145,178,.15)]"
                    : "border-stone-200 bg-white hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
                }
              `}
            >

              {/* Badge */}

              {option.badge && (
                <span className="absolute right-5 top-5 rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-medium text-cyan-700">
                  {option.badge}
                </span>
              )}

              {/* Icon */}

              <div
                className={`
                  flex h-14 w-14 items-center justify-center rounded-2xl transition-all

                  ${
                    active
                      ? "bg-cyan-600 text-white"
                      : "bg-stone-100 text-stone-500 group-hover:bg-cyan-100 group-hover:text-cyan-700"
                  }
                `}
              >
                <Icon size={26} />
              </div>

              {/* Content */}

              <div className="mt-6">

                <h4 className="text-2xl font-semibold tracking-[-0.03em] text-stone-900">
                  {option.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {option.description}
                </p>

              </div>

              {/* Features */}

              <div className="mt-8 space-y-3 border-t border-stone-200 pt-6">

                <Feature text={
                    option.value === "premium"
                      ? "Recently Refreshed Records"
                      : "Reliable Contact Coverage"
                  } />

                <Feature text={
                    option.value === "premium"
                      ? "Higher Conversion Potential"
                      : "Suitable For Broad Outreach"
                  } />
{/* 
                <Feature
                  text={
                    option.value === "premium"
                      ? "Priority data verification"
                      : "Standard verification"
                  }
                /> */}

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
    <div className="flex items-center gap-3">

      <div className="h-2 w-2 rounded-full bg-cyan-500" />

      <span className="text-sm text-stone-600">
        {text}
      </span>

    </div>
  );
}
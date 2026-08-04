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
    <section className="space-y-4 sm:space-y-5">
      {/* Heading */}

      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400 sm:text-xs">
          Data Quality
        </p>

        <h3 className="text-lg font-semibold tracking-[-0.03em] text-stone-900 sm:text-xl md:text-2xl">
          Choose your database quality
        </h3>

        <p className="max-w-xl text-sm leading-6 text-stone-500">
          Select the verification level that best matches your campaign and
          business goals.
        </p>
      </div>

      {/* Cards */}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
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
rounded-2xl
border
p-4
sm:rounded-[1.75rem]
sm:p-6
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
                <span className="absolute right-3 top-3 rounded-full bg-cyan-100 px-2.5 py-1 text-[10px] font-medium text-cyan-700 sm:right-5 sm:top-5 sm:px-3 sm:text-[11px]">
                  {" "}
                  {option.badge}
                </span>
              )}

              {/* Icon */}

              <div
                className={`
    flex h-11 w-11 items-center justify-center rounded-xl transition-all
    sm:h-14 sm:w-14 sm:rounded-2xl

    ${
      active
        ? "bg-cyan-600 text-white"
        : "bg-stone-100 text-stone-500 group-hover:bg-cyan-100 group-hover:text-cyan-700"
    }
  `}
              >
                <Icon className="h-5 w-5 sm:h-[26px] sm:w-[26px]" />
              </div>

              {/* Content */}

              <div className="mt-4 sm:mt-6">
                <h4 className="text-xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-2xl">
                  {option.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-stone-600 sm:mt-3 sm:leading-7">
                  {option.description}
                </p>
              </div>

              {/* Features */}

              <div className="mt-6 space-y-2 border-t border-stone-200 pt-4 sm:mt-8 sm:space-y-3 sm:pt-6">
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

      <span className="text-sm text-stone-600">{text}</span>
    </div>
  );
}

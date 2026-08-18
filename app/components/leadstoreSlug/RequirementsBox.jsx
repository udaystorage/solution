"use client";

import { Lightbulb, Sparkles } from "lucide-react";

const SUGGESTIONS = [
  "Women Investors",
  "Business Owners",
  "Age 25–40",
  "High Net Worth",
  "Startup Founders",
];

export default function RequirementsBox({ value, onChange }) {
  return (
    <section className="space-y-5 sm:space-y-6">
      {/* Heading */}

      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500 sm:text-xs">
          Audience Filters
        </p>

        <h3 className="text-lg font-semibold tracking-[-0.03em] text-stone-900 sm:text-xl md:text-2xl">
          Customize your database
        </h3>

        <p className="max-w-xl text-sm leading-6 text-stone-500">
          Tell us more about the audience you&apos;re looking for. The more
          context you provide, the better we can tailor your database.
        </p>
      </div>

      {/* Suggestions */}

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {SUGGESTIONS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              if (value.includes(item)) return;

              onChange(value ? `${value}, ${item}` : item);
            }}
            className="
rounded-full
border
border-stone-200
bg-white
px-3
py-1.5
text-xs
font-medium
text-stone-600
transition-all
duration-300
hover:border-cyan-200
hover:bg-cyan-50
hover:text-cyan-700
sm:px-4
sm:py-2
sm:text-sm
"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Textarea */}

      <div className="overflow-hidden rounded-2xl sm:rounded-[1.75rem] border border-stone-200 bg-white transition-all duration-300 focus-within:border-cyan-500 focus-within:shadow-[0_15px_45px_rgba(8,145,178,.12)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <Lightbulb className="h-4 w-4 text-cyan-600 sm:h-4.5 sm:w-4.5" />

            <span className="text-sm font-medium text-stone-700">
              Describe your ideal audience
            </span>
          </div>

          <span className="text-[11px] text-stone-500 sm:text-xs">
            Optional
          </span>
        </div>

        <textarea
          rows={6}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Example:
• Women Investors
• Income above ₹15L
• Mutual Fund Investors

  Any additional filters or preferences...`}
          className="
w-full
resize-none
bg-transparent
px-4
py-4
text-sm
leading-6
text-stone-700
outline-none
placeholder:text-stone-400
sm:px-6
sm:py-5
sm:text-[15px]
sm:leading-7
"
        />
      </div>

      {/* Tip Card */}

      <div className="rounded-2xl p-4 sm:rounded-3xl sm:p-5 border border-cyan-100 bg-cyan-50">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="flex  h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white sm:h-11 sm:w-11">
            <Sparkles className="h-5 w-5 text-cyan-600" />
          </div>

          <div>
            <h4 className="text-sm font-medium text-stone-900 sm:text-base">
              Better requirements lead to better data.
            </h4>

            <p className="mt-1.5 text-sm leading-6 text-stone-600 sm:mt-2">
              Premium data should always be tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

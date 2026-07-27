"use client";

import { Lightbulb, Sparkles } from "lucide-react";

const SUGGESTIONS = [
  "Women Investors",
  "Business Owners",
  "Age 25–40",
  "High Net Worth",
  "Startup Founders",
];

export default function RequirementsBox({
  value,
  onChange,
}) {
  return (
    <section className="space-y-6">

      {/* Heading */}

      <div className="space-y-1">

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
          Audience Filters
        </p>

        <h3 className="text-xl font-semibold tracking-[-0.03em] text-stone-900">
          Customize your database
        </h3>

        <p className="max-w-xl text-sm leading-6 text-stone-500">
          Tell us more about the audience you&apos;re looking for. The more context
          you provide, the better we can tailor your database.
        </p>

      </div>

      {/* Suggestions */}

      <div className="flex flex-wrap gap-3">

        {SUGGESTIONS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              if (value.includes(item)) return;

              onChange(
                value
                  ? `${value}, ${item}`
                  : item
              );
            }}
            className="
              rounded-full
              border
              border-stone-200
              bg-white
              px-4
              py-2
              text-sm
              text-stone-600
              transition-all
              duration-300
              hover:border-cyan-200
              hover:bg-cyan-50
              hover:text-cyan-700
            "
          >
            {item}
          </button>
        ))}

      </div>

      {/* Textarea */}

      <div className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white transition-all duration-300 focus-within:border-cyan-500 focus-within:shadow-[0_15px_45px_rgba(8,145,178,.12)]">

        <div className="flex items-center justify-between border-b border-stone-100 px-6 py-4">

          <div className="flex items-center gap-3">

            <Lightbulb
              size={18}
              className="text-cyan-600"
            />

            <span className="text-sm font-medium text-stone-700">
              Describe your ideal audience
            </span>

          </div>

          <span className="text-xs text-stone-400">
            Optional
          </span>

        </div>

        <textarea
          rows={7}
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
            px-6
            py-5
            text-[15px]
            leading-7
            text-stone-700
            outline-none
            placeholder:text-stone-400
          "
        />

      </div>

      {/* Tip Card */}

      <div className="rounded-[1.5rem] border border-cyan-100 bg-cyan-50 p-5">

        <div className="flex items-start gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">

            <Sparkles
              size={20}
              className="text-cyan-600"
            />

          </div>

          <div>

            <h4 className="font-medium text-stone-900">
              Better requirements lead to better data.
            </h4>

            <p className="mt-2 text-sm leading-6 text-stone-600">
              Mention industries, demographics, income range,
              designation, company size, interests or any custom
              segmentation. Our team manually reviews every request
              before preparing your database.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
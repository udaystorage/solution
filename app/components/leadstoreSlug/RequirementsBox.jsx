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
    <section className="space-y-4">
      {/* Heading */}
      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
          Audience Filters
        </p>

        <h3 className="text-lg font-semibold tracking-tight text-stone-900 sm:text-xl">
          Customize your database
        </h3>

        <p className="text-sm leading-5 text-stone-500">
          Add any specific audience traits or targeting preferences.
        </p>
      </div>

      {/* Suggestions */}
      <div className="flex flex-wrap gap-2">
        {SUGGESTIONS.map((item) => {
          const selected = value
            .split(",")
            .map((part) => part.trim())
            .includes(item);

          return (
            <button
              key={item}
              type="button"
              onClick={() => {
                if (selected) return;
                onChange(value ? `${value}, ${item}` : item);
              }}
              aria-pressed={selected}
              className="
            min-h-8 rounded-full border
            border-stone-200 bg-white
            px-3 py-1.5 text-xs font-medium
            text-stone-600 transition-colors
            hover:border-cyan-300 hover:bg-cyan-50
            hover:text-cyan-700
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-cyan-500
          "
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Compact Textarea */}
      <div
        className="
    overflow-hidden rounded-xl border border-stone-200
    bg-white transition-colors
    focus-within:border-cyan-500
    focus-within:ring-2 focus-within:ring-cyan-100
  "
      >
        <div
          className="
      flex items-center justify-between gap-3
      border-b border-stone-100 px-3.5 py-2.5
    "
        >
          <div className="flex min-w-0 items-center gap-2">
            <Lightbulb
              size={16}
              aria-hidden="true"
              className="shrink-0 text-cyan-600"
            />

            <label
              htmlFor="audience-requirements"
              className="text-sm font-medium text-stone-700"
            >
              Additional requirements
            </label>
          </div>

          <span className="shrink-0 text-[11px] text-stone-400">Optional</span>
        </div>

        <textarea
          id="audience-requirements"
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. Women investors, income above ₹15L, mutual fund investors..."
          className="
        min-h-24 w-full resize-y bg-transparent
        px-3.5 py-3 text-sm leading-5 text-stone-800
        outline-none placeholder:text-stone-400
      "
        />
      </div>

      {/* Inline Tip — no separate card */}
      {/* <div className="flex items-start gap-2.5 rounded-xl border border-cyan-100 bg-cyan-50/60 px-3.5 py-3">
        <Sparkles
          size={15}
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-cyan-600"
        />
        <p className="text-xs leading-5 text-stone-600">
          Specific filters help us match your audience more accurately.
        </p>
      </div> */}
    </section>
  );
}

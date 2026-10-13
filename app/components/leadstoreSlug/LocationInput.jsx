"use client";

import { MapPin, Search, Globe2 } from "lucide-react";

const QUICK_LOCATIONS = [
  "Pan India",
  "Mumbai",
  "Delhi NCR",
  "Bengaluru",
  "Hyderabad",
  "Pune",
];

export default function LocationInput({ value, onChange }) {
  return (
    <section className="space-y-4">
      {/* Heading */}
      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
          Target Region
        </p>

        <h3 className="text-lg font-semibold tracking-tight text-stone-900">
          Where do you want to target?
        </h3>

        <p className="text-sm leading-5 text-stone-500">
          Choose a location or enter a city, state or region.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search
          size={16}
          aria-hidden="true"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter city, state or region..."
          aria-label="Target city, state or region"
          className="
        h-12 w-full rounded-xl
        border border-stone-200 bg-white
        pl-11 pr-4 text-sm text-stone-900
        outline-none transition-colors
        placeholder:text-stone-400
        focus:border-cyan-500
        focus:ring-2 focus:ring-cyan-100
      "
        />
      </div>

      {/* Quick Picks */}
      <div className="flex flex-wrap gap-2">
        {QUICK_LOCATIONS.map((location) => {
          const active = value.toLowerCase() === location.toLowerCase();

          return (
            <button
              key={location}
              type="button"
              onClick={() => onChange(location)}
              aria-pressed={active}
              className={`
            min-h-9 rounded-full border
            px-3.5 py-1.5 text-xs font-medium
            transition-colors duration-200
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-cyan-500
            focus-visible:ring-offset-2
            ${
              active
                ? "border-cyan-500 bg-cyan-50 text-cyan-700"
                : "border-stone-200 bg-white text-stone-600 hover:border-cyan-300 hover:bg-cyan-50/40"
            }
          `}
            >
              {location}
            </button>
          );
        })}
      </div>

      {/* Compact Coverage Note */}
      <div className="flex items-start gap-3 rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-3">
        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-white">
          {value ? (
            <MapPin size={16} aria-hidden="true" className="text-cyan-600" />
          ) : (
            <Globe2 size={16} aria-hidden="true" className="text-cyan-600" />
          )}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-stone-900 mt-2 md:mt-0">
            {value ? `Target: ${value}` : "Nationwide coverage available"}
          </p>

          <p className="hidden md:block mt-0.5 text-xs leading-5 text-stone-600">
            City, state or pan-India coverage. Add multiple locations in your
            requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

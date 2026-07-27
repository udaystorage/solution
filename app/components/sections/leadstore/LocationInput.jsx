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

export default function LocationInput({
  value,
  onChange,
}) {
  return (
    <section className="space-y-5">

      {/* Heading */}

      <div className="space-y-1">

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
          Target Region
        </p>

        <h3 className="text-xl font-semibold tracking-[-0.03em] text-stone-900">
          Where do you want to target?
        </h3>

        <p className="max-w-xl text-sm leading-6 text-stone-500">
          Specify a city, state or region. You can also choose one of the
          commonly requested locations below.
        </p>

      </div>

      {/* Search Input */}

      <div className="relative">

        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-400"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your city, state or region..."
          className="
            h-16
            w-full
            rounded-[1.5rem]
            border
            border-stone-200
            bg-white
            pl-14
            pr-5
            text-[15px]
            text-stone-900
            outline-none
            transition-all
            duration-300
            placeholder:text-stone-400
            focus:border-cyan-500
            focus:ring-4
            focus:ring-cyan-100
          "
        />

      </div>

      {/* Quick Picks */}

      <div className="flex flex-wrap gap-3">

        {QUICK_LOCATIONS.map((location) => {
          const active =
            value.toLowerCase() === location.toLowerCase();

          return (
            <button
              key={location}
              type="button"
              onClick={() => onChange(location)}
              className={`
                rounded-full
                border
                px-5
                py-2.5
                text-sm
                transition-all
                duration-300

                ${
                  active
                    ? "border-cyan-500 bg-cyan-50 text-cyan-700 shadow-sm"
                    : "border-stone-200 bg-white text-stone-600 hover:border-cyan-200 hover:bg-cyan-50/40"
                }
              `}
            >
              {location}
            </button>
          );
        })}

      </div>

      {/* Info Card */}

      <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">

        <div className="flex items-start gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">

            {value ? (
              <MapPin
                size={20}
                className="text-cyan-600"
              />
            ) : (
              <Globe2
                size={20}
                className="text-cyan-600"
              />
            )}

          </div>

          <div>

            <p className="font-medium text-stone-900">

              {value
                ? `Target Region: ${value}`
                : "Nationwide Coverage Available"}

            </p>

            <p className="mt-1 text-sm leading-6 text-stone-600">

              We support city-level, state-level and pan-India datasets.
              Need multiple locations ? Mention them in requirements below.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
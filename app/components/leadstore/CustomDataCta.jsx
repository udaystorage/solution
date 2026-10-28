import React from "react";
import { ArrowUpRight } from "lucide-react";

function CustomDataCta() {
  return (
    <section className="relative isolate overflow-hidden px-4 py-8 sm:px-8 md:px-16 lg:px-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-blue-100/80 bg-linear-to-br from-cyan-50 via-blue-50 to-violet-100/80 px-5 py-6 shadow-sm sm:px-8 sm:py-8 lg:px-10">
        {/* Subtle background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(96,165,250,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 -z-10 h-64 w-64 rounded-full bg-violet-300/30 blur-3xl"
        />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* CTA copy */}
          <div className="max-w-2xl">
            {/* <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              Your data. Your audience.
            </div> */}

            <h3 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl lg:text-3xl">
              Looking for something{" "}
              <span className="bg-linear-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                specific?
              </span>
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Can&apos;t find the exact database you need? Tell us your target
              audience, industry, or data requirements. We&apos;ll help you find
              the right fit.
            </p>
          </div>

          {/* CTA action */}
          <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
            <span
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Get Custom Data
              <ArrowUpRight className="w-3 h-3 sm:h-4 sm:w-4 transition-translate duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>

            <p className="text-xs text-slate-500">
              Tailored to your requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomDataCta;

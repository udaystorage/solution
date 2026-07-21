import { Check } from "lucide-react";

export default function WhyWeExist() {
  return (
    <section className="bg-stone-50 px-30 py-20">
      <div className=" grid w-full gap-16  lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-36">
        {/* left */}
        <div>
          <div className="lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-semibold bg-neutral-100 text-black border border-neutral-200/60 uppercase tracking-wider">
              Why we exist
            </span>

            <h2 className="mt-6 max-w-md text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
              Business data shouldn&apos;t create more work.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-stone-600">
              The problem was never a lack of information. It was finding the
              information that actually matters.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="space-y-8">
          <div className="max-w-xl">
            <p className="text-xl leading-8 tracking-[-0.015em] text-stone-700 sm:text-2xl sm:leading-9">
              Too many businesses spend valuable time filtering outdated
              contacts, generic databases, and thousands of records before
              finding someone worth reaching.
            </p>
          </div>

          <div className="grid gap-5 pt-8 md:grid-cols-2">
            {/* old way */}
            <div className="rounded-3xl border border-stone-200 bg-white p-7 sm:p-8 border border-white/10
bg-white/[0.07]
backdrop-blur-xl
shadow-[0_8px_32px_rgba(16,185,129,0.10)]">
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                The old way
              </span>

              <div className="mt-8 space-y-5">
                {[
                  "Generic databases",
                  "Thousands of records",
                  "Manual filtering",
                  "Wasted outreach",
                ].map((item, index) => (
                  <FlowItem
                    key={item}
                    label={item}
                    last={index === 3}
                    muted
                  />
                ))}
              </div>
            </div>

            {/* our way */}
            <div className="rounded-3xl bg-stone-950 p-7 text-white shadow-xl sm:p-8 scale-105 z-10 bg-black/[0.07]
backdrop-blur-xl
shadow-[0_8px_32px_rgba(16,185,129,0.10)]">
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-300">
                Our approach
              </span>

              <div className="mt-8 space-y-5">
                {[
                  "Your requirement",
                  "Targeted research",
                  "Verified data",
                  "Relevant opportunities",
                ].map((item, index) => (
                  <FlowItem key={item} label={item} last={index === 3} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowItem({ label, last, muted = false }) {
  return (
    <div>
      <div className="flex items-center gap-3 rounded-3xl
bg-white/[0.07]
backdrop-blur-xl
shadow-[0_8px_32px_rgba(16,185,129,0.10)]">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full ${
            muted
              ? "bg-stone-100 text-stone-400"
              : "bg-emerald-400 text-stone-950"
          }`}
        >
          <Check size={14} strokeWidth={2.5} />
        </span>

        <span className={muted ? "text-stone-500" : "text-stone-100"}>
          {label}
        </span>
      </div>

      {!last && (
        <div
          className={`ml-[13px] mt-1 h-5 w-px ${
            muted ? "bg-stone-200" : "bg-stone-700"
          }`}
        />
      )}
    </div>
  );
}

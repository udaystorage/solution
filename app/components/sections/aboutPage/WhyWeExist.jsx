import { Check } from "lucide-react";

export default function WhyWeExist() {
  return (
    <section className="overflow-hidden bg-stone-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-30 lg:py-20">
      <div
        className="
          grid w-full gap-12
          sm:gap-14
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-16 lg:px-10 lg:py-36
        "
      >
        {/* left */}
        <div>
          <div className="lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200/60 bg-neutral-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black sm:text-[11px] lg:text-[12px]">

              Why we exist
            </span>

            <h2
              className="
                mt-5 max-w-md
                text-3xl font-semibold
                leading-[1.08] tracking-[-0.035em]
                sm:mt-6 sm:text-3xl
                lg:text-4xl
              "
            >
              Business data shouldn&apos;t create more work.
            </h2>

            <p
              className="
                mt-5 max-w-md
                text-[15px] leading-7 text-stone-600
                sm:mt-6 sm:text-base
              "
            >
              The problem was never a lack of information. It was finding the
              information that actually matters.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="space-y-7 sm:space-y-8">
          <div className="max-w-xl">
            <p
              className="
                text-lg leading-7
                tracking-[-0.015em] text-stone-700
                sm:text-xl sm:leading-8
                lg:text-xl lg:leading-9
              "
            >
              Too many businesses spend valuable time filtering outdated
              contacts, generic databases, and thousands of records before
              finding someone worth reaching.
            </p>
          </div>

          <div
            className="
              grid gap-5 pt-3
              sm:pt-5
              md:grid-cols-2
              lg:pt-8
            "
          >
            {/* old way */}
            <div
              className="
                rounded-2xl
                border border-stone-200
                bg-white/[0.7]
                p-5
                backdrop-blur-xl
                shadow-[0_8px_32px_rgba(16,185,129,0.10)]
                sm:rounded-3xl sm:p-7
                lg:p-8
              "
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 sm:text-xs">
                The old way
              </span>

              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
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
            <div
              className="
                relative z-10
                rounded-2xl
                bg-stone-950
                p-5 text-white
                backdrop-blur-xl
                shadow-[0_8px_32px_rgba(16,185,129,0.10)]
                sm:rounded-3xl sm:p-7
                md:scale-[1.02]
                lg:scale-105 lg:p-8
              "
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-300 sm:text-xs">
                Our approach
              </span>

              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                {[
                  "Your requirement",
                  "Targeted research",
                  "Verified data",
                  "Relevant opportunities",
                ].map((item, index) => (
                  <FlowItem
                    key={item}
                    label={item}
                    last={index === 3}
                  />
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
      <div
        className="
          flex items-center gap-3
          rounded-2xl
          bg-white/[0.07]
          backdrop-blur-xl
          shadow-[0_8px_32px_rgba(16,185,129,0.10)]
        "
      >
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
            muted
              ? "bg-stone-100 text-stone-400"
              : "bg-emerald-400 text-stone-950"
          }`}
        >
          <Check size={14} strokeWidth={2.5} />
        </span>

        <span
          className={`text-sm sm:text-base ${
            muted ? "text-stone-500" : "text-stone-100"
          }`}
        >
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

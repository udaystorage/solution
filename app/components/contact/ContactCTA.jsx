import { ArrowUpRight, Clock3 } from "lucide-react";

const PHONE_DISPLAY = "+91 98765 43210";
const PHONE_LINK = "tel:+919876543210";

export default function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="px-4 pb-10 sm:px-6 sm:pb-12 lg:px-10 lg:pb-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Animated border wrapper */}
        <div className="contact-cta-border relative overflow-hidden rounded-[26px] p-px">
          {/* Actual CTA surface */}
          <div
            className="
              contact-cta-surface
              relative
              overflow-hidden
              rounded-[25px]
              bg-linear-to-br
              from-[#111219]
              via-[#1b1e27]
              to-[#343b47]
              px-6 py-8
              sm:px-9 sm:py-9
              lg:px-12
            "
          >
            {/* Slow ambient light */}
            <div
              aria-hidden="true"
              className="contact-cta-ambient pointer-events-none absolute inset-0"
            />

            {/* Soft upper highlight */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-x-16 top-0
                h-px
                bg-linear-to-r
                from-transparent
                via-white/25
                to-transparent
              "
            />

            {/* Content */}
            <div
              className="
                relative z-10
                grid items-center
                gap-8
                md:grid-cols-[1fr_auto]
                md:gap-12
              "
            >
              {/* Left */}
              <div>
                <h2
                  id="contact-cta-heading"
                  className="
                    text-xl font-semibold
                    tracking-[-0.025em]
                    text-white
                    sm:text-2xl
                    md:text-3xl
                  "
                >
                  Want to call right now ?
                </h2>

                <p
                  className="
                    mt-2 max-w-md
                    text-sm sm:leading-4 md:leading-5 lg:leading-6
                    text-slate-400
                  "
                >
                  Tell us what you need and we&apos;ll help narrow down the
                  right data for your audience.
                </p>
              </div>

              {/* Right */}
              <div
                className="
                  border-white/10
                  md:min-w-[390px]
                  md:border-l
                  md:pl-10
                  lg:pl-12
                "
              >
                <a
                  href={PHONE_LINK}
                  aria-label={`Call Leadwala at ${PHONE_DISPLAY}`}
                  className="
                    group
                    inline-flex
                    items-center gap-4
                    text-xl font-semibold
                    tracking-[-0.03em]
                    text-white
                    sm:text-2xl
                    md:text-3xl
                  "
                >
                  <h2
                    className="
                      transition-opacity
                      duration-300
                      group-hover:opacity-75
                    "
                  >
                    {PHONE_DISPLAY}
                  </h2>

                  {/* Interactive arrow */}
                  <span
                    className="
                      flex h-7 w-7
                      shrink-0
                      items-center justify-center

                      rounded-full
                      border border-white/15
                      bg-white/[0.06]

                      transition-all
                      duration-300

                      group-hover:border-white/30
                      group-hover:bg-white/[0.12]
                      md:h-10 md:w-10
                    "
                  >
                    <ArrowUpRight
                      aria-hidden="true"
                      className="
                        h-4 w-4

                        transition-transform
                        duration-300

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </span>
                </a>

                <div
                  className="
                    mt-4
                    flex flex-wrap
                    items-center gap-2
                    text-xs
                    text-slate-400
                  "
                >
                  {/* Static availability indicator */}
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5 w-1.5
                      rounded-full
                      bg-emerald-400
                    "
                  />

                  <span>Available Mon–Sat</span>

                  <span aria-hidden="true" className="text-slate-600">
                    ·
                  </span>

                  <Clock3 aria-hidden="true" className="h-3.5 w-3.5" />

                  <span>10:00 AM–08:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

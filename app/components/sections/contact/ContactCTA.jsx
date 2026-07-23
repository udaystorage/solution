import {
  ArrowUpRight,
  Clock3,
} from "lucide-react";

const PHONE_DISPLAY = "+91 98765 43210";
const PHONE_LINK = "tel:+919876543210";

export default function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="px-4 pb-10 sm:px-6 sm:pb-12 lg:px-10 lg:pb-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[24px]  bg-linear-to-br from-[#111219] to-[#4b5667] px-6 py-8 shadow-[0_20px_60px_rgba(2,6,23,0.16)] sm:px-9 lg:px-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">

            {/* Left */}
            <div>
              <h2
                id="contact-cta-heading"
                className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl"
              >
                Rather talk it through?
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                Our team is here to help you find the right data,
                faster and easier.
              </p>
            </div>

            {/* Right */}
            <div className="md:min-w-[360px]">
              <a
                href={PHONE_LINK}
                aria-label={`Call Leadwala at ${PHONE_DISPLAY}`}
                className="group inline-flex items-center gap-3 text-2xl font-semibold tracking-[-0.03em] text-white transition-opacity hover:opacity-70 sm:text-3xl"
              >
                {PHONE_DISPLAY}

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <p className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <Clock3
                  aria-hidden="true"
                  className="h-4 w-4"
                />

                <span>Mon–Sat</span>

                <span aria-hidden="true">·</span>

                <span>10:00 AM–7:00 PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
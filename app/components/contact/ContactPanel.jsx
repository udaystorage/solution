import { ArrowUpRight, Clock3, Phone } from "lucide-react";

import ContactForm from "./ContactForm";

const PHONE_DISPLAY = process.env.NEXT_PUBLIC_CONTACT_NUMBER;
const PHONE_LINK = `tel:${PHONE_DISPLAY}.replace(/\D/g, "")`;

export default function ContactPanel() {
  return (
    <section
      aria-labelledby="contact-requirement-heading"
      className="px-4 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
    relative
    grid
    overflow-hidden

    rounded-[28px]
    border border-slate-200/80

    bg-linear-to-br
    from-white
    via-slate-200
    to-violet-300

    shadow-[0_20px_60px_rgba(15,23,42,0.06)]

    lg:grid-cols-2
  "
        >
          {" "}
          {/* LEFT — REQUIREMENT FORM */}
          <div className="px-6 py-8 bg-white sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Your requirement
              </p>

              <h2
                id="contact-requirement-heading"
                className="mt-2 md:mt-3 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl md:text-3xl"
              >
                Tell us what you need.
              </h2>

              <p className="mt-1 sm:mt-2 text-sm leading-6 text-slate-500">
                Two details. Less than a minute.
              </p>

              <ContactForm />
            </div>
          </div>
          {/* RIGHT — DIRECT CALL */}
          <aside
            aria-labelledby="prefer-talk-heading"
            className="
    relative
    min-h-95
    overflow-hidden

    border-t border-white/70

    bg-white/45
    backdrop-blur-2xl

    shadow-[inset_1px_0_0_rgba(255,255,255,0.75)]

    sm:min-h-105

    lg:min-h-0
    lg:border-l
    lg:border-t-0
  "
          >
            <div
              aria-hidden="true"
              className="
      pointer-events-none
      absolute -right-20 -top-24
      h-80 w-80
      rounded-full
      bg-violet-300/25
      blur-[100px]
    "
            />

            <div
              aria-hidden="true"
              className="
      pointer-events-none
      absolute -bottom-28 -left-10
      h-80 w-80
      rounded-full
      bg-cyan-200/25
      blur-[110px]
    "
            />

            {/* Very subtle neutral depth */}
            <div
              aria-hidden="true"
              className="
      pointer-events-none
      absolute inset-0
      bg-linear-to-br
      from-white/45
      via-white/10
      to-slate-100/25
    "
            />

            {/* Glass edge highlight */}
            <div
              aria-hidden="true"
              className="
      pointer-events-none
      absolute inset-x-0 top-0
      h-px
      bg-linear-to-r
      from-transparent
      via-white
      to-transparent
    "
            />

            {/* CONTENT */}

            <div
              className="
      relative z-10
      flex h-full
      min-h-95
      items-center

      px-6 py-10

      sm:min-h-105
      sm:px-10 sm:py-12

      lg:min-h-full
      lg:px-12
    "
            >
              <div className="w-full max-w-sm">
                {/* Icon */}
                <div
                  className="
    phone-glow-box
    relative
    flex h-11 w-11
    items-center justify-center
    overflow-hidden
    rounded-xl
    border border-white/80
    bg-stone-200
    shadow-[0_8px_30px_rgba(15,23,42,0.06)]
    backdrop-blur-xl
  "
                >
                  {/* Moving silver glow */}
                  <span aria-hidden="true" className="phone-silver-glow" />

                  <Phone
                    aria-hidden="true"
                    className="
      phone-glow-icon
      relative z-10
      h-4.5 w-4.5
      text-slate-700
    "
                  />
                </div>

                {/* Heading */}
                <h2
                  id="prefer-talk-heading"
                  className="
          mt-6
          text-2xl font-semibold
          tracking-tight
          text-slate-950
          sm:text-3xl
        "
                >
                  Prefer to talk?
                </h2>

                <p
                  className="
          mt-4
          max-w-xs
          text-sm leading-6
          text-slate-600
        "
                >
                  Speak directly with our data specialists to discuss
                  availability and coverage.
                </p>

                {/* Phone */}
                <a
                  href={PHONE_LINK}
                  aria-label={`Call Leadwala at ${PHONE_DISPLAY}`}
                  className="
          group
          mt-7
          inline-flex
          items-center gap-3

          text-2xl font-semibold
          tracking-[-0.03em]
          text-slate-950

          transition-opacity
          duration-300
          hover:opacity-60

          sm:text-3xl
        "
                >
                  {PHONE_DISPLAY}

                  <ArrowUpRight
                    aria-hidden="true"
                    className="
            h-5 w-5
            shrink-0
            text-slate-500

            transition-transform
            duration-300

            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
                  />
                </a>

                {/* Availability */}
                <div
                  className="
          mt-7
          border-t border-slate-900/8
          pt-5
        "
                >
                  <div
                    className="
            flex flex-wrap
            items-center
            gap-x-2 gap-y-1

            text-xs
            text-slate-600
          "
                  >
                    {/* Status */}
                    <span aria-hidden="true" className="relative flex h-2 w-2">
                      <span
                        className="
                absolute
                inline-flex
                h-full w-full
                animate-ping
                rounded-full
                bg-emerald-400
                opacity-40
              "
                      />

                      <span
                        className="
                relative
                inline-flex
                h-2 w-2
                rounded-full
                bg-emerald-500
              "
                      />
                    </span>

                    <span>Available Mon–Sat</span>

                    <span aria-hidden="true" className="text-slate-300">
                      ·
                    </span>

                    <Clock3
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-slate-400"
                    />

                    <span>10:00 AM–08:00 PM</span>
                  </div>

                  <p
                    className="
            mt-3
            max-w-xs
            text-xs leading-5
            text-slate-500
          "
                  >
                    We usually respond within a few minutes during business
                    hours.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

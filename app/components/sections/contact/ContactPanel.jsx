import Image from "next/image";
import {
  ArrowUpRight,
  Clock3,
  Phone,
} from "lucide-react";

import ContactForm from "./ContactForm";

const PHONE_DISPLAY = "+91 98765 43210";
const PHONE_LINK = "tel:+919876543210";

export default function ContactPanel() {
  return (
    <section
      aria-labelledby="contact-requirement-heading"
      className="px-4 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:grid-cols-2">

          {/* ==========================================
              LEFT — REQUIREMENT FORM
          ========================================== */}
          <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Your requirement
              </p>

              <h2
                id="contact-requirement-heading"
                className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-3xl"
              >
                Tell us what you need.
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Two details. Less than a minute.
              </p>

              <ContactForm />
            </div>
          </div>

          {/* ==========================================
              RIGHT — DIRECT CALL
          ========================================== */}
          <aside
            aria-labelledby="prefer-talk-heading"
            className="relative min-h-[380px] overflow-hidden border-t border-slate-200 sm:min-h-[420px] lg:min-h-0 lg:border-l lg:border-t-0"
          >
            {/* Background */}
            <Image
              src="/contactbg.webp"
              alt=""
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="z-0 object-cover object-center"
              aria-hidden="true"
            />

            {/*
              One overlay only.

              The left is protected for text readability.
              The right becomes increasingly transparent so the
              telephone photograph remains visible.
            */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-10 bg-white/50 sm:bg-white/35 lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_42%,rgba(255,255,255,0.10)_72%,rgba(255,255,255,0)_100%)]"
            />

            <div className="relative z-20 flex h-full min-h-[380px] items-center px-6 py-10 sm:min-h-[420px] sm:px-10 sm:py-12 lg:min-h-full lg:px-12">
              <div className="max-w-sm">
                <Phone
                  aria-hidden="true"
                  className="mb-6 h-5 w-5 text-violet-600"
                />

                <h2
                  id="prefer-talk-heading"
                  className="text-2xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-3xl"
                >
                  Prefer to talk?
                </h2>

                <p className="mt-4 max-w-xs text-sm leading-6 text-slate-700">
                  Speak directly with our data specialists to discuss
                  availability and coverage.
                </p>

                <a
                  href={PHONE_LINK}
                  aria-label={`Call Leadwala at ${PHONE_DISPLAY}`}
                  className="group mt-7 inline-flex items-center gap-3 text-2xl font-semibold tracking-[-0.025em] text-slate-950 transition-opacity hover:opacity-60 sm:text-3xl"
                >
                  {PHONE_DISPLAY}

                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <div className="mt-7 border-t border-slate-900/10 pt-5">
                  <p className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                    <Clock3
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0"
                    />

                    <span>Mon–Sat</span>

                    <span aria-hidden="true">·</span>

                    <span>10:00 AM–7:00 PM</span>
                  </p>

                  <p className="mt-3 max-w-xs text-xs leading-5 text-slate-500">
                    We usually respond within a few minutes during
                    business hours.
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
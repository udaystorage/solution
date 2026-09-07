"use client";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const PHONE_DISPLAY = process.env.NEXT_PUBLIC_CONTACT_NUMBER;
const PHONE_LINK = `tel:${PHONE_DISPLAY}.replace(/[^\d+]/g, "")`;

export default function FinalCTA() {
  return (
    <section className="bg-white px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10">
      <div
        className="
        group relative mx-auto
        max-w-5xl overflow-hidden
        rounded-3xl
        bg-linear-to-br from-[#111219] to-[#4b5667]
        px-8 py-12
        text-center text-white

        shadow-[-4px_-4px_12px_rgba(255,255,255,0.8),4px_4px_12px_rgba(0,0,0,0.06)]

        transition-all duration-300 ease-out

        sm:rounded-4xl
        sm:px-10
        sm:py-20  
        sm:max-w-2xl

        md:py-24
        md:max-w-4xl

        lg:py-28
        lg:hover:-translate-y-0.5
        lg:hover:shadow-[-8px_-8px_20px_rgba(255,255,255,0.9),8px_8px_20px_rgba(0,0,0,0.1)]
      "
      >
        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Badge */}
          <span
            className="
            inline-flex items-center gap-1.5
            rounded-full
            border border-white/12
            bg-white/15
            px-3 py-1
            text-[10px] font-semibold
            uppercase tracking-wider
            text-stone-300
            shadow-sm
            backdrop-blur-xl
            sm:text-[11px]
            lg:text-[12px]
          "
          >
            Let&apos;s talk
          </span>

          {/* Heading */}
          <h2
            className="
            mt-5
            text-2xl font-semibold
            leading-[1.08]
            tracking-[-0.035em]
            sm:mt-6
            sm:text-3xl
            sm:leading-[1.1]
            md:text-4xl
            lg:text-5xl
          "
          >
            You know your ideal customer.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span
              data-text="We'll help you find them."
              className="shimmer-text text-stone-400"
            >
              We&apos;ll help you find them.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
            mx-auto mt-5
            max-w-xl
            text-[13px]
            leading-6
            text-stone-300
            sm:mt-6
            sm:text-base
            sm:leading-7
          "
          >
            Tell us the industry, location, company profile, or decision-makers
            you&apos;re trying to reach.
          </p>

          {/* CTA Buttons */}
          <div
            className="
            max-[640px]:items-center
            mx-auto mt-8
            flex w-full max-w-sm
            flex-col items-stretch
            justify-center gap-3
            sm:mt-9
            sm:max-w-none
            sm:flex-row
            sm:items-center
          "
          >
            {/* Get Custom Data */}
            <Link
              href="/datastore/custom-data"
              className="
              group/cta
              inline-flex w-full
              items-center justify-center gap-2
              rounded-full
              border-2 border-cyan-200
              bg-white
              px-6 py-3.5
              text-sm font-medium
              transition-all duration-300

              sm:w-auto
              sm:min-w-42.5
              sm:hover:-translate-y-1
              sm:hover:shadow-xl
            "
            >
              <span
                className="
                bg-linear-to-r
                from-violet-800 via-blue-700 to-cyan-800
                bg-clip-text text-transparent

                sm:group-hover/cta:from-cyan-800
                sm:group-hover/cta:to-violet-800
              "
              >
                Get Custom Data
              </span>

              <ArrowRight
                size={15}
                className="
                text-black
                transition-transform duration-300
                sm:group-hover/cta:translate-x-0.5
              "
              />
            </Link>

            {/* Talk to an Expert */}
            <div
              className="
              w-full rounded-full
              bg-linear-to-r
              from-violet-400 via-blue-400 to-cyan-400
              p-px
              transition-all duration-700
              ease-in-out

              sm:w-auto
              sm:hover:-translate-y-1
              sm:hover:from-cyan-400
              sm:hover:to-violet-400
            "
            >
              <a
                href={PHONE_LINK}
                aria-label={`Call Leadwala at ${PHONE_DISPLAY}`}
                className="
                group/tte
                inline-flex w-full
                cursor-pointer
                items-center justify-center gap-2
                rounded-full
                bg-stone-950
                px-6 py-3.5
                text-sm font-medium
                text-white
                transition-colors duration-300

                sm:min-w-42.5
              "
              >
                Talk to an Expert
                <ArrowUpRight
                  size={15}
                  className="
                  transition-transform duration-300
                  sm:group-hover/tte:-translate-y-0.5
                  sm:group-hover/tte:translate-x-0.5
                "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

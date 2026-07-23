"use client";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const openWhatsApp = () => {
    const phoneNumber = "919876543210";

    const message = encodeURIComponent(
      "Hi, I would like to connect with your back-office expert team regarding my data requirements.",
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

return (
  <section className="bg-white px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10">
    <div
      className="
        group relative mx-auto
        max-w-7xl overflow-hidden
        rounded-[1.5rem]
        bg-linear-to-br from-[#111219] to-[#4b5667]
        px-5 py-14
        text-center text-white

        shadow-[-4px_-4px_12px_rgba(255,255,255,0.8),_4px_4px_12px_rgba(0,0,0,0.06)]

        transition-all duration-300 ease-out

        sm:rounded-[2rem]
        sm:px-10
        sm:py-20

        md:py-24

        lg:py-28
        lg:hover:-translate-y-0.5
        lg:hover:shadow-[-8px_-8px_20px_rgba(255,255,255,0.9),_8px_8px_20px_rgba(0,0,0,0.1)]
      "
    >
      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Badge */}
        <span
          className="
            inline-flex items-center gap-1.5
            rounded-full
            border border-white/[0.12]
            bg-white/[0.15]
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
            text-[2rem] font-semibold
            leading-[1.08]
            tracking-[-0.035em]
            sm:mt-6
            sm:text-4xl
            sm:leading-[1.1]
            md:text-5xl
            lg:text-6xl
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
            text-[14px]
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
          <a
            href="/contact"
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
              sm:min-w-[170px]
              sm:hover:-translate-y-1
              sm:hover:shadow-xl
            "
          >
            <span
              className="
                bg-gradient-to-r
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
          </a>

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
            <button
              onClick={openWhatsApp}
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

                sm:min-w-[170px]
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
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

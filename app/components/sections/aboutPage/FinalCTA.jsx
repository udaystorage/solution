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
    <section className="bg-white px-4 pb-8 sm:px-6 lg:px-10 ">
      <div className="group relative mx-auto max-w-7xl overflow-hidden rounded-[2rem]  px-6 py-20 text-center text-white sm:px-10 sm:py-24 lg:py-28 bg-linear-to-br from-[#111219] to-[#4b5667]  shadow-[-4px_-4px_12px_rgba(255,255,255,0.8),_4px_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[-8px_-8px_20px_rgba(255,255,255,0.9),_8px_8px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300 ease-out">
        {/* glow
        <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-cyan-400/20 blur-[80px]" /> */}

        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-semibold text-stone-300 uppercase tracking-wider bg-white/[0.15] backdrop-blur-xl border border-white/[0.12] shadow-sm">
            Let&apos;s talk
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            You know your ideal customer.
            <br />
            <span
              data-text="We'll help you find them."
              className="shimmer-text text-stone-400"
            >
              We&apos;ll help you find them.
            </span>{" "}
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-stone-300">
            Tell us the industry, location, company profile, or decision-makers
            you&apos;re trying to reach.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
     <a
  href="/contact"
  className="group/cta inline-flex min-w-[170px] items-center justify-center gap-2
    rounded-full bg-white px-6 py-3.5 text-sm font-medium
    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-2 border-cyan-200"
>
  <span
    className="bg-gradient-to-r from-violet-800 via-blue-700 to-cyan-800
      bg-clip-text text-transparent
      group-hover/cta:from-cyan-800
      group-hover/cta:to-violet-800"
  >
    Get Custom Data
  </span>

  <ArrowRight
    size={15}
    className="text-black transition-transform duration-300
      group-hover/cta:translate-x-0.5"
  />
</a>


      <div className="rounded-full bg-linear-to-r from-violet-400 via-blue-400 to-cyan-400 p-px transition-all duration-300 hover:-translate-y-1 hover:from-cyan-400 hover:to-violet-400  transition-[background-position,transform] duration-700 ease-in-out">
  <button
    onClick={openWhatsApp}
    className="group/tte inline-flex min-w-[170px] cursor-pointer items-center justify-center gap-2
      rounded-full bg-stone-950 px-6 py-3.5
      text-sm font-medium text-white
      transition-colors duration-300 "
  >
    Talk to an Expert

    <ArrowUpRight
      size={15}
      className="transition-transform duration-300
        group-hover/tte:-translate-y-0.5 group-hover/tte:translate-x-0.5"
    />
  </button>
</div>
          </div>
        </div>
        {/* <div className="pointer-events-none absolute left-1/2 bottom z-0
        -0 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-olive-500/20 via-blue-500/20 to-cyan-400/20 blur-[100px]" /> */}

      </div>
    </section>
  );
}

'use client'
import {ArrowUpRight, ArrowRight} from "lucide-react"

export default function FinalCTA() {
  const openWhatsApp = () => {
    const phoneNumber = "919876543210";

    const message = encodeURIComponent(
      "Hi, I would like to connect with your back-office expert team regarding my data requirements."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="bg-white px-4 pb-8 sm:px-6 lg:px-10">
      <div className="group relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-stone-950 px-6 py-20 text-center text-white sm:px-10 sm:py-24 lg:py-28">
        {/* glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-cyan-400/20 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-neutral-100 text-black border border-neutral-200/60 uppercase tracking-wider">
            Let&apos;s talk
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            You know your ideal customer.
            <br />
           <span className="text-stone-400 bg-gradient-to-r from-stone-400 via-stone-200 to-stone-400 bg-[length:200%_auto] bg-clip-text transition-all duration-500 group-hover:text-transparent group-hover:[animation:shimmer_2.5s_linear_infinite] [keyframes_shimmer_{100%_background-position:200%_center}]">
  We&apos;ll help you find them.
</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-stone-400">
            Tell us the industry, location, company profile, or decision-makers
            you&apos;re trying to reach.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex min-w-[170px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get Custom Data
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <button
              onClick={openWhatsApp}
              className="group inline-flex min-w-[170px] cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Talk to an Expert
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
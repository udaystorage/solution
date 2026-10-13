import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section
      className="
    relative isolate
    min-h-155 sm:min-h-170
    lg:min-h-[min(85svh,750px)]
    overflow-hidden
    bg-sky-100
    "
    >
      {/* Layer 1: Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-bg-4.webp"
          alt=""
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="
    pointer-events-none absolute inset-0 z-2
    bg-[linear-gradient(to_bottom,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.48)_40%,rgba(255,255,255,0.27)_60%,rgba(255,255,255,0.08)_100%)]
  "
      />

      {/* Layer 3: Actual content — always above the overlay */}
      <div
        className="
      relative z-10 mx-auto flex min-h-155
      max-w-7xl flex-col items-center justify-center
      px-6 py-16 text-center
      sm:min-h-170 sm:px-8
      lg:px-10
    "
      >
        <h1 className="hero-heading max-w-2xl text-black">
          Data should create
          <br />
          <span
            className="
          bg-linear-to-r from-violet-500 via-blue-500
          to-cyan-500 bg-clip-text text-transparent
        "
          >
            opportunities,
          </span>{" "}
          not more work.
        </h1>

        <p className="hero-subheading text-slate-900">
          We help businesses discover and reach the clients they desire with
          high value databases backed by our lead expert&apos;s consultation.
        </p>

        <a
          href="#approach"
          className="group mt-12 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          Explore our approach
          <ArrowDown
            size={15}
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          />
        </a>

        <div className="mt-14 md:mt-20  flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-stone-500">
          <span className="text-[9px] sm:text-[10px] md:text-[12px] rounded-full bg-white/70 backdrop-blur-md px-3 py-1 text-stone-800 shadow-sm">
            Verified Data
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white sm:block" />
          <span className="text-[9px] sm:text-[10px] md:text-[12px] rounded-full bg-white/70 backdrop-blur-md px-3 py-1 text-stone-800 shadow-sm">
            Custom Research
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white sm:block" />
          <span className="text-[9px] sm:text-[10px] md:text-[12px] rounded-full bg-white/70 backdrop-blur-md px-3 py-1 text-stone-800 shadow-sm">
            Pan-India Coverage
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white sm:block" />
          <span className="text-[9px] sm:text-[10px] md:text-[12px] rounded-full bg-white/70 backdrop-blur-md px-3 py-1 text-stone-800 shadow-sm">
            Human-Assisted Research
          </span>
        </div>
      </div>
    </section>
  );
}

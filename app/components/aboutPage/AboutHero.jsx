import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about.webp"
          alt=""
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-violet-100/40 via-blue-100/40 to-cyan-100/40 blur-[100px]" />

      <div className="relative mx-auto md:mt-12 lg:mt-10 flex min-h-162.5 max-w-7xl flex-col items-center justify-center px-6 py-24 text-center lg:px-10">
        {/* <span className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
          About Leadwala
        </span> */}

        <h1 className="max-w-2xl hero-heading">
          Data should create
          <br />
          <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            opportunities,
          </span>{" "}
          not more work.
        </h1>

        <p className="hero-subheading ">
          We help businesses discover and reach the clients they desire with
          high value databases backed by our lead expert&apos;s consultation.
        </p>

        <a
          href="#approach"
          className="group mt-10 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          Explore our approach
          <ArrowDown
            size={15}
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          />
        </a>

        <div className="mt-14  flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-stone-500">
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

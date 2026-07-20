import { ArrowDown } from "lucide-react";
export default function AboutHero() {
  return (
    <section className="relative">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-100/40 via-blue-100/40 to-cyan-100/40 blur-[100px]" />

      <div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center lg:px-10">
        {/* <span className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
          About Leadwala
        </span> */}

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Data should create
          <br />
          <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            opportunities,
          </span>{" "}
          not more work.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
          We help businesses discover and reach the right companies and
          decision-makers with relevant, structured, and dependable B2B data.
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

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-stone-500">
          <span>Verified Data</span>
          <span className="hidden h-1 w-1 rounded-full bg-stone-300 sm:block" />
          <span>Custom Research</span>
          <span className="hidden h-1 w-1 rounded-full bg-stone-300 sm:block" />
          <span>Pan-India Coverage</span>
          <span className="hidden h-1 w-1 rounded-full bg-stone-300 sm:block" />
          <span>Human-Assisted Research</span>
        </div>
      </div>
    </section>
  );
}
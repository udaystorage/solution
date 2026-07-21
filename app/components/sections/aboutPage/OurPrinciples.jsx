import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Accuracy over volume.",
    description:
      "More records don't automatically mean more opportunities. Useful data starts with accuracy.",
  },
  {
    number: "02",
    title: "Relevance over generic lists.",
    description:
      "Data should reflect who your business actually needs to reach — not simply fill a spreadsheet.",
  },
  {
    number: "03",
    title: "Transparency over unrealistic promises.",
    description:
      "Clear expectations, clear methodology, and data built around genuine business requirements.",
  },
  {
    number: "04",
    title: "Business outcomes over database size.",
    description:
      "The value isn't how many rows you receive. It's how useful those rows become for your team.",
  },
];

export default  function OurPrinciples() {
  return (
 <section className="relative w-full overflow-hidden bg-slate-950 px-4 py-16 text-slate-900 sm:px-8 md:px-16 lg:px-20">
  {/* Dynamic Ambient Graphics — matched with reference section */}
  <div
    className="pointer-events-none absolute -right-25 top-20 h-137.5 w-137.5 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,137,252,0.15),rgba(39,188,247,0.05)_70%,transparent_90%)] blur-[100px]"
    aria-hidden="true"
  />

  <div
    className="pointer-events-none absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
    aria-hidden="true"
  />

  {/* Content */}
  <div className="relative z-10 mx-auto w-full max-w-7xl lg:px-10 lg:py-20">
    <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
      {/* Left Heading */}
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[13px] font-semibold uppercase tracking-wider text-cyan-400">
          Why Leadwala
        </span>

        <h2 className="mt-5 max-w-sm text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
          What guides the way we work.
        </h2>
      </div>

      {/* Principles */}
      <div>
        {principles.map((principle) => (
          <div
            key={principle.number}
            className="group grid gap-5 border-b border-white/10 py-8 first:border-t sm:grid-cols-[70px_1fr] sm:py-10"
          >
            <span className="text-xs font-medium text-slate-500 group-hover:text-cyan-400 group-hover:opacity-100">
              {principle.number}
            </span>

            <div className="transition-transform duration-300 group-hover:translate-x-1.5">
              <div className="flex items-center justify-between gap-5">
                <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl group-hover:text-olive-100">
                  {principle.title}
                </h3>

                {/* <ArrowUpRight
                  size={18}
                  className="shrink-0 text-slate-500 opacity-0 transition-all duration-300 group-hover:text-cyan-400 group-hover:opacity-100"
                /> */}
              </div>

              <p className="mt-3 max-w-xl leading-7 text-slate-400 group-hover:text-slate-300">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}
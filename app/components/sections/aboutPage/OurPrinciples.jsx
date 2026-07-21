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
    <section className="bg-stone-950 text-white px-30 py-20">
      <div className="w-full lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-semibold bg-neutral-100 text-black border border-neutral-200/60 uppercase tracking-wider">
              Our principles
            </span>

            <h2 className="mt-5 max-w-sm text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              What guides the way we work.
            </h2>
          </div>

          <div>
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="group grid gap-5 border-b border-white/10 py-8 first:border-t sm:grid-cols-[70px_1fr] sm:py-10"
              >
                <span className="text-xs font-medium text-stone-600">
                  {principle.number}
                </span>

                <div className="transition-transform duration-300 group-hover:translate-x-1.5">
                  <div className="flex items-center justify-between gap-5">
                    <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                      {principle.title}
                    </h3>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-stone-600 opacity-0 transition-all duration-300 group-hover:text-white group-hover:opacity-100"
                    />
                  </div>

                  <p className="mt-3 max-w-xl leading-7 text-stone-400">
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
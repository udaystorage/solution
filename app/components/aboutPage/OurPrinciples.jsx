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
      "The value isn't how many rows you receive. It's how many successful opportunities you generate.",
  },
];

export default  function OurPrinciples() {
  return (
<section className="relative w-full overflow-hidden bg-slate-950 px-5 py-16 text-slate-900 sm:px-8 sm:py-20 md:px-16 lg:px-20">
  {/* Dynamic Ambient Graphics */}
  <div
    className="
      pointer-events-none absolute
      -right-40 top-32
      h-100 w-100
      rounded-full
      bg-[radial-gradient(circle_at_center,rgba(37,137,252,0.15),rgba(39,188,247,0.05)_70%,transparent_90%)]
      blur-[80px]
      sm:-right-32 sm:top-24 sm:h-120 sm:w-120 sm:blur-[90px]
      lg:-right-25 lg:top-20 lg:h-137.5 lg:w-137.5 lg:blur-[100px]
    "
    aria-hidden="true"
  />

  <div
    className="
      pointer-events-none absolute
      -top-24 left-1/2
      h-80 w-80
      -translate-x-1/2
      rounded-full
      bg-cyan-500/10
      blur-[90px]
      sm:-top-32 sm:h-100 sm:w-100 sm:blur-[110px]
      lg:-top-40 lg:h-125 lg:w-125 lg:blur-[120px]
    "
    aria-hidden="true"
  />

  {/* Content */}
  <div className="relative z-10 mx-auto w-full max-w-7xl lg:px-10 lg:py-20">
    <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.6fr_1.4fr]">
      
      {/* Left Heading */}
      <div>
        <span
          className="
            inline-flex items-center gap-1.5
            rounded-full
            border border-white/10
            bg-white/10
            px-3 py-1
            text-[10px] font-semibold
            uppercase tracking-wider
            text-cyan-400
            sm:text-[11px]
            lg:text-[12px]
          "
        >
          Our Principles
        </span>

        <h2
          className="
            mt-5 max-w-sm
            text-2xl font-semibold
            leading-[1.08]
            tracking-[-0.035em]
            text-white
            sm:text-3xl
            lg:text-4xl
          "
        >
          What guides the way we work.
        </h2>
      </div>

      {/* Principles */}
      <div>
        {principles.map((principle) => (
          <div
            key={principle.number}
            className="
              group
              grid gap-3
              border-b border-white/10
              py-6
              first:border-t
              sm:grid-cols-[55px_1fr]
              sm:gap-5
              sm:py-8
              lg:grid-cols-[70px_1fr]
              lg:py-10
            "
          >
            {/* Number */}
            <span
              className="
                text-[11px] font-medium
                text-slate-200
                transition-colors duration-300
                group-hover:text-cyan-400
                sm:text-xs
              "
            >
              {principle.number}
            </span>

            {/* Principle content */}
            <div className="transition-transform duration-300 sm:group-hover:translate-x-1.5">
              <div className="flex items-center justify-between gap-4">
                <h3
                  className="
                    text-lg font-medium
                    leading-tight
                    tracking-tight
                    text-white
                    transition-colors duration-300
                    sm:text-xl
                    lg:text-2xl
                    group-hover:text-olive-100
                  "
                >
                  {principle.title}
                </h3>
              </div>

              <p
                className="
                  mt-3 max-w-xl
                  text-[14px]
                  leading-6
                  text-slate-400
                  transition-colors duration-300
                  sm:text-[15px]
                  sm:leading-7
                  lg:text-base 
                  group-hover:text-slate-300
                "
              >
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
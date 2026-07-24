import {
  Database,
  MessageSquareText,
  Search,
  UsersRound,
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Tell us who you need",
    description:
      "Share the audience, industry, location, or market you want to reach.",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "We check what fits",
    description:
      "We review relevant datasets, coverage, filters, and availability.",
    icon: Search,
  },
  {
    number: "03",
    title: "We discuss the right fit",
    description:
      "We walk you through the most suitable data for your requirement.",
    icon: MessageSquareText,
  },
];

export default function ContactProcess() {
  return (
    <section
      aria-labelledby="contact-process-heading"
      className="px-4 py-24 sm:px-6 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <header className="mx-auto max-w-2xl text-center">
         <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200/60 bg-neutral-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-black sm:text-[13px]">
        What Happens
      </span>

          <h2
            id="contact-process-heading"
            className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl"
          >
            From your requirement to the right data.
          </h2>
        </header>

        {/* Process */}
        <ol className="mt-10 px-2 grid gap-10 md:grid-cols-3 md:gap-6 sm:mt-14 lg:mt-16 ">
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <li
                key={step.number}
                className="relative"
              >
                {/* Flow row */}
                <div className="flex items-center">
                  <span className="text-sm font-semibold tracking-[0.12em] text-violet-600">
                    {step.number}
                  </span>

                  <div className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-50">
                    <Icon
                      aria-hidden="true"
                      className="h-4 w-4 text-violet-600"
                    />
                  </div>

                  {index < STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="ml-4 hidden flex-1 border-t border-dashed border-violet-200 md:block"
                    />
                  )}
                </div>

                {/* Copy */}
                <div className="mt-3 max-w-xs sm:mt-3 md:mt-4 lg:mt-5">
                  <h3 className="text-base font-semibold tracking-[-0.015em] text-slate-950 sm:text-lg lg:2xl">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600 sm:mt-2 lg:mt-3">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
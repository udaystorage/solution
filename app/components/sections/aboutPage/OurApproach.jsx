import { useState } from "react";

import {
  ArrowRight,
  Check,
  Database,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  PackageCheck,
} from "lucide-react";
const processSteps = [
  {
    number: "01",
    title: "Understand",
    icon: SlidersHorizontal,
    description:
      "We begin by understanding exactly who you need to reach — industry, geography, company profile, designation, and business requirements.",
  },
  {
    number: "02",
    title: "Research",
    icon: Search,
    description:
      "Relevant businesses and decision-makers are identified through focused research built around your target market.",
  },
  {
    number: "03",
    title: "Verify",
    icon: ShieldCheck,
    description:
      "Records go through validation and quality checks to improve accuracy, consistency, and business relevance.",
  },
  {
    number: "04",
    title: "Structure",
    icon: Database,
    description:
      "Information is cleaned, organized, segmented, and structured so your team can work with it immediately.",
  },
  {
    number: "05",
    title: "Deliver",
    icon: PackageCheck,
    description:
      "You receive actionable business data prepared around your requirements and ready for outreach.",
  },
];


export default function OurApproach() {
  const [activeStep, setActiveStep] = useState(0);
  const active = processSteps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section id="approach" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Our approach
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            From a requirement to
            <br />
            business-ready data.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-stone-600">
            Every dataset follows a focused process designed to turn a business
            requirement into information your team can actually use.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 p-5 sm:p-8 lg:p-10">
          {/* desktop navigation */}
          <div className="hidden grid-cols-5 lg:grid">
            {processSteps.map((step, index) => (
              <button
                key={step.title}
                onClick={() => setActiveStep(index)}
                className="group relative text-left"
              >
                <div className="relative mb-5 flex items-center">
                  <span
                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300 ${
                      activeStep >= index
                        ? "border-stone-950 bg-stone-950 text-white"
                        : "border-stone-300 bg-white text-stone-400"
                    }`}
                  >
                    {step.number}
                  </span>

                  {index !== processSteps.length - 1 && (
                    <span className="absolute left-10 right-0 h-px bg-stone-200">
                      <span
                        className={`block h-full bg-stone-950 transition-all duration-500 ${
                          activeStep > index ? "w-full" : "w-0"
                        }`}
                      />
                    </span>
                  )}
                </div>

                <span
                  className={`text-sm font-medium transition-colors ${
                    activeStep === index
                      ? "text-stone-950"
                      : "text-stone-400 group-hover:text-stone-700"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* mobile navigation */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {processSteps.map((step, index) => (
              <button
                key={step.title}
                onClick={() => setActiveStep(index)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition ${
                  activeStep === index
                    ? "bg-stone-950 text-white"
                    : "border border-stone-200 bg-white text-stone-500"
                }`}
              >
                {step.number} {step.title}
              </button>
            ))}
          </div>

          {/* active content */}
          <div className="mt-10 grid min-h-[310px] gap-8 rounded-3xl bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-sm font-medium text-stone-400">
                {active.number} / 05
              </span>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                {active.title}
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-stone-600">
                {active.description}
              </p>

              <button
                onClick={() =>
                  setActiveStep((activeStep + 1) % processSteps.length)
                }
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium"
              >
                {activeStep === processSteps.length - 1
                  ? "Start again"
                  : "Next step"}

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* abstract data visual */}
            <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl bg-stone-50">
              <div className="absolute h-40 w-40 rounded-full bg-gradient-to-br from-violet-200/60 via-blue-200/60 to-cyan-200/60 blur-3xl" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white bg-white/80 shadow-lg backdrop-blur-xl">
                <ActiveIcon size={34} strokeWidth={1.5} />
              </div>

              <span className="absolute left-6 top-6 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-[10px] font-medium shadow-sm">
                Industry
              </span>

              <span className="absolute right-5 top-12 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-[10px] font-medium shadow-sm">
                Geography
              </span>

              <span className="absolute bottom-7 left-10 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-[10px] font-medium shadow-sm">
                Decision Maker
              </span>

              <span className="absolute bottom-5 right-8 flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1.5 text-[10px] font-medium text-emerald-800">
                <Check size={11} />
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
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

const stepBackgrounds = [
  "from-violet-400/55 via-fuchsia-200/45 to-indigo-400/55",

  "from-blue-400/55 via-cyan-200/45 to-sky-400/55",

  "from-emerald-400/55 via-teal-200/45 to-cyan-400/50",

  "from-amber-400/55 via-orange-200/45 to-rose-400/50",

  "from-indigo-400/55 via-violet-200/45 to-fuchsia-400/55",
];

export default function OurApproach() {
  const [activeStep, setActiveStep] = useState(0);
  const active = processSteps[activeStep];
  const ActiveIcon = active.icon;

  const [allCompleted, setAllCompleted] = useState(false);

  const approachRef = useRef(null);

  // Using this useEffect to observe the viewport and animate the progressive step 
  useEffect(() => {
    const handleScroll = () => {
      const section = approachRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start when section reaches 70% of viewport
      const triggerPoint = viewportHeight * 0.7;

      const scrollDistance = triggerPoint - rect.top;

      // More breathing room between each step
      const stepDistance = 180;

      const progressStep = Math.floor(scrollDistance / stepDistance);

      // Allow 0 → 5, where 5 means everything is completed
      const clampedProgress = Math.max(
        0,
        Math.min(processSteps.length, progressStep),
      );

      // Content itself stays capped at the last real step
      const contentStep = Math.min(clampedProgress, processSteps.length - 1);

      setActiveStep(contentStep);

      setAllCompleted(clampedProgress === processSteps.length);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={approachRef} id="approach" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-neutral-100 text-black border border-neutral-200/60 uppercase tracking-wider">
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
            {processSteps.map((step, index) => {
              const isCompleted =
                activeStep > index ||
                (allCompleted && index === processSteps.length - 1);
              const isActive = activeStep === index;

              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className="group relative text-left"
                >
                  <div className="relative mb-5 flex items-center">
                    {/* Step circle */}
                    <span
                      className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-500 ${
                        isCompleted
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : isActive
                            ? "scale-105 border-stone-950 bg-stone-950 text-white shadow-md"
                            : "border-stone-300 bg-white text-stone-400"
                      }`}
                    >
                      {isCompleted ? (
                        <Check
                          size={17}
                          strokeWidth={2.5}
                          className="animate-in zoom-in duration-300"
                        />
                      ) : (
                        step.number
                      )}
                    </span>

                    {/* Connecting progress line */}
                    {index !== processSteps.length - 1 && (
                      <span className="absolute left-10 right-0 h-px overflow-hidden bg-stone-200">
                        <span
                          className={`block h-full bg-emerald-500 transition-all duration-700 ease-out ${
                            isCompleted ? "w-full" : "w-0"
                          }`}
                        />
                      </span>
                    )}
                  </div>

                  {/* Step title */}
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isCompleted
                        ? "text-emerald-700"
                        : isActive
                          ? "text-stone-950"
                          : "text-stone-400 group-hover:text-stone-700"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
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
            <div className="relative flex min-h-55 items-center justify-center overflow-hidden rounded-2xl bg-stone-50">
             <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/70 bg-white/65 backdrop-blur-2xl shadow-[0_18px_45px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]">
  <ActiveIcon size={34} strokeWidth={1.5} />
</div>
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {stepBackgrounds.map((background, index) => (
                  <div
                    key={index}
                    className={`absolute left-1/2 top-1/2 h-72 w-72
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-linear-to-br ${background}
        blur-[80px]
        transition-opacity duration-1000 ease-in-out
        ${activeStep === index ? "opacity-100" : "opacity-0"}
      `}
                  />
                ))}
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

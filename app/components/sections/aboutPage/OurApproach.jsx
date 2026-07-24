"use client"
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
  <section
  ref={approachRef}
  id="approach"
  className="overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-30 lg:py-20"
>
  <div className="w-full lg:px-10 lg:py-36">
    {/* Heading */}
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200/60 bg-neutral-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black sm:text-[11px] lg:text-[12px]">
        Our approach
      </span>

      <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-3xl lg:text-4xl">
        From a requirement to
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        business-ready data.
      </h2>

      <p className="mt-5 max-w-xl text-[15px] leading-7 text-stone-600 sm:text-base">
        Every dataset follows a focused process designed to turn a business
        requirement into information your team can actually use.
      </p>
    </div>

    {/* Process container */}
    <div
      className="
        mt-10
        rounded-[1.5rem]
        border border-stone-200
        bg-stone-50
        p-3
        sm:mt-12 sm:rounded-[2rem] sm:p-6
        lg:mt-16 lg:p-10
      "
    >
      {/* Desktop navigation */}
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

      {/* Mobile / tablet navigation */}
      <div className="-mx-1 overflow-hidden lg:hidden">
        <div
          className="
            flex gap-2 overflow-x-auto px-1 pb-2
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {processSteps.map((step, index) => (
            <button
              key={step.title}
              onClick={() => setActiveStep(index)}
              className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 text-[11px] font-medium transition-all duration-300 sm:px-4 sm:text-xs ${
                activeStep === index
                  ? "bg-stone-950 text-white shadow-sm"
                  : "border border-stone-200 bg-white text-stone-500"
              }`}
            >
              {step.number} {step.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active content */}
      <div
        className="
          mt-5 grid gap-7
          rounded-[1.25rem]
          bg-white
          p-5
          shadow-sm
          sm:mt-7 sm:rounded-3xl sm:p-8
          md:p-10
          lg:mt-10 lg:min-h-[310px]
          lg:grid-cols-[1fr_0.9fr]
          lg:items-center
        "
      >
        {/* Content */}
        <div>
          <span className="text-xs font-medium text-stone-400 sm:text-sm">
            {active.number} / 05
          </span>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
            {active.title}
          </h3>

          <p className="mt-4 max-w-xl text-[14px] leading-6 text-stone-600 sm:mt-5 sm:text-base sm:leading-7">
            {active.description}
          </p>

          <button
            onClick={() =>
              setActiveStep((activeStep + 1) % processSteps.length)
            }
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium sm:mt-8"
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

        {/* Abstract data visual */}
        <div
          className="
            relative flex
            min-h-[210px]
            items-center justify-center
            overflow-hidden
            rounded-2xl
            bg-stone-50
            sm:min-h-[240px]
            lg:min-h-55
          "
        >
          {/* Dynamic ambient backgrounds */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {stepBackgrounds.map((background, index) => (
              <div
                key={index}
                className={`absolute left-1/2 top-1/2
                  h-56 w-56
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full
                  bg-linear-to-br ${background}
                  blur-[70px]
                  transition-opacity duration-1000 ease-in-out
                  sm:h-72 sm:w-72 sm:blur-[80px]
                  ${activeStep === index ? "opacity-100" : "opacity-0"}
                `}
              />
            ))}
          </div>

          {/* Main icon */}
          <div
            className="
              relative z-10
              flex h-20 w-20
              items-center justify-center
              rounded-[1.35rem]
              border border-white/70
              bg-white/65
              backdrop-blur-2xl
              shadow-[0_18px_45px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]
              sm:h-24 sm:w-24 sm:rounded-3xl
            "
          >
            <ActiveIcon
              size={30}
              strokeWidth={1.5}
              className="sm:h-[34px] sm:w-[34px]"
            />
          </div>

          {/* Floating labels */}
          <span
            className="
              absolute left-3 top-3 z-10
              rounded-full
              border border-stone-200
              bg-white
              px-2.5 py-1
              text-[9px] font-medium
              shadow-sm
              sm:left-6 sm:top-6 sm:px-3 sm:py-1.5 sm:text-[10px]
            "
          >
            Industry
          </span>

          <span
            className="
              absolute right-3 top-10 z-10
              rounded-full
              border border-stone-200
              bg-white
              px-2.5 py-1
              text-[9px] font-medium
              shadow-sm
              sm:right-5 sm:top-12 sm:px-3 sm:py-1.5 sm:text-[10px]
            "
          >
            Geography
          </span>

          <span
            className="
              absolute bottom-5 left-3 z-10
              rounded-full
              border border-stone-200
              bg-white
              px-2.5 py-1
              text-[9px] font-medium
              shadow-sm
              sm:bottom-7 sm:left-10 sm:px-3 sm:py-1.5 sm:text-[10px]
            "
          >
            Decision Maker
          </span>

          <span
            className="
              absolute bottom-3 right-3 z-10
              flex items-center gap-1
              rounded-full
              bg-emerald-100
              px-2.5 py-1
              text-[9px] font-medium
              text-emerald-800
              sm:bottom-5 sm:right-8 sm:px-3 sm:py-1.5 sm:text-[10px]
            "
          >
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

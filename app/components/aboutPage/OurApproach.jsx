"use client";
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
import Image from "next/image";
const processSteps = [
  {
    number: "01",
    title: "Understand",
    icon: SlidersHorizontal,
    src: "/aboutApproach/understand-illustration.svg",
    imageAlt: "segmentation illustration",
    description:
      "We begin by understanding exactly who you need to reach — industry, geography, company profile, designation, and business requirements.",
  },
  {
    number: "02",
    title: "Research",
    icon: Search,
    src: "/aboutApproach/research-illustration.svg",
    imageAlt: "research illustration",
    description:
      "Relevant businesses and decision-makers are identified through focused research built around your target market.",
  },
  {
    number: "03",
    title: "Verify",
    icon: ShieldCheck,
    src: "/aboutApproach/verify-illustration.svg",
    imageAlt: "data verification illustration",
    description:
      "Records go through validation and quality checks to improve accuracy, consistency, and business relevance.",
  },
  {
    number: "04",
    title: "Structure",
    icon: Database,
    src: "/aboutApproach/structure-illustration.svg",
    imageAlt: "structuring data illustration",
    description:
      "Information is cleaned, organized, segmented, and structured so your team can work with it immediately.",
  },
  {
    number: "05",
    title: "Deliver",
    icon: PackageCheck,
    src: "/aboutApproach/delivery-illustration.svg",
    imageAlt: "delivering data illustration",
    description:
      "You receive actionable business data prepared around your requirements and ready for outreach.",
  },
];

const images = [
  {
    src: "/aboutApproach/understand-illustration.svg",
    imageAlt: "segmentation illustration",
  },
  {
    src: "/aboutApproach/research-illustration.svg",
    imageAlt: "research illustration",
  },
  {
    src: "/aboutApproach/verify-illustration.svg",
    imageAlt: "data verification illustration",
  },
  {
    src: "/aboutApproach/structure-illustration.svg",
    imageAlt: "structuring data illustration",
  },
  {
    src: "/aboutApproach/delivery-illustration.svg",
    imageAlt: "delivering data illustration",
  },
];

export default function OurApproach() {
  const [activeStep, setActiveStep] = useState(0);
  const [allCompleted, setAllCompleted] = useState(false);
  const [isApproachVisible, setIsApproachVisible] = useState(false);
  const [playDirection, setPlayDirection] = useState(1);

  const active = processSteps[activeStep];

  const timerRef = useRef(null);
  const lastScrollY = useRef(0);

  const approachRef = useRef(null);

  // Viewport entry detector

  useEffect(() => {
    const section = approachRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsApproachVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Scroll direction detector
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current) {
        setPlayDirection(1);
      } else if (currentY < lastScrollY.current) {
        setPlayDirection(-1);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Automatically changes the steps
  useEffect(() => {
    if (!isApproachVisible) {
      clearTimeout(timerRef.current);
      return;
    }

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setActiveStep((prev) => {
        const nextStep = prev + playDirection;

        // Reached the beginning
        if (nextStep < 0) {
          setAllCompleted(false);
          return 0;
        }

        // Reached the end
        if (nextStep >= processSteps.length) {
          setAllCompleted(true);
          return processSteps.length - 1;
        }

        setAllCompleted(false);

        return nextStep;
      });
    }, 1200);

    return () => clearTimeout(timerRef.current);
  }, [isApproachVisible, playDirection, activeStep]);

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

          <h2 className="mt-5 text-2xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-3xl lg:text-4xl">
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
    rounded-[2.5rem]
    border border-gray-200/60
    bg-[#F8F9FA]
    p-4
    shadow-sm
    sm:mt-12 sm:p-8
    lg:mt-16 lg:p-10
  "
        >
          {/* Desktop navigation */}
          <div className="hidden grid-cols-5 items-center lg:grid">
            {processSteps.map((step, index) => {
              const isCompleted =
                activeStep > index ||
                (allCompleted && index === processSteps.length - 1);

              const isActive = activeStep === index;

              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Connecting progress line */}
                  {index !== processSteps.length - 1 && (
                    <span className="absolute left-1/2 top-4 z-0 h-0.5 w-full bg-gray-200">
                      <span
                        className={`block h-full bg-sky-500 transition-all duration-700 ease-out ${
                          isCompleted ? "w-full" : "w-0"
                        }`}
                      />
                    </span>
                  )}

                  {/* Active Capsule vs Step Circles */}
                  {isActive ? (
                    <div className="z-10 flex flex-col items-center">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white shadow-md shadow-sky-500/20">
                        <Check size={16} strokeWidth={3} />
                      </span>
                      <span className="mt-2.5 rounded-full border border-gray-200 bg-white px-5 py-1 text-xs font-semibold text-gray-900 shadow-sm">
                        {step.title}
                      </span>
                    </div>
                  ) : (
                    <div className="z-10 flex flex-col items-center">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                          isCompleted
                            ? "bg-sky-600 text-white"
                            : "border border-gray-300 bg-white text-gray-500 group-hover:border-gray-400 group-hover:text-gray-600"
                        }`}
                      >
                        {isCompleted ? (
                          <Check size={16} strokeWidth={2.5} />
                        ) : (
                          <span className="text-xs font-medium">
                            {step.number}
                          </span>
                        )}
                      </span>
                      <span
                        className={`mt-2.5 text-xs font-medium transition-colors duration-300 ${
                          isCompleted
                            ? "font-semibold text-gray-900"
                            : "text-gray-500 group-hover:text-gray-900"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile / tablet navigation */}
          <div className="-mx-1 overflow-hidden lg:hidden">
            <div
              className="
        flex gap-2 overflow-x-auto px-1 pb-2
        [scrollbar:none]
        [&::-webkit-scrollbar]:hidden
      "
            >
              {processSteps.map((step, index) => (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                    activeStep === index
                      ? "bg-black text-white shadow-sm"
                      : "border border-gray-200 bg-white text-gray-600"
                  }`}
                >
                  {step.number} {step.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active content card */}
          <div
            className="
      mt-6 grid gap-8
      rounded-3xl
      border border-gray-100
      bg-white
      p-6
      shadow-sm
      sm:mt-8 sm:p-10
      lg:mt-8 lg:min-h-80
      lg:grid-cols-[1fr_0.85fr]
      lg:items-center
    "
          >
            {/* Content */}
            <div className="flex flex-col justify-between h-full py-1">
              <div>
                <span className="text-xs font-medium tracking-wide text-gray-400 sm:text-sm">
                  {active.number} / 05
                </span>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                  {active.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
                  {active.description}
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={() =>
                    setActiveStep((activeStep + 1) % processSteps.length)
                  }
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-sky-600 transition-colors"
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
            </div>

            {/* Abstract visual container */}
            <div
              className="
        relative flex
        min-h-56
        items-center justify-center
        overflow-hidden
        rounded-2xl
        border border-gray-100
        bg-[#FAFAFA]
        p-4
        sm:min-h-64
      "
            >
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6">
                <Image
                  src={active.src}
                  alt={active.imageAlt}
                  fill
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

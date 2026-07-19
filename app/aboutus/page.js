"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  PackageCheck,
  Cpu,
  Users,
  MapPin,
} from "lucide-react";
import Image from "next/image";

/* -------------------------------------------------------------------------- */
/*                                  DATA                                      */
/* -------------------------------------------------------------------------- */

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

const capabilities = [
  "Pan-India business research",
  "Industry-specific datasets",
  "Decision-maker targeting",
  "Geographic segmentation",
  "Custom data requirements",
];

/* -------------------------------------------------------------------------- */
/*                                PAGE                                        */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-stone-950">
      <AboutHero />
      <WhyWeExist />
      <OurApproach />
      <OurPrinciples />
      <ReachCapabilities />
      <HumanExpertise />
      <FinalCTA />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                              01. HERO                                      */
/* -------------------------------------------------------------------------- */

function AboutHero() {
  return (
    <section className="relative">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-100/40 via-blue-100/40 to-cyan-100/40 blur-[100px]" />

      <div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center lg:px-10">
        <span className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
          About Leadwala
        </span>

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

/* -------------------------------------------------------------------------- */
/*                          02. WHY WE EXIST                                  */
/* -------------------------------------------------------------------------- */

function WhyWeExist() {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-36">
        {/* left */}
        <div>
          <div className="lg:sticky lg:top-32">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Why we exist
            </span>

            <h2 className="mt-6 max-w-md text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
              Business data shouldn&apos;t create more work.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-stone-600">
              The problem was never a lack of information. It was finding the
              information that actually matters.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="space-y-8">
          <div className="max-w-xl">
            <p className="text-xl leading-8 tracking-[-0.015em] text-stone-700 sm:text-2xl sm:leading-9">
              Too many businesses spend valuable time filtering outdated
              contacts, generic databases, and thousands of records before
              finding someone worth reaching.
            </p>
          </div>

          <div className="grid gap-5 pt-8 md:grid-cols-2">
            {/* old way */}
            <div className="rounded-3xl border border-stone-200 bg-white p-7 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                The old way
              </span>

              <div className="mt-8 space-y-5">
                {[
                  "Generic databases",
                  "Thousands of records",
                  "Manual filtering",
                  "Wasted outreach",
                ].map((item, index) => (
                  <FlowItem
                    key={item}
                    label={item}
                    last={index === 3}
                    muted
                  />
                ))}
              </div>
            </div>

            {/* our way */}
            <div className="rounded-3xl bg-stone-950 p-7 text-white shadow-xl sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                Our approach
              </span>

              <div className="mt-8 space-y-5">
                {[
                  "Your requirement",
                  "Targeted research",
                  "Verified data",
                  "Relevant opportunities",
                ].map((item, index) => (
                  <FlowItem key={item} label={item} last={index === 3} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowItem({ label, last, muted = false }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full ${
            muted
              ? "bg-stone-100 text-stone-400"
              : "bg-emerald-400 text-stone-950"
          }`}
        >
          <Check size={14} strokeWidth={2.5} />
        </span>

        <span className={muted ? "text-stone-500" : "text-stone-100"}>
          {label}
        </span>
      </div>

      {!last && (
        <div
          className={`ml-[13px] mt-1 h-5 w-px ${
            muted ? "bg-stone-200" : "bg-stone-700"
          }`}
        />
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                          03. OUR APPROACH                                  */
/* -------------------------------------------------------------------------- */

function OurApproach() {
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

/* -------------------------------------------------------------------------- */
/*                         04. OUR PRINCIPLES                                 */
/* -------------------------------------------------------------------------- */

function OurPrinciples() {
  return (
    <section className="bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
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

/* -------------------------------------------------------------------------- */
/*                       05. REACH & CAPABILITIES                             */
/* -------------------------------------------------------------------------- */

function ReachCapabilities() {
  const cities = [
    { name: "Delhi", left: "35%", top: "30%" },
    { name: "Bhopal", left: "35%", top: "46%" },
    { name: "Jaipur", left: "27%", top: "36%" },
    { name: "Mumbai", left: "23%", top: "58%" },
    { name: "Pune", left: "27%", top: "63%" },
    { name: "Bangalore", left: "37%", top: "75%" },
    { name: "Kolkata", left: "67%", top: "50%" },
  ];

  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* visual */}
          <div className="relative order-2 min-h-[460px] overflow-hidden rounded-[2rem] border border-stone-200 bg-white lg:order-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,.08),transparent_60%)]" />

<Image src="/map.webp" alt="Pan India Coverege"  fill  />
            {/* grid */}
            {/* <div
              className="absolute inset-0 opacity-[0.3]"
              style={{
                backgroundImage:
                  "linear-gradient(#e7e5e4 1px, transparent 1px), linear-gradient(90deg, #e7e5e4 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            /> */}

            {/* abstract India / reach shape */}

            {cities.map((city) => (
              <div
                key={city.name}
                className="absolute z-10"
                style={{ left: city.left, top: city.top }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-stone-400 opacity-70" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>

                <span className="absolute left-4 -top-1.25 whitespace-nowrap rounded-full border border-stone-200 bg-white px-2.5 py-1 text-[10px] font-medium shadow-sm">
                  {city.name}
                </span>
              </div>
            ))}

            <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-xs font-medium shadow-sm backdrop-blur">
              <MapPin size={13} />
              Pan-India coverage
            </div>
          </div>

          {/* content */}
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Our reach
            </span>

            <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Built around the market you&apos;re trying to reach.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-stone-600">
              From focused local requirements to broader market coverage, our
              research adapts to the audience, industry, and geography your
              business needs.
            </p>

            <div className="mt-10 border-t border-stone-200">
              {capabilities.map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center justify-between border-b border-stone-200 py-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-medium text-stone-400">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-stone-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-stone-950"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                         06. HUMAN EXPERTISE                                */
/* -------------------------------------------------------------------------- */

function HumanExpertise() {
  const nodes = [
    {
      icon: Cpu,
      label: "Technology",
      description: "Scale & organization",
    },
    {
      icon: Search,
      label: "Research",
      description: "Focused discovery",
    },
    {
      icon: Users,
      label: "Human Review",
      description: "Context & relevance",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Human + Technology
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Technology helps us scale.
            <br />
            <span className="text-stone-400">
              Human judgment keeps us relevant.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-7 text-stone-600">
            Research and technology work together to turn raw information into
            structured data businesses can actually use.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* desktop connection */}
          <div className="absolute left-[16%] right-[16%] top-9 hidden h-px bg-stone-200 md:block" />

          <div className="relative grid gap-5 md:grid-cols-3">
            {nodes.map((node) => {
              const Icon = node.icon;

              return (
                <div key={node.label} className="text-center">
                  <div className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-stone-200 bg-white shadow-sm">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-5 font-semibold">{node.label}</h3>

                  <p className="mt-1 text-sm text-stone-500">
                    {node.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-14 flex max-w-md items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-stone-300" />

            <ArrowDown size={16} className="text-stone-400" />

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-stone-300" />
          </div>

          <div className="mx-auto mt-6 max-w-md rounded-2xl bg-stone-950 p-6 text-center text-white shadow-xl">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-stone-950">
              <Check size={18} strokeWidth={2.5} />
            </div>

            <p className="mt-4 text-lg font-medium">Business-ready data</p>

            <p className="mt-1 text-sm text-stone-400">
              Structured around the people you need to reach.
            </p>
          </div>

          <p className="mx-auto mt-12 max-w-xl text-center text-lg leading-8 text-stone-700">
            Behind every dataset is a process —{" "}
            <span className="font-medium text-stone-950">
              not just an export button.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              07. CTA                                       */
/* -------------------------------------------------------------------------- */

function FinalCTA() {
  const openWhatsApp = () => {
    const phoneNumber = "919876543210";

    const message = encodeURIComponent(
      "Hi, I would like to connect with your back-office expert team regarding my data requirements."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="bg-white px-4 pb-8 sm:px-6 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-stone-950 px-6 py-20 text-center text-white sm:px-10 sm:py-24 lg:py-28">
        {/* glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-cyan-400/20 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Let&apos;s talk
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            You know your ideal customer.
            <br />
            <span className="text-stone-400">
              We&apos;ll help you find them.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-stone-400">
            Tell us the industry, location, company profile, or decision-makers
            you&apos;re trying to reach.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex min-w-[170px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get Custom Data
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <button
              onClick={openWhatsApp}
              className="group inline-flex min-w-[170px] cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Talk to an Expert
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
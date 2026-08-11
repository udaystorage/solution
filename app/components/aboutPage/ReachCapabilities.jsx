import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  // "Pan-India business research",
  {
    id: 1,
    name: "Pan-India business research",
    slug: "pan-india-business-research",
  },
  {
    id: 2,
    name: "Industry-specific datasets",
    slug: "industry-specific-datasets",
  },
  { id: 3, name: "Decision-maker targeting", slug: "decision-maker-targeting" },
  { id: 4, name: "Geographic segmentation", slug: "geographic-segmentation" },
  { id: 5, name: "Custom data requirements", slug: "custom-data" },
];

export default function ReachCapabilities() {
  const cities = [
    { name: "Delhi", left: "35%", top: "30%" },
    { name: "Bhopal", left: "35%", top: "46%" },
    { name: "Jaipur", left: "27%", top: "36%" },
    { name: "Mumbai", left: "23%", top: "58%" },
    { name: "Pune", left: "27%", top: "63%" },
    { name: "Bangalore", left: "37%", top: "75%" },
    { name: "VishakhaPatnam", left: "48%", top: "65%" },
    { name: "Kolkata", left: "67%", top: "50%" },
  ];

  return (
    <section className="bg-stone-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-30 lg:py-20">
      <div className="w-full lg:px-10 lg:py-36">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* visual */}
          {/* IMPORTANT: Map container and image behavior kept untouched */}
          <div className="relative order-2 min-h-[460px] overflow-hidden rounded-[2rem] border border-stone-200 bg-white lg:order-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,.08),transparent_60%)]" />

            <Image src="/map.webp" alt="Pan India Coverege" fill />

            {cities.map((city) => (
              <div
                key={city.name}
                className="absolute z-10"
                style={{
                  left: city.left,
                  top: city.top,
                }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-stone-400 opacity-75" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-600" />
                </span>

                <span className="absolute left-4 -top-1.25 whitespace-nowrap rounded-full border border-stone-200 bg-white px-2.5 py-1 text-[10px] font-medium shadow-sm inline-block origin-left animate-pulse-scale">
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
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200/60 bg-neutral-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black sm:text-[11px] lg:text-[12px]">
              Our reach
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-3xl lg:text-4xl">
              Built around the market you&apos;re trying to reach.
            </h2>

            {/* Description */}
            <p
              className="
            mt-5 max-w-lg
            text-[15px] leading-7
            text-stone-600
            sm:mt-6
            sm:text-base
          "
            >
              From focused local requirements to broader market coverage, our
              research adapts to the audience, industry, and geography your
              business needs.
            </p>

            {/* Capabilities */}
            <div className="mt-8 border-t border-stone-200 sm:mt-10">
              {capabilities.map((item, index) => (
                <Link
                  href={`/leadstore/${item.slug}`}
                  key={item.id}
                  className="
                group relative z-0
                flex items-center justify-between
                rounded-xl
                border-b border-stone-200
                px-2 py-4
                sm:px-3

                transition-[transform,background-color,box-shadow,border-color]
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]

                hover:z-20
                hover:-translate-y-1
                hover:scale-[1.025]
                hover:border-transparent
                hover:bg-white/90
                hover:shadow-[0_18px_45px_-15px_rgba(0,0,0,0.18)]
                hover:backdrop-blur-xl
              "
                >
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <span className="shrink-0 text-[9px] font-medium text-stone-400 sm:text-[10px]">
                      0{index + 1}
                    </span>

                    <span className="text-[13px] font-medium leading-5 sm:text-sm">
                      {item.name}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="
                  ml-3 shrink-0
                  text-stone-300
                  transition-all
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-stone-950
                "
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

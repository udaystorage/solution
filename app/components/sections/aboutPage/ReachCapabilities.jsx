import {ArrowUpRight,MapPin } from "lucide-react";
import Image from "next/image";

const capabilities = [
  "Pan-India business research",
  "Industry-specific datasets",
  "Decision-maker targeting",
  "Geographic segmentation",
  "Custom data requirements",
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
    <section className="bg-stone-50 px-30 py-20">
      <div className="w-full lg:px-10 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* visual */}
          <div className="relative order-2 min-h-[460px] overflow-hidden rounded-[2rem] border border-stone-200 bg-white lg:order-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,.08),transparent_60%)]" />

<Image src="/map.webp" alt="Pan India Coverege"  fill  />
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-semibold bg-neutral-100 text-black border border-neutral-200/60 uppercase tracking-wider">
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
className="
  group relative z-0
  flex items-center justify-between
  border-b border-stone-200
  px-3 py-4
  rounded-xl

  transition-[transform,background-color,box-shadow,border-color]
  duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

  hover:z-20
  hover:-translate-y-1
  hover:scale-[1.025]
  hover:bg-white/90
  hover:border-transparent
  hover:shadow-[0_18px_45px_-15px_rgba(0,0,0,0.18)]
  hover:backdrop-blur-xl
"                >
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
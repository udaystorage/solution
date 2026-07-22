import {ArrowUpRight,MapPin } from "lucide-react";
import Image from "next/image";

const capabilities = [
  // "Pan-India business research",
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
    <section className="overflow-hidden bg-stone-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-30 lg:py-20">
  <div className="w-full lg:px-10 lg:py-36">
    <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
      
      {/* Visual */}
      <div
        className="
          relative order-2
          min-h-[300px]
          overflow-hidden
          rounded-[1.5rem]
          border border-stone-200
          bg-white
          sm:min-h-[380px]
          sm:rounded-[2rem]
          md:min-h-[420px]
          lg:order-1
          lg:min-h-[460px]
        "
      >
        {/* Ambient background */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(120,119,198,.08),transparent_60%)]" />

        {/* Map */}
  <Image
  src="/map.webp"
  alt="Pan India Coverage"
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 50vw"
/>

        {/* City markers */}
        {cities.map((city) => (
          <div
            key={city.name}
            className="absolute z-10"
            style={{
              left: city.left,
              top: city.top,
            }}
          >
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-stone-400 opacity-70" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3" />
            </span>

            <span
              className="
                absolute -top-1
                left-3
                whitespace-nowrap
                rounded-full
                border border-stone-200
                bg-white/90
                px-2 py-0.5
                text-[8px] font-medium
                shadow-sm
                backdrop-blur-sm
                sm:-top-1.25
                sm:left-4
                sm:px-2.5 sm:py-1
                sm:text-[10px]
              "
            >
              {city.name}
            </span>
          </div>
        ))}

        {/* Coverage badge */}
        <div
          className="
            absolute bottom-4 left-4 z-20
            flex items-center gap-1.5
            rounded-full
            border border-stone-200
            bg-white/80
            px-3 py-1.5
            text-[10px] font-medium
            shadow-sm
            backdrop-blur
            sm:bottom-6 sm:left-6
            sm:gap-2 sm:px-4 sm:py-2
            sm:text-xs
          "
        >
          <MapPin size={13} />
          Pan-India coverage
        </div>
      </div>

      {/* Content */}
      <div className="order-1 lg:order-2">
        <span
          className="
            inline-flex items-center gap-1.5
            rounded-full
            border border-neutral-200/60
            bg-neutral-100
            px-3 py-1
            text-[11px] font-semibold
            uppercase tracking-wider
            text-black
            sm:text-[13px]
          "
        >
          Our reach
        </span>

        <h2
          className="
            mt-5 max-w-lg
            text-[2rem] font-semibold
            leading-[1.08]
            tracking-[-0.035em]
            sm:text-4xl
            lg:text-5xl
          "
        >
          Built around the market you&apos;re trying to reach.
        </h2>

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
            <div
              key={item}
              className="
                group relative z-0
                flex items-center justify-between
                border-b border-stone-200
                px-2 py-4
                sm:px-3
                sm:py-4

                transition-[transform,background-color,box-shadow,border-color]
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]

                sm:hover:z-20
                sm:hover:-translate-y-1
                sm:hover:scale-[1.025]
                sm:hover:rounded-xl
                sm:hover:border-transparent
                sm:hover:bg-white/90
                sm:hover:shadow-[0_18px_45px_-15px_rgba(0,0,0,0.18)]
                sm:hover:backdrop-blur-xl
              "
            >
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <span className="shrink-0 text-[9px] font-medium text-stone-400 sm:text-[10px]">
                  0{index + 1}
                </span>

                <span className="text-[13px] font-medium leading-5 sm:text-sm">
                  {item}
                </span>
              </div>

              <ArrowUpRight
                size={15}
                className="
                  ml-3 shrink-0
                  text-stone-300
                  transition-all duration-300
                  sm:group-hover:-translate-y-0.5
                  sm:group-hover:translate-x-0.5
                  sm:group-hover:text-stone-950
                "
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
import Link from "next/link";
import {
  BadgeCheck,
  Database,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Verified data",
    description: "Built around accuracy and relevance.",
  },
  {
    icon: Database,
    title: "Purpose-built datasets",
    description: "Data selected for focused outreach.",
  },
  {
    icon: ShieldCheck,
    title: "Secure account access",
    description: "Your account and purchases in one place.",
  },
];

export default function AuthShell({
  eyebrow,
  title,
  gradientText,
  description,
  children,
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FCFCFB] pt-18">
      {/* Ambient brand lighting */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 top-32
          h-96 w-96 rounded-full
          bg-violet-400/10
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[-8rem] top-28
          h-[30rem] w-[30rem] rounded-full
          bg-cyan-300/10
          blur-[130px]
        "
      />

      <section
        aria-labelledby="auth-heading"
        className="
          relative mx-auto
          grid min-h-[calc(100vh-4.5rem)]
          w-full max-w-7xl
          items-center gap-12
          px-6 py-12
          lg:grid-cols-[0.9fr_1.1fr]
          lg:px-10
          xl:gap-20
        "
      >
        {/* Brand / Trust Column */}
        <div className="hidden lg:block">
          <div className="max-w-lg">
            <p
              className="
                mb-5 text-xs font-semibold uppercase
                tracking-[0.18em] text-slate-500
              "
            >
              {eyebrow}
            </p>

            <h1
              id="auth-heading"
              className="
                text-5xl font-semibold
                leading-[1.05]
                tracking-[-0.045em]
                text-neutral-950
                xl:text-6xl
              "
            >
              {title}

              <span
                className="
                  mt-2 block
                  bg-gradient-to-r
                  from-violet-500
                  via-blue-500
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                "
              >
                {gradientText}
              </span>
            </h1>

            <p
              className="
                mt-7 max-w-md
                text-base leading-7
                text-neutral-600
              "
            >
              {description}
            </p>

            {/* Trust Points */}
            <div className="mt-10 space-y-3">
              {trustPoints.map((trustPoint) => {
                const Icon = trustPoint.icon;

                return (
                  <div
                    key={trustPoint.title}
                    className="
                      group flex max-w-md items-center gap-4
                      rounded-2xl
                      border border-neutral-200/70
                      bg-white/60
                      px-4 py-3.5
                      backdrop-blur-sm
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-white/90
                      hover:shadow-[0_10px_35px_rgba(15,23,42,0.06)]
                    "
                  >
                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-xl
                        border border-neutral-200
                        bg-white
                      "
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-4.5 w-4.5 text-neutral-800"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-950">
                        {trustPoint.title}
                      </p>

                      <p className="mt-0.5 text-xs leading-5 text-neutral-500">
                        {trustPoint.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Small Brand Detail */}
            <div className="mt-9 flex items-center gap-2 text-xs text-neutral-500">
              <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />

              <span>
                Premium data for teams that value precision over volume.
              </span>
            </div>
          </div>
        </div>

        {/* Authentication Form Area */}
        <div className="flex w-full justify-center lg:justify-end">
          <div className="w-full max-w-[520px]">
            {/* Mobile branding */}
            <div className="mb-8 lg:hidden">
              <p
                className="
                  mb-3 text-xs font-semibold uppercase
                  tracking-[0.16em] text-slate-500
                "
              >
                {eyebrow}
              </p>

              <h1
                id="auth-heading-mobile"
                className="
                  text-3xl font-semibold
                  tracking-[-0.035em]
                  text-neutral-950
                  sm:text-4xl
                "
              >
                {title}{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-violet-500
                    via-blue-500
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  {gradientText}
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-600">
                {description}
              </p>
            </div>

            {/* Gradient Border */}
            <div
              className="
                rounded-[2rem]
                bg-gradient-to-br
                from-violet-400/60
                via-blue-400/35
                to-cyan-400/60
                p-px
                shadow-[0_24px_80px_rgba(15,23,42,0.08)]
              "
            >
              <div
                className="
                  rounded-[calc(2rem-1px)]
                  bg-white/95
                  p-6
                  backdrop-blur-xl
                  sm:p-8
                  lg:p-9
                "
              >
                {children}
              </div>
            </div>

            <p
              className="
                mt-5 text-center
                text-xs leading-5
                text-neutral-400
              "
            >
              By continuing, you acknowledge Leadwala&apos;s{" "}
              <Link
                href="/terms"
                className="text-neutral-600 underline-offset-4 hover:underline"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-neutral-600 underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
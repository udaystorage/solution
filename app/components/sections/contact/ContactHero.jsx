export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-page-heading"
      className="
        px-4 pb-14 pt-20
        sm:px-6 sm:pb-16 sm:pt-24
        lg:px-10 lg:pb-20 lg:pt-28
      "
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}
          <p
            className="
              mb-5
              text-xs font-semibold uppercase
              tracking-[0.16em]
              text-violet-600
            "
          >
            Contact us
          </p>

          {/* Primary page heading */}
          <h1
            id="contact-page-heading"
            className="
              text-4xl font-semibold
              leading-[1.04]
              tracking-[-0.045em]
              text-slate-950
              sm:text-5xl
              lg:text-[64px]
            "
          >
            Have an audience
            <br className="hidden sm:block" /> in mind?

            <span
              className="
                mt-1 block
                bg-linear-to-r
                from-violet-600
                to-cyan-500
                bg-clip-text
                text-transparent
              "
            >
              Tell us who.
            </span>
          </h1>

          {/* Supporting copy */}
          <p
            className="
              mx-auto mt-6
              max-w-xl
              text-base leading-7
              text-slate-600
              sm:text-lg
            "
          >
            Share the market or audience you&apos;re trying to reach.
            We&apos;ll check what&apos;s available and help you find the
            right data.
          </p>

        </div>
      </div>
    </section>
  );
}
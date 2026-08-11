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
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* Primary page heading */}
          <h1
            id="contact-page-heading"
            className="
              text-3xl font-semibold
              leading-[1.04]
              text-slate-950
              sm:text-4xl
              lg:text-5xl
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
            Share the target audience you&apos;re trying to reach.
            We&apos;ll check what&apos;s available and help you find the
            right data.
          </p>

        </div>
      </div>
    </section>
  );
}
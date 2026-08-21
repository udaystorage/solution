export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-page-heading"
      className="
       px-5 mt-24 md:mt-32 pb-10 md:pb-14
      "
    >
      <div className="mx-auto max-w-6xl flex flex-col justify-center text-center overflow-visible">
          {/* Primary page heading */}
          <h1
            id="contact-page-heading"
            className="max-w-3xl mx-auto
            hero-heading
            "
          >
            Have an audience
            <br className="hidden sm:block" /> in mind?
            <span
              className="
               block
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
              mx-auto hero-subheading
            "
          >
            Share the target audience you&apos;re trying to reach. We&apos;ll
            check what&apos;s available and help you find the right data.
          </p>
      </div>
    </section>
  );
}

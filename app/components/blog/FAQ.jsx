export default function FAQ({items}) {
  if (!items?.length) return null;

  return (
    <section
      id="faq"
      className="mt-16 border-t border-neutral-200 pt-12"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
          Frequently Asked Questions
        </p>

        <h2
          id="faq-heading"
          className="mt-3 text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl"
        >
          Questions you may have
        </h2>

        <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
          {items.map((item, index) => (
            <details
              key={`${item.question}-${index}`}
              className="group"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-medium text-neutral-900 marker:hidden">
                <span>{item.question}</span>

                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-lg font-light text-neutral-500 transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="pb-5 pr-12 text-sm leading-7 text-neutral-600">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
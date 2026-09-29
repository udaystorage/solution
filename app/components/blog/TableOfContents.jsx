export default function TableOfContents({ headings }) {
  if (!headings?.length) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-stone-200 bg-stone-50 p-6"
    >
      <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-500">
        Table of Contents
      </h2>

      <ol className="mt-4 space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={
                heading.level === 3
                  ? "block pl-4 text-sm leading-6 text-stone-500 transition-colors hover:text-stone-900"
                  : "block text-sm leading-6 font-medium text-stone-700 transition-colors hover:text-stone-900"
              }
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
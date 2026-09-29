import { ArrowRight } from "lucide-react";

export default function TableOfContents({ headings }) {
  if (!headings?.length) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-stone-200 bg-stone-50 p-6"
    >
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-600">
        Table of Contents
      </h2>

      <ol className="mt-4 space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={
                heading.level === 3
                  ? "group flex items-center justify-between gap-3 pl-4 text-sm leading-6 text-stone-500 transition-colors hover:text-stone-900 focus-visible:text-stone-900"
                  : "group flex items-center justify-between gap-3 text-sm font-medium leading-6 text-stone-700 transition-colors hover:text-stone-900 focus-visible:text-stone-900"
              }
            >
              <span>{heading.text}</span>

              <ArrowRight
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-1.5 group-hover:opacity-60 group-focus-visible:opacity-60"
              />
            </a>
          </li>
        ))}
        <a href="#faq" className="group flex items-center justify-between gap-3 text-sm font-medium leading-6 text-stone-700 transition-colors hover:text-stone-900 focus-visible:text-stone-900">
          <span>FAQ</span>

          <ArrowRight
            aria-hidden="true"
            className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-1.5 group-hover:opacity-60 group-focus-visible:opacity-60"
          />
        </a>
      </ol>
    </nav>
  );
}

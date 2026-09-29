import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity/image";
import { getHeadingId } from "@/lib/blog/headings"

const components = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 leading-8 text-neutral-700">
        {children}
      </p>
    ),

   h2: ({ children, value }) => (
  <h2
    id={getHeadingId(value)}
    className="mb-5 mt-12 scroll-mt-28 text-2xl font-semibold tracking-tight text-neutral-900"
  >
    {children}
  </h2>
),

   h3: ({ children, value }) => (
  <h3
    id={getHeadingId(value)}
    className="mb-4 mt-8 scroll-mt-28 text-xl font-semibold text-neutral-900"
  >
    {children}
  </h3>
),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-neutral-700">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-neutral-700">
        {children}
      </ol>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-neutral-900">
        {children}
      </strong>
    ),

    em: ({ children }) => <em>{children}</em>,

    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4"
      >
        {children}
      </a>
    ),
  },

  types: {
    imageBlock: ({ value }) => {
      if (!value?.asset) return null;

      return (
        <figure className="my-10">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ""}
            width={1200}
            height={675}
            className="h-auto w-full rounded-2xl"
          />

          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-neutral-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    tableBlock: ({ value }) => (
      <div className="my-10 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          {value.caption && (
            <caption className="mb-3 text-left text-sm font-medium text-neutral-900">
              {value.caption}
            </caption>
          )}

          <thead>
            <tr>
              {value.headers?.map((header, index) => (
                <th
                  key={index}
                  className="border-b px-4 py-3 font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {value.rows?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.cells?.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border-b px-4 py-3 text-neutral-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),

    checklistBlock: ({ value }) => (
      <div className="my-8 rounded-xl border p-6">
        {value.title && (
          <h3 className="mb-4 text-lg font-semibold text-neutral-900">
            {value.title}
          </h3>
        )}

        <ul className="space-y-3">
          {value.items?.map((item, index) => (
            <li key={index} className="flex gap-3 text-neutral-700">
              <span aria-hidden="true">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
};

export default function PortableTextRenderer({ value }) {
  if (!value?.length) return null;

  return (
    <div className="prose prose-neutral max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
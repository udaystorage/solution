import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity/image";
import { getHeadingId } from "@/lib/blog/headings";
import { h4 } from "framer-motion/client";

const components = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 leading-8 text-neutral-700">{children}</p>
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

    h4: ({ children }) => (
      <h4 className="mb-3 mt-4 scroll-mt-28 text-lg font-semibold text-neutral-900">
        {children}
      </h4>
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
      <strong className="font-semibold text-neutral-900">{children}</strong>
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
      console.log("IMAGE BLOCK VALUE:", value);
      if (!value?.asset) return null;

      return (
        <figure className="my-10">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ""}
            width={1200}
            height={675}
            unoptimized
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
      <figure className="my-10">
        {value.caption && (
          <figcaption className="mb-4 text-sm font-medium text-neutral-900">
            {value.caption}
          </figcaption>
        )}

        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50/70">
                  {value.headers?.map((header, index) => (
                    <th
                      key={index}
                      className="border-r border-neutral-200 px-5 py-4 text-sm font-semibold text-neutral-900 last:border-r-0"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {value.rows?.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-neutral-100 last:border-b-0"
                  >
                    {Array.from({
                      length: value.headers?.length || 0,
                    }).map((_, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border-r border-neutral-200 px-5 py-4 text-sm leading-6 text-neutral-600 last:border-r-0"
                      >
                        {row.cells?.[cellIndex] || ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </figure>
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
              <span className="text-green-500" aria-hidden="true">
                ✓
              </span>
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

import { getBlockText, slugify } from "./headings";

export function extractHeadings(body) {
  if (!Array.isArray(body)) return [];

  const usedIds = new Set();

  return body
    .filter(
      (block) =>
        block?._type === "block" &&
        (block.style === "h2" || block.style === "h3")
    )
    .map((block) => {
      const text = getBlockText(block);
      const baseSlug = slugify(text);

      let id = `${baseSlug}-${block._key}`;

      // Safety against duplicate IDs
      let counter = 2;
      while (usedIds.has(id)) {
        id = `${baseSlug}-${block._key}-${counter}`;
        counter++;
      }

      usedIds.add(id);

      return {
        id,
        text,
        level: block.style === "h2" ? 2 : 3,
      };
    })
    .filter((heading) => heading.text);
}
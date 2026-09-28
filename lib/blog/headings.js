export function getBlockText(block) {
  if (!block?.children) return "";

  return block.children
    .map((child) => child.text || "")
    .join("")
    .trim();
}

export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getHeadingId(block) {
  const text = getBlockText(block);
  const slug = slugify(text);

  if (!slug) {
    return `heading-${block?._key || "section"}`;
  }

  // _key keeps duplicate headings unique
  return `${slug}-${block?._key || "section"}`;
}
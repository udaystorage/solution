import { notFound } from "next/navigation";
import Image from "next/image";
import BlogWhatsappBtn from "@/app/components/ui/BlogWhatsappBtn";
import { promises as fs } from "fs";
import path from "path";
 
const BLOG_DIR = path.join(process.cwd(), "data", "blog");

// Some older/raw content has bullet points typed inline inside a single
// paragraph string, e.g. "May include: • Item one • Item two • Item three"
// instead of being stored as a proper list block. This detects that pattern
// and splits it into an optional intro sentence + real list items.
function extractInlineBulletList(text) {
  if (!text || !text.includes("•")) return null;

  const parts = text
    .split("•")
    .map((p) => p.trim())
    .filter(Boolean);

  // Need at least 2 bullet-separated chunks to treat this as a list
  if (parts.length < 2) return null;

  const [intro, ...items] = parts;
  return { intro, items };
}

// Turns a paragraph textarea's raw text into an array of blocks.
// Lines starting with "- ", "* ", or "• " become a list block.
// Everything else becomes a paragraph block.
function parseParagraphBlocks(text) {
  const lines = text.split("\n");
  const blocks = [];
  let currentList = null;
  let currentParagraph = [];

  const flushParagraph = () => {
    const joined = currentParagraph.join(" ").trim();
    if (joined) blocks.push({ type: "paragraph", text: joined });
    currentParagraph = [];
  };

  const flushList = () => {
    if (currentList && currentList.length) {
      blocks.push({ type: "list", items: currentList });
    }
    currentList = null;
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    const bulletMatch = trimmed.match(/^[-*•]\s+(.*)/);

    if (bulletMatch) {
      flushParagraph();
      if (!currentList) currentList = [];
      currentList.push(bulletMatch[1]);
    } else if (trimmed === "") {
      flushParagraph();
      flushList();
    } else {
      flushList();
      currentParagraph.push(trimmed);
    }
  });

  flushParagraph();
  flushList();
  return blocks;
}
 
/**
 * Reads every .json file in a directory and returns their parsed
 * contents merged into a single array.
 *
 * @param {string} dirPath - Absolute path to the directory to read.
 * @returns {Promise<Array>} Combined array of all JSON file contents.
 */
export async function getJsonFilesAsArray(dirPath = BLOG_DIR) {
  try {
    const files = await fs.readdir(dirPath);
    const jsonFiles = files.filter((file) => file.endsWith(".json"));
 
    const items = await Promise.all(
      jsonFiles.map(async (file) => {
        const filePath = path.join(dirPath, file);
        const raw = await fs.readFile(filePath, "utf-8");
        return JSON.parse(raw);
      })
    );
 
    return items;
  } catch (err) {
    // Directory doesn't exist yet -> return an empty array instead of throwing
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

const blogs = await getJsonFilesAsArray();

/**
 * 1. SSG PRE-RENDERING PARAMETERS
 */
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

/**
 * 2. DYNAMIC SEO METADATA INJECTION
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) return {};

  const cleanImageUrl = blog.image?.startsWith("http")
    ? blog.image
    : `https://leadwala.com${blog.image || "/demoBlog.webp"}`;
    
    const isoDate = new Date(blog.date).toISOString();
    
  return {
    title: `${blog.title} | Leadwala Insights`,
    description: blog.description?.substring(0, 160) || "Read the latest digital insights on Leadwala.",
    alternates: {
      canonical: `https://leadwala.com/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://leadwala.com/blog/${slug}`,
      siteName: "Leadwala",
      type: "article",
      publishedTime: isoDate,
      modifiedTime: isoDate,
      authors: ["Leadwala"],
      images: [
        {
          url: cleanImageUrl,
          width: 1200,
          height: 680,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [cleanImageUrl],
    },
  };
}




export default async function BlogPage({ params }) {


  
   
  const { slug } = await params;
  
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const isoDate = new Date(blog.date).toISOString();

  /**
   * 3. INLINE STRUCURED DATA PIPELINE (JSON-LD)
   */
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.description,
    "datePublished": isoDate,
    "dateModified": isoDate,
    "image": blog.image?.startsWith("http") ? blog.image : `https://leadwala.com${blog.image || "/demoBlog.webp"}`,
    "author": {
      "@type": "Organization",
      "name": "Leadwala",
      "url": "https://leadwala.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Leadwala",
      "logo": {
        "@type": "ImageObject",
        "url": "https://leadwala.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://leadwala.com/blog/${slug}`
    }
  };

  return (
    <>
      {/* Schema Injection Node */}
      <script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <main className="min-h-screen relative overflow-hidden text-stone-900 selection:bg-emerald-100">
        {/* Ambient Glow Containers */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-full bg-linear-to-b from-indigo-500/5 via-slate-400/0 to-transparent blur-[120px]"></div>
          <div className="absolute top-[5%] left-[-10%] w-[50%] h-[40%] rounded-full bg-radial from-emerald-400/5 via-transparent to-transparent blur-[100px]"></div>
          <div className="absolute top-[2%] right-[-10%] w-[40%] h-[40%] rounded-full bg-radial from-stone-300/10 via-transparent to-transparent blur-[90px]"></div>
          <div className="absolute inset-0 backdrop-blur-[80px]" />
        </div>

        {/* Global Article Element Boundary Context Wrap */}
        <article className="relative z-10 mx-auto max-w-4xl px-6 py-24">
          
          {/* Header Segment */}
          <header className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm font-medium tracking-wide uppercase text-stone-500">
              <time dateTime={isoDate.split('T')[0]}>{blog.date}</time>
              <span className="text-stone-300" aria-hidden="true">•</span>
              <span className="text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold">
                {blog.readTime}
              </span>
            </div>

            <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-stone-950 font-semibold">
              {blog.title}
            </h1>

            <p className="mt-4 italic max-w-3xl text-xl font-light leading-relaxed text-stone-600 border-l-2 border-emerald-700/30 pl-6">
              {blog.description}
            </p>
          </header>

          {/* Media Element Block */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-stone-200 shadow-xl shadow-stone-950/5">
            <Image
              src={blog.image || "/demoBlog.webp"}
              alt={`${blog.title} overview image`}
              width={1200}
              height={680}
              className="w-full h-112.5 object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
              priority
            />
          </div>

          {/* Content Distribution Architecture */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Content Body Column */}
            <div className="lg:col-span-8 space-y-12">
              <p className="text-lg leading-relaxed text-stone-700 font-medium">
                {blog.content?.introduction}
              </p>

              {blog.content?.sections?.map((section, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight text-stone-900 pt-4">
                    {section.heading}
                  </h2>

                  {section.brief && (
                    <p className="text-stone-500 italic font-medium text-base">
                      {section.brief}
                    </p>
                  )}

                  {section.paragraphs?.map((block, pIdx) => {
                    // Backward compatibility: older posts may have saved
                    // paragraphs as plain strings instead of block objects.
                    if (typeof block === "string") {
                      return (
                        <p
                          key={pIdx}
                          className="text-stone-600 leading-relaxed text-base antialiased"
                        >
                          {block}
                        </p>
                      );
                    }

                    if (block?.type === "list") {
                      return (
                        <ul
                          key={pIdx}
                          className="list-disc pl-6 space-y-1.5 text-stone-600 leading-relaxed text-base antialiased"
                        >
                          {block.items?.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      );
                    }

                    const inlineList = extractInlineBulletList(block?.text);

                    if (inlineList) {
                      return (
                        <div key={pIdx} className="space-y-3">
                          {inlineList.intro && (
                            <p className="text-stone-600 leading-relaxed text-base antialiased">
                              {inlineList.intro}
                            </p>
                          )}
                          <ul className="list-disc pl-6 space-y-1.5 text-stone-600 leading-relaxed text-base antialiased">
                            {inlineList.items.map((item, itemIdx) => (
                              <li key={itemIdx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    }

                    return (
                      <p
                        key={pIdx}
                        className="text-stone-600 leading-relaxed text-base antialiased"
                      >
                        {block?.text}
                      </p>
                    );
                  })}
                </section>
              ))}

              {blog.content?.takeaway && (
                <aside 
                  className="relative mt-12 p-8 rounded-2xl bg-linear-to-br from-stone-900 to-slate-950 text-stone-100 shadow-xl overflow-hidden group"
                  aria-label="Article Summary Key Takeaway"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" aria-hidden="true" />
                  <h3 className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
                    Key Takeaway
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-stone-200 font-light">
                    {blog.content.takeaway}
                  </p>
                </aside>
              )}
            </div>

            {/* Sidebar Sticky Panel Area */}
            <aside className="lg:col-span-4 lg:sticky lg:top-8 bg-stone-100/80 border border-stone-200/60 rounded-2xl p-6 backdrop-blur-md shadow-sm">
              <h3 className="text-sm font-semibold tracking-wider text-stone-900 border-b border-stone-200 pb-3">
                Executive Highlights
              </h3>

              <ul className="mt-4 space-y-4 list-none">
                {blog.content?.highlights?.map((highlight, index) => (
                  <li key={index} className="flex gap-3 items-start text-sm text-stone-600">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2" aria-hidden="true" />
                    <span className="leading-tight font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-stone-200 text-center">
                <BlogWhatsappBtn />
              </div>
            </aside>
            
          </div>
        </article>
      </main>
    </>
  );
}
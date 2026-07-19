import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import BlogWhatsappBtn from "@/app/components/ui/BlogWhatsappBtn";

/**
 * 1. DYNAMIC ROUTE GENERATION (SSG optimization)
 */
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

/**
 * 2. DYNAMIC SEO METADATA BUILDER
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) return {};

  const cleanImageUrl = blog.image?.startsWith("http") 
    ? blog.image 
    : `https://leadwala.com${blog.image || "/demoBlog.webp"}`;

  return {
    title: `${blog.title} | Leadwala Insights`,
    description: blog.description?.substring(0, 160) || "Read the latest digital marketing insights on Leadwala.",
    alternates: {
      canonical: `https://leadwala.com/blog/${slug}`,
    },
    // Explicitly telling search engines to index and follow links on this specific post
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
      publishedTime: new Date(blog.date).toISOString(),
      modifiedTime: new Date(blog.date).toISOString(), // Added for content freshness signals
      authors: ["Leadwala"], // Added author array for OG
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
   * 3. INDIVIDUAL ARTICLE RICH SNIPPET SCHEMA
   */
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.description,
    "datePublished": isoDate,
    "dateModified": isoDate, // Crucial for passing Google's Rich Results Test completely
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
      {/* Schema Injection Node - Added an ID so React reconciles it properly on route changes */}
      <script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <main className="min-h-screen bg-[#F7F6F2] relative overflow-hidden text-stone-900 selection:bg-emerald-100">
        
        {/* Decorative Ambient Effects Container */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-full bg-linear-to-b from-indigo-500/5 via-slate-400/0 to-transparent blur-[120px]"></div>
          <div className="absolute top-[5%] left-[-10%] w-[50%] h-[40%] rounded-full bg-radial from-emerald-400/5 via-transparent to-transparent blur-[100px]"></div>
          <div className="absolute top-[2%] right-[-10%] w-[40%] h-[40%] rounded-full bg-radial from-stone-300/10 via-transparent to-transparent blur-[90px]"></div>
          <div className="absolute inset-0 backdrop-blur-[80px]" />
        </div>

        {/* COMPREHENSIVE SEMANTIC STRUCTURE SCHEME CONTAINER */}
        <article className="relative z-10 mx-auto max-w-4xl px-6 py-24">
          
          {/* Metadata Top Header Deck */}
          <header className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm font-medium tracking-wide uppercase text-stone-500">
              {/* Used split to ensure only the date part shows visually, while keeping the full ISO format in dateTime */}
              <time dateTime={isoDate.split('T')[0]}>{blog.date}</time>
              <span className="text-stone-300" aria-hidden="true">•</span>
              <span className="text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold">
                {blog.readTime}
              </span>
            </div>

            {/* Main Primary Heading Vector */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-stone-950 font-semibold">
              {blog.title}
            </h1>

            {/* Subheading / Abstract Element Map */}
            <p className="mt-2 max-w-3xl text-xl font-light leading-relaxed text-stone-600 border-l-2 border-emerald-700/30 pl-6">
              {blog.description}
            </p>
          </header>

          {/* Hero Featured Media Canvas Wrapper */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-stone-200 shadow-xl shadow-stone-950/5 bg-neutral-100">
            <Image
              src={blog.image || "/demoBlog.webp"} 
              alt={`${blog.title} cover image`} // Simplified alt text for better accessibility and SEO
              width={1200}
              height={680}
              className="w-full h-112.5 object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
              priority
            />
          </div>

          {/* Main Layout Presentation Interface Split */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Core Body Context Segment Block */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Context Summary / Lead Paragraph */}
              {blog.content?.introduction && (
                <p className="text-lg leading-relaxed text-stone-700 font-medium">
                  {blog.content.introduction}
                </p>
              )}

              {/* Sequential Custom Node Sections Iteration Engine */}
              {blog.content?.sections?.map((section, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold tracking-tight text-stone-900 pt-4">
                    {section.heading}
                  </h2>

                  {section.brief && (
                    <p className="text-stone-500 italic font-medium text-base">
                      {section.brief}
                    </p>
                  )}

                  {section.paragraphs?.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-stone-600 leading-relaxed text-base antialiased"
                    >
                      {para}
                    </p>
                  ))}
                </section>
              ))}

              {/* Standout Insight Callout Takeaway Block */}
              {blog.content?.takeaway && (
                <aside 
                  className="relative mt-12 p-8 rounded-2xl bg-linear-to-br from-stone-900 to-slate-950 text-stone-100 shadow-xl overflow-hidden group"
                  aria-label="Important Insight Takeaway Summary"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" aria-hidden="true" />
                  <h3 className="font-serif text-xs font-semibold tracking-widest text-emerald-400 uppercase">
                    Key Takeaway
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-stone-200 font-light">
                    {blog.content.takeaway}
                  </p>
                </aside>
              )}
            </div>

            {/* Right Side Sticky Navigation Panel Layout */}
            <aside className="lg:col-span-4 lg:sticky lg:top-8 bg-stone-100/80 border border-stone-200/60 rounded-2xl p-6 backdrop-blur-md shadow-sm">
              <h3 className="font-serif text-sm font-semibold tracking-wider text-stone-900 border-b border-stone-200 pb-3">
                Executive Highlights
              </h3>

              {blog.content?.highlights && (
                <ul className="mt-4 space-y-4 list-none">
                  {blog.content.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex gap-3 items-start text-sm text-stone-600"
                    >
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2" aria-hidden="true" />
                      <span className="leading-tight font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Conversion Interactivity Hub Node */}
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
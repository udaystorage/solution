import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import BlogWhatsappBtn from "@/app/components/ui/BlogWhatsappBtn";
import Link from "next/link";
import BreadCrumbSchema from "@/app/components/seo/BreadCrumbSchema";

import { getAllPosts, getPostBySlug } from "@/lib/sanity/queries";
import PortableTextRenderer from "@/app/components/blog/PortableTextRenderer";
import { extractHeadings } from "@/lib/blog/toc";
import TableOfContents from "@/app/components/blog/TableOfContents";
import FAQ from "@/app/components/blog/FAQ";


const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

//  1. SSG PRE-RENDERING PARAMETERS
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. DYNAMIC SEO METADATA INJECTION
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = await getPostBySlug(slug);

  if (!blog) return {};

  const cleanImageUrl = blog.image?.startsWith("http")
    ? blog.image
    : `${baseUrl}${blog.image || "/demoBlog.webp"}`;

  const isoDate = new Date(blog.publishedAt).toISOString();

  return {
    title: `${blog.title} | Datatreasure Insights`,
    description:
      blog.description?.substring(0, 160) ||
      "Read the latest digital insights on Datatreasure.",
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
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
      url: `${baseUrl}/blog/${slug}`,
      siteName: "Datatreasure",
      type: "article",
      publishedTime: isoDate,
      modifiedTime: isoDate,
      authors: ["Datatreasure"],
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

  const blog = await getPostBySlug(slug);
  console.log("SANITY IMAGE URL:", urlFor(blog.coverImage).width(1200).url());

  if (!blog) {
    notFound();
  }

  const headings = extractHeadings(blog.body);
  const isoDate = new Date(blog.publishedAt).toISOString();

  // 3. INLINE STRUCURED DATA PIPELINE (JSON-LD)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    datePublished: isoDate,
    dateModified: isoDate,
    image: blog.image?.startsWith("http")
      ? blog.image
      : `${baseUrl}${blog.image || "/demoBlog.webp"}`,
    author: {
      "@type": "Organization",
      name: "Datatreasure",
      url: `${baseUrl}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Datatreasure",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`,
    },
  };

  return (
    <>
      {/* Schema Injection Node */}
      <script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <BreadCrumbSchema
        items={[
          {
            name: "Home",
            url: `${baseUrl}`,
          },
          {
            name: "Blog",
            url: `${baseUrl}/blog`,
          },
          {
            name: blog.title,
            url: `${baseUrl}/blog/${slug}`,
          },
        ]}
      />

      <main className="min-h-screen relative overflow-hidden text-stone-900 selection:bg-emerald-100">
        {/* Ambient Glow Containers */}
        <div
          className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-full bg-linear-to-b from-indigo-500/5 via-slate-400/0 to-transparent blur-[120px]"></div>
          <div className="absolute top-[5%] left-[-10%] w-[50%] h-[40%] rounded-full bg-radial from-emerald-400/5 via-transparent to-transparent blur-[100px]"></div>
          <div className="absolute top-[2%] right-[-10%] w-[40%] h-[40%] rounded-full bg-radial from-stone-300/10 via-transparent to-transparent blur-[90px]"></div>
          <div className="absolute inset-0 backdrop-blur-[80px]" />
        </div>

        {/* Global Article Element Boundary Context Wrap */}
        <article className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 md:px-8 py-18 sm:py-24">
          {/* Header Segment */}
          <header className="flex flex-col gap-4">
            <div className="flex justify-between items-center gap-3 text-[10px] sm:text-xs font-medium tracking-wide uppercase text-stone-500">
              <Link
                href="/blog"
                className="inline-flex w-fit items-center gap-2 text-stone-500 transition hover:text-emerald-700"
              >
                <ArrowLeft className="size-2.5 sm:size-3" />
                Back to Blog
              </Link>
              <div>
                <time dateTime={isoDate.split("T")[0]}>
                  {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span
                  className="text-stone-300 ml-1 sm:ml-2"
                  aria-hidden="true"
                >
                  •
                </span>
                <span className="text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold ml-1 sm:ml-2">
                  {blog.readTime}
                </span>
              </div>
            </div>

            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl tracking-[0.15] lg:leading-[1.1] text-stone-950 font-semibold">
              {blog.title}
            </h1>

            <p className="mt-0 md:mt-3 italic max-w-3xl text-md md:text-lg lg:text-[18px] font-light leading-relaxed text-stone-600 border-l-2 border-emerald-700/30 pl-4 sm:pl-5 md:pl-6">
              {blog.excerpt}
            </p>
          </header>

          {/* Media Element Block */}
          <div className="mt-8 sm:mt-10 md:mt-12 overflow-hidden rounded-3xl border border-stone-200 shadow-xl shadow-stone-950/5">
            <Image
              src={urlFor(blog.coverImage).width(1200).url()}
              alt={`${blog.title} overview image`}
              fetchPriority="high"
              loading="eager"
              width={1200}
              height={680}
              sizes="(max-width: 768px) 100vw, 895px"
              unoptimized
              className="w-full aspect-video object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
          </div>

          {/* Content Distribution Architecture */}
          <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Content Body Column */}
            <div className="lg:col-span-8 space-y-12">

              {/* Table Of Contents */}
              <TableOfContents headings={headings} />

              {/* Main content */}
              <div className="mt-12">
                <PortableTextRenderer value={blog.body} />
              </div>

              {/* FAQ */}
<FAQ id="faq" items={blog.faq} />



              {/* Takeaway Card */}
              {blog.takeaway && (
                <aside
                  className="relative mt-12 p-8 rounded-2xl bg-linear-to-br from-stone-900 to-slate-950 text-stone-100 shadow-xl overflow-hidden group"
                  aria-label="Article Summary Key Takeaway"
                >
                  <div
                    className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"
                    aria-hidden="true"
                  />

                  <h3 className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
                    Key Takeaway
                  </h3>

                  <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-stone-200 font-light">
                    {blog.takeaway}
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
                {blog.highlights?.length > 0 && (
                  <div>
                    <div className="mt-4 divide-y">
                      {blog.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="py-3 text-sm text-neutral-700"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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

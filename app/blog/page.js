import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import blogs from "../../data/blogs";
import blogimage from "../../public/blog.jpg"

/**
 * 1. CONFIGURATION META ENCODING BLOCK
 * Creates a unique layout signature for search crawler indexing.
 */
export const metadata = {
  title: "B2B Marketing Insights & Lead Generation Blog | Leadwala",
  description: "Stay ahead with actionable digital marketing trends, enterprise lead generation strategies, and advanced business growth blueprints.",
  alternates: {
    canonical: "https://leadwala.com/blog",
  },
  openGraph: {
    title: "Leadwala Growth & Marketing Insights Blog",
    description: "Stay ahead with actionable digital marketing trends, enterprise lead generation strategies, and advanced business growth blueprints.",
    url: "https://leadwala.com/blog",
    siteName: "Leadwala",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadwala Growth & Marketing Insights Blog",
    description: "Stay ahead with actionable digital marketing trends, enterprise lead generation strategies, and advanced business growth blueprints.",
  },
};

export default function BlogListingPage() {
  
  /**
   * 2. BATCH ARCHIVE SCHEMA (JSON-LD)
   * Feeds the search bot a structured index table matching every active article path.
   */
  const listingJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Leadwala Marketing & Growth Blog",
    "description": "Stay ahead with actionable digital marketing trends, enterprise lead generation strategies, and advanced business growth blueprints.",
    "url": "https://leadwala.com/blog",
    "blogPost": blogs.map((blog) => ({
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.description,
      "url": `https://leadwala.com/blog/${blog.slug}`,
      "datePublished": new Date(blog.date).toISOString(),
      "image": blog.image?.startsWith("http") ? blog.image : `https://leadwala.com${blog.image || "/blog.jpg"}`,
    })),
  };

  return (
    <>
      {/* Schema Injection Node */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }}
      />

      <div className="w-full mt-20 text-neutral-800">
        
        {/* SEMANTIC HEADER BANNER ZONE */}
        <header className="w-full px-20 py-10 relative">
          <div className="absolute -top-40 left-1/4 h-112.5 w-112.5 rounded-full bg-linear-to-br from-sky-300/20 to-cyan-400/10 blur-[160px] pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 h-100 w-100 rounded-full bg-linear-to-tr from-indigo-300/15 to-violet-300/10 blur-[160px] pointer-events-none" aria-hidden="true" />
          
          <div className="w-full px-20 py-10 flex flex-col items-center gap-4">
            {/* Primary Target Keyword Heading */}
            <h1 className="max-w-xl text-5xl text-center font-semibold text-neutral-900 tracking-tight leading-tight">
              Insights that brings you <span className="text-black font-bold">real growth</span>
            </h1>
            <p className="max-w-2xl text-center text-sm text-neutral-600 leading-relaxed">
              Get the latest insights, trends, and best practices in the world of
              digital marketing. Our blog is your go-to resource for staying ahead
              in the ever-evolving landscape of online business.
            </p>
          </div>
        </header>

        {/* FEED LOOP LIST SECTION */}
        <section className="w-full px-20 py-10" aria-label="Latest blog articles">
          {/* Loop structure modified to semantic grid list structure for crawlers */}
          <ul className="w-full px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 list-none">
            {blogs.map((blog) => (
              <li key={blog.id}>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="group block focus:outline-hidden"
                >
                  <article className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300">
                    
                    {/* Visual Asset Container */}
                    <div className="relative h-65 w-full overflow-hidden rounded-t-3xl bg-neutral-100">
                      <Image
                        src={blog.image || blogimage} // Render custom array banner path with standard asset fallback
                        alt={`Featured visualization analyzing: ${blog.title}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-102"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content Detail Tree */}
                    <div className="pt-4 p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-sm text-neutral-500 font-semibold">
                        <span>{blog.readTime}</span>
                      </div>
                      
                      {/* Secondary Semantic Title Elements Mapping */}
                      <h2 className="mt-3 text-lg leading-6 font-semibold text-neutral-900 group-hover:text-black line-clamp-2">
                        {blog.title}
                      </h2>
                      
                      <p className="mt-2 text-sm text-neutral-500 line-clamp-2 leading-relaxed flex-grow">
                        {blog.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-100">
                        {/* ISO standard time format element encapsulation */}
                        <time 
                          dateTime={new Date(blog.date).toISOString().split('T')[0]} 
                          className="text-xs text-neutral-500 font-semibold"
                        >
                          {blog.date}
                        </time>
                        
                        {/* FIXED NESTING: Replaced original <button> with style-safe semantic label block */}
                        <span className="text-sm font-semibold text-neutral-700 transition duration-300 scale-100 group-hover:scale-105 inline-flex items-center gap-1">
                          Read Post
                          <MoveUpRight className="inline-block mb-0.5" size={14} />
                        </span>
                      </div>
                    </div>

                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* BOTTOM SECTION - CALL TO ACTION CONVERSION ANCHOR */}
        <section className="w-full px-20 py-10" aria-label="Get Started Banner">
          <div className="w-full px-20 py-10">
            <div className="bg-neutral-100 rounded-3xl flex flex-col md:flex-row overflow-hidden border border-neutral-200/50">
              
              <div className="w-full md:w-1/2 p-10 flex flex-col items-start justify-center gap-5">
                {/* Secondary call-to-action semantic anchor heading */}
                <h2 className="text-4xl font-semibold text-neutral-900 tracking-tight">Get Your Lead Today</h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Start your journey with us and unlock the potential of your
                  business. Our team is ready to assist you in achieving your
                  goals and driving success.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-2">
                  <Link href="/leadstore" className="bg-black text-white px-9 py-3 rounded-full hover:shadow-lg transition duration-300 font-semibold text-sm inline-block">
                    Get Started
                  </Link>
                  <Link href="/services" className="bg-white text-neutral-800 px-9 py-3 rounded-full shadow-xs hover:shadow-md border border-neutral-200 transition duration-300 font-semibold text-sm inline-block">
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-10 flex min-h-100 items-center justify-center overflow-hidden relative bg-neutral-50/50">
                <div className="absolute -bottom-12 -right-12 rounded-[30px] border border-neutral-300/70 p-3 bg-[#F7F6F2] shadow-xs">
                  <Image
                    src="/growthbg.webp"
                    alt="Graph data tracking metrics representing scale development analytics"
                    width={600}
                    height={350}
                    className="rounded-3xl object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}
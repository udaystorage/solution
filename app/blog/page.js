import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
// import { blogs } from "../../data/blogs";
import blogimage from "../../public/blog.jpg";
import { promises as fs } from "fs";
import path from "path";
 
const BLOG_DIR = path.join(process.cwd(), "data", "blog");
 
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



/**
 * 1. CONFIGURATION META ENCODING BLOCK
*/
export const metadata = {
  title: "B2b sales intelligence platform & Lead Generation Blog | Leadwala",
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

export default async function BlogListingPage() {
  
  /**
   * 2. BATCH ARCHIVE SCHEMA (JSON-LD)
  */
 const blogs =  await getJsonFilesAsArray();
  const listingJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Leadwala Marketing & Growth Blog",
    "description": "Stay ahead with actionable digital marketing trends, enterprise lead generation strategies, and advanced business growth blueprints.",
    "url": "https://leadwala.com/blog",
    "blogPost": blogs.map((blog) => {
      let isoDate;
      try {
        isoDate = new Date(blog.date).toISOString();
      } catch (e) {
        isoDate = new Date().toISOString();
      }

      return {
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.description,
        "url": `https://leadwala.com/blog/${blog.slug}`,
        "datePublished": isoDate,
        "image": blog.image?.startsWith("http") ? blog.image : `https://leadwala.com${blog.image || "/blog.jpg"}`,
      };
    }),
  };

  return (
    <>
      {/* Schema Injection Node */}
      <script
        id="blog-listing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }}
      />

     <div className="mt-16 w-full text-neutral-800 sm:mt-18 lg:mt-20">
  {/* SEMANTIC HEADER BANNER ZONE */}
  <header className="relative w-full overflow-hidden px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-20 lg:py-12">
    <div
      className="pointer-events-none absolute -top-40 left-1/4 h-112.5 w-112.5 rounded-full bg-linear-to-br from-sky-300/20 to-cyan-400/10 blur-[160px]"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute top-0 right-0 h-100 w-100 rounded-full bg-linear-to-tr from-indigo-300/15 to-violet-300/10 blur-[160px]"
      aria-hidden="true"
    />

    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-3 sm:gap-4">
      {/* Primary Target Keyword Heading */}
      <h1 className="max-w-xl text-center text-3xl leading-tight font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
        Insights that brings you{" "}
        <span className="font-bold text-black">Real growth</span>
      </h1>

      <p className="max-w-2xl text-center text-sm leading-relaxed text-neutral-600 sm:text-base">
        Get the latest insights, trends, and best practices in the world of
        digital marketing. Our blog is your go-to resource for staying ahead
        in the ever-evolving landscape of online business.
      </p>
    </div>
  </header>

  {/* FEED LOOP LIST SECTION */}
  <section
    className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-20"
    aria-label="Latest blog articles"
  >
    <ul className="mx-auto grid w-full max-w-7xl list-none grid-cols-1 gap-6 p-0 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
      {blogs.map((blog) => {
        let machineDate;

        try {
          machineDate = new Date(blog.date).toISOString().split("T")[0];
        } catch (e) {
          machineDate = new Date().toISOString().split("T")[0];
        }

        return (
          <li key={blog.id} className="h-full">
            <Link
              href={`/blog/${blog.slug}`}
              className="group block h-full focus:outline-hidden"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-xs transition-shadow duration-300 hover:shadow-md sm:rounded-3xl">
                {/* Visual Asset Container */}
                <div className="relative h-52 w-full overflow-hidden bg-neutral-100 sm:h-60 md:h-56 lg:h-60 xl:h-65">
                  <Image
                    src={blog.image || blogimage}
                    alt={`Featured visualization analyzing: ${blog.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-102"
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                </div>

                {/* Content Detail Tree */}
                <div className="flex grow flex-col p-5 pt-4 sm:p-6 sm:pt-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 sm:text-sm">
                    <span>{blog.readTime}</span>
                  </div>

                  <h2 className="mt-3 line-clamp-2 text-lg leading-6 font-semibold text-neutral-900 group-hover:text-black">
                    {blog.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 grow text-sm leading-relaxed text-neutral-500">
                    {blog.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-neutral-100 pt-4">
                    <time
                      dateTime={machineDate}
                      className="shrink-0 text-xs font-semibold text-neutral-500"
                    >
                      {blog.date}
                    </time>

                    <span className="inline-flex shrink-0 scale-100 items-center gap-1 text-sm font-semibold text-neutral-700 transition duration-300 group-hover:scale-105">
                      Read Post
                      <MoveUpRight
                        className="mb-0.5 inline-block"
                        size={14}
                      />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </li>
        );
      })}
    </ul>
  </section>

  {/* BOTTOM SECTION - CALL TO ACTION CONVERSION ANCHOR */}
  <section
    className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-20"
    aria-label="Get Started Banner"
  >
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200/50 bg-neutral-100 sm:rounded-3xl md:flex-row">
        {/* CTA Content */}
        <div className="flex w-full flex-col items-start justify-center gap-4 p-6 sm:gap-5 sm:p-8 md:w-1/2 md:p-10 lg:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
            Get Your Lead Today
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            Start your journey with us and unlock the potential of your
            business. Our team is ready to assist you in achieving your goals
            and driving success.
          </p>

          <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/leadstore"
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:shadow-lg sm:px-9"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-7 py-3 text-sm font-semibold text-neutral-800 shadow-xs transition duration-300 hover:shadow-md sm:px-9"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* CTA Visual */}
        <div className="relative hidden min-h-80 w-full items-center justify-center overflow-hidden bg-neutral-50/50 sm:flex md:min-h-100 md:w-1/2">
          <div className="absolute -right-12 -bottom-12 rounded-[30px] border border-neutral-300/70 bg-[#F7F6F2] p-3 shadow-xs">
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
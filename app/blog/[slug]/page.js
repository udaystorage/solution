import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import BlogWhatsappBtn from "@/app/components/ui/BlogWhatsappBtn";

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen  relative overflow-hidden text-stone-900 selection:bg-emerald-100">
      {/* Premium Radial Lighting System for B2B Trust & Depth */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-full bg-gradient-to-b from-indigo-500/5 via-slate-400/0 to-transparent blur-[120px]"></div>
        <div className="absolute top-[5%] -left-[10%] w-[50%] h-[40%] rounded-full bg-radial from-emerald-400/5 via-transparent to-transparent blur-[100px]"></div>
        <div className="absolute top-[2%] -right-[10%] w-[40%] h-[40%] rounded-full bg-radial from-stone-300/10 via-transparent to-transparent blur-[90px]"></div>
        <div className="absolute inset-0 backdrop-blur-[80px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24">
        {/* Meta Header */}
        <div className="flex items-center gap-3 text-sm font-medium tracking-wide uppercase text-stone-500">
          <span>{blog.date}</span>
          <span className="text-stone-300">•</span>
          <span className="text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold">
            {blog.readTime}
          </span>
        </div>

        {/* Premium Stair/Growth Inspired Title Heading */}
        <h1 className="mt-6  text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-stone-950 font-semibold">
          {blog.title}
        </h1>

        <p className="mt-6 italic max-w-3xl text-xl font-light leading-relaxed text-stone-600 border-l-2 border-emerald-700/30 pl-6">
          {blog.description}
        </p>

        {/* Featured Image Canvas Wrapper */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-stone-200 shadow-xl shadow-stone-950/5">
          <Image
            src="/demoBlog.webp"
            alt={blog.title}
            width={1200}
            height={680}
            className="w-full h-[450px] object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
            priority
            loading="eager"
          />
        </div>

        {/* Article Core Layout Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Layout Area */}
          <article className="lg:col-span-8 space-y-12">
            {/* Introduction Paragraph */}
            <p className="text-lg leading-relaxed text-stone-700 font-medium">
              {blog.content.introduction}
            </p>

            {/* Iterative Section Mapping */}
            {blog.content.sections?.map((section, idx) => (
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

            {/* Strategic Premium Takeaway Callout */}
            {blog.content.takeaway && (
              <div className="relative mt-12 p-8 rounded-2xl bg-linear-to-br from-stone-900 to-slate-950 text-stone-100 shadow-xl overflow-hidden group">
                {/* Micro Ambient Glow Inside Takeaway */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
                     
                <h3 className="font-serif text-xs font-semibold tracking-widest text-emerald-400 uppercase">
                  Key Takeaway
                </h3>
                <p className="mt-3 text-base leading-relaxed text-stone-200 font-light">
                  {blog.content.takeaway}
                </p>
              </div>
            )}
          </article>

          {/* Right Sidebar - Sticky Highlights / Executive Summary Display */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8 bg-stone-100/80 border border-stone-200/60 rounded-2xl p-6 backdrop-blur-md shadow-sm">
            <h3 className="font-serif text-sm font-semibold tracking-wider text-stone-900 border-b border-stone-200 pb-3">
              Executive Highlights
            </h3>

            <ul className="mt-4 space-y-4">
              {blog.content.highlights?.map((highlight, index) => (
                <li
                  key={index}
                  className="flex gap-3 items-start text-sm text-stone-600"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2" />
                  <span className="leading-tight font-medium">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Contextual CTA component embedded inside the card */}
            <div className="mt-6 pt-5 border-t border-stone-200 text-center">
           <BlogWhatsappBtn/>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

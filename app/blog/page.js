import React from "react";
import Image from "next/image";
import blogs from "../../data/blogs";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

function Blog() {
  return (
    <div className="w-full mt-20">
      <section className="w-full px-20 py-10 ">
        <div className="absolute -top-40 left-1/4 h-112.5 w-112.5 rounded-full bg-linear-to-br from-sky-300/20 to-cyan-400/10 blur-[160px]" />

        <div className="absolute top-0 right-0 h-100 w-100 rounded-full bg-linear-to-tr from-indigo-300/15 to-violet-300/10 blur-[160px]" />
        <div className="w-full px-20 py-10 flex flex-col items-center gap-4">
          <h1 className="max-w-xl text-5xl text-center font-semibold">
            Insights that brings you <span>real growth</span>
          </h1>
          <p className=" max-w-2xl text-center text-sm">
            Get the latest insights, trends, and best practices in the world of
            digital marketing. Our blog is your go-to resource for staying ahead
            in the ever-evolving landscape of online business.
          </p>
        </div>
      </section>

      <section className="w-full px-20 py-10">
        <div className="w-full px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group block"
            >
              <article key={blog.id}>
             <div className="relative h-65 w-full overflow-hidden rounded-3xl">
  <Image
    src="/blog.jpg"
    alt={blog.title}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
</div>

                <div className="pt-4">
                  <span className="text-sm text-neutral-500 font-semibold">
                    {blog.readTime}
                  </span>
                  <p className="mt-3 text-base leading-6 font-semibold text-neutral-700 line">
                    {blog.description}
                  </p>
                  <div className="flex  items-center justify-between mt-3">
                    <span className="text-sm text-neutral-500 font-semibold">
                      {blog.date}
                    </span>
                    <button className="mt-1 mr-2 text-sm font-semibold cursor-pointer text-neutral-700 hover:text-black transition duration-300 scale-100 group-hover:scale-105  ">
                      Learn More{" "}
                      <MoveUpRight
                        className="inline-block ml-1 mb-0.5"
                        size={15}
                      />
                    </button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full px-20 py-10">
        <div className="w-full px-20 py-10 ">
          <article className="bg-neutral-100 rounded-3xl flex ">
            <div className="w-1/2 p-10 flex flex-col items-start justify-center gap-5">
              <h1 className="text-4xl font-semibold">Get Your Lead Today</h1>
              <p className="text-sm text-neutral-500">
                Start your journey with us and unlock the potential of your
                business. Our team is ready to assist you in achieving your
                goals and driving success.
              </p>
              <div>
                <button className="cursor-pointer bg-black text-white px-9 py-3 rounded-full hover:shadow-lg transition duration-300">
                  Get Started
                </button>
                <button className="cursor-pointer ml-4 bg-white px-9 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-1/2 p-10 flex min-h-100 items-center justify-center overflow-hidden relative">
              <div
                className="
      absolute
      -bottom-12
      -right-12
      rounded-[30px]
      border
      border-neutral-300/70
      p-3
      bg-[#F7F6F2]
    "
              >
                <Image
                  src="/growthbg.webp"
                  alt="Start Your Journey"
                  width={600}
                  height={350}
                  className="rounded-3xl object-cover"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Blog;

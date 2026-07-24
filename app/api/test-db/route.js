import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Folder where each blog post JSON file lives: /data/blog/<slug>.json
const BLOG_DIR = path.join(process.cwd(), "data", "blog");

async function ensureBlogDir() {
  await fs.mkdir(BLOG_DIR, { recursive: true });
}

async function getAllBlogFiles() {
  await ensureBlogDir();
  const files = await fs.readdir(BLOG_DIR);
  return files.filter((f) => f.endsWith(".json"));
}

async function getNextId() {
  const files = await getAllBlogFiles();
  if (files.length === 0) return 1;

  const ids = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(BLOG_DIR, file), "utf-8");
      const data = JSON.parse(raw);
      return typeof data.id === "number" ? data.id : 0;
    })
  );

  return Math.max(...ids) + 1;
}

// GET /api/blogs -> list all blog posts (newest id first)
export async function GET() {
  try {
    const files = await getAllBlogFiles();
    const blogs = await Promise.all(
      files.map(async (file) => {
        const raw = await fs.readFile(path.join(BLOG_DIR, file), "utf-8");
        return JSON.parse(raw);
      })
    );
    blogs.sort((a, b) => b.id - a.id);
    return NextResponse.json(blogs);
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to load blog posts." },
      { status: 500 }
    );
  }
}

// POST /api/blogs -> create a new blog post JSON file
export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.title?.trim() || !body.slug?.trim() || !body.description?.trim()) {
      return NextResponse.json(
        { message: "Title, slug, and description are required." },
        { status: 400 }
      );
    }

    await ensureBlogDir();

    const filePath = path.join(BLOG_DIR, `${body.slug}.json`);

    // Prevent overwriting an existing post with the same slug
    const alreadyExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);

    if (alreadyExists) {
      return NextResponse.json(
        { message: `A post with the slug "${body.slug}" already exists.` },
        { status: 409 }
      );
    }

    const id = await getNextId();

    const date = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const blogPost = {
      id,
      slug: body.slug,
      title: body.title,
      // Expects a real hosted path like "/uploads/xyz.png" from /api/upload.
      image: body.image || null,
      date,
      readTime: body.readTime || "5 min read",
      description: body.description,
      content: {
        introduction: body.content?.introduction || "",
        highlights: body.content?.highlights || [],
        sections: (body.content?.sections || []).map((s) => ({
          heading: s.heading || "",
          brief: s.brief || "",
          paragraphs: s.paragraphs || [],
        })),
        takeaway: body.content?.takeaway || "",
      },
    };

    await fs.writeFile(filePath, JSON.stringify(blogPost, null, 2), "utf-8");

    return NextResponse.json(
      { message: "Blog post created successfully.", blog: blogPost },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: err.message || "Failed to create blog post." },
      { status: 500 }
    );
  }
}
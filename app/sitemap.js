// app/sitemap.js
import getJsonFilesAsArray from "@/lib/blog";

const blogs = await getJsonFilesAsArray();

export default async function sitemap() {
  const baseUrl = "https://leadwala.com";

  // 1. Static Routes
  const staticRoutes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Blog Routes from your data array
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    // Converts "July 15, 2026" formats cleanly into an ISO string for search engines
    lastModified: new Date(blog.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
// app/sitemap.js
import { getJsonFilesAsArray } from "@/lib/blog";
import leadStoreData from "@/data/leadStoreData";

const blogs = await getJsonFilesAsArray();
const dataStoreItems = leadStoreData;

export default async function sitemap() {
  const baseUrl = "https://datatreasure.co.in";

  // 1. Static Routes
  const staticRoutes = [
    "",
    "/datastore",
    "/aboutus",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
    "/acceptable-use",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Blog Routes data array
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    // Converts "July 15, 2026" formats cleanly into an ISO string for search engines
    lastModified: new Date(blog.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const dataStoreRoutes = dataStoreItems.map((item) => ({
    url: `${baseUrl}/datastore/${item.slug}`,
    lastModified: new Date(
      item.updatedAt || item.date || Date.now(),
    ).toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...dataStoreRoutes];
}

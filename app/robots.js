// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Optional: Add paths you want to hide from Google here
    },
    sitemap: "https://leadwala.com/sitemap.xml",
  };
}
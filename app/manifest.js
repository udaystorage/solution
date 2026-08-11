// app/manifest.js
export default function manifest() {
  return {
    name: "Leadwala",
    short_name: "Leadwala",
    description:
      "Premium B2B and B2C business database provider in India.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
        {
        src: "/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
        {
        src: "/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
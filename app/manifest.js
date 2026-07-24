// app/manifest.js
export default function manifest() {
  return {
    name: 'My Awesome Next.js App',
    short_name: 'NextApp',
    description: 'A brief, keyword-rich description of what your app does.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
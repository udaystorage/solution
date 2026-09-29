import {sanityClient} from "@/lib/sanity/client";
import {testPostsQuery} from "@/lib/sanity/queries";

export default async function SanityTestPage() {
  const posts = await sanityClient.fetch(testPostsQuery);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Sanity Test</h1>

      <pre className="mt-6 whitespace-pre-wrap">
        {JSON.stringify(posts, null, 2)}
      </pre>
    </main>
  );
}
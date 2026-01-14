import { client } from '@/lib/sanity';
import BlogList from '@/components/blog/BlogList';

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "author": author->name,
    mainImage,
    publishedAt,
    excerpt,
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16">
          Our Latest Insights
        </h1>
        <BlogList posts={posts} />
      </div>
    </main>
  );
}


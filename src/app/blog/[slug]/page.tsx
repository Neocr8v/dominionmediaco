import { client, urlFor } from '@/lib/sanity';
import BlogPostClient from '@/components/blog/BlogPostClient';
import { PortableText } from '@portabletext/react';

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    "author": author->name,
    mainImage,
    publishedAt,
    body,
  }`;
  const post = await client.fetch(query, { slug });
  return post;
}

async function getRelatedPosts(currentPostId: string) {
  const query = `*[_type == "post" && _id != $currentPostId] | order(publishedAt desc)[0...2] {
    _id,
    title,
    "slug": slug.current,
    "author": author->name,
    mainImage,
    publishedAt,
    excerpt,
  }`;
  const posts = await client.fetch(query, { currentPostId });
  return posts;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  const relatedPosts = await getRelatedPosts(post._id);

  const portableTextComponents = {
    types: {
      image: ({ value }: { value: any }) => (
        <img src={urlFor(value).url()} alt={value.alt || ' '} loading="lazy" />
      ),
    },
  };

  return (
    <BlogPostClient
      post={{
        ...post,
        content: post.body ? <PortableText value={post.body} components={portableTextComponents} /> : '',
        image: urlFor(post.mainImage).url(),
        date: new Date(post.publishedAt).toLocaleDateString(),
      }}
      relatedPosts={relatedPosts.map((p: any) => ({
        ...p,
        image: urlFor(p.mainImage).url(),
        date: new Date(p.publishedAt).toLocaleDateString(),
      }))}
    />
  );
}

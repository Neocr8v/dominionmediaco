"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface BlogListProps {
  posts: Array<{
    _id: string;
    title: string;
    slug: string;
    author: string;
    mainImage: any;
    publishedAt: string;
    excerpt: string;
  }>;
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {posts.map((post, index) => (
        <motion.div
          key={post._id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <Link href={`/blog/${post.slug}`}>
            <div className="relative w-full h-64">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors duration-300">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-3">By {post.author} on {new Date(post.publishedAt).toLocaleDateString()}</p>
              <p className="text-lg leading-relaxed">{post.excerpt}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

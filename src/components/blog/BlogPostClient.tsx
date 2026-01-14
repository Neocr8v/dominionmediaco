"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostClientProps {
  post: {
    _id: string;
    title: string;
    slug: string;
    date: string;
    author: string;
    image: string;
    content: React.ReactNode;
  };
  relatedPosts: Array<{
    _id: string;
    title: string;
    slug: string;
    date: string;
    author: string;
    image: string;
    excerpt: string;
  }>;
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  return (
    <main className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-8"
        >
          {post.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-center mb-12"
        >
          By {post.author} on {post.date}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="prose prose-invert lg:prose-xl mx-auto"
        >
          {post.content}
        </motion.div>

        <div className="text-center mt-16">
          <Link href="/blog" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Go Back to Blog
          </Link>
        </div>

        {/* Related Posts Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 hover:text-blue-400 transition-colors duration-300">{post.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">By {post.author} on {post.date}</p>
                    <p className="text-lg leading-relaxed">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}

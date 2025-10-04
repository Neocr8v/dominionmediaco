"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Media Production',
    slug: 'the-future-of-media-production',
    date: 'October 26, 2025',
    author: 'Dominion Media Team',
    image: '/images/blog1.jpg',
    excerpt: 'Explore the exciting advancements shaping the media production industry, from AI-driven editing to virtual reality experiences.',
  },
  {
    id: 2,
    title: 'Mastering Brand Storytelling in the Digital Age',
    slug: 'mastering-brand-storytelling',
    date: 'October 20, 2025',
    author: 'Dominion Media Team',
    image: '/images/blog2.jpg',
    excerpt: 'Learn how to craft compelling narratives that resonate with your audience and build a strong brand presence online.',
  },
  {
    id: 3,
    title: 'Behind the Scenes: Our Latest Video Project',
    slug: 'behind-the-scenes-video-project',
    date: 'October 15, 2025',
    author: 'Dominion Media Team',
    image: '/images/blog3.jpg',
    excerpt: 'A sneak peek into the creative process and technical challenges of our recent high-profile video production.',
  },
  {
    id: 4,
    title: 'Photography Tips for Stunning Visuals',
    slug: 'photography-tips-stunning-visuals',
    date: 'October 10, 2025',
    author: 'Dominion Media Team',
    image: '/images/blog4.jpg',
    excerpt: 'Expert advice on capturing breathtaking photos, from composition techniques to lighting essentials.',
  },
];

export default function BlogPage() {
  return (
    <main className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Our Latest Insights
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative w-full h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors duration-300">{post.title}</h2>
                  <p className="text-gray-400 text-sm mb-3">By {post.author} on {post.date}</p>
                  <p className="text-lg leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

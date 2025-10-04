"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Dummy data for a single blog post
const dummyPost = {
  id: 1,
  title: 'The Future of Media Production',
  slug: 'the-future-of-media-production',
  date: 'October 26, 2025',
  author: 'Dominion Media Team',
  image: '/images/blog1.jpg',
  content: `
    <p class="mb-4">In today's rapidly evolving digital landscape, media production is undergoing a profound transformation. Artificial intelligence, virtual reality, and advanced analytics are no longer concepts of the distant future but integral tools shaping how content is created, distributed, and consumed.</p>
    <p class="mb-4">At Dominion Media, we are at the forefront of this revolution. Our team of experts leverages cutting-edge AI algorithms to streamline editing processes, predict audience engagement, and personalize content delivery. This not only enhances efficiency but also ensures that every piece of media we produce resonates deeply with its intended audience.</p>
    <h2 class="text-3xl font-bold mt-8 mb-4">The Rise of Immersive Experiences</h2>
    <p class="mb-4">Virtual reality (VR) and augmented reality (AR) are opening new frontiers for immersive storytelling. Imagine experiencing a documentary from within the scene, or interacting with a product demonstration in a fully simulated environment. These technologies offer unparalleled opportunities for engagement, and we are actively developing VR/AR content that pushes the boundaries of traditional media.</p>
    <p class="mb-4">Our commitment to innovation extends to every aspect of media production. From high-definition video capture to intricate sound design and visual effects, we ensure that our clients receive content that is not only visually stunning but also technologically advanced and future-proof.</p>
    <h2 class="text-3xl font-bold mt-8 mb-4">Data-Driven Creativity</h2>
    <p class="mb-4">The integration of big data and analytics allows us to move beyond guesswork. By analyzing audience behavior and content performance, we can refine our creative strategies, ensuring that our productions are not just artistic but also highly effective in achieving our clients' objectives. This data-driven approach, combined with our creative flair, sets Dominion Media apart as a leader in the industry.</p>
    <p>Join us as we continue to explore and define the future of media production, creating impactful stories that captivate, inform, and inspire.</p>
  `,
};

// Dummy data for related posts (in a real app, this would be fetched based on categories/tags)
const relatedPosts = [
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
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  // In a real application, you would fetch the post data based on params.slug
  // For this example, we'll just use the dummyPost
  const post = dummyPost; // Replace with actual data fetching

  if (!post) {
    return (
      <main className="bg-gray-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <button onClick={() => router.back()} className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Go Back
        </button>
      </main>
    );
  }

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
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="text-center mt-16">
          <button onClick={() => router.back()} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Go Back to Blog
          </button>
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
                key={post.id}
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
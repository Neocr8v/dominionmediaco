"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const portfolioItems = [
  {
    id: 1,
    title: 'Award-Winning Commercial Campaigns',
    category: 'Video Production',
    image: '/images/portfolio1.jpg',
    description: 'Crafting compelling commercial videos that drive brand awareness and engagement for diverse clients.',
  },
  {
    id: 2,
    title: 'Captivating Documentary Filmmaking',
    category: 'Filmmaking',
    image: '/images/docu.jpg',
    description: 'Producing thought-provoking documentaries that explore critical social and environmental narratives.',
  },
  {
    id: 3,
    title: 'Dynamic Brand Storytelling Videos',
    category: 'Content Creation',
    image: '/images/portfolio3.jpg',
    description: 'Elevating brand identities through powerful visual storytelling, enhancing connection with target audiences.',
  },
  {
    id: 4,
    title: 'Comprehensive Event Coverage',
    category: 'Photography & Videography',
    image: '/images/cam2.jpg',
    description: 'Delivering high-quality photo and video coverage for corporate events, concerts, and private celebrations.',
  },
  {
    id: 5,
    title: 'Advanced Post-Production & VFX',
    category: 'Post-Production',
    image: '/images/portfolio5.jpg',
    description: 'Transforming raw footage into cinematic masterpieces with expert editing, color grading, and visual effects.',
  },
  {
    id: 6,
    title: 'Engaging Motion Graphics & Animation',
    category: 'Animation',
    image: '/images/2danim.jpg',
    description: 'Creating vibrant 2D and 3D animated content for web, broadcast, and interactive presentations.',
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Our Creative Portfolio
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl font-bold">{item.category}</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
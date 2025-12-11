"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { id: 1, src: '/images/Wedding-025.jpg', alt: 'Image 1' },
  { id: 2, src: '/images/placeholder2.jpg', alt: 'Placeholder Image 2' },
  { id: 3, src: '/images/placeholder3.jpg', alt: 'Placeholder Image 3' },
  { id: 4, src: '/images/placeholder4.jpg', alt: 'Placeholder Image 4' },
  { id: 5, src: '/images/placeholder5.jpg', alt: 'Placeholder Image 5' },
  { id: 6, src: '/images/placeholder6.jpg', alt: 'Placeholder Image 6' },
];

export default function ImageShowcase() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Our Creative Showcase
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

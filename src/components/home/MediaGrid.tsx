"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const mediaItems = [
  {
    id: 1,
    title: 'Media Item 1',
    image: 'https://via.placeholder.com/500x300',
  },
  {
    id: 2,
    title: 'Media Item 2',
    image: 'https://via.placeholder.com/500x300',
  },
  {
    id: 3,
    title: 'Media Item 3',
    image: 'https://via.placeholder.com/500x300',
  },
  {
    id: 4,
    title: 'Media Item 4',
    image: 'https://via.placeholder.com/500x300',
  },
  {
    id: 5,
    title: 'Media Item 5',
    image: 'https://via.placeholder.com/500x300',
  },
  {
    id: 6,
    title: 'Media Item 6',
    image: 'https://via.placeholder.com/500x300',
  },
];

export default function MediaGrid() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image src={item.image} alt={item.title} width={500} height={300} objectFit="cover" className="w-full h-64" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

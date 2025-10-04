"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface BannerProps {
  imageUrl: string;
  title: string;
}

export default function Banner({ imageUrl, title }: BannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-64 md:h-96 overflow-hidden"
    >
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg"
        >
          {title}
        </motion.h1>
      </div>
    </motion.div>
  );
}

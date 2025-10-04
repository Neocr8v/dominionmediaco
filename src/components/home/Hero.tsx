"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/dmedia.jpg"
        alt="Dominion Media Studio"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-center"
        >
          Welcome to Dominion Media
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-xl text-center"
        >
          A media company for the modern age.
        </motion.p>
      </div>
    </div>
  );
}
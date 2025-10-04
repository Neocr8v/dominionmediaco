"use client";

import { motion } from 'framer-motion';

export default function MissionVision() {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8"
        >
          Our Mission & Vision
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6 bg-gray-700 rounded-lg shadow-lg"
          >
            <h3 className="text-3xl font-semibold mb-4">Mission</h3>
            <p className="text-lg leading-relaxed">
              To empower businesses and individuals with innovative and impactful media solutions that drive engagement, foster growth, and inspire connection in a rapidly evolving digital landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6 bg-gray-700 rounded-lg shadow-lg"
          >
            <h3 className="text-3xl font-semibold mb-4">Vision</h3>
            <p className="text-lg leading-relaxed">
              To be the leading creative force in media, recognized for our unparalleled creativity, technological prowess, and unwavering commitment to delivering exceptional value and transformative experiences for our clients worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

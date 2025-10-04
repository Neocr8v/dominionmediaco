"use client";

import { motion } from 'framer-motion';
import Banner from '@/components/layout/Banner';

export default function AboutUsPage() {
  return (
    <main className="bg-gray-900 text-white">
      <Banner imageUrl="/images/photostudio.jpg" title="About Us" />

      <div className="container mx-auto px-4 py-20">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          <p className="mb-4">
            Welcome to Dominion Media, a pioneering force in the UK&apos;s dynamic media landscape. Established with a vision to redefine excellence, we are rapidly emerging as one of the nation&apos;s top media companies, driven by innovation, creativity, and an unwavering commitment to our clients&apos; success.
          </p>
          <p className="mb-4">
            At Dominion Media, we believe in the power of storytelling to transform brands and connect communities. Our journey began with a simple yet profound mission: to empower businesses and individuals with innovative and impactful media solutions that drive engagement, foster growth, and inspire connection in a rapidly evolving digital landscape.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4 text-blue-400">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To empower businesses and individuals with innovative and impactful media solutions that drive engagement, foster growth, and inspire connection in a rapidly evolving digital landscape.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4 text-green-400">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To be the leading creative force in media, recognized for our unparalleled creativity, technological prowess, and unwavering commitment to delivering exceptional value and transformative experiences for our clients worldwide.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg leading-relaxed text-center max-w-3xl mx-auto"
        >
          <p className="mb-4">
            We specialize in a comprehensive suite of media services, including cutting-edge video production, captivating photography, meticulous post-production, dynamic motion graphics, strategic digital marketing, bespoke web design, and distinctive brand identity development. Our team of passionate experts leverages the latest technologies and creative techniques to deliver bespoke solutions that not only meet but exceed expectations.
          </p>
          <p>
            Join us at Dominion Media, where your story becomes our passion, and your success is our ultimate masterpiece.
          </p>
        </motion.section>
      </div>
    </main>
  );
}

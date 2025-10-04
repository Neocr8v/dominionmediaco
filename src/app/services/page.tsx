"use client";

import { motion } from 'framer-motion';
import { FaVideo, FaCamera, FaEdit, FaBullhorn, FaPaintBrush, FaGlobe, FaLightbulb, FaHeart, FaBirthdayCake, FaGraduationCap, FaMicrophoneAlt, FaStream } from 'react-icons/fa';
import Banner from '@/components/layout/Banner';

const services = [
  {
    id: 1,
    name: 'Video Production',
    icon: <FaVideo className="text-blue-500 text-5xl mb-4" />,
    description: 'From captivating commercials to insightful documentaries, we bring your stories to life with high-quality video content.',
  },
  {
    id: 2,
    name: 'Photography',
    icon: <FaCamera className="text-green-500 text-5xl mb-4" />,
    description: 'Capturing the essence of your brand, products, and events with stunning professional photography.',
  },
  {
    id: 3,
    name: 'Post-Production',
    icon: <FaEdit className="text-purple-500 text-5xl mb-4" />,
    description: 'Transforming raw footage into polished masterpieces with expert editing, color grading, and sound design.',
  },
  {
    id: 4,
    name: 'Motion Graphics & Animation',
    icon: <FaPaintBrush className="text-red-500 text-5xl mb-4" />,
    description: 'Engage your audience with dynamic 2D and 3D animations, explainer videos, and captivating motion graphics.',
  },
  {
    id: 5,
    name: 'Digital Marketing & Strategy',
    icon: <FaBullhorn className="text-yellow-500 text-5xl mb-4" />,
    description: 'Crafting effective digital strategies to boost your online presence, reach your target audience, and drive engagement.',
  },
  {
    id: 6,
    name: 'Web Design & Development',
    icon: <FaGlobe className="text-indigo-500 text-5xl mb-4" />,
    description: 'Building beautiful, responsive, and user-friendly websites that reflect your brand and achieve your business goals.',
  },
  {
    id: 7,
    name: 'Brand Identity & Design',
    icon: <FaLightbulb className="text-pink-500 text-5xl mb-4" />,
    description: 'Developing unique brand identities, logos, and visual assets that resonate with your audience and set you apart.',
  },
  {
    id: 8,
    name: 'Weddings',
    icon: <FaHeart className="text-red-500 text-5xl mb-4" />,
    description: 'Capturing the magic of your special day with beautiful videography and photography.',
  },
  {
    id: 9,
    name: 'Birthdays & Parties',
    icon: <FaBirthdayCake className="text-pink-500 text-5xl mb-4" />,
    description: 'Documenting your celebrations with fun and vibrant videos and photos.',
  },
  {
    id: 10,
    name: 'Graduations',
    icon: <FaGraduationCap className="text-yellow-500 text-5xl mb-4" />,
    description: 'Commemorating your academic achievements with professional photos and videos.',
  },
  {
    id: 11,
    name: 'Podcasts',
    icon: <FaMicrophoneAlt className="text-gray-400 text-5xl mb-4" />,
    description: 'Producing high-quality audio and video podcasts, from recording to post-production.',
  },
  {
    id: 12,
    name: 'Live Streams',
    icon: <FaStream className="text-teal-500 text-5xl mb-4" />,
    description: 'Broadcasting your events, webinars, and performances to a live online audience.',
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-gray-900 text-white">
      <Banner imageUrl="/images/prod-1.jpg" title="Our Services" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              className="p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {service.icon}
              <h2 className="text-3xl font-semibold mb-4">{service.name}</h2>
              <p className="text-lg leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

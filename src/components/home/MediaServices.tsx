"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaVideo, FaCamera, FaEdit, FaBullhorn } from 'react-icons/fa'; // Example icons

const services = [
  {
    id: 1,
    name: 'Video Production',
    icon: <FaVideo className="text-blue-500 text-5xl mb-4" />,
    description: 'From concept to final cut, we produce high-quality video content for all your needs.',
  },
  {
    id: 2,
    name: 'Photography',
    icon: <FaCamera className="text-green-500 text-5xl mb-4" />,
    description: 'Capturing moments and telling stories through stunning visual imagery.',
  },
  {
    id: 3,
    name: 'Post-Production',
    icon: <FaEdit className="text-purple-500 text-5xl mb-4" />,
    description: 'Expert editing, color grading, and sound design to perfect your media.',
  },
  {
    id: 4,
    name: 'Marketing & Distribution',
    icon: <FaBullhorn className="text-red-500 text-5xl mb-4" />,
    description: 'Strategizing and executing campaigns to get your content seen by the right audience.',
  },
];

export default function MediaServices() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          Our Media Services
        </motion.h2>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {services.map((service, index) => (
              <div className="embla__slide" key={service.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center h-full"
                >
                  {service.icon}
                  <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                  <p className="text-lg leading-relaxed">{service.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16">
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
            >
              View More
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

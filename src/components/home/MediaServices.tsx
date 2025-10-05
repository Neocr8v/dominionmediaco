"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaVideo, FaCamera, FaEdit, FaBullhorn, FaCircle } from 'react-icons/fa'; // Example icons
import { useCallback, useEffect, useState } from 'react';

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
  {
    id: 5,
    name: 'Weddings',
    icon: <FaVideo className="text-red-500 text-5xl mb-4" />,
    description: 'Capturing the magic of your special day with beautiful videography and photography.',
  },
  {
    id: 6,
    name: 'Birthdays & Parties',
    icon: <FaCamera className="text-pink-500 text-5xl mb-4" />,
    description: 'Documenting your celebrations with fun and vibrant videos and photos.',
  },
  {
    id: 7,
    name: 'Graduations',
    icon: <FaEdit className="text-yellow-500 text-5xl mb-4" />,
    description: 'Commemorating your academic achievements with professional photos and videos.',
  },
  {
    id: 8,
    name: 'Podcasts',
    icon: <FaBullhorn className="text-gray-400 text-5xl mb-4" />,
    description: 'Producing high-quality audio and video podcasts, from recording to post-production.',
  },
  {
    id: 9,
    name: 'Live Streams',
    icon: <FaVideo className="text-teal-500 text-5xl mb-4" />,
    description: 'Broadcasting your events, webinars, and performances to a live online audience.',
  },
];

export default function MediaServices() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => {
    emblaApi && emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, setScrollSnaps, onSelect]);

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
        <div className="flex justify-center mt-8 space-x-2">
          {scrollSnaps.map((_, index) => (
            <FaCircle
              key={index}
              className={`cursor-pointer ${index === selectedIndex ? 'text-blue-500' : 'text-gray-600'}`}
              onClick={() => scrollTo(index)}
            />
          ))}
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

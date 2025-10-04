"use client";

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Banner from '@/components/layout/Banner';

export default function ContactPage() {
  return (
    <main className="bg-gray-900 text-white">
      <Banner imageUrl="/images/cservice.jpg" title="Contact Us" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4 text-lg">
              <p className="flex items-center"><FaMapMarkerAlt className="mr-3 text-blue-400" /> 80-82 Norton Road, Stockton-on-Tees, TS18 2DE</p>
              <p className="flex items-center"><FaPhone className="mr-3 text-green-400" /> +44 7414 756101</p>
              <p className="flex items-center"><FaEnvelope className="mr-3 text-red-400" /> info@dominionmedia.co.uk</p>
            </div>

            <h2 className="text-3xl font-semibold mt-12 mb-6">Business Hours</h2>
            <div className="space-y-2 text-lg">
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="contactName" className="block text-lg font-medium mb-2">Your Name</label>
                <input type="text" id="contactName" className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="contactEmail" className="block text-lg font-medium mb-2">Your Email</label>
                <input type="email" id="contactEmail" className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john.doe@example.com" />
              </div>
              <div>
                <label htmlFor="contactSubject" className="block text-lg font-medium mb-2">Subject</label>
                <input type="text" id="contactSubject" className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Inquiry about services" />
              </div>
              <div>
                <label htmlFor="contactMessage" className="block text-lg font-medium mb-2">Message</label>
                <textarea id="contactMessage" rows={6} className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <h2 className="text-3xl font-semibold text-center mb-6 p-6">Find Us on the Map</h2>
          <div className="relative w-full h-96 bg-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2328.431525931156!2d-1.319638684127861!3d54.5709289802538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e9b5b5d4e6a5b%3A0x4e5f6b3b5d4e6a5b!2s80-82%20Norton%20Rd%2C%20Stockton-on-Tees%20TS18%202DE%2C%20UK!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

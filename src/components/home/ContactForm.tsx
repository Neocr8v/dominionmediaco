"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to send message' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setMessage({ type: 'error', text: 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/cservice.jpg')" }}
    >
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.75 }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Us</h2>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-lg mx-auto p-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-bold mb-2">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg bg-transparent text-white" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg bg-transparent text-white" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-white font-bold mb-2">Subject</label>
            <input type="text" id="subject" className="w-full px-3 py-2 border rounded-lg bg-transparent text-white" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
            <textarea id="message" rows={5} className="w-full px-3 py-2 border rounded-lg bg-transparent text-white" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {message && (
            <p className={`mt-4 text-center ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {message.text}
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
}

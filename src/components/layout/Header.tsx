"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-90 text-white z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image src="/images/dlogo.png" alt="Dominion Media" width={150} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
            <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-950 bg-opacity-95 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-10">
          <Link href="/" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>Home</Link>
          <Link href="/about" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>About</Link>
          <Link href="/blog" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>Blog</Link>
          <Link href="/services" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>Services</Link>
          <Link href="/portfolio" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>Portfolio</Link>
          <Link href="/contact" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

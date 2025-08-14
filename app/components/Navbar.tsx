// components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Heart, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '/cleanliness', label: 'Cleanliness' },
    { href: '/about', label: 'About Me' },
    { href: '/tips-faq', label: 'Tips & FAQ' },
    { href: '/contact', label: 'Contact' }
  ];

  const obfuscatedPhone = `${String.fromCharCode(56, 48, 49)}-${String.fromCharCode(53, 48, 51)}-${String.fromCharCode(55, 55, 48, 51)}`;

  return (
    <header className="top-0 left-0 right-0 bg-complex-gradient backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="/" className="relative">
              <Image
                src="/carlas_candy_creations_logo_main.webp"
                alt="Carla's Candy Creations Logo"
                width={143}
                height={93}
                className="object-cover"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link-shimmer text-white/95 transition-all duration-300 font-serif font-semibold text-xl relative group hover:text-white"
              >
                {link.label}
                <Heart className="absolute -top-2 -right-2 w-3 h-3 text-pink-300 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
              </a>
            ))}
            
            {/* Phone Icon */}
            <a href={`tel:${obfuscatedPhone}`} className="flex items-center bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 group">
              <Phone className="w-5 h-5" />
            </a>
            
            {/* Classes CTA Button */}
            <a href="/classes" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Classes
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="bg-gradient-to-br from-white/60 to-pink-50/50 backdrop-blur-md rounded-2xl p-4 space-y-2 shadow-xl border border-white/40">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block text-purple-700 hover:text-purple-900 transition-all duration-300 font-serif font-semibold text-lg py-2 px-4 rounded-lg hover:bg-white/40 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  {link.label}
                  <Heart className="w-4 h-4 text-pink-400 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                </div>
              </a>
            ))}
            
            {/* Mobile Phone Link */}
            <a 
              href={`tel:${obfuscatedPhone}`} 
              onClick={closeMenu} 
              className="flex items-center text-purple-700 hover:text-purple-900 transition-all duration-300 font-serif font-semibold text-lg py-2 px-4 rounded-lg hover:bg-white/40 group"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>Call</span>
            </a>
            
            {/* Mobile Classes CTA */}
            <a 
              href="/classes" 
              onClick={closeMenu} 
              className="block bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full text-center mt-3 shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
            >
              Classes
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
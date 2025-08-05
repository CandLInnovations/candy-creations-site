// components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#classes', label: 'Classes' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="top-0 left-0 right-0 bg-complex-gradient backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/carlas_candy_creations_logo_main.webp"
                alt="Carla's Candy Creations Logo"
                width={143}
                height={93}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link-shimmer text-white/90 transition-all duration-300 font-serif font-medium text-lg relative group"
              >
                {link.label}
                <Heart className="absolute -top-2 -right-2 w-3 h-3 text-pink-300 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
              </a>
            ))}
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
            ? 'max-h-64 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block nav-link-shimmer text-white/90 transition-all duration-300 font-serif font-medium text-lg py-2 px-4 rounded-lg hover:bg-white/20 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  {link.label}
                  <Heart className="w-4 h-4 text-pink-300 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                </div>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
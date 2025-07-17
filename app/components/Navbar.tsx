// components/Navbar.tsx
'use client';

import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/carlas_candy_creations_logo_main.webp"
              alt="Carla's Candy Creations Logo"
              width={143}
              height={93}
              className="rounded-full"
              priority
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">Home</a>
            <a href="#classes" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">Classes</a>
            <a href="#about" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">About</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
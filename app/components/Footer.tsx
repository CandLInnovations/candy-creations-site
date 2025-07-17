// components/Footer.tsx
import React from 'react';
import { Heart, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <div className="bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full p-2">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold">Carla's Candy Creations</h4>
              </div>
              <p className="text-gray-400">
                Continuing the sweet tradition of Grandma Effie since 1897
              </p>
            </div>
            
            <div className="text-center">
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <div className="space-y-2">
                <a href="#classes" className="block text-gray-400 hover:text-purple-400 transition-colors">Candy Classes</a>
                <a href="#about" className="block text-gray-400 hover:text-purple-400 transition-colors">About Carla</a>
                <a href="#contact" className="block text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h5 className="font-semibold mb-4">Connect With Us</h5>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-end">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-gray-400">info@carlascandycreations.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-gray-400">Call for class info</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Carla's Candy Creations. All rights reserved. | Made with ❤️ for sweet learning
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Star, Book, Users, BookOpen, Cookie, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: ''
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images for rotation
  const backgroundImages = [
    '/fondant_candy_center_cooking_with_thermometer.png',
    '/chocolate_melting_on_toffee.jpg',
    '/pouring_caramel_almonds.jpg',
    '/roasted_almonds_tray.jpg',
    '/reaching_for_toffee.jpg'
  ];

  // Rotate background images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll be in touch soon about upcoming classes.');
    setFormData({ name: '', email: '', phone: '', interests: '' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Rotating Background */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Candy making process ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 pt-48 md:pt-0">
          <div className="mb-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-4 mb-6">
              <Cookie className="w-12 h-12 text-white" />
            </div>
            <h2 className="hero-title font-bold mb-6 leading-tight drop-shadow-2xl">
              Become A Chocolatier <span className="text-purple-300">Extraordinaire</span>
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 mb-8">
            <p className="text-xl mb-6 leading-relaxed drop-shadow">
              Learn the time-honored art of candy making in a warm, welcoming environment. 
              Our hands-on classes teach you everything from basic techniques to advanced chocolate crafting, 
              all while sharing stories and creating sweet memories together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#classes" className="btn-primary">
                <BookOpen className="w-5 h-5 mr-2" />
                View Candy Classes
              </a>
              <a href="#contact" className="btn-secondary bg-white/20 border-white text-white hover:bg-white hover:text-purple-600">
                <Heart className="w-5 h-5 mr-2" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three Main Sections */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Creative Inspiration */}
              <div className="card">
                <div className="mb-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/grandma_effie_inspiration.webp"
                      alt="Creative inspiration - vintage candy making"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="icon-badge mr-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Creative Inspiration</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-purple-600 font-bold text-lg">1897 - Present</p>
                  <p className="text-gray-700 leading-relaxed">
                    My Grandma Effie was, and still is, my greatest creative inspiration. She always had pots of geraniums 
                    lining the kitchen window sill, and she made the best pancakes in the world!!!
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Grandma Effie loved gardening, sewing, crocheting and tatting. She loved making all kinds of candy 
                    and took a candy course through the mail circa 1920-1930.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    I loved exploring her sewing room as a child and so wanted to be just like my Grandma Effie.
                  </p>
                </div>
              </div>

              {/* Fondant Centers */}
              <div className="card">
                <div className="mb-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/fondant.webp"
                      alt="Fondant centers being made"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="icon-badge mr-4">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Fondant Centers</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Master the art of creating smooth, creamy fondant centers that melt perfectly in your mouth. 
                    Learn traditional techniques passed down through generations.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    From classic vanilla and chocolate to exotic fruit flavors, discover how to create 
                    professional-quality fondant that forms the heart of exceptional chocolates.
                  </p>
                  <div className="mt-6">
                    <div className="bg-white/70 rounded-lg p-4">
                      <p className="text-sm text-gray-600 italic">
                        "The fondant technique Carla taught me has transformed my candy making completely!" - Sarah M.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Candy Cookbook */}
              <div className="card">
                <div className="mb-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/pecan_logs_sliced.webp"
                      alt="Vintage candy cookbook and recipes"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="icon-badge mr-4">
                      <Book className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Candy Cookbook</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Take home a treasure trove of family recipes and techniques. Our comprehensive cookbook 
                    includes step-by-step instructions for all the classics.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    From Grandma Effie's original caramel recipe to modern chocolate tempering techniques, 
                    you'll have everything you need to continue your candy making journey at home.
                  </p>
                  <div className="mt-6">
                    <div className="bg-white/70 rounded-lg p-4">
                      <p className="text-sm text-purple-600 font-semibold">
                        ✨ Includes over 50 family recipes
                      </p>
                      <p className="text-sm text-purple-600 font-semibold">
                        ✨ Professional tips and troubleshooting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Interest Form */}
      <section id="classes" className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full p-4 mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="section-title font-bold text-gray-800 mb-4">Join Our Sweet Community</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Interested in learning the art of candy making? Fill out the form below to be notified 
                about upcoming classes and special workshops. Let's create something sweet together!
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="interests" className="block text-sm font-semibold text-gray-700 mb-2">
                    What interests you most about candy making?
                  </label>
                  <textarea
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-textarea"
                    placeholder="Tell us about your interests, experience level, or any specific techniques you'd like to learn..."
                  />
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn-primary">
                    <Heart className="w-5 h-5 mr-2 inline" />
                    Get Class Updates
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Aprons Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full p-4 mb-6">
              <Star className="w-12 h-12 text-white" />
            </div>
            <h3 className="section-title font-bold text-gray-800 mb-6">Custom Embroidered Aprons</h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Complete your candy making experience with a beautiful custom embroidered apron. 
              Perfect for classes or as a thoughtful gift for the candy maker in your life.
            </p>
            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="bg-white/70 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Personalized</h4>
                  <p className="text-sm text-gray-600">Add your name or special message</p>
                </div>
                <div>
                  <div className="bg-white/70 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Quality Fabric</h4>
                  <p className="text-sm text-gray-600">Durable and comfortable for all-day wear</p>
                </div>
                <div>
                  <div className="bg-white/70 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Book className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Professional</h4>
                  <p className="text-sm text-gray-600">Look the part of a skilled candy maker</p>
                </div>
              </div>
              <div className="mt-8">
                <button className="btn-primary">
                  Order Custom Apron
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
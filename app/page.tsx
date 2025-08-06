// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Star, Book, Users, BookOpen, Cookie, Sparkles, Menu, X, Candy } from 'lucide-react';
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll be in touch soon about upcoming classes.');
    setFormData({ name: '', email: '', phone: '', interests: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Navbar />

      {/* Light & Airy Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-4 mb-6 animate-bounce">
                  <Candy className="w-12 h-12 text-white" />
                </div>
                <h1 className="hero-title font-display text-6xl lg:text-7xl mb-6 leading-tight bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Become a Chocolatier Extraordinaire
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-serif">
                  Join our magical candy-making family where Grandma Effie's legacy lives on through 
                  warm hands, sweet stories, and delicious creations made with love.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#classes" className="btn-primary">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Classes
                </a>
                <a href="#contact" className="btn-secondary">
                  <Heart className="w-5 h-5 mr-2" />
                  Join Our Family
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/salted_carmel_chocolate_tray.webp"
                  alt="Beautiful handcrafted chocolates"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
              </div>
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full p-3 animate-pulse">
                <Candy className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Story Cards */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title font-display text-5xl mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Our Sweet Story
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-serif">
              Every candy tells a story, and ours began with a grandmother's love and a dream to share sweetness with the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Grandma Effie Story */}
            <div className="story-card group">
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <Image
                  src="/grandma_effie_inspiration.webp"
                  alt="Grandma Effie's inspiration"
                  width={400}
                  height={300}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Since 1897
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="icon-badge-soft mr-4">
                  <Heart className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-3xl font-display text-gray-800">Grandma Effie's Legacy</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-serif mb-4">
                With geraniums lining her kitchen windowsill and the aroma of the world's best pancakes 
                filling the air, Grandma Effie was pure magic in the kitchen.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-serif">
                Her mail-order candy course from the 1920s became the foundation of techniques we still 
                cherish and teach today.
              </p>
            </div>

            {/* Fondant Mastery */}
            <div className="story-card group">
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <Image
                  src="/fondant.webp"
                  alt="Artisan fondant creation"
                  width={400}
                  height={300}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Master Class
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="icon-badge-soft mr-4">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-3xl font-display text-gray-800">Silky Smooth Fondant</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-serif mb-4">
                Learn the gentle art of creating fondant that melts like a dream and carries flavors 
                from classic vanilla to exotic passion fruit.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-base text-purple-700 italic font-serif">
                  "Carla's fondant technique changed everything for me!" - Sarah M.
                </p>
              </div>
            </div>

            {/* Recipe Collection */}
            <div className="story-card group">
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <Image
                  src="/pecan_logs_sliced.webp"
                  alt="Artisan pecan logs"
                  width={400}
                  height={300}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    50+ Recipes
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="icon-badge-soft mr-4">
                  <Book className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="text-3xl font-display text-gray-800">Family Recipe Treasury</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-serif mb-4">
                Take home a collection of time-tested family recipes, complete with all the little 
                secrets that make the difference between good and extraordinary.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-base text-indigo-600 font-semibold">
                  <Star className="w-4 h-4 mr-2" />
                  Original caramel secrets
                </div>
                <div className="flex items-center text-base text-indigo-600 font-semibold">
                  <Star className="w-4 h-4 mr-2" />
                  Chocolate tempering mastery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Interest Form */}
      <section id="classes" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-4 mb-6">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h3 className="section-title font-display text-5xl text-gray-800 mb-4">Join Our Sweet Family</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-serif">
              Ready to create magic in the kitchen? Let us know what sweet adventures you're dreaming of!
            </p>
          </div>
          
          <div className="form-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 font-serif">
                    Your Sweet Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="What should we call you?"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-serif">
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
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 font-serif">
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
                <label htmlFor="interests" className="block text-sm font-semibold text-gray-700 mb-2 font-serif">
                  What's your candy-making dream?
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleInputChange}
                  rows={4}
                  className="form-textarea"
                  placeholder="Tell us about your sweet dreams, experience level, or any specific techniques you'd love to master..."
                />
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn-primary">
                  <Heart className="w-5 h-5 mr-2" />
                  Count Me In!
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Custom Aprons with More Images */}
      <section className="py-20 bg-white/80">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full p-4 mb-6">
              <Star className="w-12 h-12 text-white" />
            </div>
            <h3 className="section-title font-display text-5xl text-gray-800 mb-6">Look the Part</h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-serif">
              Complete your candy-making journey with a beautiful custom apron that's as unique as your creations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/purple-chocolate-box.webp"
                  alt="Custom embroidered aprons"
                  width={500}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="icon-badge-soft flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-display text-2xl text-gray-800 mb-2">Personalized Just for You</h4>
                  <p className="text-gray-700 font-serif">Add your name, a special message, or choose from our collection of sweet designs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="icon-badge-soft flex-shrink-0">
                  <Heart className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-display text-2xl text-gray-800 mb-2">Premium Quality</h4>
                  <p className="text-gray-700 font-serif">Made from durable, comfortable fabric that keeps you looking professional through every messy, magical moment.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="icon-badge-soft flex-shrink-0">
                  <Star className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <h4 className="font-display text-2xl text-gray-800 mb-2">Perfect Gift</h4>
                  <p className="text-gray-700 font-serif">Surprise the candy lover in your life with a thoughtful, personalized apron they'll treasure.</p>
                </div>
              </div>
              
              <div className="pt-4">
                <button className="btn-primary">
                  Design My Apron
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action with Image */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="relative mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-md">
              <Image
                src="/tree_box_hand_dipped_chocolates_home.webp"
                alt="Beautiful handcrafted chocolates ready to enjoy"
                width={400}
                height={300}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
            </div>
          </div>
          
          <h3 className="section-title font-display text-5xl text-gray-800 mb-6">Your Sweet Adventure Awaits</h3>
          <p className="text-xl text-gray-700 mb-8 font-serif leading-relaxed">
            Join our family of candy makers and discover the joy of creating something truly special with your own hands.
          </p>
          <a href="#classes" className="btn-primary text-lg px-8 py-4">
            <Cookie className="w-6 h-6 mr-3" />
            Start My Sweet Journey
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
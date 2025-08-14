'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Star, Book, Users, Sparkles, Cookie, Crown, Baby } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  const achievements = [
    {
      icon: <Baby className="w-6 h-6" />,
      title: "A Fighter from the Start",
      description: "Born weighing only 3 lbs but came out with a fierce desire for adventure"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Mother of Nine",
      description: "Grandmother of twenty - my greatest creations"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "120 lbs of Chocolates",
      description: "Hand-dipped chocolates made every year with love"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Hundreds of Students",
      description: "Taught candy-making classes and met fantastic people over the years"
    }
  ];

  const specialties = [
    "Hand dipped chocolates",
    "Caribou Crunch popcorn", 
    "Chocolate dipped strawberries",
    "Thin mint sandwiches",
    "Pecan logs",
    "Caramel apples"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-4 mb-6 animate-bounce">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h1 className="hero-title font-display text-6xl lg:text-7xl mb-6 leading-tight bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Meet Carla
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed font-serif max-w-3xl mx-auto">
              Hello wonderful people! My name is Carla Jean.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="scalloped-frame shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/grandma_effie_inspiration.webp"
                  alt="Carla Jean and her candy-making inspiration"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <div className="story-card">
                <h2 className="text-4xl font-display text-gray-800 mb-6">My Sweet Journey</h2>
                <div className="space-y-4 text-lg text-gray-700 font-serif leading-relaxed">
                  <p>
                    I weighed only 3 lbs when I was born, and was sickly as a child but came out of that with a fierce desire for adventure. I am a Mother of nine and Grandmother of twenty, retired and love to create in lots of ways.
                  </p>
                  <p>
                    My favorite was of course creating my family, but a close second is creating mouth watering confections that are right up there with the best in the world!!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grandma Effie Legacy */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title font-display text-5xl text-gray-800 mb-6">Grandma Effie's Legacy</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-serif">
              The heart and soul of everything I do traces back to one incredible woman
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="story-card">
                <div className="space-y-4 text-lg text-gray-700 font-serif leading-relaxed">
                  <p>
                    My Grandma Effie was my inspiration for wanting to learn the art of making candy. She loved learning, and instilled that love in her children and grandchildren.
                  </p>
                  <p>
                    My Mother talked about how Grandma dipped centers in Chocolate with a special dipping fork. We made and ate caramels and divinity using her recipes. Most of all we had fun in the process.
                  </p>
                  <p>
                    We didn't live close to my Grandma Effie so time spent with her was limited to a few short vacations a year. Sadly she passed away when I was sixteen years old, so I didn't get to learn much from her.
                  </p>
                  <p className="text-purple-700 font-semibold">
                    But the seed was planted, and after all I wanted to be just like my beloved grandma.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="scalloped-frame shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/fondant.webp"
                  alt="Traditional candy making techniques from Grandma Effie"
                  width={500}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey to Mastery */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title font-display text-5xl text-gray-800 mb-6">The Path to Chocolatier</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="scalloped-frame shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/pecan_logs_sliced.webp"
                  alt="Carla's handcrafted pecan logs"
                  width={500}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="story-card">
                <div className="space-y-4 text-lg text-gray-700 font-serif leading-relaxed">
                  <p>
                    The time I spent with her was enough get my heart set on being a chocolatier. She passed March 17th, 1971. It's been forty-one years now since I got real serious about perfecting this art.
                  </p>
                  <p>
                    Since then I have taught hundreds of classes and met so many fantastic people over the years. I love teaching others and pass on the art of candy making, and thoroughly enjoy the process from start to finish.
                  </p>
                  <p>
                    I have learned tricks from others, and perfected the art through trial and error. Making candy is a hobby that I truly love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title font-display text-5xl text-gray-800 mb-6">Sweet Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="story-card group">
                <div className="flex items-start space-x-4">
                  <div className="icon-badge-soft flex-shrink-0">
                    <div className="text-purple-500">
                      {achievement.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-gray-800 mb-3">{achievement.title}</h3>
                    <p className="text-lg text-gray-700 font-serif">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Specialties */}
          <div className="story-card text-center">
            <h3 className="text-3xl font-display text-gray-800 mb-6">Annual Creations</h3>
            <p className="text-lg text-gray-700 font-serif mb-6">
              I make around 120 lbs. of hand dipped chocolates per year, and other candy including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specialties.map((specialty, index) => (
                <div key={index} className="flex items-center justify-center bg-purple-50 rounded-full py-3 px-6">
                  <Star className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-purple-700 font-serif font-semibold">{specialty}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 font-serif mt-6 italic">
              Each year brings a new grand adventure of learning new tricks and making new friends.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="section-title font-display text-5xl text-gray-800 mb-6">Join Our Sweet Family</h3>
          <p className="text-xl text-gray-700 mb-8 font-serif leading-relaxed">
            Let's continue Grandma Effie's legacy together and create something magical with our hands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/classes" className="btn-primary">
              <Cookie className="w-5 h-5 mr-2" />
              View Classes
            </a>
            <a href="/contact" className="btn-secondary">
              <Heart className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
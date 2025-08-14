'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Heart, Check, Crown, Utensils, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CleanlinessPag() {
  const commandments = [
    {
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      title: "Thou Shalt Eat Fudge",
      content: "This is at the top, obvi! 🍫",
      special: true
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: "Thou shalt clean your creative space",
      content: "Creating in a clean space is THE MOST IMPORTANT COURTESY. I say courtesy, because we are trusting each other to keep a clean space while creating delicious confections to share with our loved ones. Clean counter tops, clean aprons, clean clothes, clean equipment, clean spaces."
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Thou shalt wash your hands",
      content: "Thoroughly, like a surgeon, under your nails and everything. It is extremely important to keep your hands clean by washing them several times throughout the candy making process."
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: "Thou shalt keep your hair up/back",
      content: "Keeping hair tied back in a bun is great, or if your hair is too short to get into a bun, it's best to wear a hairnet. Doing both is also an option if your hair doesn't like to behave. Beard nets are also a must for facial hair."
    },
    {
      icon: <Check className="w-8 h-8 text-green-500" />,
      title: "Thou shalt keep nails short",
      content: "No polish, no faux. If you prefer to keep your nails long, you will need to wear gloves. I keep gloves on hand during classes, but you may want to grab a box of fitted, food safe gloves, best for your hand size."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Thou shalt not create candy while contagious",
      content: "If you have a seasonal cold/flu, please stay home while you are in the contagious, yucky part. Sometimes a cough can linger, but you are no longer actually sick. In that case please wear a mask while candy creating. Please contact me for a Zoom link to any class you would have to miss due to illness."
    },
    {
      icon: <Utensils className="w-8 h-8 text-orange-500" />,
      title: "Thou shalt wear candy appropriate clothing",
      content: "Please consider your clothing while attending candy classes, fuzzy sweaters and even some flannels can leave little \"gifts\" in centers and chocolate. Checking for stray hairs and lint before creating at home or in class is a great habit!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-4 mb-6 animate-bounce">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h1 className="hero-title font-display text-6xl lg:text-7xl mb-6 leading-tight bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Candy Creation Commandments
            </h1>
            <p className="text-2xl text-purple-600 mb-4 font-serif italic">
              AKA CLEANLINESS PROTOCOLS
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-serif max-w-3xl mx-auto">
              These sacred rules ensure every sweet creation is made with love, care, and the highest standards of cleanliness.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative mx-auto max-w-2xl">
            <div className="scalloped-frame shadow-2xl">
              <Image
                src="/fondant_candy_center_cooking_with_thermometer.png"
                alt="Clean candy making workspace with thermometer"
                width={800}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commandments Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commandments.map((commandment, index) => (
              <div key={index} className={`story-card group ${commandment.special ? 'border-4 border-yellow-300 bg-gradient-to-br from-yellow-50 to-amber-50' : ''}`}>
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`icon-badge-soft flex-shrink-0 ${commandment.special ? 'bg-gradient-to-r from-yellow-200 to-amber-200 border-yellow-400' : ''}`}>
                    {commandment.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-display mb-3 ${commandment.special ? 'text-yellow-700' : 'text-gray-800'}`}>
                      {commandment.title}
                    </h3>
                    <p className={`text-lg leading-relaxed font-serif ${commandment.special ? 'text-yellow-600 font-bold text-xl' : 'text-gray-700'}`}>
                      {commandment.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="section-title font-display text-5xl text-gray-800 mb-6">Ready to Create Magic?</h3>
          <p className="text-xl text-gray-700 mb-8 font-serif leading-relaxed">
            Follow these commandments and you'll be ready to create the most delicious, professional candy creations!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/classes" className="btn-primary">
              <Sparkles className="w-5 h-5 mr-2" />
              View Our Classes
            </a>
            <a href="/contact" className="btn-secondary">
              <Heart className="w-5 h-5 mr-2" />
              Ask Questions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
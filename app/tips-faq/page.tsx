'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BookOpen, Heart, Thermometer, Scale, ChevronDown, ChevronUp, MapPin, Clock, DollarSign, Users, Utensils, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TipsFaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tips = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Candy Journal",
      description: "Keep track of temperature, consistency, ingredient tweaks, favorite ingredient types and brands, and general candy history.",
      color: "purple"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Batch Weight",
      description: "Use a kitchen scale to weigh your candy after it has turned, this will tell you how much chocolate you need to cover the fondant when dipping. You will need the same weight in chocolate as the weight of your batch, e.g. if your batch of fudge weighs 4 lbs, you will need approximately 4 lbs of chocolate. For proper dipping you will need to use 3-5 lbs of chocolate as a base. You can reuse this chocolate as long as it is kept clean and properly stored.",
      color: "pink"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Temperature",
      description: "A good thermometer and correct temperature for your elevation are imperative. Find your exact elevation, (grab an elevation finder app for your phone) then use this chart (chart coming soon) to find the appropriate temperature for the type of candy you are creating. Journal your temps and consistencies to fine tune the recipes for your location. You will find many different charts online for candy making temps, this is the chart I follow, but you will want to make adjustments for your area, and keep track of what works best for you. For every 1,000 feet elevation above sea level, decrease the temperature in the recipe by 2˚F.",
      color: "indigo"
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Don't Scrape Your Pan",
      description: "Resist the temptation to scrape the candy off the side of your pan while pouring onto the slab. Scraping the pan greatly increases the chances of your batch turning to sugar. All is not lost if your batch does turn, I teach how to save your fondant in my centers classes.",
      color: "red"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Slab Size",
      description: "18x22 is my favorite size for a marble slab. It is easy to move and fits in most sinks for cleaning. You can often pick one up for a discount from a stone countertop company. Marble is the best surface for cooling and turning candy. People often ask if they could use granite, quartz or a composite, but they are too porous, can crack with heat, and/or don't hold the chill as well.",
      color: "green"
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Marble Slab Cheat",
      description: "If you don't have a marble slab, cool a 9x13 or larger pyrex casserole dish in the fridge.",
      color: "yellow"
    }
  ];

  const faqs = [
    {
      question: "What equipment do I need to get started with candy making?",
      answer: "For beginners, you'll need a good candy thermometer, a heavy-bottomed saucepan, a marble slab (or chilled Pyrex dish), wooden spoons, and a kitchen scale. As you advance, you may want to invest in chocolate tempering equipment and professional molds."
    },
    {
      question: "How do I know if my chocolate is properly tempered?",
      answer: "Properly tempered chocolate will have a glossy finish, snap cleanly when broken, and won't develop white spots (bloom) when stored. It should set within 3-5 minutes at room temperature. If it's streaky or takes longer to set, it needs to be re-tempered."
    },
    {
      question: "Why did my fondant turn grainy or sugary?",
      answer: "This usually happens when sugar crystals form during cooking. Common causes include stirring while cooking, scraping the sides of the pan, or cooking at too high a temperature. The good news is that grainy fondant can often be saved! I teach recovery techniques in my classes."
    },
    {
      question: "How long do hand-dipped chocolates last?",
      answer: "When stored properly in a cool, dry place (60-70°F), hand-dipped chocolates typically last 2-4 weeks. Cream-filled centers should be consumed within 1-2 weeks, while hard centers like toffee can last up to a month. Avoid refrigeration as it can cause bloom."
    },
    {
      question: "Can I make candy in humid weather?",
      answer: "Humidity is candy's enemy! High humidity can prevent proper setting and cause texture issues. If you must make candy on humid days, use air conditioning or a dehumidifier, and avoid making delicate items like divinity or meringue-based centers."
    },
    {
      question: "What's the difference between different types of chocolate for dipping?",
      answer: "Dark chocolate (60-70% cacao) is easiest for beginners and has the best snap. Milk chocolate is sweeter but requires more careful tempering. White chocolate is technically not chocolate and can be tricky to work with. I recommend starting with high-quality dark chocolate."
    },
    {
      question: "How do I adjust recipes for my altitude?",
      answer: "For every 1,000 feet above sea level, decrease cooking temperature by 2°F. You may also need to reduce cooking time slightly. Keep detailed notes in your candy journal to perfect recipes for your location."
    },
    {
      question: "Can I substitute ingredients in candy recipes?",
      answer: "Candy making is more like chemistry than cooking - substitutions can dramatically affect results. Stick to recipes exactly until you understand how each ingredient functions. Then you can experiment with small changes while keeping detailed notes."
    },
    {
      question: "What should I do if I don't have a marble slab?",
      answer: "A chilled Pyrex dish works well for small batches. You can also use a large, chilled metal baking sheet. The key is having a surface that conducts heat away from the candy quickly to help it set properly."
    },
    {
      question: "How far in advance can I make candy for gifts?",
      answer: "It depends on the type! Hard candies and toffee can be made 2-3 weeks ahead. Chocolate-dipped items are best within 1-2 weeks. Cream centers should be made no more than 1 week ahead. Always store in airtight containers in cool, dry conditions."
    },
    {
      question: "What's the most common beginner mistake?",
      answer: "Rushing the process! Candy making requires patience. Don't increase heat to speed things up, don't stir when the recipe says not to, and always let things cool and set properly. Good candy takes time."
    },
    {
      question: "Do you offer private or group classes?",
      answer: "Yes! I offer both private lessons and group classes. Private sessions can be customized to your interests and skill level. Group classes are perfect for parties or team building. Contact me to discuss your needs and schedule."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-400 to-indigo-500 text-purple-600",
      pink: "from-pink-400 to-rose-500 text-pink-600", 
      indigo: "from-indigo-400 to-blue-500 text-indigo-600",
      yellow: "from-yellow-400 to-orange-500 text-yellow-600",
      green: "from-green-400 to-emerald-500 text-green-600",
      red: "from-red-400 to-rose-500 text-red-600"
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-4 mb-6 animate-bounce">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            <h1 className="hero-title font-display text-6xl lg:text-7xl mb-6 leading-tight bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Tips & FAQ
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed font-serif max-w-3xl mx-auto">
              Essential wisdom for your candy-making journey, from beginner basics to advanced techniques
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title font-display text-5xl text-gray-800 mb-6">Essential Tips</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-serif">
              These tried-and-true tips will help you create perfect candy every time
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="story-card group">
                <div className="flex items-start space-x-4">
                  <div className={`icon-badge-soft flex-shrink-0 bg-gradient-to-r ${getColorClasses(tip.color).split(' ').slice(0, 2).join(' ')}`}>
                    <div className="text-white">
                      {tip.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display text-gray-800 mb-3">{tip.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed font-serif">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative mx-auto max-w-2xl">
            <div className="scalloped-frame shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/salted_carmel_chocolate_tray.webp"
                alt="Professional candy making setup"
                width={800}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="section-title font-display text-5xl text-gray-800 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-serif">
              Common questions from fellow chocolatiers and candy enthusiasts
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="story-card">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-xl font-display text-gray-800 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-purple-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-purple-500" />
                    )}
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="mt-4 pt-4 border-t border-purple-100">
                    <p className="text-lg text-gray-700 leading-relaxed font-serif">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="section-title font-display text-5xl text-gray-800 mb-6">Still Have Questions?</h3>
          <p className="text-xl text-gray-700 mb-8 font-serif leading-relaxed">
            Don't hesitate to reach out! I love helping fellow candy makers succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              <Heart className="w-5 h-5 mr-2" />
              Ask a Question
            </a>
            <a href="/classes" className="btn-secondary">
              <BookOpen className="w-5 h-5 mr-2" />
              Join a Class
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
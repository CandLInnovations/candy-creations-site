'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BookOpen, Heart, Star, Cookie, Clock, DollarSign, Users, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ClassesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    classInterest: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll be in touch soon about upcoming classes.');
    setFormData({ name: '', email: '', phone: '', classInterest: '', message: '' });
  };

  const classes = [
    {
      title: "Fondant Centers Class",
      duration: "4 Weeks",
      price: "$140",
      image: "/fondant.webp",
      description: "The Fondant Centers Class includes instruction on making a variety of candy centers including; creams, fudge, toffee, caramels, and truffles. Instruction on tempering and hand dipping.",
      details: [
        "Learn how to make centers for dipping made with cream and sugar, the way Grandma Effie did it",
        "Learn how to keep fondant from going to sugar and if it does then you will learn how to save it", 
        "The only way to ruin a batch is to burn it",
        "Learn how to figure out what temperature to cook any candy at any altitude",
        "Discover the ingredients I use to make some of the best centers in the world"
      ],
      icon: <Heart className="w-6 h-6" />,
      color: "purple"
    },
    {
      title: "Toffee Class",
      duration: "1 Evening",
      price: "$25",
      image: "/pecan_logs_sliced.webp",
      description: "Toffee can be intimidating; come join the fun in a 1 night candy instruction class, where you make a batch of toffee with your favorite nuts to take home.",
      details: [
        "This is a BYOI (bring your own ingredients) class",
        "I will send you an ingredients list and other class information when you sign up",
        "Perfect for beginners who want to start with something achievable",
        "Take home a full batch of delicious toffee"
      ],
      icon: <Cookie className="w-6 h-6" />,
      color: "pink"
    },
    {
      title: "Chocolate Dipped Strawberries",
      duration: "1 Evening", 
      price: "$25",
      image: "/salted_carmel_chocolate_tray.webp",
      description: "Join us for an intimate class of no more than six people, to create beautifully dipped strawberries in a variety of colors.",
      details: [
        "Featuring the nearest holiday theme, such as Valentines Day, Mothers Day, Easter, or any occasion",
        "You can use any color to create! For example: Frozen themed strawberries, Olaf to be specific",
        "You can request a group class for your friends and/or family",
        "Individual classes available for special occasions"
      ],
      icon: <Star className="w-6 h-6" />,
      color: "indigo"
    },
    {
      title: "Caribou Crunch",
      duration: "1 Evening",
      price: "$25", 
      image: "/purple-chocolate-box.webp",
      description: "This is the best caramel/white chocolate covered popcorn recipe that you will find. It is a family favorite, without as much work as fondant centers and dipping.",
      details: [
        "Caramel popcorn made with my favorite recipe",
        "Add your favorite nuts along with some marshmallows",
        "Everything is covered with white chocolate and finished with drizzled milk and dark chocolate",
        "Learn how to make caramel and the process of coating the popcorn, along with tips and tricks",
        "Create your very own cookie sheet of goodness to take home"
      ],
      icon: <Sparkles className="w-6 h-6" />,
      color: "yellow"
    },
    {
      title: "Thin Mint Sandwiches",
      duration: "1 Evening",
      price: "$25",
      image: "/tree_box_hand_dipped_chocolates_home.webp", 
      description: "This quick and easy class will show you how to make delicious thin mint sandwiches, better than you could ever get at the store.",
      details: [
        "Learn the secret to perfectly crispy cookies",
        "Master the art of the perfect mint filling",
        "Professional chocolate coating techniques",
        "Take home a box of your own creations"
      ],
      icon: <BookOpen className="w-6 h-6" />,
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-400 to-indigo-500 text-purple-600",
      pink: "from-pink-400 to-rose-500 text-pink-600", 
      indigo: "from-indigo-400 to-blue-500 text-indigo-600",
      yellow: "from-yellow-400 to-orange-500 text-yellow-600",
      green: "from-green-400 to-emerald-500 text-green-600"
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
              Confections Classes
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed font-serif max-w-3xl mx-auto">
              Below is a brief description of classes currently offered by Carla. Let me know what classes you are most interested in, so that I can make sure I'm offering the types of classes folks are most excited about!
            </p>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {classes.map((classItem, index) => (
              <div key={index} className="story-card group">
                <div className="relative mb-6">
                  <div className="scalloped-frame">
                    <Image
                      src={classItem.image}
                      alt={classItem.title}
                      width={500}
                      height={300}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`bg-gradient-to-r ${getColorClasses(classItem.color).split(' ').slice(0, 2).join(' ')} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                      {classItem.duration}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                      {classItem.price}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className={`icon-badge-soft mr-4 bg-gradient-to-r ${getColorClasses(classItem.color).split(' ').slice(0, 2).join(' ')}`}>
                    <div className="text-white">
                      {classItem.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-display text-gray-800">{classItem.title}</h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed font-serif mb-6">
                  {classItem.description}
                </p>
                
                <div className="space-y-3">
                  {classItem.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(classItem.color).split(' ').slice(0, 2).join(' ')} mt-2`}></div>
                      <p className="text-base text-gray-600 font-serif">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Interest Form */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-4 mb-6">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h3 className="section-title font-display text-5xl text-gray-800 mb-4">Ready to Learn?</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-serif">
              Specific class dates and times will be updated as they are added. Let me know what classes you're most interested in!
            </p>
          </div>
          
          <div className="form-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 font-serif">
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
                <label htmlFor="classInterest" className="block text-sm font-semibold text-gray-700 mb-2 font-serif">
                  Which class interests you most? *
                </label>
                <select
                  id="classInterest"
                  name="classInterest"
                  value={formData.classInterest}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                >
                  <option value="">Select a class...</option>
                  <option value="fondant-centers">Fondant Centers Class (4 Weeks - $140)</option>
                  <option value="toffee">Toffee Class (1 Evening - $25)</option>
                  <option value="strawberries">Chocolate Dipped Strawberries (1 Evening - $25)</option>
                  <option value="caribou-crunch">Caribou Crunch (1 Evening - $25)</option>
                  <option value="thin-mints">Thin Mint Sandwiches (1 Evening - $25)</option>
                  <option value="multiple">Multiple classes</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 font-serif">
                  Additional Questions or Comments
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="form-textarea"
                  placeholder="Tell us about your experience level, dietary restrictions, or any questions you have..."
                />
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn-primary">
                  <Heart className="w-5 h-5 mr-2" />
                  Sign Me Up!
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
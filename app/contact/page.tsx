'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, Heart, MapPin, Clock, Send, MessageCircle, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for reaching out! I\'ll get back to you within 24 hours.');
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      subject: '', 
      message: '', 
      preferredContact: 'email' 
    });
  };

  const obfuscatedPhone = `${String.fromCharCode(56, 48, 49)}-${String.fromCharCode(53, 48, 51)}-${String.fromCharCode(55, 55, 48, 51)}`;

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "carlascandycreations@proton.me",
      action: "mailto:carlascandycreations@proton.me",
      color: "purple"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: obfuscatedPhone,
      action: `tel:${obfuscatedPhone}`,
      color: "pink"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      content: "Within 24 hours",
      color: "indigo"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Utah, USA",
      color: "green"
    }
  ];

  const reasons = [
    "Ask about upcoming class schedules",
    "Inquire about private or group lessons", 
    "Get advice on candy-making techniques",
    "Request custom chocolate orders",
    "Learn about ingredient recommendations",
    "Share your candy-making success stories"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-400 to-indigo-500",
      pink: "from-pink-400 to-rose-500", 
      indigo: "from-indigo-400 to-blue-500",
      green: "from-green-400 to-emerald-500"
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
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h1 className="hero-title font-display text-6xl lg:text-7xl mb-6 leading-tight bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed font-serif max-w-3xl mx-auto">
              I'd love to hear from you! Whether you have questions about candy making, want to join a class, or just want to share your sweet creations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="story-card group text-center">
                <div className={`icon-badge-soft mx-auto mb-4 bg-gradient-to-r ${getColorClasses(info.color)}`}>
                  <div className="text-white">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-xl font-display text-gray-800 mb-2">{info.title}</h3>
                {info.action ? (
                  <a href={info.action} className="text-lg text-purple-600 hover:text-purple-700 transition-colors font-serif">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-lg text-gray-700 font-serif">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="form-card">
                <h2 className="text-4xl font-display text-gray-800 mb-6 text-center">Send Me a Message</h2>
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
                        placeholder="What should I call you?"
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
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2 font-serif">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    >
                      <option value="">What can I help you with?</option>
                      <option value="class-inquiry">Class Inquiry</option>
                      <option value="private-lesson">Private Lesson Request</option>
                      <option value="technique-question">Candy Making Question</option>
                      <option value="custom-order">Custom Order</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-semibold text-gray-700 mb-2 font-serif">
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either is fine</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 font-serif">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-textarea"
                      placeholder="Tell me about your candy-making dreams, questions, or how I can help you..."
                    />
                  </div>
                  
                  <div className="text-center">
                    <button type="submit" className="btn-primary">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Image and Info */}
            <div className="space-y-8">
              <div className="relative">
                <div className="scalloped-frame shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/tree_box_hand_dipped_chocolates_home.webp"
                    alt="Carla in her candy-making workspace"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="story-card">
                <h3 className="text-3xl font-display text-gray-800 mb-4">Why Reach Out?</h3>
                <div className="space-y-3">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-700 font-serif">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="story-card bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-display text-purple-700 mb-3">Personal Touch</h3>
                  <p className="text-lg text-purple-600 font-serif italic">
                    "I personally read and respond to every message. Your candy-making journey matters to me, and I'm here to help you succeed!"
                  </p>
                  <p className="text-base text-purple-500 font-serif mt-3">- Carla Jean</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="section-title font-display text-5xl text-gray-800 mb-6">Ready to Start Your Sweet Journey?</h3>
          <p className="text-xl text-gray-700 mb-8 font-serif leading-relaxed">
            Don't wait - the perfect time to start making candy is right now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/classes" className="btn-primary">
              <Heart className="w-5 h-5 mr-2" />
              View Classes
            </a>
            <a href={`tel:${obfuscatedPhone}`} className="btn-secondary">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
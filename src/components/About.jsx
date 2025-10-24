// components/About.jsx
import React from 'react';
import { Leaf, Award, Heart, Users, Sparkles, CheckCircle } from 'lucide-react';
import AboutImage from '../assets/about.png';

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Natural Ingredients',
      description: 'Made with fresh, organic vegetables and premium quality spices',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Traditional Recipe',
      description: 'Time-tested family recipes passed down through generations',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Made with Love',
      description: 'Handcrafted with care and attention to authentic taste',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Trusted',
      description: 'Loved by thousands of families across India',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const highlights = [
    'No Artificial Preservatives',
    'Handpicked Fresh Ingredients',
    'Traditional Sun-Drying Method',
    'Authentic Family Recipes'
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden" id="about">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-semibold text-orange-600">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Shilpi Achaar</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Shilpi Achaar brings you the authentic taste of traditional Indian pickles, 
                made with <span className="font-semibold text-orange-600">love and care</span> using time-honored family recipes. 
                Every jar is a celebration of India's rich culinary heritage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We use only the <span className="font-semibold text-orange-600">finest ingredients</span> and traditional preparation methods to 
                ensure that every bite delivers the perfect balance of spice, tang, and flavor 
                that makes our pickles truly special.
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                What Makes Us Special
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
                    <span className="text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center border border-orange-200">
                <p className="text-3xl font-bold text-orange-600 mb-1">100%</p>
                <p className="text-xs text-gray-600 font-medium">Authentic</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 text-center border border-red-200">
                <p className="text-3xl font-bold text-red-600 mb-1">Fresh</p>
                <p className="text-xs text-gray-600 font-medium">Ingredients</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center border border-green-200">
                <p className="text-3xl font-bold text-green-600 mb-1">❤️</p>
                <p className="text-xs text-gray-600 font-medium">Handmade</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-2xl"></div>
            
            {/* Image Container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl transform rotate-3 opacity-10"></div>
              <img
                src={AboutImage}
                alt="Traditional Pickle Making - Shilpi Achaar"
                className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-orange-200">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-full p-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Since</p>
                    <p className="text-xl font-bold text-gray-900">2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose <span className="text-orange-600">Us?</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-full shadow-lg`}>
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                
                {/* Hover Border Effect */}
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Experience Authentic Taste
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Shilpi Achaar for authentic, homemade Indian pickles
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

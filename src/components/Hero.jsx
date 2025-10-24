// components/Hero.jsx
import React from 'react';
import { MessageCircle, Phone, Sparkles, Award, Flame } from 'lucide-react';
import picklesheroImg from "../assets/pickles-hero.png";

const Hero = () => {
  const whatsappNumber = "919340309685";
  const whatsappMessage = "Hello Shilpi Achaar! I'm interested in your products.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-40 w-28 h-28 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      
      {/* Decorative Spice Icons - Floating */}
      <div className="absolute top-32 right-10 animate-float">
        <Flame className="w-8 h-8 text-orange-400 opacity-30" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float animation-delay-2000">
        <Sparkles className="w-10 h-10 text-red-400 opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-orange-200">
              <Award className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold text-gray-700">100% Authentic & Handmade</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4">
                Taste of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 animate-gradient">
                  Tradition
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
              Authentic homemade Indian pickles crafted with love and traditional recipes. 
              <span className="font-semibold text-orange-600"> Experience the spicy flavour in every bite!</span>
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200 text-sm font-medium text-gray-700">
                🌶️ Traditional Recipes
              </div>
              <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200 text-sm font-medium text-gray-700">
                🥭 Fresh Ingredients
              </div>
              <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200 text-sm font-medium text-gray-700">
                ❤️ Made with Love
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <MessageCircle className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Order on WhatsApp</span>
              </a>
              
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg border-2 border-orange-600 shadow-lg hover:bg-orange-50 transition-all duration-300 hover:scale-105 transform"
              >
                View Products
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5 text-orange-600" />
                <span className="font-semibold">+91 93403 09685</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Background Blobs */}
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-to-br from-orange-300 to-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-gradient-to-br from-red-300 to-red-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-yellow-300 to-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
            
            {/* Image Container with Enhanced Shadow */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 md:p-8 backdrop-blur-sm border border-white/50 transform hover:scale-105 transition-transform duration-500">
                <img
                  src={picklesheroImg}
                  alt="Shilpi Achaar Authentic Indian Pickles"
                  className="rounded-2xl w-full h-auto relative z-10"
                />
                
                {/* Floating Badge on Image */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-600 to-red-600 text-white px-6 py-3 rounded-full shadow-xl transform rotate-12 animate-bounce-slow">
                  <p className="text-sm font-bold">Fresh & Authentic</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm border border-orange-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-full p-3">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Spice Level</p>
                    <p className="text-lg font-bold text-gray-900">Traditional</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm border border-green-100 animate-float animation-delay-2000">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full p-3">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Quality</p>
                    <p className="text-lg font-bold text-gray-900">Premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

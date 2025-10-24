// components/Footer.jsx
import React from 'react';
import { Instagram, Phone, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "919340309685";
  const whatsappMessage = "Hello Shilpi Achaar! I'm interested in your products.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-2 rounded-lg">
                <span className="text-xl font-bold">SA</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Shilpi Achaar
                </h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Authentic taste of traditional Indian pickles, made with love and care using time-honored family recipes.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-orange-400">
              <span className="text-2xl">🌶️</span>
              <span className="font-semibold">Taste of Tradition</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-orange-600 transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  className="text-gray-400 hover:text-orange-600 transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-orange-600 transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-orange-600 transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 text-white">Our Products</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">🥭 Mango Pickle</li>
              <li className="text-gray-400">🌶️ Green Chili Pickle</li>
              <li className="text-gray-400">🥕 Mixed Vegetable</li>
              <li className="text-gray-400">🍋 Lemon Pickle</li>
              <li className="text-gray-400">🧄 Garlic Pickle</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 text-white">Get in Touch</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <a href="tel:+919340309685" className="hover:text-orange-600 transition-colors">
                  +91 93403 09685
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span>India</span>
              </div>
            </div>

            {/* Follow Us - Instagram Only */}
            <div>
              <h5 className="text-sm font-semibold mb-3 text-white">Follow Us</h5>
              <a
                href="https://www.instagram.com/shilpiachaar_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 group"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Order?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Experience the authentic taste of traditional Indian pickles. Order now via WhatsApp or call us directly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </a>
            <a
              href="tel:+919340309685"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold border-2 border-white hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105 transform"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Shilpi Achaar. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

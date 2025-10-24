// components/Contact.jsx
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const phoneNumber = "9340309685";
  const whatsappNumber = "919340309685";
  const whatsappMessage = "Hello Shilpi Achaar! I'm interested in your products.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:+91${phoneNumber}`;

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to order? Connect with us via call or WhatsApp for instant assistance!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Two Options - Call or WhatsApp */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            {/* Call Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
                <Phone className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with us for immediate assistance
              </p>
              <a
                href={callLink}
                className="inline-flex items-center justify-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <Phone className="w-5 h-5" />
                +91 93403 09685
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-6">
                Chat with us anytime on WhatsApp
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Additional Info Box */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Order Anytime
            </h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're available to take your orders and answer any questions about our authentic pickles. 
              Choose your preferred way to connect with us!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

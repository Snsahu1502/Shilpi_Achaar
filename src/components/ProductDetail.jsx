// components/ProductDetail.jsx
import React from 'react';
import { X, Flame, Leaf, Award, Clock, MessageCircle, Phone, CheckCircle } from 'lucide-react';

const ProductDetail = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  const whatsappNumber = "919340309685";
  const whatsappMessage = `Hello Shilpi Achaar! I'm interested in ${product.name}. Can you please provide more details?`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl pointer-events-auto transform transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Image Section */}
            <div className="relative bg-gradient-to-br from-orange-50 to-red-50 p-8 md:p-12">
              <div className="sticky top-8">
                {/* Product Image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl blur-2xl opacity-30"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                </div>

                {/* Spice Level */}
                <div className="mt-6 flex items-center justify-between bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-semibold text-gray-700">Spice Level:</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Flame
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.spiceLevel
                            ? 'text-red-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Authenticity Badge */}
                <div className="mt-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-4 text-white text-center">
                  <Award className="w-6 h-6 mx-auto mb-2" />
                  <p className="font-bold text-sm">100% Authentic Recipe</p>
                </div>
              </div>
            </div>

            {/* Right: Details Section */}
            <div className="p-8 md:p-12 space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                    Traditional
                  </span>
                  <span className="bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full">
                    Handmade
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              {/* Key Ingredients */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Key Ingredients
                </h3>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4">
                  <p className="text-gray-700 text-sm">{product.ingredients}</p>
                </div>
              </div>

              {/* Health Benefits */}
              {product.benefits && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Health Benefits</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Best Served With */}
              {product.usage && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Best Served With</h3>
                  <p className="text-gray-700 text-sm">{product.usage}</p>
                </div>
              )}

              {/* Shelf Life */}
              {product.shelfLife && (
                <div className="flex items-center gap-2 bg-blue-50 rounded-xl p-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Shelf Life</p>
                    <p className="text-sm text-gray-600">{product.shelfLife}</p>
                  </div>
                </div>
              )}

              {/* Divider */}
              <div className="border-t border-gray-200"></div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                >
                  <MessageCircle className="w-6 h-6" />
                  Order on WhatsApp
                </a>
                <a
                  href="tel:+919340309685"
                  className="flex items-center justify-center gap-3 w-full bg-orange-600 text-white py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-all duration-300 hover:scale-105 transform"
                >
                  <Phone className="w-6 h-6" />
                  Call to Order
                </a>
              </div>

              {/* Contact Info */}
              <div className="text-center text-sm text-gray-500">
                <p>Call us at <span className="font-semibold text-orange-600">+91 93403 09685</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

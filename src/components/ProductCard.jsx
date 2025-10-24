// components/ProductCard.jsx
import React, { useState } from 'react';
import { Flame, Info } from 'lucide-react';
import ProductDetail from './ProductDetail';

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, image, spiceLevel, description, ingredients } = product;

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Spice Level Indicator */}
          <div className="absolute bottom-4 left-4 flex gap-1 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
            {[...Array(spiceLevel)].map((_, i) => (
              <Flame key={i} className="w-4 h-4 text-red-500 fill-current" />
            ))}
            <span className="text-xs font-semibold text-gray-700 ml-1">Spicy</span>
          </div>

          {/* Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
            Traditional
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
          
          {/* Ingredients Preview */}
          {ingredients && (
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-gray-700 mb-1">Key Ingredients:</p>
              <p className="text-xs text-gray-600 line-clamp-1">{ingredients}</p>
            </div>
          )}

          {/* View Details Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 transform"
          >
            <Info className="w-5 h-5" />
            View Details
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetail 
        product={product} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ProductCard;

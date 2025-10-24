// components/ProductsSection.jsx
import React, { useState } from "react";
import ProductCard from "./ProductCard";

// Import images
import greenChiliImg from "../assets/green-chili.png";
import mangoPickleImg from "../assets/mango-pickle.png";
import mixedPickleImg from "../assets/mixed-pickle.png";
import lemonPickleImg from "../assets/lemon-pickle.png";

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Mango", "Chili", "Mixed", "Special"];

  const products = [
    {
      id: 1,
      name: "Green Chili Pickle",
      image: greenChiliImg,
      spiceLevel: 3,
      description:
        "Spicy and tangy green chili pickle made with authentic spices and traditional methods. Perfect companion for Indian meals, this pickle brings the heat and flavor to every bite.",
      ingredients: "Green chilies, mustard oil, fenugreek seeds, mustard seeds, turmeric, salt, aromatic spices",
      benefits: [
        "Rich in Vitamin C and antioxidants",
        "Boosts metabolism and digestion",
        "Contains anti-inflammatory properties",
        "Helps strengthen immunity"
      ],
      usage: "Perfect with paratha, roti, dal-rice, khichdi, or as a side with any Indian meal",
      shelfLife: "6-8 months when refrigerated",
      category: "Chili",
    },
    {
      id: 2,
      name: "Mango Pickle",
      image: mangoPickleImg,
      spiceLevel: 2,
      description:
        "Traditional raw mango pickle with perfect blend of spices. Made from handpicked raw mangoes and aromatic Indian spices following our authentic family recipe.",
      ingredients: "Raw mangoes, mustard seeds, fenugreek, turmeric, red chili powder, salt, mustard oil",
      benefits: [
        "Good source of Vitamin A and C",
        "Aids in digestion",
        "Helps improve gut health",
        "Rich in antioxidants"
      ],
      usage: "Excellent with curd rice, parathas, thepla, or any Indian bread and rice dishes",
      shelfLife: "8-12 months when stored properly",
      category: "Mango",
    },
    {
      id: 3,
      name: "Mixed Vegetable Pickle",
      image: mixedPickleImg,
      spiceLevel: 2,
      description:
        "Delicious mix of seasonal vegetables in traditional achaar style. A flavorful combination of carrots, cauliflower, green beans, and more in aromatic spices.",
      ingredients: "Mixed vegetables (carrot, cauliflower, beans), mustard oil, spices, vinegar, turmeric, salt",
      benefits: [
        "Variety of nutrients from multiple vegetables",
        "High in dietary fiber",
        "Contains probiotics for gut health",
        "Boosts digestive enzymes"
      ],
      usage: "Goes well with pulao, biryani, sandwiches, or as a tangy accompaniment to any meal",
      shelfLife: "5-7 months refrigerated",
      category: "Mixed",
    },
    {
      id: 4,
      name: "Lemon Pickle",
      image: lemonPickleImg,
      spiceLevel: 1,
      description:
        "Tangy lemon pickle with aromatic spices and herbs. A classic accompaniment that adds zest to any meal with its perfect balance of sour and spicy flavors.",
      ingredients: "Fresh lemons, salt, turmeric, red chili powder, mustard seeds, fenugreek, asafoetida",
      benefits: [
        "High in Vitamin C",
        "Helps cleanse the digestive system",
        "Natural immunity booster",
        "Promotes healthy skin"
      ],
      usage: "Perfect with khichdi, dal, parathas, or simply with curd rice",
      shelfLife: "10-12 months",
      category: "Special",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Products</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of traditional handmade pickles, prepared
            with authentic recipes and finest ingredients
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-orange-50 border-2 border-gray-200 hover:border-orange-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;

'use client';

import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiHeart, FiUser, FiPackage, FiChevronDown, FiGrid } from 'react-icons/fi';

export default function MainNavbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  // Test data with categories and subcategories
  const categories = [
    { 
      id: '1', 
      name: 'Electronics',
      subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Cameras', 'Audio', 'Accessories']
    },
    { 
      id: '2', 
      name: 'Fashion',
      subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Bags', 'Jewelry', 'Watches']
    },
    { 
      id: '3', 
      name: 'Home & Garden',
      subcategories: ['Furniture', 'Kitchen', 'Bedding', 'Decor', 'Garden Tools', 'Lighting']
    },
    { 
      id: '4', 
      name: 'Sports',
      subcategories: ['Fitness', 'Outdoor', 'Cycling', 'Water Sports', 'Team Sports', 'Yoga']
    },
    { 
      id: '5', 
      name: 'Beauty',
      subcategories: ['Skincare', 'Makeup', 'Haircare', 'Fragrance', 'Tools', 'Men\'s Grooming']
    },
    { 
      id: '6', 
      name: 'Toys',
      subcategories: ['Action Figures', 'Dolls', 'Building Sets', 'Educational', 'Outdoor Toys', 'Board Games']
    },
    { 
      id: '7', 
      name: 'Books',
      subcategories: ['Fiction', 'Non-Fiction', 'Children\'s Books', 'Comics', 'Educational', 'E-Books']
    },
    { 
      id: '8', 
      name: 'Grocery',
      subcategories: ['Fresh Produce', 'Dairy', 'Meat', 'Bakery', 'Beverages', 'Snacks']
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <a href="/" className="flex items-center gap-3 cursor-pointer">
            <img 
              src="/logo-marketly.svg" 
              alt="Marketly" 
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold" style={{ color: '#84cc16' }}>Marketly</span>
          </a>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
              onMouseEnter={() => setIsCategoryMenuOpen(true)}
              className="flex items-center justify-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm hover:border-lime-500 transition-colors"
            >
              <FiGrid className="w-5 h-5" />
              <FiChevronDown className={`w-4 h-4 transition-transform ${isCategoryMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Menu */}
            {isCategoryMenuOpen && (
              <div 
                className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 flex"
                onMouseLeave={() => {
                  setIsCategoryMenuOpen(false);
                  setHoveredCategory(null);
                }}
              >
                {/* Main Categories */}
                <div className="w-56 border-r border-gray-200">
                  {categories.map(cat => (
                    <div
                      key={cat.id}
                      onMouseEnter={() => setHoveredCategory(cat.id)}
                      className={`px-4 py-3 cursor-pointer transition-colors flex items-center justify-between ${
                        hoveredCategory === cat.id ? 'bg-lime-50 text-lime-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-sm font-medium">{cat.name}</span>
                      <FiChevronDown className="w-4 h-4 -rotate-90" />
                    </div>
                  ))}
                </div>

                {/* Subcategories */}
                {hoveredCategory && (
                  <div className="w-64 p-4">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
                      {categories.find(c => c.id === hoveredCategory)?.name}
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {categories.find(c => c.id === hoveredCategory)?.subcategories.map((sub, idx) => (
                        <button
                          key={idx}
                          className="text-left px-3 py-2 rounded-md text-sm hover:bg-lime-50 hover:text-lime-700 transition-colors"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-6">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center gap-6">
            {/* Orders */}
            <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-lime-600 transition-colors">
              <FiPackage className="w-5 h-5" />
              <span className="text-xs">Orders</span>
            </button>

            {/* Favorites */}
            <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-lime-600 transition-colors">
              <div className="relative inline-block">
                <FiHeart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full min-w-[10px] h-4 px-1 flex items-center justify-center font-medium">3</span>
              </div>
              <span className="text-xs">Favorites</span>
            </button>

            {/* Profile */}
            <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-lime-600 transition-colors">
              <FiUser className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </button>

            {/* Cart */}
            <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-lime-600 transition-colors">
              <div className="relative inline-block">
                <FiShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 text-white text-xs rounded-full min-w-[10px] h-4 px-1 flex items-center justify-center font-medium" style={{ backgroundColor: '#84cc16' }}>5</span>
              </div>
              <span className="text-xs">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
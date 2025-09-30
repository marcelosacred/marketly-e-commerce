import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';

// Mock data - replace with server data later
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 128,
    discount: 38,
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 256,
    discount: 25,
    inStock: true,
  },
  {
    id: 3,
    name: "Portable Laptop Stand",
    price: 34.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 89,
    discount: null,
    inStock: true,
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 342,
    discount: 25,
    inStock: true,
  },
  {
    id: 5,
    name: "Wireless Mouse Pro",
    price: 59.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 198,
    discount: 33,
    inStock: false,
  },
  {
    id: 6,
    name: "USB-C Hub Adapter",
    price: 44.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 156,
    discount: null,
    inStock: true,
  },
  {
    id: 7,
    name: "4K Webcam for Streaming",
    price: 119.99,
    originalPrice: 169.99,
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 203,
    discount: 29,
    inStock: true,
  },
  {
    id: 8,
    name: "Wireless Charging Pad",
    price: 29.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1591290619762-8b3111d8f1d2?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 92,
    discount: 40,
    inStock: true,
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{product.discount}%
          </div>
        )}
        
        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
              Out of Stock
            </span>
          </div>
        )}
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors">
            <FiHeart className="w-5 h-5 text-gray-700 hover:text-red-500" />
          </button>
          <button 
            className="bg-white p-2 rounded-full shadow-md hover:bg-lime-50 transition-colors"
            style={{ color: '#84cc16' }}
            disabled={!product.inStock}
          >
            <FiShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center gap-1">
            <FiStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-900">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>
        
        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 hover:text-lime-600 cursor-pointer">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <button 
          className="w-full mt-3 py-2 rounded-lg font-medium text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: product.inStock ? '#84cc16' : '#9ca3af' }}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lime-500 to-lime-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Welcome to Marketly</h1>
          <p className="text-lg opacity-90">Discover amazing products at unbeatable prices</p>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <button className="text-lime-600 hover:text-lime-700 font-medium">
            View All →
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
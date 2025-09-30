import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';

// Mock data - replace with server data later
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
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
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
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
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
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
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
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
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
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
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
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
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500&h=500&fit=crop",
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
    image: "https://images.unsplash.com/photo-1591290619762-8b3111d8f1d2?w=500&h=500&fit=crop",
    rating: 4.2,
    reviews: 92,
    discount: 40,
    inStock: true,
  },
  {
    id: 9,
    name: "Noise Cancelling Earbuds",
    price: 89.99,
    originalPrice: 139.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 174,
    discount: 36,
    inStock: true,
  },
  {
    id: 10,
    name: "Portable SSD 1TB",
    price: 129.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 421,
    discount: null,
    inStock: true,
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 mb-3">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{product.discount}%
          </div>
        )}
        
        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-3 py-1.5 rounded-lg font-semibold text-sm">
              Out of Stock
            </span>
          </div>
        )}
        
        {/* Floating Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all">
            <FiHeart className="w-4 h-4 text-gray-700" />
          </button>
        </div>
        
        {/* Add to Cart - Floating at Bottom */}
        {product.inStock && (
          <button 
            className="absolute bottom-3 left-3 right-3 py-2 rounded-lg font-medium text-white text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-lg"
            style={{ backgroundColor: '#84cc16' }}
          >
            <div className="flex items-center justify-center gap-2">
              <FiShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </div>
          </button>
        )}
      </div>
      
      {/* Product Info - Compact */}
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-1 group-hover:text-lime-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <FiStar className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium text-gray-700">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
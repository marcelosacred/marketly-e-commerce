import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { products } from './data/products';


export default function ProductCard({ product }: { product: typeof products[0] }) {
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
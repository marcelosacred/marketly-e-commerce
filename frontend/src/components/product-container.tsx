import ProductCard from "@/components/product-card";
import { products } from './data/products';

export default function ProductContainer() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {products.map(product => (
        <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
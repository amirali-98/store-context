import { useProducts } from "../context/ProductProvider";

import ProductCard from "./ProductCard";

export default function ProductList() {
  const { products } = useProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

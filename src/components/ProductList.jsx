import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useProducts } from "../context/ProductProvider";

import {
  searchedProducts,
  categoryProducts,
  queryString,
} from "../utilities/helper";

import ProductCard from "./ProductCard";

export default function ProductList({ query }) {
  const { products } = useProducts();
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const { search, category } = query;
    setSearchParams(queryString(query));
    let filteredProducts = searchedProducts(products, search);
    filteredProducts = categoryProducts(filteredProducts, category);
    setDisplayedProducts(filteredProducts);
  }, [query, products]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">
      {displayedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

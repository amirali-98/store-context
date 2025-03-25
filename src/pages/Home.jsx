import React from "react";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <div>
      <Categories />
      <ProductList />
    </div>
  );
}

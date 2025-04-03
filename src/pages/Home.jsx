import React from "react";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";
import useTitle from "../hooks/useTitle";

export default function Home() {
  useTitle("Online Shop");
  return (
    <div>
      <Categories />
      <ProductList />
    </div>
  );
}

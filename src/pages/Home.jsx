import React from "react";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";
import useTitle from "../hooks/useTitle";
import SearchForm from "../components/SearchForm";

export default function Home() {
  useTitle("Online Shop");
  return (
    <div>
      <SearchForm />
      <Categories />
      <ProductList />
    </div>
  );
}

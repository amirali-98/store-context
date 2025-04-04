import { useState } from "react";

import ProductList from "../components/ProductList";
import Categories from "../components/Categories";
import useTitle from "../hooks/useTitle";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const [query, setQuery] = useState({});

  useTitle("Online Shop");
  return (
    <div>
      <SearchForm setQuery={setQuery} />
      <Categories setQuery={setQuery} />
      <ProductList query={query} />
    </div>
  );
}

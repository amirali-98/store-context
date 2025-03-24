import { createContext, useContext, useEffect, useState } from "react";

import api from "../config/api";

const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then(res => {
        setProducts(res);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {
  return useContext(ProductContext);
};

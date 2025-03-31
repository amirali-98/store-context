import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import ProductProvider from "./context/ProductProvider.jsx";
import CartProvider from "./context/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </ProductProvider>,
);

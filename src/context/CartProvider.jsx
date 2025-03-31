import { useReducer, createContext, useContext } from "react";

import {
  calculateTotalProducts,
  calculateTotalCost,
} from "../utilities/helper";

const CartContext = createContext();

const initialState = {
  products: [],
  totalProducts: 0,
  cost: 0,
  isPending: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (!state.products.find(p => p.id === action.payload.id)) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        state.products.find(p => p.id === action.payload.id).quantity++;
      }
      return {
        products: [...state.products],
        totalProducts: calculateTotalProducts(state.products),
        cost: calculateTotalCost(state.products),
        isPending: true,
      };

    case "REMOVE":
      if (state.products.find(p => p.id === action.payload.id).quantity > 1) {
        state.products.find(p => p.id === action.payload.id).quantity--;
      } else {
        state.products = [
          ...state.products.filter(p => p.id !== action.payload.id),
        ];
      }
      return {
        products: [...state.products],
        totalProducts: calculateTotalProducts(state.products),
        cost: calculateTotalCost(state.products),
        isPending: true,
      };
  }
};

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

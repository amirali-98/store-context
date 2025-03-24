import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-orange-600 p-3 rounded-xl">
      <p className="text-2xl font-bold text-white">Online Shop</p>
      <button>Cart</button>
    </header>
  );
}

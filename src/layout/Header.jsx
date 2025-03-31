import { useNavigate } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";

import { useCart } from "../context/CartProvider.jsx";

export default function Header() {
  const navigate = useNavigate();
  const { cart } = useCart();
  return (
    <header className="flex justify-between items-center bg-orange-600 p-3 rounded-xl sticky top-2">
      <p className="text-2xl font-bold text-white">Online Shop</p>

      <button
        onClick={() => navigate("/cart")}
        className="w-10 h-10 bg-white flex justify-center items-center rounded-xl relative cursor-pointer"
      >
        {!!cart.totalProducts && (
          <span className="absolute w-4 h-4 p-2.5 text-sm bg-gray-900 text-white flex items-center justify-center rounded-full top-[-10px] left-[-10px]">
            {cart.totalProducts}
          </span>
        )}
        <RiShoppingCart2Fill className="text-orange-600 text-2xl" />
      </button>
    </header>
  );
}

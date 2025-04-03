import { IoCheckmarkDoneSharp } from "react-icons/io5";

import { useCart } from "../context/CartProvider";
import useTitle from "../hooks/useTitle";

import ProductCartButton from "../components/ProductCartButton";

export default function Cart() {
  const { cart } = useCart();
  useTitle("My Cart");
  return (
    <div className="flex flex-col gap-10 md:flex-row md:gap-10 md:items-start">
      <div className="md:w-[30%] bg-white p-3 rounded-xl mb-8 order-2 md:order-none">
        <ul className="flex flex-col gap-2 *:flex *:items-center *:gap-1">
          <li>
            <span>
              <IoCheckmarkDoneSharp className="text-orange-600" />
            </span>
            <span>Cart Items: {cart.totalProducts}</span>
          </li>
          <li>
            <span>
              <IoCheckmarkDoneSharp className="text-orange-600" />
            </span>
            <span>Total Cost: ${cart.cost.toFixed(2)}</span>
          </li>
          <li className="text-orange-600">Is pending...</li>
        </ul>
        <button className="border-1 border-orange-600 text-orange-600 rounded p-2 w-full cursor-pointer">
          Checkout
        </button>
      </div>
      <div className="md:w-[70%]">
        <ul className="*:not-last:mb-3">
          {cart.products.map(product => (
            <li
              key={product.id}
              className="flex justify-between items-center bg-white p-2 rounded-xl gap-3"
            >
              <img
                className="w-15 h-15"
                src={product.image}
                alt={product.title}
              />
              <p className="line-clamp-1">{product.title}</p>
              <ProductCartButton product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import { LiaCartPlusSolid } from "react-icons/lia";
import { FaRegTrashAlt } from "react-icons/fa";

import { useCart } from "../context/CartProvider";

import { calculateProductQuantity } from "../utilities/helper";

export default function ProductCartButton({ product }) {
  const { cart, dispatch } = useCart();
  return (
    <div className="flex gap-4 items-center">
      {calculateProductQuantity(cart.products, product.id) > 0 && (
        <>
          <button
            onClick={() => dispatch({ type: "REMOVE", payload: product })}
            className="text-3xl text-white w-9 h-9 bg-orange-600 flex justify-center items-center rounded cursor-pointer"
          >
            {calculateProductQuantity(cart.products, product.id) > 1 ? (
              <span>-</span>
            ) : (
              <FaRegTrashAlt />
            )}
          </button>
          <span>{calculateProductQuantity(cart.products, product.id)}</span>
        </>
      )}
      <button
        onClick={() => dispatch({ type: "ADD", payload: product })}
        className="w-9 h-9 text-3xl text-white bg-orange-600 flex justify-center items-center rounded cursor-pointer"
      >
        {calculateProductQuantity(cart.products, product.id) > 0 ? (
          <span>+</span>
        ) : (
          <LiaCartPlusSolid />
        )}
      </button>
    </div>
  );
}

import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";

import ProductCartButton from "./ProductCartButton";

export default function ProductCard({ product }) {
  return (
    <div className="shadow-md py-4 px-6 bg-white rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-[250px] h-[250px] mx-auto mb-5"
      />
      <h3 className="text-orange-600 text-lg font-semibold h-[60px] overflow-hidden mb-3">
        {product.title}
      </h3>
      <p className="mb-8 font-semibold text-gray-600">${product.price}</p>
      <div className="flex justify-between items-center">
        <Link to={`/products/${product.id}`}>
          <TbListDetails className="text-orange-600 text-3xl" />
        </Link>
        <ProductCartButton product={product} />
      </div>
    </div>
  );
}

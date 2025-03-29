import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { LiaCartPlusSolid } from "react-icons/lia";

import { useProducts } from "../context/ProductProvider";

export default function ProductList() {
  const { products } = useProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">
      {products.map(product => (
        <div
          key={product.id}
          className="shadow-md py-4 px-6 bg-white rounded-lg"
        >
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
            <div>
              <button className="w-9 h-9 bg-orange-600 flex justify-center items-center rounded cursor-pointer">
                <LiaCartPlusSolid className="text-3xl text-white" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

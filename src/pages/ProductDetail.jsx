import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ImPriceTag } from "react-icons/im";
import { BiCategory } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";

import { useProducts } from "../context/ProductProvider";
import useTitle from "../hooks/useTitle";

export default function ProductDetail() {
  const [product, setProduct] = useState();
  const { products } = useProducts();
  const { productId } = useParams();
  const navigate = useNavigate();
  useTitle(product?.title);

  useEffect(() => {
    setProduct(products.find(p => p.id.toString() === productId));
  }, [products, productId]);

  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <div className="md:w-[30%]">
        <img
          src={product?.image}
          className="w-[250px] h-[250px] mx-auto bg-white border-2 border-dashed border-gray-600 rounded-2xl"
          alt="Product Image"
        />
      </div>
      <div className="bg-white rounded p-3 md:w-[70%]">
        <h1 className="text-orange-600 mb-3">{product?.title}</h1>
        <p className="leading-7 mb-5">{product?.description}</p>
        <ul className="*:not-last:mb-2 mb-3">
          <li className="flex items-center gap-2">
            <ImPriceTag className="text-orange-600 text-lg" />
            <span>${product?.price}</span>
          </li>
          <li className="flex items-center gap-2">
            <BiCategory className="text-orange-600 text-lg" />
            <span>{product?.category}</span>
          </li>
        </ul>
        <button
          onClick={() => navigate("/")}
          className="text-white w-full md:w-auto rounded p-3 bg-orange-600 flex items-center gap-2 justify-center"
        >
          <IoArrowBack />
          <span>Back to Store</span>
        </button>
      </div>
    </div>
  );
}

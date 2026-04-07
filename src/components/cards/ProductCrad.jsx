import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../features/cart/cartSlice";
import { ShoppingBag } from "lucide-react";

const ProductCard = ({ productCard }) => {
  const dispatch = useDispatch();

  return (
    <div className="rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition duration-300 bg-white flex flex-col gap-3">
      {/* Image */}
      <figure className="h-[220px] bg-gray-50 rounded-xl p-4">
        <img
          src={productCard.image}
          alt={productCard.title}
          className="w-full h-full object-contain"
        />
      </figure>

      {/* Title */}
      <h3 className="text-sm font-semibold line-clamp-2">
        {productCard.title}
      </h3>

      {/* Category Badge */}
      <span className="inline-block w-fit text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-md capitalize">
        {productCard.category}
      </span>

      {/* Description (3 lines + ellipsis) */}
      <p className="text-sm text-gray-600 line-clamp-3">
        {productCard.description}
      </p>

      {/* Bottom section */}
      <div className="flex items-center justify-between mt-auto">
        {/* Price */}
        <span className="text-lg font-bold text-gray-900">
          ${productCard.price}
        </span>

        {/* Button */}
        <button
          className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition"
          onClick={() => dispatch(increment())}
        >
          <ShoppingBag size={16} />
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

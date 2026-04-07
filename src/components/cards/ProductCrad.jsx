import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../features/cart/cartSlice";
import { ShoppingBag } from "lucide-react";

const ProductCard = ({ productCard }) => {
  const countProduct = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <div className="rounded-lg border-gray-100 px-4 py-5 ">
      <figure>
        <img src={productCard.img.src} alt={productCard.img.alt} />
      </figure>
      <h3>{productCard.title}</h3>
      <ul>
        {productCard.tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
      <span>{productCard.price}</span>
      <button
        className="flex px-4 py-2 bg-black text-white rounded"
        onClick={dispatch(increment())}
      >
        <ShoppingBag className="text-white" />
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;

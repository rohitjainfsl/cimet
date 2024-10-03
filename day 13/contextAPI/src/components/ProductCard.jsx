import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartButtons from "./CartButtons";

/* eslint-disable react/prop-types */
export const ProductCard = ({ ele }) => {
  const { cart, addToCart, updateQuantity, deleteFromCart } =
    useContext(CartContext);
  const [isExist, setIsExist] = useState(null);
    console.log(cart, "cart");
    
  useEffect(() => {
    let existingElement = cart.find((el) => el.id === ele.id);
    if (existingElement) {
      setIsExist(existingElement);
    } else {
      setIsExist(null);
    }
  }, [cart]);

  return (
    <div className="border border-black w-1/5 text-center py-4">
      <img
        src={ele.image}
        alt="product"
        className="w-full object-contain h-40"
      />
      <p>{ele.title}</p>
      <p>{ele.price}$</p>
      {!isExist ? (
        <button
          className="border border-black px-4 py-2 rounded bg-slate-700 text-white"
          onClick={() => addToCart(ele)}
        >
          Add to cart
        </button>
      ) : (
        <CartButtons product={ele} isExist={isExist}/>
      )}
    </div>
  );
};

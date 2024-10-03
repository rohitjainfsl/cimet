/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CartContext } from "../context/CartContext";

const CartButtons = ({ product ,isExist}) => {
  let { id } = product;
  let { cart, deleteFromCart, updateQuantity } = useContext(CartContext);

 // const [data, setData] = useState({});

//   useEffect(()=>{
//     setData(cart.find(el=>el.id===product.id));
//   }, [cart])
    
  return (
    <div className="flex gap-4">
      <div>
        
        <button onClick={() => updateQuantity(id, "increment")}>+</button>
        <span>{isExist.quantity}</span>
        <button
          disabled={isExist.quantity === 1}
          onClick={() => updateQuantity(id, "decrement")}
        >
          -
        </button>
      </div>
      <div>
        <MdDelete onClick={() => deleteFromCart(id)} />
      </div>
    </div>
  );
};

export default CartButtons;

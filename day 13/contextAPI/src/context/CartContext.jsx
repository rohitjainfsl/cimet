/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    setCart((prev) => [...prev, { ...productToAdd, quantity: 1 }]);
  };
  const updateQuantity = (id, type) => {
    setCart((prevCart) =>
      prevCart.map((product) => {
        return product.id === id
          ? {
              ...product,
              quantity:
                type === "increment"
                  ? product.quantity + 1
                  : product.quantity - 1,
            }
          : product;
      })
    );
  };
  const deleteFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, deleteFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

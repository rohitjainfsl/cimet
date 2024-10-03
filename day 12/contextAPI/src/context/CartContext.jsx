import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function handleAddToCart(productToAdd) {
    const existingItem = cart.find((item) => item.id === productToAdd.id);
    if (existingItem) {
      setCart((prevCart) =>
        cart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...cart, { ...productToAdd, quantity: 1 }]);
    }
  }

  function handleRemoveFromCart(productIdToRemove) {
    return cart.filter((item) => item.id !== productIdToRemove);
  }

  function updateCartItemQuantity(cart, productId, newQuantity) {
    return cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
  }

  return (
    <CartContext.Provider
      value={{ cart, setCart, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

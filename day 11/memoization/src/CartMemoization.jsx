import React, {
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { FaRupeeSign } from "react-icons/fa";
import { ecomcontext } from "../ecomcontext";
import CartItem from "./CartItem";
import ProductRecommendation from "./ProductRecommendation";

function Cart() {
  const { cart, allProducts } = useContext(ecomcontext);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

  // Expensive calculation: filter cart items based on search term
  const filteredCartItems = useMemo(() => {
    console.log("Filtering cart items"); // This log helps demonstrate when the filtering occurs
    return cart.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [cart, searchTerm]);

  // Expensive calculation: compute recommendations based on cart
  const recommendations = useMemo(() => {
    console.log("Computing recommendations"); // This log helps demonstrate when recommendations are computed
    const cartCategories = new Set(cart.map((item) => item.category));
    return allProducts
      .filter(
        (product) =>
          cartCategories.has(product.category) &&
          !cart.some((item) => item.id === product.id)
      )
      .slice(0, 5);
  }, [cart, allProducts]);

  // Compute cart total
  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setCartTotal(total);
  }, [cart]);

  // Memoized callback for updating item quantity
  const updateQuantity = useCallback(
    (itemId, newQuantity) => {
      console.log("Updating quantity"); // This log helps demonstrate when the function is recreated
      // Assume we have a function to update the cart in the context
      // updateCartItemQuantity(itemId, newQuantity);
    },
    [
      /* dependencies would include updateCartItemQuantity if it came from context */
    ]
  );

  return (
    <div className="cart">
      <input
        type="text"
        placeholder="Search cart items"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="cart-items">
        {filteredCartItems.map((item) => (
          <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
        ))}
      </div>
      <div className="cart-total">
        <h3>
          Total: <FaRupeeSign /> {cartTotal.toFixed(2)}
        </h3>
      </div>
      <div className="recommendations">
        <h3>Recommended Products</h3>
        {recommendations.map((product) => (
          <ProductRecommendation key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Cart;

import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;

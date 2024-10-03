import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();

  return (
    <header className="py-2 px-12 flex items-center justify-between bg-blue-gray-700 text-white shadow-sm">
      <h1 className="text-3xl font-bold">
        <Link to="/">Ecommerce</Link>
      </h1>
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

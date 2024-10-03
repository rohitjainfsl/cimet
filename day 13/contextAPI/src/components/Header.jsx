import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Header() {
    const {cart}=useContext(CartContext)

  return (
    <header className="bg-slate-700 text-white">
      <nav className="flex px-12 py-2 items-center justify-between">
        <h1 className=" text-2xl font-bold">
          <Link to='/'>Ecommerce</Link>
        </h1>
        <ul className="flex gap-4">
          <Link to="/products">Products</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          <Link to="/contact">Contact us</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

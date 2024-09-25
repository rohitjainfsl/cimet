import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between px-[3rem] bg-slate-500 ">
      <h1>
        <Link to="/">React Routing</Link>
      </h1>
      <ul className="flex gap-4">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

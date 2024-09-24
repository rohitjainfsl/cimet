import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between px-[3rem] bg-slate-500 ">
      <h1>react routing</h1>
      <ul className="flex gap-4">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/contact    ">contact us</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

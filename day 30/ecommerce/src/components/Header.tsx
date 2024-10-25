import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>My E-commerce</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;

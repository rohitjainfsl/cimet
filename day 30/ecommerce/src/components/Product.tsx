import { Link } from "react-router-dom";

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`}>View Product</Link>
    </div>
  );
};

export default Product;

import  { useEffect, useState } from "react";
import axios from "../axios";
import Product from "./Product";

interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    axios.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="products-grid">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

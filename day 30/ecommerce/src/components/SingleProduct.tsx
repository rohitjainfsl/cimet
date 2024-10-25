import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { useCart } from '../context/CartContext';

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();  // Get the addToCart function from context

  useEffect(() => {
    axios.get(`/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: quantity,
      });
    }
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default SingleProduct;

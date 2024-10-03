import { BsCurrencyRupee } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Product({ data }) {
  const { cart, setCart, handleAddToCart, handleRemoveFromCart } = useCart();

  console.log(cart);

  return data.map((product) => {
    return (
      <div className="w-1/5 flex flex-col items-center" key={product.id}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain my-2"
        />
        <p className="inline-flex items-center">
          <BsCurrencyRupee /> {product.price}
        </p>
        <Link
          to=""
          className=" mt-3 px-4 py-2 bg-blue-gray-200 rounded-xl text-brown-700"
          onClick={() => handleAddToCart(product)}
        >
          Add To Cart
        </Link>
      </div>
    );
  });
}

export default Product;

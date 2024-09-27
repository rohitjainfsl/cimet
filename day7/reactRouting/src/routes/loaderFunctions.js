import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export const fetchSingleProduct = async ({ params }) => {
  const productID = params.id;

  if (isNaN(productID)) throw new Error("Product ID must be a number");

  const response = await axios.get(
    `https://fakestoreapi.com/products/${productID}`
  );
  if (!response.data) throw new Error("Product not found");

  return response.data;
};

export const fetchBlogs = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

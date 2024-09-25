import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export const fetchSingleProduct = async (eventId) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/${eventId.params.id}`
  );
  return response.data;
};
export const fetchBlogs = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

import { createBrowserRouter } from "react-router-dom";
import CommonComponent from "../components/CommonComponent";
import Home from "../pages/Home";
import Products from "../pages/Products";
import axios from "axios";

async function fetchFeaturedProducts(url) {
  const response = await axios.get(url);
  return response.data;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonComponent />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetchFeaturedProducts("https://fakestoreapi.com/products?limit=4"),
      },
      {
        path: "/products",
        element: <Products />,
        loader: () =>
          fetchFeaturedProducts("https://fakestoreapi.com/products"),
      },
    ],
  },
]);
export default router;

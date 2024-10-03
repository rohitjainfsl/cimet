import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "../pages/Wrapper";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import NotFound from "../assets/404.webp";
import axios from "axios";
import Blog from "../pages/Blog";

async function fetchProducts(url){
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log(error);        
    }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetchProducts("https://fakestoreapi.com/products?limit=4"),
      },
      {
        path: "/products",
        element: <Products />,
        loader:()=>fetchProducts("https://fakestoreapi.com/products")

      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader:()=>fetchProducts("https://jsonplaceholder.typicode.com/posts")

      },
      
    ],
  },
  {
    path: "*",
    element: <img src={NotFound} />,
  },
]);

const AllRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default AllRoutes;

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import ProductWrapper from "../components/ProductWrapper";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  fetchProducts,
  fetchSingleProduct,
  fetchBlogs,
} from "./loaderFunctions";
import { EcomContextProvider } from "../context/EcomContext";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const HomeRoute = () => {
  return (
    <>
      <EcomContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </EcomContextProvider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductWrapper />,
        children: [
          {
            path: ":id",
            element: <SingleProduct />,
            loader: (id) => fetchSingleProduct(id),
          },
          {
            index: true,
            element: <Products />,
            loader: fetchProducts,
          },
        ],
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: fetchBlogs,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const Route = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Route;

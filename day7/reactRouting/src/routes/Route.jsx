import { Suspense, lazy } from "react";
import Home from "../Pages/Home";
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
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

// Lazy Loaded Components
const LazyProducts = lazy(() => import("../Pages/Products"));

function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div>
      <h2>Error occurred</h2>
      <p>{error.message}</p> {/* Display the error message */}
    </div>
  );
}

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
            index: true,
            element: (
              <Suspense fallback={<div>Loading Products...</div>}>
                <LazyProducts />
              </Suspense>
            ),
            loader: fetchProducts,
            errorElement: <ErrorBoundary />,
          },
          {
            path: ":id",
            element: <SingleProduct />,
            loader: fetchSingleProduct,
            errorElement: <ErrorBoundary />,
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

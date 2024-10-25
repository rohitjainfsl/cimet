import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { CartProvider } from "./context/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Products /> },
      { path: "/products/:id", element: <SingleProduct /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);

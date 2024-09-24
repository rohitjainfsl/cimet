import { BrowserRouter, Routes, Route as R } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import ProductWrapper from "../components/ProductWrapper";

const Route = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <R path="/" element={<Home />} />
          <R path="/products" element={<ProductWrapper />}>
            <R index element={<Products />}></R>
            <R path=":id" element={<SingleProduct />} />
          </R>
          <R path="*" element={<h2>Check your URL</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Route;

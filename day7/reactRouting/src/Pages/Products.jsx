// https://fakestoreapi.com/products

// import axios from "axios";
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";

function Products() {
  const data = useLoaderData();
  return <ProductList data={data} />;
}

export default Products;

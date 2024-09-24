// https://fakestoreapi.com/products

import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function () {
      const result = await axios.get("https://fakestoreapi.com/products");
      setData(result.data);
    })();
  }, []);

  return <ProductList data={data} />;
}

export default Products;

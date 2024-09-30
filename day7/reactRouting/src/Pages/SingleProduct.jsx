import { useLoaderData, useLocation } from "react-router-dom";
import Product from "../components/Product";

function SingleProduct() {
  const data = useLoaderData();

  const location = useLocation();
  console.log(location);

  return <Product eachProduct={data} />;
}

export default SingleProduct;

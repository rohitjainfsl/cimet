import { useLoaderData } from "react-router-dom";
import Product from "../components/Product";

function SingleProduct() {
  const data = useLoaderData();

  return <Product eachProduct={data} />;
}

export default SingleProduct;

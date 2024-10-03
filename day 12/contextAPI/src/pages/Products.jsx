import { useLoaderData } from "react-router-dom";
import Product from "../components/Product";

function Products() {
  const data = useLoaderData();
  return (
    <section id="allProducts" className="py-4">
      <div className="featured-wrapper flex flex-wrap gap-4 py-4 px-12">
        <Product data={data} />
      </div>
    </section>
  );
}

export default Products;

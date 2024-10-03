import { useLoaderData } from "react-router-dom";
import Product from "./Product";

function FeaturedProducts() {
  const data = useLoaderData();
  return (
    <>
      <section id="featured" className="py-4">
        <h3 className="text-center my-3 text-2xl font-bold">
          Featured Products
        </h3>
        <div className="featured-wrapper flex flex-wrap gap-4 py-4 px-12">
          <Product data={data} />
        </div>
      </section>
    </>
  );
}

export default FeaturedProducts;

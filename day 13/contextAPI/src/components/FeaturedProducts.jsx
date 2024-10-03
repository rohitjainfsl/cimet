import { useLoaderData } from "react-router-dom";
import { ProductCard } from "./ProductCard";

function FeaturedProducts() {
  const data = useLoaderData();
  
  return (
    <div id="featured-products" className="my-4">
      <h3 className="text-2xl font-bold text-center mb-3">Featured Products</h3>
      <section
        id="featured-wrapper"
        className="flex flex-wrap gap-5 justify-center"
      >
        {data.map((ele) => (
          <ProductCard key={ele.id} ele={ele} />
        ))}
      </section>
    </div>
  );
}

export default FeaturedProducts;

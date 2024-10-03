import { useLoaderData } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";

function Products() {
  const data = useLoaderData();

  return (
    <section
      id="featured-wrapper"
      className="flex flex-wrap gap-5 justify-center py-4"
    >
      {data.map((ele) => (
        <ProductCard key={ele.id} ele={ele} />
      ))}
    </section>
  );
}

export default Products;

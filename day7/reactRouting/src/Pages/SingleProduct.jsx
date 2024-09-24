import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await axios.get(
          "https://fakestoreapi.com/products/" + id
        );
        console.log(response);
      }
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  return <div>SingleProduct</div>;
}

export default SingleProduct;

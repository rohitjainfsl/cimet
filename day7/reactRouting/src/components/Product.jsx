/* eslint-disable react/prop-types */

const Product = ({ eachProduct }) => {
  return (
    <div>
      <img src={eachProduct.image} />
      <h3>{eachProduct.title}</h3>
      <p>{eachProduct.price}</p>
    </div>
  );
};

export default Product;

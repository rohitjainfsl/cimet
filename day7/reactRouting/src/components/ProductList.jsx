/* eslint-disable react/prop-types */
import Product from './Product'

function ProductList({data}) {
  return (
    <>
        {data.map((eachProduct)=>{
         return <Product key= {eachProduct.id} eachProduct={eachProduct}></Product>   
        })}
        </>
  )
}

export default ProductList
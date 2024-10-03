import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { ProductCard } from '../components/ProductCard';

function Cart() {
    const {cart}=useContext(CartContext);
    const [total,setTotal] = useState(0) 
    function calculateCartTotal(){
        const totalValue = cart.reduce((acc, el)=>{
            return acc+(el.quantity*el.price)
        }, 0)
        setTotal(totalValue);
    }
    useEffect(()=>{
        calculateCartTotal();
    }, [cart])
  return (
    <div>

      <div>
      {
            cart.map((cartElement)=>{
                return <ProductCard key={cartElement.id} ele={cartElement} />
            })
        }
      </div>
      <div className="priseMain">
        {total}
      </div>
    </div>
  )
}

export default Cart
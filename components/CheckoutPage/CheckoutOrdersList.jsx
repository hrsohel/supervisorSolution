import React from 'react'
import useCartProducts from '../context/cart-context/useCartProducts'
import CheckoutOrderItem from './CheckoutOrderItem'

const CheckoutOrdersList = () => {
  const {products} = useCartProducts();
  return (
    <div>
      {
        products.length > 0 &&
          products.map(course => (
            <CheckoutOrderItem course={course}/>
          ))
      }
    </div>
  )
}

export default CheckoutOrdersList
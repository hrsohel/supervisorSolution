import React from 'react'
import useCartProducts from '../context/cart-context/useCartProducts'
import CartCourseItem from './CartCourseItem.jsx'

const CartCourseList = () => {
  const {products} = useCartProducts();
  console.log({products})
  return (
    <div>
      <ul className="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-accent-2 border-b border-accent-2">
        {products.map(course => (
          <CartCourseItem course={course} />  
        ))}
        
      </ul>

    </div>
  )
}

export default CartCourseList
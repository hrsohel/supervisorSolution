import axios from 'axios';
import { useState } from 'react';
import { useCartContext } from './CartContextProvider';
import useCartProducts from './useCartProducts';
import useCartTotal from './useCartTotal';

const useCart = () => {
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const { isOpen, setIsOpen } = useCartContext();
  const [filterCourse, setFilterCourse] = useState("")
  const {
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCartProducts();
  const { total, updateCartTotal } = useCartTotal();

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const getCartLength = async () => {
    const {data} = await axios.get("/api/cart")
    setCartTotal(data?.message.length)
  }
  const increaseCart = async (operator, courseId, setLoad, load) => {
    setLoad(!load)
    setLoading(true)
    var element = document.getElementById(`${courseId}`)
    if(operator === "plus") {
      axios.post("/api/cart/cartTotal", {courseId, operator})
      .then(({data}) => {
        element.value = data.message[1][0].total
      }).catch(err => console.log(err))
      
    }
    else if(operator === "minus") {
      const {data} = await axios.get(`/api/cart/${courseId}`)
      if(data.message[0].total < 1) {
        return
      }
      axios.post("/api/cart/cartTotal", {courseId, operator})
      .then(({data}) => {
        if(data.message[1][0].total <= 0) element.value = 0
        else {
          element.value = data.message[1][0].total
        }
      }).catch(err => console.log(err))
    }
    setLoading(false)
  }
  return {
    isOpen,
    openCart,
    closeCart,
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    total,
    updateCartTotal,
    getCartLength,
    cartTotal,
    increaseCart,
    limit,
    loading,
    setFilterCourse,
    filterCourse,
  };
};

export default useCart;

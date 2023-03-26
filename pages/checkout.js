import axios from 'axios'
import useSWR from 'swr'
import CheckoutPage from '../components/CheckoutPage/CheckoutPage'
import RedirectComp from '../components/CheckoutPage/RedirectComp'
import { useCart } from '../components/context/cart-context'
import useCartTotal from '../components/context/cart-context/useCartTotal'

const fetcher = async () => {
  const {data} = await axios.get("/api/cart")
  return data
}

const Checkout = () => {
  const {data} = useSWR("/api/cart", fetcher)
  return (
      <CheckoutPage data={data} />
    )
  // if(cartTotal > 0) {
  //   return (
  //     <CheckoutPage />
  //   )
  // } else {
  //   return <RedirectComp to='/coursesPages' />;
  // }
  
}

export default Checkout
import CartPage from '../components/CartPage/CartPage'
import NavbarForAll from '../components/NavbarForAll'
import {useRouter} from 'next/router'
import axios from 'axios'
import useSWR from 'swr'
import { useEffect } from 'react'
import Head from 'next/head'

const Cart = () => {
  const history = useRouter()
  useEffect(() => {
    (async() => {
      const {data} = await axios.get("/api/hello")
      if(!data.token && !data.companyToken) history.push("/login")
    })()
  }, [])
  return (
    <div>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/monogram.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <NavbarForAll />
      <div className='mt-20'>
        <CartPage />
      </div>
    </div>
  )
}

export default Cart
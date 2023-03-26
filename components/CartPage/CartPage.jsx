import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import formatPrice from '../../utils/formatPrice'
import useCartTotal from '../context/cart-context/useCartTotal'
import CartCourseList from './CartCourseList'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useCart } from '../context/cart-context'
import $ from 'jquery'
import useSWR from 'swr'

const fetcher = async() => {
  const {data} = await axios.get("/api/getComMem")
  return data
}

const CartPage = () => {
  const {data} = useSWR("/api/getComMem", fetcher)
  const [companyCart, setCompanyCart] = useState(0)
  const [load, setLoad] = useState(false)
  const [company, setCompany] = useState(null)
  const [cart, setCart] = useState([])
  const carts = cart.map(info => info.cid)
  const {getCartLength, increaseCart, loading} = useCart()
  const deleteCart = async cartId => {
    if(confirm("do you want to delete this cart")) {
      const {data} = await axios.delete(`/api/cart/${cartId}`)
      getCart()
    } 
  }
  const getCart = async () => {
    const {data} = await axios.get("/api/cart")
    setCart(data.message)
    setCompany(data?.companyToken)
  }
  (async() => {
    if(company) {
      const {data} = await axios.post("/api/cart/getComCart", {carts})
      setCompanyCart(data?.message.length)
    }
  })()
  useEffect(() => {
    (async() => {
      if(cart) await getCartLength()
    })()
    getCart()
  }, [load])
  console.log(cart)
  return ( 
    <>
      <div className='flex items-start justify-between flex-col md:flex-row p-4'>
      <div className='w-full md:w-[70%]'>
        {
        cart.map(info => <div className='flex items-center my-4 justify-center'>
            <div className='w-[10rem] h-[10rem]'>
              <img src={`/uploads/images/${info.cimage}`} alt="" className='object-cover rounded-md w-full h-[120px]' />
            </div>
            <div className='text-center w-1/2'>
              <p className='text-lg font-semibold'>{info.cname}</p>
              <p className=''>{info.cdesc} </p>
              <p className='text-lg'>Instructor Name: {info.instructorName}</p>
              <p className='text-lg font-semibold'>Price: {info.cprice}$</p>
              <p>Starting Date: {moment(info.startingDate).format("MMM DD, YYYY")}</p>
              <div className='flex items-start justify-center flex-col md:flex-row'>
                <button onClick={() => deleteCart(info.cartId)} className='w-full md:w-[10rem]  ml-4 py-[.1rem] my-1 rounded-sm text-center bg-red-700 text-white text-lg'>Delete Cart</button>
                {
                  company && companyCart !== 0 ? <div className='text-lg ml-2 flex items-start justify-center mt-1'>
                    <button onClick={(e) => increaseCart("minus", info.cid, setLoad, load)} className='text-2xl bg-gray-400 text-white mb-2 px-2' disabled={loading}><i class="fas fa-minus"></i></button>
                    <input type="text" min="0" className='border text-center  outline-none w-[2.5rem]' id={`${info.cid}`} defaultValue={info.total} readOnly />
                    <button onClick={(e) => increaseCart("plus", info.cid, setLoad, load)} className={`text-2xl bg-gray-400 text-white px-2`} disabled={loading}><i className="fa fa-plus"></i></button>
                  </div> : <></>
                }
              </div>
              {
                data?.message.length && companyCart !== 0 ? <div>
                  {
                    data.message[0]?.emails.split(",").length > info.total ? <h1 className='text-red-600 font-semibold'>you have to add at least {data?.message[0].emails.split(",").length} courses</h1> :
                    data.message[0]?.emails.split(",").length === info.total || info.total >= data?.message[0].emails.split(",").length ? <h1 className='text-green-600 font-semibold'>you can buy courses now</h1> : <></>
                  }
                </div> : companyCart !== 0 ? <>
                <p className='bg-yellow-100 text-yellow-500'>
                  You have no members <span className='underline'>
                    <Link href={`/company`}>Add members</Link>
                  </span>
                </p>
                </> : <></>
              }
            </div>
          </div>)
        }
      </div>
        <div className='text-center static md:sticky md:top-24 text-lg border-[1.5px] font-semibold py-2 w-full md:w-[25%]'>
          <p>Total Cart: {cart.length}</p>
          <p>Total Price: {
            cart.reduce((totalPrice, info) => {
              return totalPrice + info.cprice * info.total
            }, 0)
            }$</p>
            {
              cart.length > 0 ? <button className='w-[10rem] py-[.1rem] my-1 rounded-sm text-center bg-blue-500 ml-2 text-white text-lg'>
              <Link href={`/checkout2`}>Buy Course</Link>
            </button> : <>
            <button className='w-[10rem] py-[.1rem] my-1 rounded-sm text-center bg-blue-500 ml-2 text-white text-lg' disabled>
              <Link href={`/`}>Go to Courses</Link>
            </button>
            </>
            }
            
        </div>
        
      </div>
      {/* {
        companyCart === 0 && company ? <>
         <div className='container mx-auto bg-yellow-300 text-yellow-600 text-lg text-center'>
           You have no members for this cart. 
           <span className='underline ml-4'>
             <Link href={`/company`}>Add members here</Link>
           </span>
         </div>
        </> : <></>
      } */}
    </>
  )
}

export default CartPage
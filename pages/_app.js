import React from 'react'
import '../styles/globals.css'
import {useReducer, createContext} from 'react'
import { CartProvider } from '../components/context/cart-context/CartContextProvider'
import axios from 'axios'
import useSWR from 'swr'

export const context =createContext()

const initialState = true
const reducer = (state, action) => {
  if(action.type === "SHOW") state = true
  if(action.type === "HIDE") state = false
  return state
}


function MyApp({ Component, pageProps }) {
  const fetcher = async () => {
    const {data} = await axios.get("/api/hello")
    return data
  }
  const response = useSWR("/api/hello", fetcher)
  const [state, dispatch] = useReducer(reducer, initialState)
  const store = {state, dispatch, response}
  return (
    <context.Provider value={store}>
      {/* cart provider */}
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </context.Provider>
  )
}

export default MyApp
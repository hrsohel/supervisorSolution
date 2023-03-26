import React from "react";
import NavbarForAll from "../../components/NavbarForAll";
import axios from "axios";
import useSWR from 'swr';
import PaypalCheckoutButton from "../../components/PaypalCheckoutButton";
import {PayPalScriptProvider} from "@paypal/react-paypal-js"
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

const fetcher = async () => {
    const {data} = await axios.get("/api/cart")
    return data
}

const fetcher2 = async() => {
    const {data} = await axios.get("/api/getComMem")
    return data
}

export default function App() {


    const [clientSecret, setClientSecret] = React.useState("");
   
    const {data} = useSWR("/api/cart", fetcher)
    const response = useSWR("/api/getComMem", fetcher2)
    console.log(data, response)
    const memebers = response.data?.message.length && response.data?.message[0].emails.split(",").length
    let originalPrice = data?.message.reduce((total, info) => {
        return total + info.cprice * info.total
    }, 0)
    var discount = 0
    var courseLength = data?.message.length
    if(data?.companyToken) {
        courseLength = data?.message.reduce((total, info) => {
            return total + info.total
        }, 0)
    }
    if(courseLength >= 5 && courseLength < 10) discount = 0 / 100
    else if(courseLength >= 10 && courseLength < 25) discount = 0 / 100
    else if(courseLength >= 25 && courseLength < 50) discount = 0 / 100
    else if (courseLength >= 50) discount = 0 / 100
    let totalPrice = originalPrice - originalPrice * discount

    const product={description:'salkdjflsadjf',price:1500}


  

    return (
        <div className="App">
            
                <div>
                    <NavbarForAll />
                    <div className='mt-38 p-10  items-center'>
                    <div className='flex lg:flex-row flex-col justify-evenly lg:px-0 px-12 my-12'>
                    <div className='lg:w-2/6 shadow-lg flex flex-col items-center py-1'>
                    <h1 className='text-2xl font-semibold my-4'>Summary</h1>
                    <div className='flex items-center justify-between text-lg'>
                        <h3 className=''>Original Price:</h3>
                        <h3 className=''>$
                            {originalPrice}
                        </h3>
                    </div>
                    <div className='flex pb-4 border-b-2 items-center justify-between text-lg'>
                        <h3 className=''>Discounts:</h3>
                        <h3 className=''>$0.00</h3>
                    </div>
                    <div className='my-4 flex items-center justify-between text-lg font-bold'>
                        <h3>Total:</h3>
                        <p>${totalPrice}</p>
                    </div>
                 
                </div>
                </div>
                <div className="paypal container mx-auto">
                        {/* <p className="checkout-title">PAY WITH PAYPAL</p> */}
                        <div className="paypal-button-container container mx-auto">
                        <PayPalScriptProvider>
                            <PaypalCheckoutButton product={product} />
                        </PayPalScriptProvider>
                        </div>
                    </div>
                    </div>
                </div>
           
        </div>
    );
}
import Image from "next/image";
import React, { useState } from "react";
import NavbarForAll from "../../components/NavbarForAll";
import acceptIcon from '../../public/images/accept.png'
import rejectIcon from '../../public/images/remove.png'
import { useRouter } from 'next/router';
import { useEffect } from "react";
import axios from "axios";
import { useCart } from "../../components/context/cart-context";


export default function paymentCompleted() {
  const {getCartLength} = useCart()
  const router = useRouter()
  const [status,setStatus]=useState(router.query.redirect_status);
  var success = false;

const test = router.query.redirect_status;

if(test=='succeeded') {
  success = true;
  (async() => {
      const {data} = await axios.post("/api/cart")
      if(data) {
        await axios.delete("/api/cart")
        getCartLength()
      } else alert("payment failed!")
  })()
}
  

  else 
  success = false;

  useEffect(() => {
    // (async() => {
    //   const {data} = await axios.post("/api/cart")
    //   if(data) {
    //     await axios.delete("/api/cart")
    //     getCartLength()
    //   } else alert("payment failed!")
    // })()
  }, [])

  return(  <div className="App">
            
  <div>
      <NavbarForAll />
      <div className='mt-20 p-10'></div>
      <div className='flex lg:flex-row flex-col justify-evenly lg:px-0 px-12 my-12'>
                        <div className='lg:w-2/6 shadow-lg flex flex-col items-center py-12'>
                            <Image src={success?acceptIcon:rejectIcon} alt="homecourseIconIcon" />
                            <h1 className='lg:text-2xl text-1xl  font-semibold mt-2'>{success?'Transection Comppleted Successfully':'Transection Faild.'}</h1>
                            {success?<h5 className='lg:text-2xl text-1xl  font-semibold mt-2'>Thank You For Your Billing.</h5>:<></>}
                        </div>
                      
                    </div>
  </div>
</div>);
}
import React from 'react';
import Image from 'next/image';
import logo from '../public/images/logo.svg';
import sidebanner from '../public/images/sidebanner.png';
import Link from 'next/link';
import axios from 'axios';
import useSWR from 'swr';
import { useRouter } from 'next/router';

const NavbarForLandingPage = () => {
   const history = useRouter()
   const fetcher = async () => {
        const {data} = await axios.get(`/api/hello/${2}`)
        return data
    }
   const {data} = useSWR("/api/hello/${token}", fetcher)
   const logout = async () => {
        if(!data?.message[0][0].name) {
            await axios.get("/api/login")
            history.push("/login")
        } else {
            await axios.get("/api/companyLogin")
            history.push("/login")
        }
    }
    return (
      
      <div className="relative bg-gradient-to-r from-blue-400 to-blue-800  md:w-full md:min-h-full">
      <div className="flex items-start justify-between  py-1 ">
      <div className="px-8">
        <Link href={`/`}>
            {/* <Image 
               src={logo}
               width={320} 
               height={120}
               className= "cursor-pointer shadow-xl"
            /> */}
            <img src="/images/logo.svg" alt="Logo" width={320} height={320} className='cursor-pointer object-cover' />
        </Link> 
      </div>
     
      <div className='flex items-start  justify-center'>
         <div className="header-nav px-10 text-2xl font-semibold"> 
         <nav className="text-red-700 pt-8">
             <ul className="flex space-x-8  ">
                {/* <div className=" hover:text-[#231955] ">
                   <Link href="/coursesPages" >Courses</Link>
                </div> */}
                <div className=" hover:text-[#231955] ">
                   <Link href="/blog" >Blog</Link>
                </div>
                <div className=" hover:text-[#231955] ">
                   <Link href="/" >Courses</Link>
                </div>
                {
                   data ? <>
                     <div className=" hover:text-[#231955]  ">
                           <Link href="/cart" >Cart</Link>
                     </div>
                     <div className=" hover:text-[#231955]  ">
                        <button onClick={logout} >Logout</button>
                     </div>
                   </> : <div className=" hover:text-[#231955]  ">
                        <Link href={`/login`} >Login</Link>
                     </div>
                }
             </ul>  
         </nav>
         </div>               
 
         {/* <Image src={sidebanner} className='absolute top-0 left-0 object-cover h-full' width="" height=""/> */}
         
      </div>
      </div>
      {/* <div className="absolute bottom-2/4 left-2/4 -translate-x-2/4 text-slate-100   md:text-xl text-center font-semibold">
          <h1 className="text-4xl">Helping Businesses Remain Compliant With Their Training</h1>
      </div> */}
      <div className="text-slate-100 border helping h-[85vh] flex items-center justify-center md:text-xl text-center font-semibold">

          <h1 className="text-4xl">Helping Businesses Remain Compliant With Their Training</h1>
          {/* <Image src={sidebanner} className='absolute top-0 left-0 object-cover h-full' width="" height=""/> */}

      </div>
   </div>
    );
};

export default NavbarForLandingPage;
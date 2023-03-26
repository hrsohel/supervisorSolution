import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {useContext} from 'react';
import useSWR from 'swr';
import {context} from '../_app'

const fetcher = async () => {
    const {data} = await axios.get(`/api/hello/${54}`)
    return data
}

const Navbar = () => {
    const {data} = useSWR(`/api/hello/${54}`, fetcher)
    if(data && !data?.message[0][0].role) useRouter().push("/login")
    const {state, dispatch} = useContext(context)
    return (
        <>
        {
            !data ? <h1 className='text-2xl font-semibold text-center'>Loading ...</h1> :
            <>
                <header className='flex items-center justify-between w-full md:p-4 flex-wrap'>
                    <div className="w-full mx-auto md:mx-0 md:w-40 text-center logo">
                        <Link href={`/`}>
                            <img  className='block object-cover' src={`/master admin/icon/Supervisor Solutions Logo for header.png`}  />
                        </Link>
                    </div>
                    <form className='p-1 my-4 mx-auto rounded-full bg-blue-900 flex items-center justify-center' action="">
                        <input className='bg-blue-900 text-white rounded-full outline-none p-1 text-md md:text-lg' type="search" name="" id="" placeholder='Search'/>
                        <button className='w-6 h-6 search-btn mr-2 text-md md:text-lg'></button>    
                    </form>
                    {/* <div className="user flex items-center justify-center md:hidden">
                        <Image src={user}/>
                        <p className="text-lg ml-3 font-bold">User</p>    
                        <i className='fas fa-bars font-bold text-2xl cursor-pointer'></i>
                    </div>    */}
                    {
                        state ? <i onClick={() => dispatch({type: "HIDE"})} className='fas fa-times font-bold text-2xl cursor-pointer md:hidden'></i> :
                        <i onClick={() => dispatch({type: "SHOW"})} className='fas fa-bars font-bold text-2xl cursor-pointer md:hidden'></i>
                    }
                </header> 
                {/* <div className='absolute -left-full -top-full'>
                    <Menu show={show} setShow={setShow} />
                </div> */}
            </>
        }
        </>
    );
};

export default Navbar;
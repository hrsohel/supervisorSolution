import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UserMenu from '../../components/UserMenu'
import imgCourse01 from '../../public/images/imgCourse01.png';
import axios from 'axios'
import useSWR from "swr"
import NavbarFroAll from '../../components/NavbarForAll'
import { context } from '../_app';

const fetcher = async () => {
    const {data} = await axios.get("/api/courseVideo")
    return data
}

const courses2 = () => {
    const {data} = useSWR("/api/cart", fetcher)
    const {state, dispatch} = React.useContext(context)
    React.useEffect(() => {
        dispatch({type: "HIDE"})
    }, [])
    return (
        <>
         <NavbarFroAll />
          <main className='pt-24 flex items-start justify-center p-4 lg:flex-nowrap flex-wrap'>
              <UserMenu active="courses"/>
              <div className='w-full ml-2 shadow-2xl rounded-b-lg'>
                    <div className='p-2 flex items-center justify-between bg-blue-900 rounded-t-lg'>
                        <i onClick={() => dispatch({type: "SHOW"})} className='fas fa-bars font-bold text-2xl cursor-pointer lg:hidden'></i>
                        <h1 className='font-bold text-white text-2xl'>Paid Courses</h1>
                    </div>
                    <div className='p-4 flex items-center justify-center flex-wrap'>
                        {
                            data?.message.map(info => <>
                            <div className=' m-2 bg-blue-900 w-[19rem] flex items-center justify-center flex-col rounded-md'>
                                <img src={`/uploads/images/${info.cimage}`} alt="" className='w-full h-[20rem] object-cover rounded-t-md' />  
                                <div className='p-4'>
                                    <h1 className='text-2xl'>{info.cname}</h1>
                                    <p>{info.cdesc}</p>
                                </div>
                                <span className='mb-2 rounded-md px-2 py-1 bg-blue-500 text-white text-lg text-center'><Link href={`/courseVideo/${info.ccode}`}>Watch Video</Link></span>
                            </div>
                            </>)
                        }
                    </div>
              </div>
            </main>  
        </>
    );
};

export default courses2;
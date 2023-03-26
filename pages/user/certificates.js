import React, { useState } from 'react';
import UserMenu from '../../components/UserMenu';
import imgCourse01 from '../../public/images/imgCourse01.png';
import Link from 'next/link'
import Image from 'next/image'
import NavbarFroAll from '../../components/NavbarForAll'
import { context } from '../_app';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = async () => {
    const {data} = await axios.get("/api/certificate")
    return data
}

const certificates = () => {
    const {data} = useSWR("/api/certificate", fetcher)
    const {state, dispatch} = React.useContext(context)
    React.useEffect(() => {
        dispatch({type: "HIDE"})
    }, [])
    return (
        <>
            <NavbarFroAll />
           <main className='pt-24 flex items-start justify-center p-4 lg:flex-nowrap flex-wrap'>
                <UserMenu active="certificates"/>
                <div className='w-full ml-2 shadow-2xl rounded-b-lg'>
                    <div className='p-2 flex items-center justify-between bg-blue-900 rounded-t-lg'>
                        <i onClick={() => dispatch({type: "SHOW"})} className='fas fa-bars font-bold text-2xl cursor-pointer lg:hidden'></i>
                        <h1 className='font-bold text-white text-2xl'>Certificates</h1>
                    </div>
                    <div className='p-4'>
                        <div className="card flex items-center justify-center">
                            {
                                data?.message.map(info => <div key={info.cerId}>
                                    <Image src={`/uploads/images/${info.cimage}`} width="250" height="180"/>
                                    <div className='w-full bg-blue-200 rounded-r-2xl p-4'>
                                        <h2 className='text-blue-500 text-2xl font-bold'>{info.cname}</h2>
                                        
                                        <div className='flex items-center justify-between'>
                                            <p className='text-gray-500 text-2xl font-bold'>Score: {info.marks}%</p>
                                            <Link href={`/certificate?marks=${info.marks}&ccode=${info.ccode}`} ><span className='hover:bg-hoveSideBac hover:text-hovSideText my-4 text-center block w-40 ml-auto font-bold border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-full cursor-pointer'>
                                                Get Certificate
                                            </span></Link>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>  
            </main> 
        </>
    );
};

export default certificates;
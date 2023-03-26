import React from 'react';
import Image from 'next/image'
import molecule1 from '../public/images/molecule1.png'
import molecule2 from '../public/images/molecule2.png'
import { useCart } from './context/cart-context';

const Banner = () => {
    const {filterCourse, setFilterCourse} = useCart()
    const getFilterValue = e => {
        setFilterCourse(e.target.value)
    }
    return (
        <div className='bg-blue-800 h-96 flex mt-20'>
            <div className='relative hidden lg:block py-4'>
                <Image src={molecule1} alt="homeIcon" width="510px" height="665px" />
            </div>
            <div className='lg:flex-3 mt-8'>
                <div className='h-full'>
                    <div className=''>
                        <h1 className='text-6xl pt-4 text-white font-bold text-center'>Drugs & Alcohol Signs and Symptoms Courses</h1>
                        <h1 className='text-3xl text-white font-semibold my-7 text-center'>Shop our big sale of <span className='text-red-800'>courses</span></h1>
                    </div>
                    {/* <div className='lg:flex items-center justify-center gap-2  grid'> */}
                        {/* <select className="select select-bordered select-sm w-full max-w-xs">
                            <option disabled selected>Select Field</option>
                            <option>FMCSA</option>
                            <option>FMCSA training materials</option>
                            <option>dot supervisor training</option>
                            <option>dot supervisor training requirements</option>
                        </select> */}
                        {/* <div className="form-control ">
                            <div className="input-group ">
                                <input type="text" onChange={getFilterValue} placeholder="Search…" className="input input-bordered lg:w-96 mx-a" />
                                <button className="btn btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLineca="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div> */}
                    {/* </div> */}
                </div >
            </div >
            <div className='hidden lg:block py-4'>
                <Image src={molecule2} alt="homeIcon" width="653px" height="687px" />
            </div>
        </div >
    );
};

export default Banner;
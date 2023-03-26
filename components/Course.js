import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from './context/cart-context';

const Course = ({ course }) => {
    // const { id, title, image, description1, mode, modeIcon, module, moduleIcon1, student, studentIcon, rating, price, priceIcon } = course;
    const { cid, cname, cserial, ccode, cdesc, cduration, cimage, cprice
    , cvideo, instructorName, maxStudents, phone, startingDate } = course;
console.log(course)
    const {openCart,addProduct} = useCart();

    const handleAddToCart = () => {
        addProduct({ ...course, quantity: 1 });
        openCart();
    }
    return (
        <div>
            <div className="card lg:card-side shadow-xl mb-12">
                {/* <figure><Image className='' src={cimage} alt="Album" /></figure> */}
                <div className="card-body bg-[#e2f5ff] lg:w-16">
                    <h2 className="text-4xl font-bold text-[#0070f4]">{cname}</h2>
                    <div>
                        <p className='font-semibold mt-6'>{cdesc}</p>
                    </div>
                    <div className='flex lg:flex-row flex-col my-10'>
                        <div className='flex items-center gap-2 lg:w-44 w-32'>
                            {/* <p className='font-semibold text-xl'>{mode}</p> */}
                            {/* <Image src={modeIcon} alt="Album" width="25px" height="25px" /> */}
                            <div className="divider lg:divider-horizontal font-bold"></div>
                        </div>
                        <div className='flex items-center gap-2 lg:w-48 w-36'>
                            <p className='font-semibold text-xl'>{module}</p>
                            {/* <Image src={moduleIcon1} alt="Album" width="25px" height="25px" /> */}
                            <div className="divider lg:divider-horizontal font-bold"></div>
                        </div>
                        <div className='flex items-center gap-2 lg:w-42 w-36'>
                            <p className='font-semibold text-xl'>{maxStudents}</p>
                            {/* <Image src={studentIcon} alt="Album" width="25px" height="25px" /> */}
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col'>
                        <div className='flex items-center gap-2'>
                            {/* <p className='font-semibold text-xl'>{rating}</p> */}
                            <div className="divider lg:divider-horizontal font-bold"></div>
                        </div>
                        <div className='flex items-center gap-2 lg:w-32 w-36'>
                            <p className='font-semibold text-xl'>{cprice}</p>
                            {/* <Image src={priceIcon} alt="Album" width="25px" height="25px" /> */}
                        </div>
                    </div>

                    <div className="card-actions justify-end">
                        <button onClick={handleAddToCart} className="btn bg-[#0070f4] border-none outline-none text-white hover:bg-[#0754ac]" >Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;

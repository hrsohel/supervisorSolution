import React from 'react';
import Image from 'next/image';
import imgCourse01 from '../public/images/imgCourse01.png';
import imgCourse02 from '../public/images/imgCourse02.png';
import imgCourse03 from '../public/images/imgCourse03.png';
import axios from 'axios';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = async () => {
    const {data} = await axios.get("/api/courses")
    return data
}

const LandPageCourses = () => {
    const {data} = useSWR("/api/Courses", fetcher)
    return (
        <>
            <div>
                <div>
                    <div className="flex items-center justify-center py-2 polygon overflow-x-auto">
                        {
                            data?.message.slice(-3).map(info => <Link href="/">
                                <div key={info.cid} className="shadow-2xl cursor-pointer shadow-blue-400 pb-2 rounded-b-lg mx-2">
                                    <h1 className="font-bold rounded-t-lg text-xs md:text-lg p-2 bg-gradient-to-b from-blue-300 to-white">{info.cname}</h1>
                                    <div>
                                        <Image className='w-full h-full' src={`/uploads/images/${info.cimage}`} objectFit='cover' width='100' height='100' layout='responsive'/>
                                        {/* <Image className='w-full h-full' src={imgCourse02} objectFit='cover' width='100' height='100' layout='responsive'/> */}
                                    </div>
                                    <div className="flex items-center justify-between pt-4 px-2 text-xs md:text-lg">
                                        <p>Modules</p>
                                        <p>Available</p>
                                    </div>
                                    {/* <div className="flex items-center justify-between px-2 text-xs md:text-lg">
                                        <p>Ratings</p>
                                        <p>5 Stars</p>
                                    </div> */}
                                    <div className="flex items-center justify-between px-2 text-xs md:text-lg">
                                        <p>Price</p>
                                        <p>$16</p>
                                    </div>
                                </div>
                            </Link>)
                        }
                        
                        {/* <div className="shadow-2xl shadow-blue-400 pb-2 rounded-b-lg mx-2">
                            <h1 className="font-bold rounded-t-lg text-xs md:text-lg p-2 bg-gradient-to-b from-blue-300 to-white">Drug-Free Workplace Training</h1>
                            <div>
                                <Image src={imgCourse01} layout="responsive"/>
                            </div>
                            <div className="flex items-center justify-between px-2 text-xs md:text-lg">
                                <p>5 Modules</p>
                                <p>something</p>
                            </div>
                            <div className="flex items-center justify-between px-2 text-xs md:text-lg">
                                <p>Ratings</p>
                                <p>5 Stars</p>
                            </div>
                            <div className="flex items-center justify-between px-2 text-xs md:text-lg">
                                <p>Price</p>
                                <p>30$</p>
                            </div>
                        </div>
                        <div className="shadow-2xl shadow-blue-400 pb-2 rounded-b-lg mx-2">
                            <h1 className="font-bold rounded-t-lg text-xs md:text-lg p-2 bg-gradient-to-b from-blue-300 to-white">Drug-Free Workplace Training</h1>
                            <div>
                                <Image src={imgCourse02} layout="responsive"/>
                            </div>
                            <div className="flex items-center justify-between px-2 text-xs md:text-lg">
                                <p>5 Modules</p>
                                <p>something</p>
                            </div>
                            <div className="flex items-center justify-between px-2 text-xs md:text-lg">
                                <p>Ratings</p>
                                <p>5 Stars</p>
                            </div>
                            <div className="flex items-center justify-between px-2 text-xs md:text-lg">
                                <p>Price</p>
                                <p>30$</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandPageCourses;
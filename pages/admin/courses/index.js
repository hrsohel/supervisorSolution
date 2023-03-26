import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Menu from '../../../components/Menu';
import Navbar from '../Navbar'
// import img1 from '../../public/master admin/images/drug-free-zone-sign-o 1.png'
import HeadTag from '../../../components/HeadTag';

const courses = ({data}) => {
    return (
        <div>
            <HeadTag title='Courses' />
            <Navbar />
           <main className='flex items-start justify-center flex-col md:flex-row bg-gray-200'>
                <Menu active="courses"/>
                <div className="instructor w-full md:h-[84vh] overflow-auto">
                    <h1 className='text-sm text-white text-center p-3 sm:text-2xl font-bold bg-blue-900'>
                        <Link href='/admin/courses'>Courses</Link>
                        <Link href='/admin/add-course'>Add Course</Link>
                        <Link href='/admin/add-quiz'>Add Quiz</Link>
                    </h1>
                    <div className='flex items-center justify-evenly p-4 flex-wrap'>
                        {
                            data.message.map(info => (
                                <div key={info.cid} className="card my-2 w-80 rounded-md  bg-white">
                                    <h2 className='text-white text-center text-lg rounded-t-md py-3 font-bold w-full ise'>{info.cname}</h2>
                                    <div className=''>
                                        <Image className='w-full h-full' src={`/uploads/images/${info.cimage}`} objectFit='cover' width='100' height='100' layout='responsive'/>
                                    </div>
                                    <div className='flex items-center justify-between px-3 mt-8'>
                                        <div className='font-bold text-blue-600'>
                                            <p className="text-lg my-2">Duration:</p>
                                            <p className="text-lg my-2">Instructor:</p>
                                            <p className="text-lg my-2">Students:</p>
                                            {/* <p className="text-lg my-2">Ratings:</p> */}
                                        </div>
                                        <div className='text-right font-bold text-red-600'>
                                            <p className="text-lg my-2">{info.cduration}</p>
                                            <p className="text-lg my-2">{info.instructorName}</p>
                                            <p className="text-lg my-2">{info.maxStudents}</p>
                                            {/* <p className="text-lg my-2">5 Stars</p> */}
                                        </div>
                                    </div>
                                    <div className='p-1 w-[40%] mb-2 bg-blue-900 text-white text-lg rounded-lg mx-auto text-center'>
                                        <Link className='w-full' href={`/admin/courses/${info.cid}`}>Edit Course</Link>
                                        
                                    </div>
                                    <div className='p-1 w-[40%] mb-2 bg-blue-900 text-white text-lg rounded-lg mx-auto text-center'>
                                        <Link className='w-full' href={`/courseModules/${info.ccode}`}>Add Module</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default courses;

export async function getServerSideProps(context) {
    const res = await fetch('https://supervisorsolutions.com/api/courses')
    const data = await res.json()
    return {props: {data}}
}
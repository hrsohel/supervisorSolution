import React from 'react';
import Navbar from '../Navbar';
import Link from 'next/link';
import Menu from '../../../components/Menu';

const editCourse = () => {
    return (
        <>
            <Navbar />
           <main className='flex items-start justify-center bg-gray-200'>
               <Menu active="courses"/>
                <div className='instructor w-full'>
                    <h1 className='text-white text-center p-3 text-2xl font-bold bg-blue-900'>
                        <Link href='courses'>Courses</Link>
                        <Link href='add-course'>Add Course</Link>
                        <Link href='edit-course'>Edit Course</Link>
                    </h1>
                    <form className='w-full p-4' action="">
                        <h2 className='text-2xl font-bold text-blue-600'>Basic Info</h2>
                        <div className='flex items-center justify-between w-full flex-wrap'>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="fname">Course Name</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="fname" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="serial">Course Serial Number</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="serial" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="lname">Course Code</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="lname" />
                            </div>
                            <div className='md:w-full'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="email">Course Description</label>
                                <textarea name="" id="" className='w-full outline-none border-2 border-black p-2 text-lg rounded-md'></textarea>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="jponDate">Starting Date</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="date" name="" id="jponDate" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="password">Course Duration</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="password" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="cpassword">Course Price</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="cpassword" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="mobile">Instructor Name</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="mobile" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="gender">Maximum Students</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="gender" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="designation">Contact Number</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="designation" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="image">Upload Image</label>
                                <input className='' type="file" name="" id="image" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="video">Upload Video</label>
                                <input className='' type="file" name="" id="video" />
                            </div>
                            
                        </div>
                        <input className='bg-blue-600 my-4 rounded-md py-2 px-4 text-white text-lg' type="submit" value="Submit" />
                    </form>
                </div>
            </main>
        </>
    );
};

export default editCourse;
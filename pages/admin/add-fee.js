import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import Menu from '../../components/Menu';

const addFee = () => {
    return (
        <>
           <Navbar />
           <main className='flex items-start justify-center bg-gray-200'>
               <Menu active="fee"/>
                <div className='instructor w-full'>
                    <h1 className='text-white text-center p-3 text-2xl font-bold bg-blue-900'>
                        Add Fees
                    </h1>
                    <form className='w-full p-4' action="">
                        <h2 className='text-2xl font-bold text-blue-600'>Fees Info</h2>
                        <div className='flex items-center justify-between w-full flex-wrap'>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="fname">Department</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="fname" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="lname">Name</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="lname" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="email">Transaction ID</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="email" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="jponDate">Payment Date</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="date" name="" id="jponDate" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="password">Amount</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="password" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="cpassword">Payment Type</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="cpassword" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="mobile">Mobile Number</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="mobile" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="gender">Status</label>
                                <select name="" id="gender" className='block outline-none border-2 border-black p-2 text-lg rounded-md'>
                                    <option value="paid">Paid</option>
                                    <option value="due">Due</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="designation">Payment Reference Number</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="designation" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="department">Details</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="department" />
                            </div>
                            
                            
                        </div>
                        <input className='bg-blue-600 my-4 rounded-md py-2 px-4 text-white text-lg' type="submit" value="Submit" />
                    </form>
                </div>
            </main>   
        </>
    );
};

export default addFee;
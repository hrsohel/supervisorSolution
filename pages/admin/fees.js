import Link from 'next/link';
import React from 'react';
import HeadTag from '../../components/HeadTag';
import Menu from '../../components/Menu';
import Navbar from './Navbar';

const fees = () => {
    return (
        <>
            <HeadTag title='Fees' />
            <Navbar />
            <main className='flex items-start justify-center flex-col md:flex-row bg-gray-200'>
                <Menu active="fee"/>
                <div className='fees w-full'>
                    <h1 className='text-sm text-white text-center p-3 sm:text-2xl font-bold bg-blue-900'>Fees</h1>
                    <div className='bg-white m-4 text-center text-lg overflow-x-auto'>
                        <table className='w-sma sm:w-full'>
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Names</th>
                                    <th>Position</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                    <th>Transaction ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='text-gray-500 font-bold'>
                                    <td>1</td>
                                    <td>John Smith</td>
                                    <td>Teacher</td>
                                    <td className='text-green-500'>Paid</td>
                                    <td>$3500</td>
                                    <td>#1010</td>
                                </tr>
                                <tr className='text-gray-500 font-bold'>
                                    <td>1</td>
                                    <td>John Smith</td>
                                    <td>Teacher</td>
                                    <td className='text-red-500'>Due</td>
                                    <td>$3500</td>
                                    <td>#1010</td>
                                </tr>
                                <tr className='text-gray-500 font-bold'>
                                    <td>1</td>
                                    <td>John Smith</td>
                                    <td>Teacher</td>
                                    <td className='text-green-500'>Paid</td>
                                    <td>$3500</td>
                                    <td>#1010</td>
                                </tr>
                                <tr className='text-gray-500 font-bold'>
                                    <td>1</td>
                                    <td>John Smith</td>
                                    <td>Teacher</td>
                                    <td className='text-red-500'>Due</td>
                                    <td>$3500</td>
                                    <td>#1010</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='flex items-start p-4'>
                            <span className='bg-blue-500 px-3 py-2 text-white font-bold text-lg rounded-md'>
                                <Link href='add-fee'> + Add Fee</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default fees;
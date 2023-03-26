import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Menu from '../../../components/Menu';
import Navbar from '../Navbar'
import HeadTag from '../../../components/HeadTag';
import moment from 'moment'

const students = ({data}) => {
    return (
        <>
            <HeadTag title='Students' />
            <Navbar />
           <main className='flex items-start justify-center flex-col md:flex-row bg-gray-200'>
                <Menu active="student"/>
                <div className="instructor w-full md:h-[84vh] overflow-auto">
                    <h1 className='flex items-center justify-evenly text-sm text-white text-center p-3 sm:text-2xl font-bold bg-blue-900'>
                        <div className='hover:bg-slate-100 hover:text-blue-600 h-full rounded-md'><Link href='students'>Students</Link></div>
                        <Link href='add-student'>Add Student</Link>
                    </h1>
                    <div className='flex items-center justify-around p-4 flex-wrap'>
                        {
                            data.message.map(info => (
                                <div key={info.sid} className="card my-2 shadow-xl md:w-80 rounded-md  bg-white">
                                    <h2 className='text-center text-white text-lg rounded-t-md py-3 font-bold mb-3 w-full ise'>{`${info.firstName} ${info.lastName}`}</h2>
                                    <div className='flex items-center justify-center'>
                                        <Image className='block mx-auto rounded-full' src={`/uploads/students/${info.stuImage}`} objectFit='cover' width='100rem' height='100rem' />
                                    </div>
                                    <div className='flex items-center justify-between px-3 mt-8'>
                                        <div className='font-bold text-blue-600'>
                                            <p className="text-md my-2">Gender:</p>
                                            <p className="text-md my-2">Phone No:</p>
                                            <p className="text-md my-2">Admission Date:</p>
                                            <p className="text-md my-2">Email:</p>
                                        </div>
                                        <div className='text-right font-bold text-red-600'>
                                            <p className="text-md my-2">{info.gender}</p>
                                            <p className="text-md my-2">{info.phone}</p>
                                            <p className="text-md my-2">{moment(info.admissionDate).format("MMM DD, YYYY")}</p>
                                            <p className="text-md my-2">{info.email}</p>
                                        </div>
                                    </div>
                                    <div className='p-1 w-[40%] mb-2 bg-blue-900 text-white text-lg rounded-lg mx-auto text-center'>
                                        <Link className='w-full' href={`/admin/students/${info.sid}`}>Edit Student</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    );
};

export default students;

export async function getServerSideProps(context) {
    const res = await fetch('https://supervisorsolutions.com/api/student')
    const data = await res.json()
    return {props: {data}}
}
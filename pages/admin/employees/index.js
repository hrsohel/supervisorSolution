import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Menu from '../../../components/Menu';
import Navbar from '../Navbar'
// import img from '../../public/master admin/icon/1564535_customer_user_userphoto_account_person_icon (1).png'
import HeadTag from '../../../components/HeadTag';

const employess = ({data}) => {
    return (
        <>
            <HeadTag title='Employees' />
           <Navbar />
           <main className='flex items-start justify-center flex-col md:flex-row bg-gray-200'>
                <Menu active="employee"/>
                <div className="instructor w-full md:h-[84vh] overflow-auto">
                    <h1 className='text-white text-center p-3 text-2xl font-bold bg-blue-900'>
                        <Link href='employess'>Employees</Link>
                        <Link href='add-employee'>Add Employee</Link>
                    </h1>
                    <div className='flex items-center justify-evenly p-4 flex-wrap'>
                        {
                            data.message.map(info => (
                                <div key={info.eid} className="card my-2 md:w-80 rounded-md  bg-white">
                                    <h2 className='text-white text-center text-lg rounded-t-md py-3 font-bold mb-3 w-full ise'>{`${info.fname} ${info.lname}`}</h2>
                                    <div className='flex items-center justify-center'>
                                        <Image className='block mx-auto rounded-full' src={`/uploads/employees/${info.empImage}`} width='100rem' height='100rem' objectFit='cover'/>
                                    </div>
                                    <div className='flex items-center justify-between px-3 mt-8'>
                                        <div className='font-bold text-blue-600'>
                                            <p className="text-lg my-2">Gender:</p>
                                            <p className="text-lg my-2">Phone No:</p>
                                            <p className="text-lg my-2">Job:</p>
                                            <p className="text-lg my-2">Email:</p>
                                        </div>
                                        <div className='font-bold text-red-600 text-right'>
                                            <p className="text-lg my-2">{info.gender}</p>
                                            <p className="text-lg my-2">{info.phone}</p>
                                            <p className="text-lg my-2">{info.designation}</p>
                                            <p className="text-lg my-2">{info.email}</p>
                                        </div>
                                    </div>
                                    <div className='p-1 w-[40%] mb-2 bg-blue-900 text-white text-lg rounded-lg mx-auto text-center'>
                                        <Link className='w-full' href={`/admin/employees/${info.eid}`}>Edit Employee</Link>
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

export default employess;

export async function getServerSideProps(context) {
    const res = await fetch('https://supervisorsolutions.com/api/employees')
    const data = await res.json()
    return {props: {data}}
}
import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image'
import down from "../../public/master admin/icon/3994354_arrow_download_downloading_interface_save_icon.png"
import dots from '../../public/master admin/icon/image 5.png'
import Menu from '../../components/Menu';
import HeadTag from '../../components/HeadTag';
const dashboard = ({data}) => {
    const total = data.message[0].length + data.message[1].length + data.message[2].length
    console.log(data)
    return (
        <>
            <HeadTag title='Dashboard' />
            <Navbar />
           <main className='flex items-start justify-start flex-col md:flex-row'>
                <Menu active="dashboard" />
                <div className="dashboard bg-gray-100 p-4 w-full h-[84vh] overflow-auto">
                    <div className='flex text-center items-center justify-evenly flex-wrap'>
                        <div className='m-2 p-4 bg-white'>
                            <p className="text-2xl text-blue-500 font-bold my-2">Total Student</p>
                            <p className="text-2xl font-bold my-2">{data.message[2].length}</p>
                            <div className='relative mx-auto w-28 h-2 rounded-full bg-gray-400'>
                                <div style={{width: `${data.message[2].length *100/total}%`}} className='rounded-full absolute top-0 left-0 w-6/12 h-full bg-blue-500'></div>
                            </div>
                        </div>
                        <div className='m-2 p-4 bg-white'>
                            <p className="text-2xl text-blue-500 font-bold my-2">Total Employees</p>
                            <p className="text-2xl font-bold my-2">{data.message[1].length}</p>
                            <div className='relative mx-auto w-28 h-2 rounded-full bg-gray-400'>
                                <div style={{width: `${data.message[1].length*100/total}%`}} className='rounded-full mx-auto absolute top-0 left-0 h-full bg-blue-500'></div>
                            </div>
                        </div>
                        <div className='m-2 p-4 bg-white'>
                            <p className="text-2xl text-blue-500 font-bold my-2">Total Instructors</p>
                            <p className="text-2xl font-bold my-2">{data.message[3].length}</p>
                            <div className='relative mx-auto w-28 h-2 rounded-full bg-gray-400'>
                                <div style={{width: `${data.message[3].length*100/total}%`}} className='rounded-full mx-auto absolute top-0 left-0 w-6/12 h-full bg-blue-500'></div>
                            </div>
                        </div>
                    </div>
                    <div className="responsive p-4 bg-white my-3">
                        <h1 className='text-2xl my-4 text-blue-500 font-bold'>Payment Status</h1>
                        <table className='w-full text-center'>
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Name</th>
                                    <th>Course Title</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                    <th>Transaction</th>
                                    <th>Download</th>
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
                                    <td><Image src={down} width="20rem" height="20rem" /></td>
                                </tr>
                                <tr className='text-gray-500 font-bold'>
                                    <td>1</td>
                                    <td>John Smith</td>
                                    <td>Teacher</td>
                                    <td className='text-red-500'>Pending</td>
                                    <td>$3500</td>
                                    <td>#1010</td>
                                    <td><Image src={down} width="20rem" height="20rem" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='flex items-center justify-evenly flex-wrap'>
                        <div className='bg-white p-4 md:w-6/12'>
                            <div className='responsive my-3'>
                                <h1 className='text-2xl my-4 text-blue-500 font-bold'>Students</h1>
                                <div className=''>
                                    <table className="w-full text-center">
                                        <thead>
                                            <tr className='font-bold'>
                                                <th>ID</th>
                                                <th>Names</th>
                                                <th>Date</th>
                                                <th>Course Name</th>
                                                <th>Completion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.message[2].map(info => (
                                                        <tr key={info.sid} className='font-bold text-gray-400'>
                                                        <td>1</td>
                                                        <td>{`${info.firstName} ${info.lastName}`}</td>
                                                        <td>{`${info.admissionDate}`}</td>
                                                        <td>EEE2121</td>
                                                        <td>Completed</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='responsive my-3'>
                            <h1 className='text-2xl my-4 text-blue-500 font-bold'>Company</h1>
                                <table className="w-full text-center">
                                    <thead>
                                        <tr className='font-bold'>
                                            <th>ID</th>
                                            <th>Company Name</th>
                                            <th>Date</th>
                                            <th>Course Quantity</th>
                                            <th>Members</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.message[3].map(info => (
                                                <tr key={info.iid} className='font-bold text-gray-400'>
                                                    <td>1</td>
                                                    <td>{`${info.fname} ${info.lname}`}</td>
                                                    <td>{`${info.joiningDate}`}</td>
                                                    <td>EEE1212</td>
                                                    <td>Completed</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='p-4 bg-white'>
                            <h1 className='text-2xl my-4 text-blue-500 font-bold'>Pie Chart</h1>
                            <svg className='' viewBox='-25 -25 150 150' width="100%" height="100%"> 
                                 <circle r="60" cx="50" cy="50" stroke='darkblue' strokeWidth="8"
                                 fill='white' strokeDasharray=""/>
                                 <circle r="60" cx="50" cy="50" stroke='blue' strokeWidth="8"
                                 fill='white' strokeDasharray="200"/>
                                 <circle r="60" cx="50" cy="50" stroke='dodgerblue' strokeWidth="8"
                                 fill='white' strokeDasharray="100"/>
                                 <circle r="60" cx="50" cy="50" stroke='powderblue' strokeWidth="8"
                                 fill='white' strokeDasharray="77"/>
                                 <circle r="45" cx="50" cy="50" stroke='darkblue' strokeWidth="2"
                                 fill='white'/>
                            </svg>
                        </div>
                    </div>
                </div>
            </main> 
        </>
    );
};

export default dashboard;

export async function getServerSideProps(context) {
    // const {data} = await axios.post('http://localhost:3000/api/dashboard')
    const res = await fetch('https://supervisorsolutions.com/api/dashboard')
    const data = await res.json()
    return {props: {data}}
}
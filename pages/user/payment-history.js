import React from 'react';
import UserMenu from '../../components/UserMenu';
import Link from 'next/link';
import NavbarFroAll from '../../components/NavbarForAll'
import { context } from '../_app';


const paymentHistory = () => {
    const {state, dispatch} = React.useContext(context)
    React.useEffect(() => {
        dispatch({type: "HIDE"})
    }, [])
    return (
        <>
        <NavbarFroAll />
          <main className='pt-24 flex items-start justify-center p-4 lg:flex-nowrap flex-wrap'>
            <UserMenu active="payment-history"/>
            <div className='ml-2 w-full shadow-2xl rounded-b-lg'>
                <div className='p-2 flex items-center justify-between bg-blue-900 rounded-t-lg'>
                    <i onClick={() => dispatch({type: "SHOW"})} className='fas fa-bars font-bold text-2xl cursor-pointer lg:hidden'></i>
                    <h1 className='font-bold text-white text-2xl'>Payment History</h1>
                </div>
                <div className='hover:bg-hoveSideBac hover:text-hovSideText relative block w-40 ml-auto my-4 text-center font-bold border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-full cursor-pointer'>
                    <Link href="" className='relative'><span className=''>Filter</span></Link>
                    <div className='hidden absolute left-0 top-full w-full p-4 shadow-lg rounded-l bg-white text-blue-500'>
                        <p className="text-lg">Data Wise</p>
                        <p className="text-lg">Highest</p>
                        <p className="text-lg">Lowest</p>
                    </div>
                </div>
                <table className='w-full bg-blue-400 text-center text-white'>
                    <thead className='bg-blue-900 rounded-t-lg'>
                        <tr>
                            <th className='p-2'>Order ID</th>
                            <th className='p-2'>Courses</th>
                            <th className='p-2'>Price</th>
                            <th className='p-2'>Payment Status</th>
                            <th className='p-2'>Date</th>
                            <th className='p-2'>Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-2 border-2 border-white'>#1010</td>
                            <td className='p-2 border-2 border-white'>Drug Free Training</td>
                            <td className='p-2 border-2 border-white'>25</td>
                            <td className='p-2 border-2 border-white'>Complete</td>
                            <td className='p-2 border-2 border-white'>20-10-2021</td>
                            <td className='p-2 border-2 border-white'>Bank</td>
                        </tr>
                    </tbody>
                </table>
            </div>      
        </main>  
        </>
    );
};

export default paymentHistory;
import React from 'react';
import UserMenu from '../../components/UserMenu';
import Link from 'next/link';
import NavbarFroAll from '../../components/NavbarForAll'
import { context } from '../_app';

const importantLinks = () => {
    const {state, dispatch} = React.useContext(context)
    React.useEffect(() => {
        dispatch({type: "HIDE"})
    }, [])
    return (
        <>
            <NavbarFroAll />
            <main className='pt-24 flex items-start justify-center p-4 lg:flex-nowrap flex-wrap'>
                <UserMenu active="important-links"/>
                <div className='w-full ml-2 shadow-2xl rounded-b-lg'>
                    <div className='p-2 flex items-center justify-between bg-blue-900 rounded-t-lg'>
                            <i onClick={() => dispatch({type: "SHOW"})} className='fas fa-bars font-bold text-2xl cursor-pointer lg:hidden'></i>
                            <h1 className='font-bold text-white text-2xl'>Important Links</h1>
                    </div>
                    <div className='hover:bg-hoveSideBac hover:text-hovSideText relative block w-40 ml-auto my-4 text-center font-bold border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-full cursor-pointer'>
                        <Link href="" className='relative'><span className=''>Filter</span></Link>
                        <div className='hidden absolute left-0 top-full w-full p-4 shadow-lg rounded-l bg-white text-blue-500'>
                            <p className="text-lg">Recent</p>
                            <p className="text-lg">Oldiest</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <table className='text-lg w-full bg-blue-100 text-blue-500'>
                            <tbody>
                                <tr className='border-2 border-white'>
                                    <td className='px-4'>1</td>
                                    <td className='px-4'>abc.com</td>
                                    <td className='px-4'>Open Link</td>
                                    <td className='px-4'>Copy Link</td>
                                </tr>
                                <tr className='border-2 border-white'>
                                    <td className='px-4'>1</td>
                                    <td className='px-4'>abc.com</td>
                                    <td className='px-4'>Open Link</td>
                                    <td className='px-4'>Copy Link</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
};

export default importantLinks;
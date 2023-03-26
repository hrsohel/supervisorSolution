import Image from 'next/image';
import React, { useContext, useState , useEffect} from 'react';
import UserMenu from '../../components/UserMenu';
import notify from '../../public/User profile/9035146_notifications_icon.png'
import user from '../../public/User profile/4781818_account_avatar_face_man_people_icon.png'
import bar from '../../public/Courses/Add to cart bar.png'
import axios from "axios"
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { context } from '../_app';
import NavbarForAll from '../../components/NavbarForAll'

const fetcher = async () => {
    const {data} = await axios.get("/api/studentsProfile")
    return data
}

const profile = () => {
    const [showEdit, setShowEdit] = useState(false)
    const {data} = useSWR("/api/studentsProfile", fetcher)
    const {response} = useContext(context)
    const history = useRouter()
    const [showMenu, setShowMenu] = useState(false)
    useEffect(() => {
        if(!response.data) history.push("/login")
    })
    return (

        <>
        <NavbarForAll />
        <main className='pt-24 flex items-start justify-center p-4'>
            <UserMenu active="profile" showMenu={showMenu} setShowMenu={setShowMenu}/>
            <div className='ml-2 w-full shadow-2xl rounded-b-lg'>
                <div className='p-2 flex items-center justify-between bg-blue-900 rounded-t-lg'>
                    <div onClick={() => setShowMenu(true)} className='block md:hidden cursor-pointer'><Image src={bar} width="25" height="25"/></div>
                    <h1 className='font-bold text-white text-2xl'>My Profile</h1>
                    <Image src={notify} width="30" height="30"/>
                </div>
                
                {
                    showEdit ? <form action="" className='flex items-center justify-around flex-col md:flex-row p-4'>
                    <div className='w-full my-2 md:w-1/3 md:mr-4 flex items-center justify-center'>
                        <div>
                            <Image src={user} width="200" height="200" className='shrink-1'/> <br />
                            <label htmlFor="pic" className='hover:bg-hoveSideBac hover:text-hovSideText py-2 px-4 rounded-lg bg-blue-900 text-white font-bold text-2xl'>Upload Photo</label>
                            <input className='hidden' type="file" name="" id="pic" />
                        </div>
                    </div>
                    <div className='w-full my-2 md:w-1/3 relative'>
                        <span onClick={() => setShowEdit(false)} className='absolute right-0 top-0 cursor-pointer text-lg font-bold'>Cancel</span>
                        <label htmlFor="name" className='text-lg'>Full Name</label>
                        <input type="text" name="" className='border-2 w-full my-2 border-blue-900 outline-none rounded-lg p-2 text-lg' id="name" defaultValue='Full Name'/>
                        <label htmlFor="email" className='text-lg'>Email Address</label>
                        <input type="text" name="" className='border-2 w-full my-2 border-blue-900 outline-none rounded-lg p-2 text-lg' id="email" defaultValue='Email Address'/>
                        <label htmlFor="phone" className='text-lg'>Phone Number</label>
                        <input type="number" name="" className='border-2 w-full my-2 border-blue-900 outline-none rounded-lg p-2 text-lg' id="phone" defaultValue={+88}/>
                        <input type="submit" className='cursor-pointer hover:bg-blue-500 hover:text-red-500 border-2 w-full my-2 border-blue-900 outline-none rounded-lg p-2 text-lg' defaultValue="Submit"/>
                    </div>
                </form> : <div className='flex items-center justify-evenly flex-col md:flex-row'>
                    <div className='flex items-center justify-evenly flex-col'>
                        <Image src={user} width="200" height="200"/>
                        <button onClick={() => setShowEdit(true)} className='hover:bg-hoveSideBac hover:text-hovSideText py-2 px-4 cursor-pointer rounded-lg bg-blue-900 text-white font-bold text-2xl'>Edit Profile</button>
                    </div>
                    <div className='my-12'>
                        <h3 className='my-4 text-2xl text-blue-900 font-bold'>Student ID</h3>
                        <p className='my-4 text-gray-500 text-md'>{data?.message[0].ID}</p>
                        <h3 className='my-4 text-2xl text-blue-900 font-bold'>Full Name</h3>
                        <p className='my-4 text-gray-500 text-md'>{data?.message[0].fname} {data?.message[0].lname}</p>
                        <h3 className='my-4 text-2xl text-blue-900 font-bold'>Email Address</h3>
                        <p className='my-4 text-gray-500 text-md'>{data?.message[0].email}</p>
                        {/* <h3 className='my-4 text-2xl text-blue-900 font-bold'>Phone</h3>
                        <p className='my-4 text-gray-500 text-md'>+88</p> */}
                    </div>
                </div>
                }
            </div>
        </main>
        </>
    );
};

export default profile;
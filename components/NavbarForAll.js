import React, { useContext, useEffect } from 'react';
import logo from '../public/images/logo.png'
import homeIcon from '../public/images/home.png'
import courseIcon from '../public/images/course.png'
import cart from '../public/images/cart.png'
import user from '../public/images/user.png'
import Image from 'next/image'
import Link from 'next/link'
import useCartTotal from './context/cart-context/useCartTotal';
import axios from 'axios';
import useSWR from 'swr';
import {deleteCookie} from "cookies-next"
import { useRouter } from 'next/router';
import { useCart } from './context/cart-context';

const NavbarForAll = () => {
    const {cartTotal, getCartLength, limit} = useCart()
    getCartLength()
    const history = useRouter()
    const fetcher = async () => {
        const {data} = await axios.get(`/api/hello/${2}`)
        return data
    }
    const {data} = useSWR("/api/hello/${token}", fetcher)
    const logout = async () => {
        if(!data?.message[0][0].name) {
            axios.get("/api/login").then(res => {
                history.push("/login")
            }).catch(err => console.log(err))
        } else {
            axios.get("/api/companyLogin").then(res => {
                history.push("/login")
            }).catch(err => console.log(err))
        }
    }
    const menuItems = <>
        <li className='mx-2'>
                <Link href={`/blog`}>
                    <h2 className='text-2xl font-semibold hover:text-red-700 transition duration-500 ease-in-out'>
                        <img src="/Courses/blog254.png" alt="" width="30px" height="30px"/>
                        Blog
                    </h2>
                </Link>
        </li>
        <li className='mx-2'>
            <a className="flex">
               
                    <img src="/images/course.png" alt="homeIcon" width="30px" height="30px" />
                        <Link href="/">
                            <h2 className='text-2xl font-semibold hover:text-red-700 transition duration-500 ease-in-out'>Courses</h2>
                        </Link>
            </a>
        </li>
        {
            data ? <li>
            <div className="flex">
                <img src="/images/cart.png" alt="homeIcon" width="30px" height="30px" />
                <Link href="/cart">
                    <h2 className='relative text-2xl font-semibold hover:text-red-700 transition duration-500 ease-in-out'>
                        Cart
                        <span className='absolute -right-5 -top-2'>
                            <div className='min-w-[25px] min-h-[25px] rounded-full bg-blue-700 text-xs flex items-center justify-center text-white'>
                                {
                                    cartTotal
                                }
                            </div>
                        </span>
                    </h2>
                </Link>
            </div>
        </li> : ""
        }
        {
            data ? <>
            <li className='mx-2 cursor-pointer'>
                {
                    !data.message[0][0].role && data.message[0][0].fname ? <Link href={`/user/profile`}>
                    <div className="flex">
                        <img src="/images/user.png" alt="homeIcon" width="30px" height="30px" />
                        <h2 className='text-2xl font-semibold hover:text-red-700 transition duration-500 ease-in-out'>{
                        data.message[0][0].fname 
                        } </h2>
                    </div>
                </Link> : data.message[0][0].role && data.message[0][0].fname ? <></> : <Link href={`/company`}>
                    <div className="flex">
                        <img src="/images/user.png" alt="homeIcon" width="30px" height="30px" />
                        <h2 className='text-2xl font-semibold hover:text-red-700 transition duration-500 ease-in-out'>Company</h2>
                    </div>
                </Link>
                }
                
            </li>
            {
                data.message[0][0].role ? <li className='mx-2 cursor-pointer'>
                    <Link href={`/admin/dashboard`}>
                        <div className="flex">
                            <img src="/images/user.png" alt="homeIcon" width="30px" height="30px" />
                            <h2 className='text-2xl font-semibold hover:text-red-700 transition duration-500 ease-in-out'>Admin</h2>
                        </div>
                    </Link>
                </li> : <></>
            }
            <li onClick={logout} className='mx-2 cursor-pointer'>
                    <div className="flex">
                        <img src="/images/user.png" alt="homeIcon" width="30px" height="30px" />
                        <h2 className='text-2xl font-semibold hover:text-red-700 transition duration-500 ease-in-out'>Logout </h2>
                    </div>
            </li>
            </> : <li className='mx-2 cursor-pointer'>
            <Link href={`/login`}>
                <div className="flex">
                    <img src="/images/user.png" alt="homeIcon" width="30px" height="30px" />
                    <h2 className='text-2xl font-semibold hover:text-red-700 transition duration-500 ease-in-out'>Login</h2>
                </div>
            </Link>
        </li>
        }
    </>
    return (
        <div className='fixed top-0 left-0 right-0 bg-white z-[999]'>
            <div className="shadow-2xl">
                <div className="navbar bg-base-100 max-w-7xl mx-auto flex items-center justify-between">
                    <div className="navbar-start cursor-pointer">
                        <Link href="/" >
                            <Image
                                src={logo}
                                alt="logo"
                                width="300px"
                                height="90px"
                            />
                        </Link>
                    </div>
                    <div className="navbar-end hidden lg:flex ">
                        <ul className="menu menu-horizontal p-0 flex items-center justify-center">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="dropdown lg:hidden navbar-end flex ">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className=" menu menu-compact dropdown-content mt-72 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarForAll;
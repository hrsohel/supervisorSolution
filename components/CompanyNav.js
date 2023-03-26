import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import homeIcon from '../assets/home.png'
import courseIcon from '../assets/course.png'
import cart from '../assets/cart.png'
import user from '../assets/user.png'
import Image from 'next/image'
import Link from 'next/link'
import { context } from '../pages/_app';

const Navbar = () => {
    const {loginState} = useContext(context)
    const menuItems = <>
        <li>
            <Link href={`/`}>
                <Image src={homeIcon} alt="homeIcon" width="30px" height="30px" />
                <h2 className='text-2xl font-semibold'>Home</h2>
            </Link>
        </li>
        <li>
            <Link href={`/coursesPages`}>
                <Image src={courseIcon} alt="homeIcon" width="30px" height="30px" />
                <h2 className='text-2xl font-semibold'>Courses</h2>
            </Link>
        </li>
        {
            loginState ? <li>
            <Link href={`/cart`}>
                <Image src={cart} alt="homeIcon" width="30px" height="30px" />
                <h2 className='text-2xl font-semibold'>Cart</h2>
            </Link>
            </li> : ""
        }
        {
            !loginState ? <li>
                <Link href={`/user/login`}>
                    <div>
                        <Image src={user} alt="homeIcon" width="30px" height="30px" />
                        <h2 className='text-2xl font-semibold'>Login</h2>
                    </div>
                </Link>
            </li> : <>
                <Link href={`/`} className='pointer-events-auto'>
                    <div>
                        <Image src={user} alt="homeIcon" width="30px" height="30px" />
                        <h2 className='text-2xl font-semibold'>User</h2>
                    </div>
                </Link>
                <Link href={`/user/logout`}>
                    <div>
                        <Image src={user} alt="homeIcon" width="30px" height="30px" />
                        <h2 className='text-2xl font-semibold'>Logout</h2>
                    </div>
                </Link>
            </>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100 max-w-7xl mx-auto ">
                <div className="navbar-start ">
                    <Image
                        src={logo}
                        alt="logo"
                        width="235"
                        height="65px"
                    />
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="dropdown lg:hidden navbar-end flex">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-72 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
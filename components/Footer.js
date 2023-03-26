import React from 'react';
import Image from 'next/image'
import footLogo from '../public/images/footLogo.png';
import Link from 'next/link';

// Regulations and Compliance
// Terms and Conditions
// FAQ
// Privacy and Policy
// Contact Us
// email.edu@gmail.com
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-[#0c3a71] text-white flex justify-center flex-col md:flex-row">
                <div className="flex-1 flex flex-col ">
                    {/* <a className="link link-hover text-2xl">About Supervision Solutions</a>
                    <a className="link link-hover text-2xl">Initiatives</a>
                    <a className="link link-hover text-2xl">Instructor Qualifications</a>
                    <a className="link link-hover text-2xl">Regulations and Compliance</a>
                    <a className="link link-hover text-2xl">Resources</a>
                    <a className="link link-hover text-2xl">Terms and Conditions</a>
                    <a className="link link-hover text-2xl">FAQ</a>
                    <a className="link link-hover text-2xl">Privacy and Policy</a>
                    <a className="link link-hover text-2xl">Contact Us</a>
                    <a className="link link-hover text-2xl">email.edu@gmail.com</a> */}
                    <div className="link link-hover text-lg hover:underline hover:text-red-500">
                        <Link href={`/about`} className="" >About</Link>
                    </div>
                    <div className="link link-hover text-lg hover:underline hover:text-red-500">
                        <Link href="/terms-conditions" className="" >Terms and Conditions</Link>
                    </div>
                    <div className="link link-hover text-lg hover:underline hover:text-red-500">
                        <Link href="/faq" className="" >FAQ</Link>
                    </div>
                    {/* <div className="link link-hover text-lg hover:underline hover:text-red-500">
                        <Link href="#" className="" >Privacy and Policy</Link>
                    </div> */}
                    <div className="link link-hover text-lg hover:underline hover:text-red-500">
                        <Link href="#" className="" >Contact Us</Link>
                    </div>
                    <p>contact@supervisorsolutions.com</p>
                </div>
                <div className="flex-1">
                    <div className="grid grid-flow-row gap-4 ">
                        <Image src={footLogo} alt="homeIcon" className="shadow-2xl shadow-red-400" />
                    </div>
                    <p className='text-lg text-red-600 shadow-2xl shadow-red-400'>©By Supervisor Solutions</p>
                </div>
                <div className="flex-1">
                </div>
            </footer>
        </div>
    );
};

export default Footer;
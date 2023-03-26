import React, {useEffect} from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Group01 from '../public/images/Group01.png';
import Group02 from '../public/images/Group02.png';
import Group03 from '../public/images/Group03.png';
import GroupBack from '../public/images/GroupBack.png';
import Aos from 'aos';


const Body1 = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    })
    return (
        <div className="py-2 my-5  ">
           
          
            <div className="background relative flex items-center justify-around flex-col md:flex-row">
                
                <div data-aos="zoom-in" className="">
                    <Image 
                    src={Group01}
                    alt="triangle"
                    width={400}
                    height={400}
                    className="drop-shadow-xl md:drop-shadow-xl p-8"
                    />
                </div>
                <div className="md:mr-10 py-5 md:w-1/3 font-bold text-[#06356CF7] text-justify text-xl"  data-aos="fade-left">
                    <p className=" dark:text-[#8FE3CF]">Premium learning experience and choose from the various niches to learn</p>
                </div>
                
            </div>
            <div className="relative py-5 my-8 flex items-center justify-around flex-col md:flex-row">
                <div className="md:mr-10 py-5 md:w-1/3 font-bold text-[#06356CF7] text-justify text-xl"  data-aos="fade-right">
                    <p className=" dark:text-[#8FE3CF]">Training Courses That Don’t Expire</p>
                </div>
                <div data-aos="zoom-in" className="">
                    <Image 
                    src={Group02}
                    alt="triangle2"
                    width={400}
                    height={400}
                    className="drop-shadow-xl md:drop-shadow-xl p-8"
                    />
                </div>           
            </div>
            <div className="relative py-10 my-8 flex items-center justify-around flex-col md:flex-row">
                <div data-aos="zoom-in" className="">
                    <Image 
                    src={Group03}
                    alt="triangle3"
                    width={400}
                    height={400}
                    className="drop-shadow-xl md:drop-shadow-xl p-8"
                    />
                </div>
                <div className="md:ml-10 py-5 md:w-1/3 font-bold text-[#06356CF7] text-justify text-xl"  data-aos="fade-left">
                    <p className=" dark:text-[#8FE3CF]">Advance in your Career</p>
                </div>
                
            </div>

            
        </div>
    );
};

export default Body1;
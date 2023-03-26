import React from 'react';
import Image from 'next/image';
import laptop from '../public/images/laptop.png';
import  wave01 from '../public/images/wave01.png';
import Link from 'next/link';
import Body03 from '../components/Body3';


const Body = () => {
    return (
        <div className="py-2 my-20 ">
            <div className="flex item-center  justify-around flex-col md:flex-row">
                <div className="px-5 md:w-1/3 font-medium text-[rgba(6,53,108,0.97)] text-justify text-lg ">
                    <p className=" dark:text-white"><span className="text-5xl font-bold text-rose-600 ">A</span>re you considering where you can source your next Department of Transportation(DOT) or Drug Free Workplace training from?</p>
 
                    <p className="whitespace-normal   dark:bg-slate-200 ">Are you concerned about your business compliance, and would welcome some professional guidance, including training and materials? Here at Supervisor Solutions, we offer all the training courses you require to ensure your business is compliant. Our course materials cover the most stringent regulations, giving you that ultimate peace of mind.</p>
                        {/* <div className="border-1 border-[#1F497B] bg-sky-600 hover:bg-sky-700">
                            <button type="button" className="">Find Out More...</button>
                        </div> */}
                    {/* <div className="w-40 py-5 text-white bg-sky-600 hover:bg-sky-700 hover:text-red-700 curlButton ">
                    <Link href={`Body03`} 
                    className="px-3 py-2 text-white bg-sky-600 hover:bg-sky-700 curlButton">Find Out More...</Link>
                    </div> */}
                </div>
                <div className="md:pr-10 p-4">
                    <Image
                     src={laptop}
                     alt="laptopicon"
                     width={600}
                     height={500}
                     className="drop-shadow-md md:drop-shadow-xl p-8" />
                </div>

            </div>
            <div className="py-8 my-8">
                <Image src={wave01}
                alt="Wave"
                width=""
                height="500"
                objectFit="cover" 
                className="w-full"
                />
            </div>



            
        </div>
    );
};

export default Body;
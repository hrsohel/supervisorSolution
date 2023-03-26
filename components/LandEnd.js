import React from 'react';
import Image from 'next/image';
import  wave01 from '../public/images/wave01.png';
import Link from 'next/link';
import dotImg from '../public/images/dotImg.png';
import circleImg from '../public/images/circleImg.png';
const LandEnd = () => {
    return (
        <div className=" relative bg-gradient-to-r from-[#D9D9D9] to-[#B2F1FF]">
            <div className="dot">                
                    <div className="py-8 my-8">
                      <Image src={wave01}
                        width=""
                        height="500"
                        objectFit="cover" 
                        className="w-full"
                      />
                    </div>
                    <div className="flex justify-center">

                        <div className="flex items-center  justify-center text-center mb-48 py-5 pb-4 w-72 text-slate-800 bg-gradient-to-t from-[#78A3D4] to-[#BFF4FF]  hover:bg-sky-800 hover:text-red-700 font-semibold text-2xl border-0 rounded-lg shadow-2xl shadow-blue-400 md:drop-shadow-xl ">
                        <Link href={`company`} 
                        className=" absolute p-8 text-white bg-sky-600 hover:bg-sky-700  ">Company</Link>
                        </div>
                    </div>
                         <div className="flex justify-center">
                            <div className="  border-0 border-b-4 border-l-4 border-[#1F497B] shadow-2xl md:w-3/5 p-4" >
                              <div>
                                <p className=" text-[#06356C]"><span className="text-red-500 text-2xl font-bold drop-shadow-lg">Extra! Extra!</span> Enroll with Supervisor Solutions today in DOT and Non-DOT Reasonable Suspicion Training for both Supervisors and Employees and learn the signs and symptoms of drug and alcohol abuse today. Responsibilities of the Designated Employee Representative (DER) and the Employee Assistance Program (EAP)</p>                           
                              </div>
                               <div className="w-40 py-4 text-white bg-sky-600 hover:bg-sky-700 hover:text-red-700 text-center mx-auto my-8 rounded-br-lg">
                                <Link href="/extra"
                                  className="px-3 py-2 text-white bg-sky-600 hover:bg-sky-700 text-center drop-shadow-lg rounded-br-lg">Find out more</Link>
                               </div>
                            </div>
                          </div>
                          {/*   ---Arrow animation Start---
                           <div className="boxBody ">
                             <span className="spanBox"> </span>
                             <span className="spanBox"> </span>
                             <span className="spanBox"> </span>
                           </div>
                            ---Arrow animation End---*/}
                          <div className='md:w-2/5 mx-auto my-4 '>
                              <video 
                                  src={`/videos/supervisorSolutions.mp4`}
                                  width="100%"
                                  height="auto"
                                  controls
                                  id='video-player'
                                  className='md:mx-2 block rounded-lg mx-auto'
                              />
                         </div>
                    <div  className=" flex justify-center my-8 md:w-auto ">
                      <div>
                        <div className="border-0 shadow-2xl  md:w-2/3 rounded-r-xl p-4">
                               <p className=" p-8 text-[#06356C] "><span className="text-red-500 font-bold drop-shadow-lg">DOT Reasonable Suspicion Training</span> Empower your company’s productivity, safety and law-compliance with this dedicated online training course, uniquely tailored to offer several-hour quality training on DOT Reasonable Suspicion (aka Drug and Alcohol awareness training).Our Supevisor Solutions RST (Reasonable Suspicion Training) delivers invaluable lessons on analyzing, effectively noticing and dealing with the behavioral, physical, contemporaneous and performance indicators of probable drug use and/or alcohol abuse. Besides being highly efficient at providing your supervisors and employees with all the necessary guidance, tools and training required in order to recognize, understand and manage indicators of drug and alcohol abuse at the workplace, this course also .....</p>
                               <div className="w-40 py-4 text-white bg-sky-600 hover:bg-sky-700 hover:text-red-700 text-center mx-auto my-8  rounded-br-lg">
                                  <Link href="#"
                                  className="px-3 py-2 text-white bg-sky-600 hover:bg-sky-700 text-center drop-shadow-lg ">Find out more</Link>
                               </div>
                               <div className="">
                                <Image src={circleImg} alt="images" width="150" height="160" />
                               </div>
                        </div>
                      </div>
                    </div>
                   

            </div>  
               
        </div>
    );
};

export default LandEnd;
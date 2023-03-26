import React from 'react';
import Image from 'next/image';
import imgCourse01 from '../public/images/imgCourse01.png';
import imgCourse02 from '../public/images/imgCourse02.png';
import imgCourse03 from '../public/images/imgCourse03.png';


const Body3 = () => {
    return (
        <div className="md:pb-12">
            <div className="linebg md:p-4 my-2 md:my-0">
              <div className="relative pt-32 md:pt-0 md:w-2/5">
                <div className="  bg-gradient-to-r from-[#e6ebf1] to-[#D9E3F1] p-8 md:mr-10 py-5  font-md text-[#291F71] text-justify text-md  md:mx-10 border-l-8 border-b-8 border-[#1F497B] rounded-0">
                    <p className="text-lg font-bold shadow-2xl shadow-blue-400">Drug-Free Workplace Training</p>
                    <p className="text-left">Are you in need of supervisor training to ensure your business is drug-free compliant? Offering a comprehensive program including relevant content to comply with regulations, our easy-to-follow course will ensure your supervisors are completely trained to the appropriate level. </p>
                 { /*  <div className=" absolute  md:-bottom-18 md:-right-20 posImage">
                        <Image 
                        src={imgCourse02}
                        width={150} 
                        height={150}
                        objectFit="cover"
                        className="border-4 border-sky-200 rounded-full"/>
    </div>*/}

                </div>
              </div>
              <div className="relative pt-32 md:pt-0 md:w-2/5 md:ml-auto my-2 md:my-0">
                <div className="md:text-right  bg-gradient-to-r from-[#e6ebf1] to-[#D9E3F1] p-8 md:mr-10 py-5  font-md text-[#291F71] text-md  md:mx-10 border-l-8 border-b-8 border-[#1F497B] rounded-0">
                    <p className="text-lg font-bold drop-shadow-xl">DOT Signs and Symptoms Training Across the U.S.
</p>
                    <p className="">Are you concerned that you will not be able to access this first-class material due to your location? We are delighted to offer our training across the United States of America, covering all 50 states. No matter where you are in the U.S., we will support you and your business, ensuring that we can help you stay compliant with the required training for your DOT mode.
 </p>
                   {/* <div className="absolute md:-bottom-16 md:-left-16 posImage">
                        <Image
                        src={imgCourse01}
                        alt="Course"
                        width={150} 
                        height={150}
                        objectFit="cover"
                        className="border-4 border-sky-200 rounded-full block mx-auto md:mx-0 md:inline"/>
    </div>*/}
                </div>

              </div>
              <div className="relative pt-32 md:pt-0 md:w-2/5">
                <div className="  bg-gradient-to-r from-[#e6ebf1] to-[#D9E3F1] p-8 md:mr-10 py-5  font-md text-[#291F71] text-justify text-md  md:mx-10 border-l-8 border-b-8 border-[#1F497B] rounded-0">
                    <p className="text-lg font-bold  drop-shadow-xl text-[#D61C4E] dark:text-black">Unrivaled, Detailed Training</p>
                    <p className="text-left">Choose Supervisor Solutions as your provider to receive outstanding service and content. Each of our training programs has been carefully written to ensure the content covers the necessary regulations required by law. We have been considerate to who is covered too, giving you the peace of mind that you have ensured full compliance for your DOT mode.
 </p>
                    {/*<div className=" absolute  md:-bottom-16 md:-right-20 posImage">
                        <Image src={imgCourse03}
                        alt="Course"
                        width={150} height={150}
                        objectFit="cover"
                        className="border-4 border-sky-200 rounded-full"/>
</div>*/}

                </div>
              </div>
              

              {/* <div className="top-0 right-0  w-full">
                      <Image 
                      src={lineBg}
                      width=""
                      height=""
                      className="" />
              </div> */}
            
            </div>  

        </div>
    );
};

export default Body3;
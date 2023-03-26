import React from 'react';
import NavbarForAll from '../components/NavbarForAll'
import education from '../public/images/education.png'
import Image from 'next/image'
import courseIcon from '../public/images/courseIcon.png'
import refundIcon from '../public/images/refundIcon.png'
import groupStudy from '../public/images/groupStudy.png'
import Footer from '../components/Footer';

const aboutUs = () => {
    return (
        <>
            <NavbarForAll />

            <div className='bg-gradient-to-b from-[#ffffff] to-[#c0ddff]'>
                <div className='max-w-7xl mx-auto'>
                    <div className='my-12 flex lg:justify-between justify-center items-center lg:flex-row flex-col'>
                        <h2 className='lg:text-5xl text-3xl  text-center text-[#06356C] font-semibold'>Changing learning for the better</h2>
                        <div className=''>
                            <Image src={education} alt="education" />
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col justify-evenly lg:px-0 px-12 my-12'>
                        <div className='lg:w-2/6 shadow-lg flex flex-col items-center py-12'>
                            <Image src={courseIcon} alt="homecourseIconIcon" />
                            <h1 className='lg:text-2xl text-1xl  font-semibold mt-2'>More On Courses</h1>
                        </div>
                        <div className='lg:w-2/6 shadow-lg flex flex-col items-center lg:mt-0 mt-12 py-12'>
                            <Image src={refundIcon} alt="refundIcon" />
                            <h1 className='text-2xl font-semibold mt-2'>Refund Policies</h1>
                        </div>
                    </div>
                    <div className='text-[#06356C] font-medium lg:px-0 px-6'>
                        <p>
                            Throughout the nation both drug and alcohol use runs rampant in many different industries including transportation. In many instances supervisors are not aware of the signs and symptoms of drug & alcohol, so specific training is needed under Federal Law for DOT Reasonable Suspicion Training for all supervisors in any DOT regulated safety-sensitive mode.
                        </p>
                        <p className='my-6'>
                            Federal law states that any supervisor with one or more safety-sensitive employees must take DOT Reasonable Suspicion Training to help identify the signs and symptoms of drugs & alcohol use and abuse.
                        </p>
                    </div>
                    <div className='flex lg:justify-between justify-center items-center lg:flex-row flex-col-reverse mb-12 lg:px-0 px-6'>
                        <p className='text-[#06356C] font-semibold flex-1'>
                            DOT modes that fall under this requirement are: Federal Motor Carrier Safety Administration (FMCSA), Federal Railroad Administration (FRA), Federal Transit Administration (FTA), Federal Aviation Administration (FAA), United States Coast Guard (USCG) and the Pipeline and Hazardous Materials Safety Administration (PHMSA).
                            Compliance and safety are greatly enhanced when Reasonable Suspicion Training is implemented. Training ensures supervisors the ability to know what to look for, how to react and the next steps to follow when faced with an employee(s) that is/are suspected of drugs and/or alcohol use.
                        </p>
                        <div className='flex-1'>
                            <Image src={groupStudy} alt="groupStudy" />
                        </div>
                    </div>
                    <div className='text-[#06356C] font-medium lg:px-0 px-6'>
                        <p>
                            DOT Regulations require a supervisor take a signs and symptoms training course that consist of 60 minutes of drug symptoms and another 60 minutes of alcohol symptoms. This course has been made to not only meet, but exceed keeping you compliant with DOT rules and regulations and your company better protected in the event an audit.
                        </p>
                        <p className='mt-6'>
                            Our course provides a certificate for the person that completes the training that is able to be downloaded at the end of the course, once completed with the short quiz. After taking the course, supervisors can better recognize safety procedures and better mitigate safety hazards before they happen.
                        </p>
                        <p className='mt-6'>
                            To take our training today, you can enroll in the DOT Reasonable Suspicion Training and start learning the signs and symptoms of drug and alcohol abuse.
                        </p>
                        <p className='py-6'>
                            Our course was designed to cover specific DOT modes requirements and compliance in all 50 states.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default aboutUs;
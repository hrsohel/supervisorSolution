import React from 'react';
import communcation from '../public/images/communication.png'
import recording from '../public/images/recording.png'
import exam from '../public/images/exam.png'
import Image from 'next/image'

const Features = () => {
    return (
        <div className='border'>
            <div className='flex justify-center flex-col max-w-7xl mx-auto mt-28 mb-28 '>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
                    <div className='text-center'>
                        <Image src={communcation} alt="homeIcon" width="195px" height="195px" />
                        {/* <h2 className='text-3xl font-bold mt-12'>Communication</h2>
                        <p className='text-2xl mt-6'>Live one on one sessions Simplifying and making a better connection, and creating better understanting
                        </p> */}
                    </div>
                    <div className='text-center lg:my-0 my-12'>
                        <Image src={recording} alt="homeIcon" width="195px" height="195px" />
                        {/* <h2 className='text-3xl font-bold mt-12'>Recordings</h2>
                        <p className='text-2xl mt-6'>Live session , clearing doubts Recording can be veiwed at any time during the study period
                        </p> */}
                    </div>
                    <div className=' text-center'>
                        <Image src={exam} alt="homeIcon" width="195px" height="195px" />
                        {/* <h2 className='text-3xl font-bold mt-12'>Training Exam</h2>
                        <p className='text-2xl mt-6'>Practice makes perfect In course assignments and exams to make you well trained
                        </p> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Features;
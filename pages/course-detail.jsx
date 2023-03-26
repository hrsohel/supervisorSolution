import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import coursesData from '../utils/CoursesData'
import { useCart } from '../components/context/cart-context';
import useCartTotal from '../components/context/cart-context/useCartTotal';

import NavbarForAll from '../components/NavbarForAll'
import Footer from '../components/Footer'

const contentList = [
  'Introduction',
  'Testing Circumstances',
  'MRO Review',
  'Alcohol Testing',
  'DER Scenarios',
  'Quiz'
]
const CourseDetail = () => {
  const [detailState, setDetailState] = useState('description') // content, terms
  const currentCourse = coursesData.find(course => course.id == 1);
  const {addProduct} = useCart();
  const {total} = useCartTotal();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAdded(false)
    }, 500)
  }, [total.productQuantity])

  return (
    <>
    <NavbarForAll />
    <div className='mt-20'>
      <div className='mb-12 md:px-0'>
        <div className='min-h-[200px] max-h-72 flex justify-center items-center'>
          <div className='relative'>
            {/* <img src="/images/course-detial-header.jpg" className='w-full h-full object-contain' alt="Course Detail Header" /> */}
            <h1 className=' text-blue-800 text-xl'>{currentCourse.title}</h1>
          </div>
        </div>
        <div className='bg-blue-200 py-3 mb-2'>
          <div className='flex md:items-center flex-col md:flex-row md:max-w-6xl px-2 m-auto'>
            <button onClick={() => setDetailState('description')} className={` h-12 flex items-center justify-center transition ${detailState == 'description' ? 'bg-[#134563] text-white' : 'bg-transparent text-[#134563] border border-[#134563]'}   font-bold text-sm  w-full outline-none`}>
                Description
            </button>
            <button onClick={() => setDetailState('content')} className={`text-sm h-12 flex items-center justify-center transition ${detailState == 'content' ? 'bg-[#134563] text-white' : 'bg-transparent text-[#134563] border border-[#134563]'}  font-bold text-sm  w-full outline-none`}>
                Content
            </button>
            <button onClick={() => setDetailState('terms')} className={`text-sm h-12 flex items-center justify-center transition ${detailState == 'terms' ? 'bg-[#134563] text-white' : 'bg-transparent text-[#134563] border border-[#134563]'}  font-bold text-sm  w-full outline-none`}>
                Terms & Conditions
            </button>
          </div>
        </div>
        <div className=' md:max-w-6xl px-2 m-auto'>
        <div className='grid gap-8 md:grid-cols-12 '>
          <div className='md:col-start-1 md:col-end-5'>
            <div className='w-full shadow-2xl rounded-sm overflow-hidden'>
              <h2 className='text-center py-2 bg-[#134563] font-semibold text-white text-[18px]'>Details</h2>

              <div className=' px-3 py-1 flex flex-col divide-y-2 divide-[#000000]'>
                <div className='flex justify-between items-center py-2.5 text-base font-medium'><span>Modules</span><span>5</span></div>
                <div className='flex justify-between items-center py-2.5 text-base font-medium'><span>Downloadable Certificate</span><span></span></div>
                <div className='flex justify-between items-center py-2.5 text-base font-medium'><span>Price</span><span>$30</span></div>
              </div>

              <button onClick={() => {
                addProduct({ ...currentCourse, quantity: 1 });
                setIsAdded(true)
              }} className='block w-full text-center py-3 bg-[#134563] font-semibold text-white text-[18px]'>
                {!isAdded ? 'Add to Cart': 'Added'}
                </button>
            </div>
          </div>
          <div className='md:col-start-5 md:col-end-13'>
            <div className='w-full shadow-2xl rounded-sm overflow-hidden'>
              <h2 className='capitalize text-center py-3 bg-[#134563] font-semibold text-white text-[18px]'>{detailState === 'terms' ? 'Terms & Condition' : detailState  }</h2>
                <div className={`${detailState !== 'content' && 'p-3'}`}>
                  {detailState === 'description' ? (
                    <p className='font-normal text-base text-gray-800 text-justify'>{currentCourse.description2}</p>
                  ):  detailState === 'terms' && (
                    <p className='font-normal text-base text-gray-800 text-justify'>
                      Supervisor Solutions Consulting Group confirms that, to the best of our knowledge, these courses fulfill DOT training criteria by using the "certified" emblem. Except as needed by the DOT or as assessed as part of a customer's DOT audit, these courses have not been formally reviewed and authorized by the DOT. The DOT does not support any particular programs and is not associated with Current Consulting Group, its affiliates, or its representatives. These courses satisfy the DOT time and content standards as stated in the Federal Register when viewed through the CCG web based LMS (this site). CCG is unable to verify that students are actually viewing the course materials as they are being shown or that they are finishing the tests. It is only the employer's obligation to ensure that they are in compliance with all applicable laws, and it is also solely their responsibility to ensure that their employees comprehend and make use of the information provided. By using this website, you consent to the following terms: any complaints will be settled via individual arbitration, not as a group; any damages will be restricted to the amount paid by the user for this training; and any arbitration proceedings will take place in the English language.

                    </p>
                  )}
                </div>
              </div>
              {
                detailState === 'content' && (
                  <div className='w-full overflow-hidden mt-2'>
                    <ul className='flex flex-col gap-4'>
                      {contentList.map((item, idx) => (
                        <li key={idx} className='text-base shadow-sm border border-gray-300 bg-white rounded-lg flex items-center gap-2 px-4 py-3 font-semibold'>
                          <div className='flex items-baseline gap-2'>
                            <span className='flex items-center gap-2'> 
                              <img className='h-5' src='/images/Book modules.png' alt="" /> 
                              {idx+1}. 
                            </span>
                            <span className='flex flex-col gap-1 relative top-[-4px]'>
                            <p>{item}</p>
                            <p className='text-sm text-gray-500'>{idx === contentList.length -1 ? 'Exam' : 'Module'}</p>
                            </span>
                          </div>
                        </li>
                      ))}
                      </ul>
                  </div>
                )
              }
          </div>
        </div>
        </div>
        
      </div>
    </div>
    <Footer />
    </>
  )
}

export default CourseDetail
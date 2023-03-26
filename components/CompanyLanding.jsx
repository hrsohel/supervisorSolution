import Link from 'next/link'
import React from 'react'

const CompanyLanding = () => {
  return (
    <div className='min-h-screen w-full bg-[#E2F5FF]'>
      <div className='max-w-5xl m-auto px-2 relative'>
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center '>
          {/* left side */}
          <div>
            <div className='grid gap-4'>
              <h1 className='font-extrabold drop-shadow-2xl text-4xl'>Learn Without <br />Limits</h1>
              <p className='text-base font-normal text-gray-500'>Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
              <div className='grid gap-4 pt-8'>
                <button className='text-base max-w-max   h-10 rounded-full flex items-center justify-center gap-1 font-semibold w-full px-10 active:scale-[.98] transition bg-[#1F497B] text-white'>
                  Buy Courses
                </button>
                 <div className=' hover:text-red-500 text-base max-w-max   h-10 rounded-full flex items-center justify-center gap-1 font-semibold w-full px-10 active:scale-[.98] transition bg-[#1F497B] text-white'>
                  <Link href={`/coursesPages`} className="px-10  hover:text-red-500" >
                    Enroll-Funded Courses
                  </Link>
                </div>
               
              </div>
            </div>
          </div>
          {/* right side */}
          <div className=' sm:relative sm:left-0 sm:top-0 left-[20%] top-[55%] overflow-hidden'>
            <div className=' sm:max-w-sm m-auto'>
              <img className='w-full h-full' src="/images/model.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyLanding
import React, { useState } from 'react'
import ImageInput from './ImgInput';
import InputComponent from './InputComponent'

const enrolledCourses = [
  {
    id: 1,
    course_name: 'Drug-Free Workplace Training',
    price: 299,
    image: '',
    courseId: '#234235'
  },
  {
    id: 2,
    course_name: 'DOT Mode Training Across the US ',
    price: 100,
    image: '',
    courseId: '#254535'
  },
  {
    id: 3,
    course_name: 'Federal Motor Carrier Safety Administration (FMCSA) Supervisor Training',
    price: 500,
    image: '',
    courseId: '#785f34'
  }
]


const CompanyProfileAndEnrolledCourses = () => {
  // not editable info
  const companyId = '#234234';
  const companyEmail = 'example@gmail.com'

  // editable info
  const [companyInfo, setCompanyInfo] = useState({
    profileImg: '',
    company_name: 'My company Name',
    company_phone: '01790138957',
  })

  const handleChange = (e) => {
    setCompanyInfo({...companyInfo, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <div className='w-full bg-[#E2F5FF] min-h-screen'>
      <div className='max-w-4xl  mx-auto p-4 h-full'>
        <div className='grid gap-4'>
          {/* edit profile */}
          <form onSubmit={handleSubmit}>
            <div className='grid gap-2'>
              <div className='flex items-center gap-4'>
                <div className='w-[130px] h-[130px] bg-gray-300 rounded-full'>
                  <img className='w-full h-full object-cover rounded-full' src={`${companyInfo.profileImg || '/images/placeholderImg2.svg'}`} alt="" />
                </div>
                <button  className='text-sm max-w-max relative  h-8 rounded-full flex items-center justify-center gap-1 font-semibold w-full px-4 active:scale-[.98] transition border border-[#1F497B] text-[#1F497B]' type="submit">
                    Change Photo
                    <ImageInput isNeedBase64 setImage={(img) => {
                      setCompanyInfo({
                        ...companyInfo,
                        profileImg: img
                      })
                    }} />
                </button>
              </div>

              <div className='grid gap-x-4 sm:grid-cols-2 grid-cols-1'>
                <InputComponent  
                  name="company_id"
                  label={'Company Id'} 
                  value={companyId}
                  disabled
                  required
                />
                <InputComponent  
                  name="company_name"
                  label={'Company Name'} 
                  value={companyInfo.company_name} 
                  onChange={handleChange} 
                  required
                />
                <InputComponent  
                  name="company_email"
                  label={'Email Address'} 
                  value={companyEmail} 
                  disabled
                  required
                />
                <InputComponent  
                  name="company_phone"
                  label={'Phone Number'} 
                  value={companyInfo.company_phone} 
                  onChange={handleChange} 
                  required
                />
                <div className='sm:col-start-2 sm:justify-self-end '>
                  <button  className='text-base max-w-max  hover:text-red-500 h-10 rounded-lg flex items-center justify-center gap-1 font-semibold w-full px-12 active:scale-[.98] transition bg-[#1F497B] text-white' type="submit">
                    Edit & Save
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* enrolled courses */}
          <div>
            <div className='grid gap-2'>
              <h1 className='text-lg font-semibold'>Enrolled Courses</h1>
              
              <div>
                <div className='grid gap-3'>
                    {
                      enrolledCourses.map(course => (
                        <div key={course.id} className="flex items-center justify-between gap-3">
                          <div className='flex items-center gap-3 basis-2/3'>
                            <div className='max-w-[100px] max-h-[100px] col-start-1 col-end-3'>
                              <img className='w-full h-full object-contain rounded-lg' src="/images/course1.png" alt="" />
                            </div>
                            <div className=''>
                              {course.course_name}
                            </div>
                          </div>
                          <div className=' basis-2/6 '>
                            <button  className='text-base max-w-max ml-auto  h-full rounded-lg flex items-center justify-center gap-1 font-semibold w-full px-10 py-2  active:scale-[.98] transition bg-[#1F497B] text-white'>
                              View Coruse
                            </button>
                          </div>
                        </div>
                      ))
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfileAndEnrolledCourses
import React, { useEffect, useState } from 'react'
import InputComponent from './InputComponent';
import CompanyCoursesToEnroll from './CompanyCoursesToEnroll'
import axios from 'axios';
import useSWR from 'swr';

const fetcher = async () => {
  const {data} = await axios.get("/api/company/6456464564564")
  return data
}

const fetcher2 = async () => {
  const {data} = await axios.get(`/api/hello/${565}`)
  return data
}

const CompanyEnroll = () => {
  const {data, error} = useSWR("/api/company/:id", fetcher)
  if(!data) return <h1 className='text-lg font-semibold text-center h-screen'>This page is for Company.</h1>
  const response = useSWR("/api/hello/:id", fetcher2)
  const courses = response.data?.message[1].map(count => count.courseId)
  const [allAddedEmployeeEmail, setAllAddedEmployeeEmail] = useState([]);
  const [emails, setEmails] = useState({})
  const handleAddEmail = () => {
    setAllAddedEmployeeEmail([
      ...allAddedEmployeeEmail,
      ''
    ])
  }
  const formData = {
    name: data?.message[0].name, id: data?.message[0].companyId,
    emails: emails, course: courses
  }

  const handleChange = (event, index, value) => {
    setAllAddedEmployeeEmail([...allAddedEmployeeEmail.map((d, idx) => (idx === index ? value : d))]);
    setEmails({...emails, [event.target.name]: event.target.value})
  }
  const handleDeleteEmail = (index) => {
    const newState = allAddedEmployeeEmail.filter((email, idx) => idx !== index);
    setAllAddedEmployeeEmail(newState)
  }

  const handleSubmitEmailAddresses = async (e) => {
    e.preventDefault();
    const {data} = await axios.post('/api/hello', formData)
    alert(data.message)
  }
  return (
    <div className='min-h-screen w-full bg-[#E2F5FF] px-3'>
      <div className='px-4 m-auto pt-8'>
        <div className='grid gap-5 justify-items-stretch sm:grid-cols-2 grid-cols-1'>
          {/* left side */}
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg font-semibold'>Company Information</h1>
              <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-4'>
                <InputComponent value={data?.message[0].companyId} label={'Company Id'}/>
                <InputComponent value={data?.message[0].name} label={'Company Name'}/>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg font-semibold'>Add Employee Email Address</h1>
              <form onSubmit={handleSubmitEmailAddresses} className='flex flex-col gap-2'>
                <div className='flex flex-col gap-4 w-full'>
                  {allAddedEmployeeEmail?.map((employ, idx) => (
                    <div key={idx} className="flex  items-stretch gap-3 w-full" >
                      <InputComponent  
                        onKeyDown={e => {
                          if(e.key === 'Enter') {
                            e.preventDefault();
                            e.stopPropagation()
                          }}
                        } 
                        parentClasses="!pb-0 w-full" 
                        type='email'
                        name={idx}
                        required 
                        value={allAddedEmployeeEmail[idx]} 
                        onChange={(e) => {
                          handleChange(e, idx, e.target.value.trim().replace(' ', ''))
                        }}
                      />
                      <button onClick={(e) => {
                        handleDeleteEmail(idx)
                      }} className='text-base max-w-max rounded-lg flex items-center justify-center font-semibold w-full px-10 active:scale-[.98] transition bg-white text-[#1F497B] border border-[#1F497B]'>
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
                <div className='flex items-center gap-4 mt-4'>
                  <button onClick={handleAddEmail} className='text-base max-w-max   h-10 rounded-lg flex items-center justify-center gap-1 font-semibold w-full px-10 active:scale-[.98] transition bg-[#1F497B] text-white'>
                    Add Email
                  </button>
                  {allAddedEmployeeEmail?.length > 0 && (
                    <button type='submit' className='text-base max-w-max   h-10 rounded-lg flex items-center justify-center gap-1 font-semibold w-full px-10 active:scale-[.98] transition bg-[#1F497B] text-white'>
                    Submit
                  </button>
                  )}
                </div>
                
              </form>
            </div>
          </div>
          {/* right side */}
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg font-semibold'>Courses</h2>
            <CompanyCoursesToEnroll />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyEnroll
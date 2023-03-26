
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { courseCode } from '../../pages/quiz/[quiz]';
import {useRouter} from 'next/router'
import useSWR from 'swr';

const CertificateComponent = React.forwardRef((props, ref) => {
  const {marks, ccode} = useRouter().query
  const fetcher = async () => {
    const {data} = await axios.get(`/api/certificate/${courseCode ? courseCode : ccode}`)
    return data
  }
  const {data} = useSWR("/api/certificate54454", fetcher)
  console.log(data)
  const certificateData = props.certificateData
  return (
    <div id='node' ref={ref} className='w-[900px]'>
      <div className='font-Poppins aspect-auto border border-gray-400 relative overflow-hidden rounded'>
        <div className='relative'>
          <img src="/certificate-template.png" alt="Certificate Template" className='h-full w-full object-contain block' />
        </div>

        {/* student name */}
        <div className='absolute text-center top-[37%] left-[46%] translate-x-[-50%] translate-y-[-50%] m-auto max-w-[380px]'>
            <h1 className='uppercase font-semibold text-2xl'>{`${data?.message[0][0].fname} ${data?.message[0][0].lname}` || '-'}</h1>
        </div>

        {/* course name */}
        <h3 className='text-sm font-medium absolute text-center top-[48%] left-[46%] translate-x-[-50%] translate-y-[-50%] m-auto max-w-[380px] capitalize'>{data?.message[1].length?data?.message[1][0].cname : " - "}</h3>

        {/* course success detail */}
        <div className=' absolute  top-[65%] left-[46%] translate-x-[-50%] translate-y-[-50%] m-auto w-[550px]'>
          <p className='font-normal text-xs text-justify'>
          {data?.message[1].length?data?.message[1][0].cdesc : " - "}
          </p>
        </div>

        {/* optional detail */}
        <div className='absolute  top-[75%] left-[46%] translate-x-[-50%] translate-y-[-50%] m-auto max-w-[580px]'>
          <h3 className='font-medium text-xl text-center'>
          {certificateData?.optional_detail || '-'}
          </h3>
        </div>

        {/* footer section including signature, compilation date, credential id and website url */}
        <footer className='absolute top-[88%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-auto w-[740px] '>
          <div className='grid grid-cols-12 grid-rows-2'>
            
            <div className="col-start-1 col-end-4 row-start-1 row-end-2">
              <div className='flex items-center justify-center flex-col gap-1'>
                <h3 className='font-semibold text-sm capitalize'>
                  Supervisor Solutions
                </h3>
                <p className='font-medium text-[10px] capitalize'>President & Founder</p>
              </div>
            </div>

            <div className="col-start-1 col-end-4 row-start-2 row-end-3 place-self-center">
              <a className='font-semibold text-sm' target={'_blank'} href="http://supervisorsolutions.com/">www.supervisorsolutions.com</a>
            </div>

            <div className="col-start-6 col-end-8 row-start-1 row-end-3 place-self-center">
              <div className='h-24 w-24 rounded-full ring-2 ring-red-800 p-2'>
                {/* <img src={certificateData?.company_logo || '/logo1.png'} className='w-full h-contain object-contain' alt="" /> */}
                <img src="/Courses/Supervison solution monogram 1.png" className='w-full h-contain object-contain' alt="" />
              </div>
            </div>

            <div className="col-start-10 col-end-13 row-start-1 row-end-2">
              <div className='flex items-center justify-center flex-col'>
                <h3 className='font-semibold text-sm capitalize'>
                Compilation 
                </h3>
                <p className='font-medium text-sm capitalize'>date: {certificateData?.compilation_date || '-'}</p>
              </div>
            </div>
            <div className="col-start-10 col-end-13 row-start-2 row-end-3 text-center whitespace-nowrap place-items-center place-self-center">
              <p className='font-semibold text-sm'>
                Credential ID : {data?.message[0][0].ID || '-'}
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
});


export default CertificateComponent
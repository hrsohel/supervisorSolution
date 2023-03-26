import React, {useState} from 'react';
import Navbar from '../Navbar';
import Link from 'next/link';
import Menu from '../../../components/Menu';
import HeadTag from '../../../components/HeadTag';
import axios from 'axios'
import { useRouter } from 'next/router'

const editCourse = ({data}) => {
    const router = useRouter()
    const [success, setSuccess] = useState(false)
    const [cname, setcname] = useState(data.message[0].cname)
    const [ccode, setccode] = useState(data.message[0].ccode)
    const [cdesc, setcdesc] = useState(data.message[0].cdesc)
    const [startingDate, setstartingDate] = useState(data.message[0].startingDate)
    const [cduration, setcduration] = useState(data.message[0].cduration)
    const [cprice, setcprice] = useState(data.message[0].cprice)
    const [instructorName, setinstructorName] = useState(data.message[0].instructorName)
    const [maxStudents, setmaxStudents] = useState(data.message[0].maxStudents)
    const [cimage, setcimage] = useState(data.message[0].cimage)
    const [newImage, setNewImage] = useState('')
    const submit = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('cname', cname)
        formData.append('ccode', ccode)
        formData.append('cdesc', cdesc)
        formData.append('startingDate', startingDate)
        formData.append('cprice', cprice)
        formData.append('cduration', cduration)
        formData.append('maxStudents', maxStudents)
        formData.append('instructorName', instructorName)
        formData.append('cimage', cimage)
        formData.append('newImage', newImage)
        const result = await axios.post(`/api/courses/${data.message[0].cid}`, formData, {
            headers: {"Content-Type": "multipart/form-data"}
        })
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false) 
            router.push(`/admin/courses`)
        }, 3000)
    }
    return (
        <>
            <HeadTag title={`Update ${data.message[0].cname}`} />
            <Navbar />
            {
               success ? <div className='text-center transition duration-500 rounded-md w-40 fixed right-4 top-64 text-lg bg-green-600 text-white font-semibold px-3 py-2'>Course Updated</div>
               : ""
           }
           <main className='flex items-start justify-center flex-col md:flex-row bg-gray-200'>
               <Menu active="courses"/>
                <div className='instructor w-full md:h-[84vh] overflow-auto'>
                    <h1 className='text-white text-center p-3 text-2xl font-bold bg-blue-900'>
                        <Link href='/admin/courses'>Courses</Link>
                        <Link href='/admin/add-course'>Add Course</Link>
                    </h1>
                    <form className='w-full p-4' action="">
                        <h2 className='text-2xl font-bold text-blue-600'>Basic Info</h2>
                        <div className='relative w-[15rem] h-[15rem] rounded-full mx-auto'>
                            <img src={`/uploads/images/${data.message[0].cimage}`} 
                                className='rounded-full w-full h-full block mx-auto object-cover'
                            />
                            <div className='absolute bottom-0 cursor-pointer right-[10%]'>
                                <label className='block cursor-pointer my-3 text-lg' htmlFor="image"><i class="fas fa-camera text-4xl font-bold text-blue-600"></i></label>
                                <input onChange={e => setNewImage(e.target.files[0])} className='hidden' type="file" name="" id="image" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full flex-wrap'>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="fname">Course Name</label>
                                <input onChange={e => setcname(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" defaultValue={data.message[0].cname} id="fname" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="lname">Course Code</label>
                                <input onChange={e => setccode(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" defaultValue={data.message[0].ccode} id="lname" />
                            </div>
                            <div className='md:w-full'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="email">Course Description</label>
                                <textarea onChange={e => setcdesc(e.target.value)} defaultValue={data.message[0].cdesc} id="" className='w-full outline-none border-2 border-black p-2 text-lg rounded-md'></textarea>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="jponDate">Starting Date</label>
                                <input onChange={e => setstartingDate(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="date" defaultValue={data.message[0].startingDate} id="jponDate" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="password">Course Duration</label>
                                <input onChange={e => setcduration(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" defaultValue={data.message[0].cduration} id="password" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="cpassword">Course Price</label>
                                <input onChange={e => setcprice(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" defaultValue={data.message[0].cprice} id="cpassword" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="mobile">Instructor Name</label>
                                <input onChange={e => setinstructorName(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" defaultValue={data.message[0].instructorName} id="mobile" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="gender">Maximum Students</label>
                                <input onChange={e => setmaxStudents(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" defaultValue={data.message[0].maxStudents} id="gender" />
                            </div>
                            
                        </div>
                        <input onClick={submit} className='bg-blue-600 my-4 rounded-md py-2 px-4 text-white text-lg' type="submit" value="Submit" />
                    </form>
                </div>
            </main>
        </>
    );
};

export default editCourse;

export async function getServerSideProps(context) {
    const {params} = context
    const result = await fetch(`https://supervisorsolutions.com/api/courses/${params.id}`)
    const data = await result.json()
    return {props: {data}}
}
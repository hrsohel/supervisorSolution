import axios from 'axios';
import Navbar from './Navbar';
import Link from 'next/link';
import Menu from '../../components/Menu';
import { useState } from 'react';

const addCourse = () => {
    const [cname, setCname] = useState("")
    const [ccode, setCcode] = useState("")
    const [cdesc, setCdesc] = useState("")
    const [startingDate, setStartingDate] = useState("")
    const [cduration, setCduration] = useState("")
    const [cprice, setCprice] = useState(null)
    const [instructorName, setInstructorName] = useState("")
    const [maxStudents, setMaxStudents] = useState("")
    const [phone, setPhone] = useState("")
    const [file, setFile] = useState("")
    const [result, setResult] = useState('')
    const submit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', file)
        formData.append('cname', cname)
        formData.append('ccode', ccode)
        formData.append('cdesc', cdesc)
        formData.append('startingDate', startingDate)
        formData.append('cduration', cduration)
        formData.append('cprice', cprice)
        formData.append('instructorName', instructorName)
        formData.append('phone', phone)
        formData.append('maxStudents', maxStudents)
        if(!file) {
            alert("Image file required")
        } else if(file.type.split("/")[0] !== "image") alert("Only Image File Allowed") 
        else {
            const {data} = await axios.post('/api/courses', formData)
            alert(data.message)
            setResult(data)
        }
    }
    return (
        <>
            <Navbar />
           <main className='flex items-start justify-center flex-col md:flex-row bg-gray-200'>
               <Menu active="courses"/>
                <div className='instructor w-full'>
                    <h1 className='text-white text-center p-3 text-2xl font-bold bg-blue-900'>
                        <Link href='/admin/courses'>Courses</Link>
                        <Link href='/admin/add-course'>Add Course</Link>
                    </h1>
                    <form className='w-full p-4' action="">
                        <h2 className='text-2xl font-bold text-blue-600'>Basic Info</h2>
                        <div className='flex items-center justify-between w-full flex-wrap'>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="fname">Course Name</label>
                                <input onChange={(e) => setCname(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="fname" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="lname">Course Code</label>
                                <input onChange={(e) => setCcode(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="lname" />
                            </div>
                            <div className='md:w-full'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="email">Course Description</label>
                                <textarea onChange={(e) => setCdesc(e.target.value)} name="" id="" className='w-full outline-none border-2 border-black p-2 text-lg rounded-md'></textarea>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="jponDate">Starting Date</label>
                                <input onChange={(e) => setStartingDate(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="date" name="" id="jponDate" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="password">Course Duration</label>
                                <input onChange={(e) => setCduration(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="password" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="cpassword">Course Price</label>
                                <input onChange={(e) => setCprice(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="cpassword" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="mobile">Instructor Name</label>
                                <input onChange={(e) => setInstructorName(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="mobile" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="gender">Maximum Students</label>
                                <input onChange={(e) => setMaxStudents(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="gender" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="designation">Contact Number</label>
                                <input onChange={(e) => setPhone(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="designation" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="image">Upload Image</label>
                                <input onChange={(e) => setFile(e.target.files[0])} className='' type="file" name="image" id="image" required/>
                            </div>
                            
                        </div>
                        <input onClick={submit} className='bg-blue-600 my-4 rounded-md py-2 px-4 text-white text-lg' type="submit" value="Submit" />
                    </form>
                </div>
            </main> 
        </>
    );
};

export default addCourse;
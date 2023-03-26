import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import Menu from '../../components/Menu';
import { useState } from 'react';
import axios from 'axios'

const addInstructor = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [joiningDate, setJoiningDate] = useState(null)
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [phone, setPhone] = useState(0)
    const [gender, setGender] = useState('')
    const [department, setDepartment] = useState('')
    const [designation, setDesignation] = useState('')
    const [dob, setDob] = useState(null)
    const [education, setEducation] = useState('')
    const [instImage, setInstImage] = useState('')
    const submit = async (e) => {
        e.preventDefault()
        if(!fname || !lname || !email || !joiningDate || !password || !cpassword ||
            !phone || !gender || !designation || !department || !dob || !education || !instImage) alert('All Feild Required')
        else if(password !== cpassword) alert('Password Not Matched')
        else {
            const formData = new FormData()
            formData.append('fname', fname)
            formData.append('lname', lname)
            formData.append('email', email)
            formData.append('joiningDate', joiningDate)
            formData.append('password', password)
            formData.append('gender', gender)
            formData.append('phone', phone)
            formData.append('department', department)
            formData.append('designation', designation)
            formData.append('education', education)
            formData.append('dob', dob)
            formData.append('instImage', instImage)
            const {data} = await axios.post('/api/instructor', formData, {
                headers: {"Content-Type": "multipart/form-data"}
            })
            
            alert(data.message)
        }
    }
    return (
        <>
           <Navbar />
           <main className='flex items-start justify-center flex-col md:flex-row bg-gray-200'>
               <Menu active="instructor"/>
                <div className='instructor w-full'>
                    <h1 className='text-white text-center p-3 text-2xl font-bold bg-blue-900'>
                        <Link href='instructor'>All Instructor</Link>
                        <Link href='add-instructor'>Add Instructor</Link>
                        <Link href='edit-instructor'>Edit Instructor</Link>
                    </h1>
                    <form className='w-full p-4'>
                        <h2 className='text-2xl font-bold text-blue-600'>Basic Info</h2>
                        <div className='flex items-center justify-between w-full flex-wrap'>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="fname">First Name</label>
                                <input onChange={(e) => setFname(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="fname" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="lname">Last Name</label>
                                <input onChange={(e) => setLname(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="lname" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="email">Eamil</label>
                                <input onChange={(e) => setEmail(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="email" name="" id="email" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="jponDate">Joining Date</label>
                                <input onChange={(e) => setJoiningDate(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="date" name="" id="jponDate" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="password">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="password" name="" id="password" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="cpassword">Confirm Password</label>
                                <input onChange={(e) => setCpassword(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="password" name="" id="cpassword" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="mobile">Mobile Number</label>
                                <input onChange={(e) => setPhone(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="mobile" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="gender">Gender</label>
                                <select onChange={(e) => setGender(e.target.value)} name="" id="gender" className='block outline-none border-2 border-black p-2 text-lg rounded-md'>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="designation">Designation</label>
                                <input onChange={(e) => setDesignation(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="designation" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="department">Department</label>
                                <input onChange={(e) => setDepartment(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="department" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="dob">Date of Birth</label>
                                <input onChange={(e) => setDob(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="date" name="" id="dob" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="education">Education</label>
                                <input onChange={(e) => setEducation(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="education" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="image">Upload Image</label>
                                <input onChange={(e) => setInstImage(e.target.files[0])} className='' type="file" name="" id="image" />
                            </div>
                            
                        </div>
                        <input onClick={submit} className='bg-blue-600 my-4 rounded-md py-2 px-4 text-white text-lg' type="submit" value="Submit" />
                    </form>
                </div>
            </main> 
        </>
    );
};

export default addInstructor;
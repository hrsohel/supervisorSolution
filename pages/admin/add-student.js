import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import Menu from '../../components/Menu';
import { useState } from 'react';
import axios from 'axios'

const addStudent = () => {
    const [info, setInfo] = useState('')
    const [studentID, setStudentID] = useState(0)
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setphone] = useState(0)
    const [password, setPassword] = useState('')
    const [cpaasword, setCpaasword] = useState('')
    const [admissionDate, setAdmissionDate] = useState(null)
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [dob, setDob] = useState(null)
    const [education, setEducation] = useState('')
    const [stuImage, setstuImage] = useState('')
    const submit = async (e) => {
        e.preventDefault()
        if(!fname || !lname || !email || !phone || !cpaasword || !password || !gender || !admissionDate  || !address ||
            !dob || !education || !stuImage || !studentID) alert("All Feild Required")
        else if(password !== cpaasword) alert('Password Not Matched')
        else {
            const formData = new FormData()
            formData.append('fname', fname)
            formData.append('lname', lname)
            formData.append('email', email)
            formData.append('phone', phone)
            formData.append('password', password)
            formData.append('cpassword', cpaasword)
            formData.append('admissionDate', admissionDate)
            formData.append('gender', gender)
            formData.append('address', address)
            formData.append('dob', dob)
            formData.append('education', education)
            formData.append('stuImage', stuImage)
            formData.append('studentId', studentID)
            const {data} = await axios.post('/api/student', formData, {
                headers: {"Content-Type": "multipart/form-data"}
            })
            setInfo(data.message)
           alert(info)
        }
    }
    return (
        <>
          <Navbar />
           <main className='flex items-start justify-center flex-col md:flex-row bg-gray-200'>
               <Menu active="student"/>
                <div className='instructor w-full'>
                    <h1 className='text-white text-center p-3 text-2xl font-bold bg-blue-900'>
                        <Link href='students'>Students</Link>
                        <Link href='add-student'>Add Student</Link>
                        <Link href='edit-student'>Edit Student</Link>
                    </h1>
                    <form className='w-full p-4' action="add-student" method='post'>
                        <h2 className='text-2xl font-bold text-blue-600'>Basic Info</h2>
                        <div className='flex items-center justify-between w-full flex-wrap'>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="fname">First Name</label>
                                <input onChange={(e) => setFname(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="fname" id="fname" required/>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="lname">Last Name</label>
                                <input onChange={(e) => setLname(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="lname" id="lname" required/>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="email">Eamil</label>
                                <input onChange={(e) => setEmail(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="email" name="email" id="email" required/>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="jponDate">Admission Date</label>
                                <input onChange={(e) => setAdmissionDate(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="date" name="admissionDate" id="jponDate" required/>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="password">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="password" name="password" id="password" required/>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="cpassword">Confirm Password</label>
                                <input onChange={(e) => setCpaasword(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="password" name="cpassword" id="cpassword" required/>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="mobile">Mobile Number</label>
                                <input onChange={(e) => setphone(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="phone" id="mobile" required/>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="gender">Gender</label>
                                <select onChange={(e) => setGender(e.target.value)} name="gender" id="gender" className='block outline-none border-2 border-black p-2 text-lg rounded-md' required>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="designation">Student ID</label>
                                <input onChange={(e) => setStudentID(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="studentId" id="designation" required/>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="department">Address</label>
                                <input onChange={(e) => setAddress(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="address" id="department" required/>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="dob">Date of Birth</label>
                                <input onChange={(e) => setDob(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="date" name="dob" id="dob" required/>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="education">Education</label>
                                <input onChange={(e) => setEducation(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="education" id="education" required/>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="image">Upload Image</label>
                                <input onChange={(e) => setstuImage(e.target.files[0])} className='' type="file" name="stuImage" id="image" required/>
                            </div>
                            
                        </div>
                        <input onClick={submit} className='bg-blue-600 my-4 rounded-md py-2 px-4 text-white text-lg' type="submit" value="Submit" />
                    </form>
                </div>
            </main>   
        </>
    );
};

export default addStudent;
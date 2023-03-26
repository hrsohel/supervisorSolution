import React, {useState} from 'react';
import Navbar from '../Navbar';
import Link from 'next/link';
import Menu from '../../../components/Menu';
import axios from 'axios'
import HeadTag from '../../../components/HeadTag';
import { useRouter } from 'next/router'
import moment from 'moment';

const editStudent = ({data}) => {
    const router = useRouter()
    const [success, setSuccess] = useState(false)
    const [studentID, setStudentID] = useState(data[0].studentId)
    const [fname, setFname] = useState(data[0].firstName)
    const [lname, setLname] = useState(data[0].lastName)
    const [email, setEmail] = useState(data[0].email)
    const [phone, setphone] = useState(data[0].phone)
    const [admissionDate, setAdmissionDate] = useState(data[0].admissionDate)
    const [gender, setGender] = useState(data[0].gender)
    const [address, setAddress] = useState(data[0].address)
    const [dob, setDob] = useState(data[0].dob)
    const [education, setEducation] = useState(data[0].education)
    const [stuImage, setstuImage] = useState(data[0].stuImage)
    const [newImage, setNewImage] = useState('')
    const submit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('fname', fname)
        formData.append('lname', lname)
        formData.append('email', email)
        formData.append('admissionDate', admissionDate)
        formData.append('address', address)
        formData.append('dob', dob)
        formData.append('education', education)
        formData.append('stuImage', stuImage)
        formData.append('gender', gender)
        formData.append('studentID', studentID)
        formData.append('phone', phone)
        formData.append('newImage', newImage)
        const result = await axios.post(`/api/student/${data[0].sid}`, formData, {
            headers: {"Content-Type": "multipart/form-data"}
        })
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
            router.push(`/admin/students`)
        }, 3000)
    }
    return (
        <>
            <HeadTag title={`Update ${data[0].firstName} ${data[0].lastName}'s Profile`} />
           <Navbar />
           {
               success ? <div className='text-center transition duration-500 rounded-md w-40 fixed right-4 top-64 text-lg bg-green-600 text-white font-semibold px-3 py-2'>User Updated</div>
               : ""
           }
           <main className='flex items-start justify-center flex-col md:flex-row bg-gray-200'>
               <Menu active="student"/>
                <div className='instructor w-full md:h-[84vh] overflow-auto'>
                    <h1 className='text-white text-center p-3 text-2xl font-bold bg-blue-900'>
                        <Link href='/admin/students'>Students</Link>
                        <Link href='/admin/add-student'>Add Student</Link>
                    </h1>
                    <form className='w-full p-4' action="">
                        <h2 className='text-2xl font-bold text-blue-600'>Basic Info</h2>
                        <div className='relative w-[15rem] h-[15rem] rounded-full mx-auto'>
                            <img src={`/uploads/students/${data[0].stuImage}`} 
                                className='rounded-full w-full h-full block mx-auto object-cover'
                            />
                            <div className='absolute bottom-0 cursor-pointer right-[10%]'>
                                <label className='block cursor-pointer my-3 text-lg' htmlFor="image"><i class="fas fa-camera text-4xl font-bold text-blue-600"></i></label>
                                <input onChange={(e) => setNewImage(e.target.files[0])} className='hidden' type="file" name="" id="image" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full flex-wrap'>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="fname">First Name</label>
                                <input onChange={(e) => setFname(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" defaultValue={data[0].firstName} id="fname" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="lname">Last Name</label>
                                <input onChange={(e) => setLname(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" defaultValue={data[0].lastName} id="lname" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="email">Eamil</label>
                                <input onChange={(e) => setEmail(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="email" defaultValue={data[0].email} id="email" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="jponDate">Admission Date</label>
                                <input onChange={(e) => setAdmissionDate(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="date" defaultValue={`${moment(data[0].joiningDate).format("YYYY-MM-DD")}`} id="jponDate" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="mobile">Mobile Number</label>
                                <input onChange={(e) => setphone(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" defaultValue={data[0].phone} id="mobile" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="gender">Gender</label>
                                {
                                    data[0].gender === "male" ? <select onChange={(e) => setGender(e.target.value)} id="gender" className='block outline-none border-2 border-black p-2 text-lg rounded-md'>
                                    <option defaultValue="">Select Gender</option>
                                    <option defaultValue="male" selected>Male</option>
                                    <option defaultValue="female">Female</option>
                                    <option defaultValue="other">Other</option>
                                </select> : data[0].gender === "female" ? <select onChange={(e) => setGender(e.target.value)} name="" id="gender" className='block outline-none border-2 border-black p-2 text-lg rounded-md'>
                                    <option defaultValue="">Select Gender</option>
                                    <option defaultValue="male">Male</option>
                                    <option defaultValue="female" selected>Female</option>
                                    <option defaultValue="other">Other</option>
                                </select> : data[0].gender === "other" ? <select onChange={(e) => setGender(e.target.value)} name="" id="gender" className='block outline-none border-2 border-black p-2 text-lg rounded-md'>
                                    <option defaultValue="">Select Gender</option>
                                    <option defaultValue="male">Male</option>
                                    <option defaultValue="female">Female</option>
                                    <option defaultValue="other" selected>Other</option>
                                </select> : ""
                                }
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="designation">Student ID</label>
                                <input onChange={(e) => setStudentID(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" defaultValue={data[0].studentId} id="designation" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="department">Address</label>
                                <input onChange={(e) => setAddress(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" defaultValue={data[0].address} id="department" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="dob">Date of Birth</label>
                                <input onChange={(e) => setDob(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="date" defaultValue={`${moment(data[0].dob).format("YYYY-MM-DD")}`} id="dob" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="education">Education</label>
                                <input onChange={(e) => setEducation(e.target.value)} className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" defaultValue={data[0].education} id="education" />
                            </div>
                        </div>
                        <input onClick={submit} className='bg-blue-600 my-4 rounded-md py-2 px-4 text-white text-lg' type="submit" value="Submit" />
                    </form>
                </div>
            </main> 
        </>
    );
};

export default editStudent;

export async function getServerSideProps(context) {
    const {params} = context
    const res = await fetch(`https://supervisorsolutions.com/api/student/${params.id}`)
    const data = await res.json()
    return {props: {data}}
}
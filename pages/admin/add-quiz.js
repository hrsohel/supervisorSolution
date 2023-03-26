import React from 'react';
import HeadTag from '../../components/HeadTag';
import Navbar from './Navbar';
import Menu from '../../components/Menu';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';

const addQuiz = () => {
    const [ccode, setCcode] = useState('')
    const [qtitle, setQtitle] = useState('')
    const [question, setQuestion] = useState('')
    const [qserial, setQserial] = useState(0)
    const [op1, setOp1] = useState('')
    const [op2, setOp2] = useState('')
    const [op3, setOp3] = useState('')
    const [op4, setOp4] = useState('')
    const [answer, setAnswer] = useState('')
    const submit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('ccode', ccode)
        formData.append('qtitle', qtitle)
        formData.append('question', question)
        formData.append('qserial', qserial)
        formData.append('op1', op1)
        formData.append('op2', op2)
        formData.append('op3', op3)
        formData.append('op4', op4)
        formData.append('answer', answer)
        const {data} = await axios.post(`/api/quiz`, formData)
        alert(data.message)
    }
    return (
        <>
            <HeadTag title={`Add Quiz`} />
            <Navbar />
            <main className='flex items-start justify-center bg-gray-200'>
                <Menu active="courses"/>
                <div className='instructor w-full md:h-[84vh] overflow-auto'>
                    <h1 className='text-sm text-white text-center p-3 sm:text-2xl font-bold bg-blue-900'>
                        <Link href='/admin/courses'>Courses</Link>
                        <Link href='/admin/add-course'>Add Course</Link>
                    </h1>
                    <form className='w-full p-4' action="">
                        <h2 className='text-2xl font-bold text-blue-600'>Basic Info</h2>
                        <div className='flex items-center justify-between w-full flex-wrap'>
                            <div className='md:w-4/12 px-2'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="lname">Course Code</label>
                                <input onChange={e => setCcode(e.target.value)} className='block w-full outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="lname" />
                            </div>
                            <div className='md:w-4/12 px-2'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="Lname">Question Title</label>
                                <input onChange={e => setQtitle(e.target.value)} className='block w-full outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="Lname" />
                            </div>
                            <div className='md:w-4/12 px-2'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="lname_">Question</label>
                                <input onChange={e => setQuestion(e.target.value)} className='block w-full outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="lname_" />
                            </div>
                            <div className='md:w-4/12 px-2'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="_lname">Question Serial</label>
                                <input onChange={e => setQserial(e.target.value)} className='block w-full outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="_lname" />
                            </div>
                            <div className='md:w-4/12 px-2'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="jponDate">Option 1</label>
                                <input onChange={e => setOp1(e.target.value)} className='block w-full outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="jponDate" />
                            </div>
                            <div className='md:w-4/12 px-2'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="password">Option 2</label>
                                <input onChange={e => setOp2(e.target.value)} className='block w-full outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="password" />
                            </div>
                            <div className='md:w-4/12 px-2'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="cpassword">Option 3</label>
                                <input onChange={e => setOp3(e.target.value)} className='block w-full outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="cpassword" />
                            </div>
                            <div className='md:w-4/12 px-2'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="mobile">Option 4</label>
                                <input onChange={e => setOp4(e.target.value)} className='block w-full outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="mobile" />
                            </div>
                            <div className='md:w-4/12 px-2'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="gender">Correct Answer</label>
                                <input onChange={e => setAnswer(e.target.value)} className='block w-full outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="gender" />
                            </div>
                            
                        </div>
                        <input onClick={submit} className='bg-blue-600 my-4 rounded-md py-2 px-4 text-white text-lg hover:text-red-600  shadow-lg shadow-blue-500/50' type="submit" value="Submit" />
                    </form>
                </div>
            </main>
        </>
    );
};

export default addQuiz;
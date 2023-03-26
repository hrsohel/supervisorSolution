import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import TokenFromEmail from './TokenFromEmail';

const SendToken = () => {
    const [email, setEmail] = useState("")
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const submit = async e => {
        e.preventDefault()
        if(!email) alert("Please enter your email")
        else {
            setLoading(true)
            const {data} = await axios.post("/api/forget-password", {email})
            if(data.status === 200) setShow(true)
            else alert(data.message)
            setLoading(false)
        }
    }
    return (
        <div className='h-screen flex items-center justify-center'>
            {
                show ? <>
                    <TokenFromEmail email={email} />
                </> : <form action="">
                    <label className='text-lg block font-semibold' htmlFor="email">Enter your email</label>
                    <input onChange={e => setEmail(e.target.value)} className='text-lg my-4 w-full rounded-md border-none outline-none p-1' type="email" name="email" id="email" placeholder='Enter your email'/>
                    <input onClick={submit} className='text-center cursor-pointer w-full rounded-md px-2 py-1 text-lg bg-blue-600 text-white' type="submit" value={`${loading ? "Submitting" : "Submit"}`} disabled={loading} />
                </form>
            }
        </div>
    );
};

export default SendToken;
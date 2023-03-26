import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import ResetPassword from './ResetPassword';

const TokenFromEmail = ({email}) => {
    const [token, setToken] = useState("")
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const submit = async e => {
        e.preventDefault()
        if(!token) alert("Please enter the token we've sent to your email.")
        else {
            setLoading(true)
            const {data} = await axios.get(`/api/forget-password?token=${token}&email=${email}`)
            if(data.status === 200) setShow(true)
            else alert(data.message)
            setLoading(false)
        }
    }
    return (
        <div>
            {
                show ? <><ResetPassword email={email} /></> : <>
                <h1 className='text-lg my-4'>We sent a token to your email. If you don't find an email, please check spam in your email.</h1>
                <form action="">
                    <label className='text-lg block font-semibold' htmlFor="email">Enter your token</label>
                    <input onChange={e => setToken(e.target.value)} className='text-lg w-full my-4 block rounded-md border-none outline-none p-1' type="text" name="email" id="email" placeholder='Enter your token'/>
                    <input onClick={submit} className='text-center cursor-pointer w-full rounded-md px-2 py-1 text-lg bg-blue-600 text-white' type="submit" value={`${loading ? "Submitting" : "Submit"}`} disabled={loading} />
                </form>
                </>
            }
        </div>
    );
};

export default TokenFromEmail;
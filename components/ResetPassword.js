import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const ResetPassword = ({email}) => {
    const history = useRouter()
    const [npassword, setNpassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [loading, setLoading] = useState(false)
    const submit = async e => {
        e.preventDefault()
        if(!npassword || !cpassword) alert("All feild required")
        else if(npassword !== cpassword) alert("Password doesn't match")
        else {
            setLoading(true)
            const {data} = await axios.post("/api/reset-password", {npassword, email})
            if(data.status === 200) history.push("/login")
            else alert("Something wrong!")
            setLoading(false)
        }
    }
    return (
        <div>
            <form action="">
                <label className='text-lg block' htmlFor="npassword">New password</label>
                <input onChange={e => setNpassword(e.target.value)} className='p-1 my-2 text-lg rounded-md border-none outline-none w-full' type="password" name="npassword" id="npassword" placeholder='New password' />
                <label className='text-lg block' htmlFor="cpassword">Confirm password</label>
                <input onChange={e => setCpassword(e.target.value)} className='p-1 my-2 text-lg rounded-md border-none outline-none w-full' type="password" name="cpassword" id="cpassword" placeholder='Confirm password' />
                <input onClick={submit} className='w-full my-2 bg-blue-600 text-white text-center px-2 py-1 rounded-md cursor-pointer' type="submit" value={`${loading ? "Submitting" : "Submit"}`} disabled={loading} />
            </form>
        </div>
    );
};

export default ResetPassword;
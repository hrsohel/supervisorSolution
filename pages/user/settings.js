import React, { useState } from 'react';
import UserMenu from '../../components/UserMenu';
import NavbarFroAll from '../../components/NavbarForAll'
import { context } from '../_app';
import axios from 'axios';

const settings = () => {
    const [oPassword, setOpassword] = useState("")
    const [nPassword, setNpassword] = useState("")
    const [cPassword, setCpassword] = useState("")
    const [showPassForm, setShowPassForm] = useState(false)
    const [showPrivForm, setShowPrivForm] = useState(false)
    const {state, dispatch} = React.useContext(context)
    const submit = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("oPassword", oPassword)
        formData.append("nPassword", nPassword)
        formData.append("cPassword", cPassword)
        if(!oPassword || !nPassword || !cPassword) alert("All feild required!")
        else if(nPassword !== cPassword) alert("Confirm password not matched!")
        else {
            const {data} = await axios.post("/api/resetPassword", {oPassword, nPassword})
            alert(data.message)
        }
    }
    React.useEffect(() => {
        dispatch({type: "HIDE"})
    }, [])
    return (
        <>
            <NavbarFroAll />
            <main className='pt-24 flex items-start justify-center p-4 flex-wrap lg:flex-nowrap '>
                <UserMenu active="settings"/>
                <div className='ml-2 w-full shadow-2xl rounded-b-lg'>
                    <div className='p-2 flex items-center justify-between bg-blue-900 rounded-t-lg'>
                        <i onClick={() => dispatch({type: "SHOW"})} className='fas fa-bars font-bold text-2xl cursor-pointer lg:hidden'></i>
                        <h1 className='font-bold text-white text-2xl'>Settings</h1>
                    </div>
                    <div className='flex items-center justify-around py-4'>
                        <button onClick={() => setShowPassForm(!showPassForm)} className='px-4 hover:bg-hoveSideBac hover:text-hovSideText text-white py-2 text-center text-lg bg-hoveSideBac rounded-full'>Change Password</button>
                        <button className='px-4 hover:bg-hoveSideBac hover:text-hovSideText text-white py-2 text-center text-lg bg-hoveSideBac rounded-full'>Profile Privacy</button>
                    </div>
                    {
                        showPassForm ? <form action="" className='w-6/12 p-4'>
                        <label htmlFor="oldP" className='text-lg'>Old Password</label>
                        <input onChange={e => setOpassword(e.target.value)} type="password" name="" id="oldP" className='text-lg w-full my-2 outline-none border-2 border-hoveSideBac rounded-lg p-3' placeholder='Old Password' defaultValue={oPassword}/>
                        <label htmlFor="newP" className='text-lg'>New Password</label>
                        <input onChange={e => setNpassword(e.target.value)} type="password" name="" id="newP" className='text-lg w-full my-2 outline-none border-2 border-hoveSideBac rounded-lg p-3' placeholder='New Password' defaultValue={nPassword}/>
                        <label htmlFor="ENewP" className='text-lg'>Enter New Password Again</label>
                        <input onChange={e => setCpassword(e.target.value)} type="password" name="" id="ENewP" className='text-lg w-full my-2 outline-none border-2 border-hoveSideBac rounded-lg p-3' placeholder='Enter New Password Again' defaultValue={cPassword}/>
                        <input onClick={submit} type="submit" className='text-lg cursor-pointer hover:bg-hoveSideBac hover:text-hovSideText w-full my-2 outline-none border-2 border-hoveSideBac rounded-lg p-3'value="Submit"/>
                    </form> : ""
                    }
                </div>
            </main>
        </>
    );
};

export default settings;
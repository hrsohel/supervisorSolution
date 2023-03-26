import React, { useState } from 'react';
import UserMenu from '../../components/UserMenu';
import NavbarFroAll from '../../components/NavbarForAll'
import { context } from '../_app';

const education = () => {
    const [showEdit, setShowEdit] = useState(false)
    const {state, dispatch} = React.useContext(context)
    React.useEffect(() => {
        dispatch({type: "HIDE"})
    }, [])
    return (
        <>
            <NavbarFroAll />
            <main className='pt-24 flex items-start justify-center p-4 lg:flex-nowrap flex-wrap'>
                <UserMenu active="education"/>
                <div className='w-full ml-2 shadow-2xl rounded-b-lg'>
                    <div className='p-2 flex items-center justify-between bg-blue-900 rounded-t-lg'>
                        <i onClick={() => dispatch({type: "SHOW"})} className='fas fa-bars font-bold text-2xl cursor-pointer lg:hidden'></i>
                        <h1 className='font-bold text-white text-2xl'>Education</h1>
                        <h1 onClick={() => setShowEdit(!showEdit)} className='font-bold text-white text-2xl cursor-pointer'>{showEdit ? "Cancel" : "Edit"}</h1>
                        
                    </div>
                    
                    {
                        showEdit ? <form action="" className='w-full p-4'>
                        <label htmlFor="oldP" className='text-lg'>Institute Name</label>
                        <input type="text" name="" id="oldP" className='text-lg w-full my-2 outline-none border-2 border-hoveSideBac rounded-lg p-3' placeholder='Institute Name'/>
                        <label htmlFor="newP" className='text-lg'>Degree Lavel Completed</label>
                        <input type="text" name="" id="newP" className='text-lg w-full my-2 outline-none border-2 border-hoveSideBac rounded-lg p-3' placeholder='Degree Lavel Completed'/>
                        <label htmlFor="ENewP" className='text-lg'>Passed Year</label>
                        <input type="date" name="" id="ENewP" className='text-lg w-full my-2 outline-none border-2 border-hoveSideBac rounded-lg p-3' placeholder='Passed Year'/>
                        <input type="submit" className='text-lg cursor-pointer hover:bg-hoveSideBac hover:text-hovSideText w-full my-2 outline-none border-2 border-hoveSideBac rounded-lg p-3'value="Submit"/>
                    </form> : <div className='p-8'>
                        <h3 className='my-4 font-bold text-2xl text-blue-900'>Institute Name</h3>
                        <p className='my-4 text-lg text-gray-500'>University Name</p>
                        <h3 className='my-4 font-bold text-2xl text-blue-900'>Degree Lavel Completed</h3>
                        <p className='my-4 text-lg text-gray-500'>BSc</p>
                        <h3 className='my-4 font-bold text-2xl text-blue-900'>Passed Year</h3>
                        <p className='my-4 text-lg text-gray-500'>2022</p>
                    </div>
                    }
                </div>
            </main>
        </>
    );
};

export default education;
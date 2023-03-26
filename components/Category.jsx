import React from 'react';

const Category = ({show, setShow}) => {
    const cancel = (e) => {
        e.preventDefault()
        setShow(false)
    }
    return (
        <>
           <div className='w-full h-full bg-gray-500 category'>
               <form className='bg-white rounded-md p-4' action="">
                    <h1 className='text-blue-600 font-semibold text-2xl'>Add a Category</h1>
                    <label htmlFor="category" className='block p-2  font-semibold text-2xl'>Category Name</label>
                    <input type="text" name="" id="category" className='outline-none border-2 border-black rounded-md p-2 text-lg' />
                    <label htmlFor="color" className='block p-2  font-semibold text-2xl'>Choose a Color</label>
                    <input type="color" name="" id="color" className='block mb-2 outline-none border-2 border-black rounded-md p-2 text-lg' />
                    <button onClick={cancel} className='bg-gray-200 mr-3 p-2 px-4 text-center text-lg rounded-md'>Cancel</button>
                    <button className='bg-blue-500 p-2 px-4 text-center text-lg rounded-md text-white'>Save</button>
               </form>
            </div> 
        </>
    );
};

export default Category;
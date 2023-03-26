import Link from 'next/link';
import React, { useEffect } from 'react';
import useCart from '../components/context/cart-context/useCart'
export let Marks

const CompleteQuiz = ({show, total, points, setShow, showQuiz, setShowQuiz, ccode}) => {
    // var {getMarks} = useCart()
    const Show = () => {
        setShowQuiz(false)
        setShow(false)
    }
    useEffect(() => {
        Marks = Math.ceil(points * 100 / total)
    }, [])
    return (
        <>
            <div className='md:w-1/2 p-8'>
                <div className='flex items-center justify-center text-yellow-600'>
                    <i className='fas fa-crown text-4xl'></i>
                </div>
                <h3 className='font-bold text-lg text-center my-2 text-white'>
                    You have Completed the quiz!
                </h3>
                <h3 className='font-bold text-lg text-center text-white'>
                    You got {Math.ceil(points * 100 / total)}% marks
                </h3>
                <h3 className='font-bold text-lg text-center text-white'>
                    {
                        (Math.ceil(points * 100 / total)) >= 60 ? <h3 className='font-bold text-lg text-center text-green-500'>Passed</h3> :
                        <h3 className='font-bold text-lg text-center text-red-600'>Failed</h3>
                    }
                </h3>
                <div className='flex items-center justify-center'>
                    <button onClick={Show} className='bg-white text-blue-500 px-3 py-2 my-4 font-bold text-lg rounded-md'>Quit Quiz</button>
                    {
                        Math.ceil(points * 100 / total) >= 60 ? <span className='ml-4 bg-white text-blue-500 px-3 py-2 my-4 font-bold text-lg rounded-md'><Link href={`/certificate`}>Get Certificate</Link></span> : <></>
                    }
                </div>
            </div>
        </>
    );
};

export default CompleteQuiz;
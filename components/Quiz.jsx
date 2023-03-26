import React from 'react';
import CompleteQuiz from './CompleteQuiz';
import $ from 'jquery'
import { useState } from 'react';
import { useEffect } from 'react';

const Quiz = ({showQuiz, setShowQuiz, data, ccode}) => {
    const [quiz, setQuiz] = useState(1)
    const [complete, setComplete] = useState(false)
    const [points, setPoints] = useState(0)
    const [click, setCkick] = useState(true)
    const [show, setShow] = useState(false)
    const SetQuiz = () => {
        if(quiz === data.message.length) {
            setQuiz(data.message.length)
            setComplete(true)
            setShow(true)
        }
        else setQuiz(quiz + 1)
    }
    const submit = (value, _id) => {
        if(value === data.message[quiz - 1].answer) {
            if(click) {
                $(`li`).eq(_id).append(`<i class='fas fa-check font-bold text-lg text-green-500'></i>`)
                setCkick(false)
                setPoints(prev => prev + 1)
            }
        } else {
            if(click) {
                $(`li`).eq(_id).append(`<i class='fas fa-times font-bold text-lg text-red-500'></i>`)
                setCkick(false)
            }
        }
    }
    useEffect(() => {
        setCkick(true)
    }, [quiz])
    return (
        <>
            {
                complete ? <CompleteQuiz ccode={ccode} points={points} total={data.message.length}
                show = {show} setShow = {setShow} showQuiz = {showQuiz} setShowQuiz = {setShowQuiz}
            /> : <div className='p-4 bg-white rounded-md md:w-1/2 m-4'>
            <div className='pb-2 flex items-center justify-between border-b-2 border-black'>
                <h1 className='font-bold text-2xl'>{data.message[quiz - 1].qtitle}</h1>
                <div className=' p-2 bg-slate-300 rounded-lg'>
                    <span className='text-lg p-2'>Time Left</span>
                    <span className='bg-black text-white px-2 py-1 rounded-md'>15s</span>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold my-2'>{data.message[quiz - 1].question}?</h1>
                <ol>
                            
                    <li onClick={() => submit(data.message[quiz - 1].op1, 0)} id='op1' className='flex cursor-pointer items-center justify-between px-4 py-2 rounded-md border-blue-500 border-2 my-2'>
                        {data.message[quiz - 1].op1}
                    </li>
                    <li onClick={() => submit(data.message[quiz - 1].op2, 1)} id='op2' className='flex cursor-pointer items-center justify-between px-4 py-2 rounded-md border-blue-500 border-2 my-2'>
                        {data.message[quiz - 1].op2}
                    </li>
                    <li onClick={() => submit(data.message[quiz - 1].op3, 2)} id='op3' className='flex cursor-pointer items-center justify-between px-4 py-2 rounded-md border-blue-500 border-2 my-2'>
                        {data.message[quiz - 1].op3}
                    </li>
                    <li onClick={() => submit(data.message[quiz - 1].op4, 3)} id='op4' className='flex cursor-pointer items-center justify-between px-4 py-2 rounded-md border-blue-500 border-2 my-2'>
                        {data.message[quiz - 1].op4}
                    </li>
                </ol>
            </div>
            <div className='mt-8 flex items-center justify-between'>
                <h2 className='text-lg font-bold'>{`${data.message[quiz - 1].qserial} of ${data.message.length}`}</h2>
                <button onClick={SetQuiz} className='text-lg px-3 py-1 rounded-md bg-blue-500 text-white'>Next Quiz</button>
            </div>
        </div>
            }
        </>
    );
};

export default Quiz;
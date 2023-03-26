import React from 'react';
import { useState } from 'react';
import HeadTag from '../../components/HeadTag';
import Quiz from '../../components/Quiz'
export let courseCode

const quiz = ({data, ccode}) => {
    courseCode = ccode
    const [show, setShow] = useState(false)
    const [showQuiz, setShowQuiz] = useState(false)
    const ShowQuiz = () => {
        setShowQuiz(true)
        setShow(false)
    }
    return (
        <>
            <HeadTag title="Quiz" />
            <div className='h-screen bg-blue-700 flex items-center justify-center'>
                {
                    show ? <div className='p-4 bg-white text-black text-xl rounded-lg'>
                        <h1 className='text-2xl mb-1 font-bold'>Some Rules of Quiz</h1>
                        <hr />
                        <ol className='my-2'>
                            <li>1. You have only 15s for each quiz</li>
                            <li>2. During the quiz, you cannot leave the quiz</li>
                            <li>3. After time off you cannot answer the quiz</li>
                            <li>4. You will get points according to your correct answers</li>
                        </ol><hr />
                        <div className='flex mt-2 items-center justify-between'>
                            <button onClick={ShowQuiz} className='px-5 py-2 bg-blue-700 text-white text-xl rounded-lg'>Continue Quiz</button>
                            <button onClick={() => setShow(false)} className='px-5 py-2 bg-blue-700 text-white text-xl rounded-lg'>Skip Quiz</button>
                        </div>
                    </div> : showQuiz ? <Quiz data={data} ccode={ccode}
                      show = {show} setShow = {setShow} showQuiz = {showQuiz} setShowQuiz = {setShowQuiz}
                    /> : <button onClick={() => setShow(true)} className='rounded-lg text-2xl bg-white text-blue-700 px-4 py-1 font-bold'>Start Quiz</button> 
                }
            </div>
        </>
    );
};

export default quiz;

export async function getServerSideProps({params}) { 
    const result = await fetch(`http://localhost:3000/api/quiz/${params.quiz}`)
    const data = await result.json()

    return {props: {data, ccode: params.quiz}}
}
// import axios from 'axios';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React from 'react';
// import { useState } from 'react';
// import HeadTag from '../../components/HeadTag';
// import NavbarForAll from '../../components/NavbarForAll'
// import { getCookie, hasCookie } from 'cookies-next';
 
// const courseVideo = ({token, data, query}) => {
//     const router = useRouter()
//     const initialVideo = data?.message[0].cvideo
//     const [video, setVideo] = useState(initialVideo)
//     const [desc, setDesc] = useState(1)
//     const [quiz, setQuiz] = useState(0)
//     const [idx, setIdx] = useState(0)
//     const setCourse = (values, value) => {
//         setVideo(values)
//         setDesc(value)
//     }
//     const shifRight = () => {
//         // if(idx >= data?.message.length) setIdx(data?.message.length - 1)
//         // else setIdx(prev => prev + 1)
//         // setVideo(data?.message[idx].cvideo)
//     }
//     const shifLeft = () => {
//         // if(idx <= 0) setIdx(0)
//         // else setIdx(prev => prev - 1)
//         // setVideo(data?.message[idx].cvideo)
//         // console.log(idx)
//     }
//     (async() => {
//         const {data} = await axios.post(`/api/courseVideo/${query.id}`)
//         if(data?.message.length) {
//             const res = await axios.get(`/api/quiz/${data?.message[0].ccode}`)
//             setQuiz(res.data?.message.length)
//         } else router.push("/coursesPages")
//     })()
//     React.useEffect(() => {
//         axios.get("/api/getUserFromcom").then(res => {
//             if(!res.data?.message.length || !token) {
//                 router.push("/coursesPages")
//             }
//         })
//         // if(!token) router.push("/login")
//     }, [])
//     return (
//         <>
//             <HeadTag title={`Course Video`} />
//             <NavbarForAll />
//            <div className='bg-[#D9E3F1] min-h-screen pt-20'>
//             <div className='border-t-4 bg-[#D9E3F1] flex items-start justify-between flex-col md:flex-row md:p-4'>
//                     <div className='md:w-8/12 relative'>
//                         <video 
//                             src={`/uploads/videos/${video}`}
//                             width="100%"
//                             height="auto"
//                             controls
//                             id='video-player'
//                             className='md:mx-2 object-cover'
//                         />
//                         <i onClick={shifRight} class="fas fa-angle-right absolute text-2xl font-bold text-gray-400 -translate-y-[50%] right-0 top-[50%]"></i>
//                         <i onClick={shifLeft} class="fas fa-angle-left pl-4 absolute text-2xl font-bold text-gray-400 -translate-y-[50%] left-0 top-[50%]"></i>
//                     </div>
//                     <div className='w-full md:w-[30%] p-2'>
//                         {
//                             data?.message.map(info => (
//                                 <div key={info.cid} onClick={() => setCourse(info.cvideo, info.cserial)} className='cursor-pointer font-bold border-2 border-black text-lg'>
//                                     <h3 className='px-2 py-4 w-full h-full bg-[#002B5B] text-white'>{info.cname}</h3>
//                                 </div>
//                             ))
//                         }  
//                         {
//                             quiz ? <div className='flex items-center justify-center'>
//                                 <span className='bg-blue-900 w-full my-2 text-white text-center text-2xl rounded-md px-2 py-1'>
//                                     <Link href={`/quiz/${data?.message[0].ccode}`}>Start Quiz</Link>
//                                 </span>
//                             </div> : <></>
//                         }  
//                     </div>   
//                 </div> 
//                 {
//                     <div className='text-2xl font-bold px-4 bg-[#D9E3F1]'>
//                         {data?.message[desc - 1].cdesc}
//                     </div>
//                 }
                
//            </div>
//         </>
//     );
// };

// export default courseVideo;

// export async function getServerSideProps({query, req, res}) {
//     const token = hasCookie("token", {req, res}) || hasCookie("companyToken", {req, res})
//     var {data} = await axios.get(`https://supervisorsolutions.com/api/courseVideo/${query.id}`)
//     return {props: {token, data, query}}
// }

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HeadTag from '../../components/HeadTag';
import NavbarForAll from '../../components/NavbarForAll'
import { getCookie, hasCookie } from 'cookies-next';
import useSWR from 'swr';

const courseVideo = ({token, query}) => {
    // if(typeof window !== 'undefined') {
    //  var router = useRouter()
    // } else return
    var router = useRouter()
    const [quiz, setQuiz] = useState(0)
    const fetcher = async () => {
        const {data} = await axios.get(`/api/courseVideo/${router.query.courseCode}`)
        return data
    }
    const {data} = useSWR("/api/courseVideo/564656468", fetcher)
    if(!data?.message.length) router.push("/")
    // const initialVideo = data?.message[0].video || ""
    const [video, setVideo] = useState("")
    const [desc, setDesc] = useState(1)
    const [idx, setIdx] = useState(0)
    const [title, setTitle] = useState("")
    axios.post(`/api/courseVideo/${router.query.courseCode}`).then(({data}) => {
        if(data?.message.length) {
            axios.get(`/api/quiz/${data?.message[0].ccode}`).then(res => {
                setQuiz(res.data?.message.length)
            })
        } 
        else router.push("/")
    })
    const setCourse = (values, value, title, index) => {
        setVideo(values)
        setDesc(value)
        setTitle(title)
        setIdx(index)
    }
    const shifRight = () => {
        // if(idx >= data?.message.length) setIdx(data?.message.length - 1)
        // else setIdx(prev => prev + 1)
        // setVideo(data?.message[idx].cvideo)
    }
    const shifLeft = () => {
        // if(idx <= 0) setIdx(0)
        // else setIdx(prev => prev - 1)
        // setVideo(data?.message[idx].cvideo)
        // console.log(idx)
    }
    return (
        <>
            <HeadTag title={`Course Video`} />
            <NavbarForAll />
           <div className='bg-[#D9E3F1] min-h-screen pt-20'>
            <div className='border-t-4 bg-[#D9E3F1] flex items-start justify-between flex-col md:flex-row md:p-4'>
                    <div className='md:w-8/12 relative'>
                        <video 
                            src={`/uploads/videos/${video}`}
                            width="100%"
                            height="auto"
                            controls
                            id='video-player'
                            className='md:mx-2 object-cover'
                        />
                        {/* <i onClick={shifRight} class="fas fa-angle-right absolute text-2xl font-bold text-gray-400 -translate-y-[50%] right-0 top-[50%]"></i> */}
                        {/* <i onClick={shifLeft} class="fas fa-angle-left pl-4 absolute text-2xl font-bold text-gray-400 -translate-y-[50%] left-0 top-[50%]"></i> */}
                        <h3 className='text-xl font-semibold pl-4 pt-4'>{idx + 1}. {title}</h3>

                    </div>
                    <div className='w-full md:w-[30%] p-2'>
                        {
                            data?.message.map((info, index) => (
                                <div key={info.serial} onClick={() => setCourse(info.video, info.serial, info.title, index)} className='cursor-pointer font-bold border-2 border-black text-lg'>
                                    <h3 className='px-2 py-4 w-full h-full bg-[#002B5B] text-white'>{index + 1}. {info.title}</h3>
                                </div>
                            ))
                        }  
                        {
                            quiz ? <div className='flex items-center justify-center'>
                                <span className='bg-blue-900 w-full my-2 text-white text-center text-2xl rounded-md px-2 py-1'>
                                    <Link href={`/quiz/${data?.message[0].ccode}`}>Start Quiz</Link>
                                </span>
                            </div> : <></>
                        }  
                    </div>   
                </div> 
                {
                    <div className='text-2xl font-bold px-4 bg-[#D9E3F1]'>
                        {data?.message[desc - 1]?.cdesc}
                    </div>
                }
                
           </div>
        </>
    );
};

export default courseVideo;

export async function getServerSideProps(req, res) {
    const token = hasCookie("token", {req, res}) || hasCookie("companyToken", {req, res})
    return {props: {token, query: req.query}}
}
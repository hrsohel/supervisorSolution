import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import HeadTag from '../components/HeadTag'
import NavbarForAll from '../components/NavbarForAll'
import Footer from '../components/Footer'

const multiFiles = () => {
    const [serial, setSerial] = useState(0)
    const [desc, setDesc] = useState("")
    const [video, setVideo] = useState("")
    const [progress, setProgress] = useState(0)
    const [loading, setLoading] = useState(false)
    const submit = (e) => {
        e.preventDefault()
        const config = {
            headers: {"Content-Type": "multipart/form-data"},
            onUploadProgress: function(progressEvent) {
                const percentage = Math.round(
                    progressEvent.loaded * 100 / progressEvent.total
                )
                setProgress(percentage)
            }
        }
        if(!serial || !desc || !video) alert("All Feilds Required!")
        else if(video.type.split("/")[0] !== "video") alert("Only Video File Allowed")
        else {
            setLoading(true)
            const formData = new FormData()
            formData.append("ccode", "jhgdfd")
            formData.append("serial", serial)
            formData.append("video", video)
            formData.append("desc", desc)
            axios.post("/api/demo", formData, config).then(({data}) => {
                setLoading(false)
                alert(data.message)
            })
        }
    }
    return (
        <>
            <HeadTag title="Add Course Module" />
            <NavbarForAll />
           <div className='container mx-auto pt-28 pb-4'>
                <form className='px-2' method='post' encType='maltipart/form-data'>
                    <h2 className='text-2xl font-semibold text-center'>Add Modules For This Course</h2>
                    <div className='flex items-center justify-between flex-wrap md:flex-nowrap'>
                        <div className=''>
                            <label className='font-semibold text-lg' htmlFor="ccode">Course Code</label>
                            <input type="text" name="ccode" id="ccode" className='text-lg px-2 my-2 py-1 w-full outline-none border-2 border-blue-600 rounded-md' />
                        </div>
                        <div className=''>
                            <label className='font-semibold text-lg' htmlFor="serial">Serial Number</label>
                            <input onChange={e => setSerial(e.target.value)} type="number" name="serial" id="serial" className='text-lg px-2 my-2 py-1 w-full outline-none border-2 border-blue-600 rounded-md' />
                        </div>
                        <div className='my-2'>
                            <label className='font-semibold text-lg bg-blue-600 text-white rounded-md p-2' htmlFor="video">Upload Video</label>
                            <input onChange={e => setVideo(e.target.files[0])} type="file" name="video" id="video" className='hidden' /> <br />
                            {
                                progress > 0 && progress < 100 ? <div className='my-3 relative mx-auto w-full rounded-lg h-2 bg-gray-400'>
                                            <div style={{width: `${progress}%`}} className='h-full rounded-lg absolute top-0 left-0 bg-blue-500'></div>
                                        </div> : <></>
                            }
                        </div>
                    </div>
                    <div>
                        <label className='font-semibold text-lg w-full' htmlFor="desc">Description</label>
                        <textarea onChange={e => setDesc(e.target.value)} type="text" name="desc" id="desc" className='text-lg px-2 my-2 py-1 w-full outline-none border-2 border-blue-600 rounded-md'></textarea>
                    </div>
                    <input onClick={submit} type="submit" value={loading ? "Submitting" : "Submit"} className='text-lg bg-blue-600 text-white cursor-pointer text-center px-2 py-1 rounded-md' disabled={loading} />
                </form>
           </div>
           <Footer />
        </>
    );
};

export default multiFiles;
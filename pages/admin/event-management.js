import React, {useState} from 'react';
import Menu from '../../components/Menu';
import Navbar from './Navbar';
import Category from '../../components/Category';
import HeadTag from '../../components/HeadTag';
import { Calendar, dateFnsLocalizer, momentLocalizer  } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const eventManagement = ({data}) => {
    let value = data.message.map(info => {
        return {
            id: info.eventId,
            title: info.title, 
            start: new Date(moment(info.start).format('YYYY, M, DD')),
            end: new Date(moment(info.end).format('YYYY, M, DD'))
        }
    })
    const [show, setShow] = useState(false)
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const handleAddEvent = async () => {
        const formData = new FormData()
        formData.append('title', newEvent.title)
        formData.append('start', newEvent.start)
        formData.append('end', newEvent.end)
        const {data} = await axios.post('/api/event-management', formData)
        if(data.status === 200) alert('Event Added')
        else alert('Something problem in adding event')
    }
    return (
        <>
            <HeadTag title="Event Management" />
           <Navbar/>
           <main className='flex items-start justify-start flex-col md:flex-row bg-gray-300'>
                <Menu active="event-management"/>
                <div className="event w-full h-[84vh] overflow-auto">
                    <h1 className='bg-blue-900 w-full text-center text-white text-2xl py-4 font-bold'>Event Management</h1>
                    <div className='bg-white m-4'>
                        <div className="App">
                            <h1 className='px-4 py-2 text-lg bg-blue-900 text-center text-white font-bold'>Calendar</h1>
                            {/* <h2>Add New Event</h2> */}
                            <div className='px-4 md:w-80 mx-auto'>
                                <input className='p-1 w-full my-2 text-lg border-2 border-black outline-none rounded-md' type="text" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                                <DatePicker placeholderText="Start Date" className='p-1 w-full my-2 text-lg border-2 border-black outline-none rounded-md' selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                                <DatePicker placeholderText="End Date" className='p-1 w-full my-2 text-lg border-2 border-black outline-none rounded-md' selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                                <button className='px-4 w-full my-2 py-2 text-lg bg-blue-900 text-center text-white font-bold rounded-md' onClick={handleAddEvent}>
                                    Add Event
                                </button>
                            </div>
                            <Calendar localizer={localizer} events={value} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
                        </div>
                        {
                            show ? <Category show={show} setShow={setShow} /> : ""
                        } 
                    </div>     
                </div> 
                
            </main> 
        </>
    );
};

export default eventManagement;

export async function getServerSideProps(context) {
    const result = await fetch('https://supervisorsolutions.com/api/event-management')
    const data = await result.json()
    return {props: {data}}
}
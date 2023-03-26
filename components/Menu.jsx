import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import dashboardPic from '../public/master admin/icon/8679880_dashboard_fill_icon.png'
import EMPic from '../public/master admin/icon/211633_calendar_icon.png'
import InsPic from '../public/master admin/icon/309041_users_group_people_icon.png'
import coursePic from '../public/master admin/icon/6590551_and_books_education_learning_library_icon (2).png'
import feesPic from '../public/master admin/icon/172506_money_icon.png'
const Menu = ({active}) => {
    return (
        <>
            <ul className='shadow-xl Category p-4 w-1/4 hidden md:block bg-blue-900 text-2xl text-white font-semibold'>
                    <li className={`${active === 'dashboard' ? 'bg-sideBac text-hovSideText' : 'text-white'} my-1 p-2 rounded-lg flex items-center`}><Image className='shrink-0' src={dashboardPic} width="30rem" height="30rem" /><Link href="dashboard" className='ml-3'>Dashboard</Link></li>
                    <li className={`${active === 'event-management' ? 'bg-sideBac text-hovSideText' : 'text-white'} my-1 p-2 rounded-lg flex items-center`}><Image className='shrink-0' src={EMPic} width="30rem" height="30rem" /><Link href="event-management">Event Management</Link></li>
                    <li className={`${active === 'instructor' ? 'bg-sideBac text-hovSideText' : 'text-white'} my-1 p-2 rounded-lg flex items-center`}><Image className='shrink-0' src={InsPic} width="30rem" height="30rem" /><Link href="instructor">Instructor</Link></li>
                    <li className={`${active === 'student' ? 'bg-sideBac text-hovSideText' : 'text-white'} my-1 p-2 rounded-lg flex items-center`}><Image className='shrink-0' src={InsPic} width="30rem" height="30rem" /><Link href="students">Students</Link></li>
                    <li className={`${active === 'courses' ? 'bg-sideBac text-hovSideText' : 'text-white'} my-1 p-2 rounded-lg flex items-center`}><Image className='shrink-0' src={coursePic} width="30rem" height="30rem" /><Link href="courses">Courses</Link></li>
                    <li className={`${active === "employee" ? 'bg-sideBac text-hovSideText' : 'text-white'} my-1 p-2 rounded-lg flex items-center`}><Image className='shrink-0' src={InsPic} width="30rem" height="30rem" /><Link href="employess">Employees</Link></li>
                    <li className={`${active === "fee" ? 'bg-sideBac text-hovSideText' : 'text-white'} my-1 p-2 rounded-lg flex items-center`}><Image className='shrink-0' src={feesPic} width="30rem" height="30rem" /><Link href="fees">Fees</Link></li>
            </ul>
        </>
    );
};

export default Menu;
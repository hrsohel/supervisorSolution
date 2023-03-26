import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import user from '../public/User profile/4781818_account_avatar_face_man_people_con.png'
import book from '../public/User profile/6590551_and_books_education_learning_library_con.png'
import certificate from '../public/User profile/9073723_certificate_con.png'
import pay from '../public/User profile/paymentHistory.png'
import impLink from '../public/User profile/importantLinks.png'
import setting from '../public/User profile/settings.png'
import { context } from '../pages/_app';
import HeadTag from './HeadTag'

const UserMenu = ({active}) => {
    const {state, dispatch} = React.useContext(context)
    return (
        <>
            <HeadTag title={active} />
            {/* <div><i class="fa-solid fa-bars"></i></div> */}
           {
               <div className={`${state ? "block" : "hidden"} lg:block userMenu w-full lg:w-1/3 bg-gray-500 rounded-lg lg:sticky top-4 relative mb-8 lg:mb-0`}>
                <i onClick={() => dispatch({type: "HIDE"})} className='fas fa-times font-bold text-2xl cursor-pointer lg:hidden absolute right-4 top-4'></i>
                <div className='flex items-center justify-center'>
                    <Image className='' src={user} width="100" height="100"/>    
                </div>
                <ul className='p-4'>
                    <li className={`${active == "profile" ? "active" : "bg-sideBac text-sideText"} hover:bg-hoveSideBac hover:text-hovSideText p-4 rounded-lg text-lg my-2 flex`}><Image src={user} width="30" height="30"/><Link href="profile" className='block'> My Profile</Link></li>   
                    <li className={`${active == "education" ? "active" : "bg-sideBac text-sideText"} hover:bg-hoveSideBac hover:text-hovSideText p-4 rounded-lg text-lg my-2 flex`}><Image src={book} width="30" height="30"/><Link href="education"> Education</Link></li>   
                    <li className={`${active == "courses" ? "active" : "bg-sideBac text-sideText"} hover:bg-hoveSideBac hover:text-hovSideText p-4 rounded-lg text-lg my-2 flex`}><Image src={book} width="30" height="30"/><Link href="courses2"> Courses</Link></li>   
                    <li className={`${active == "certificates" ? "active" : "bg-sideBac text-sideText"} hover:bg-hoveSideBac hover:text-hovSideText p-4 rounded-lg text-lg my-2 flex`}><Image src={certificate} width="30" height="30"/><Link href="certificates"> Certificates</Link></li>   
                    <li className={`${active == "companyCourse" ? "active" : "bg-sideBac text-sideText"} hover:bg-hoveSideBac hover:text-hovSideText p-4 rounded-lg text-lg my-2 flex`}><Image src={book} width="30" height="30"/><Link href="company-course"> Company Courses</Link></li>   
                    <li className={`${active == "payment-history" ? "active" : "bg-sideBac text-sideText"} hover:bg-hoveSideBac hover:text-hovSideText p-4 rounded-lg text-lg my-2 flex`}><Image src={pay} width="30" height="30"/><Link href="payment-history"> Payment History</Link></li>   
                    <li className={`${active == "important-links" ? "active" : "bg-sideBac text-sideText"} hover:bg-hoveSideBac hover:text-hovSideText p-4 rounded-lg text-lg my-2 flex`}><Image src={impLink} width="30" height="30"/><Link href="important-links"> Important Links</Link></li>   
                    <li className={`${active == "settings" ? "active" : "bg-sideBac text-sideText"} hover:bg-hoveSideBac hover:text-hovSideText p-4 rounded-lg text-lg my-2 flex`}><Image src={setting} width="30" height="30"/><Link href="settings"> Settings</Link></li>   
                </ul>   
            </div>
           }
        </>
    );
};

export default UserMenu;
import React, {useState} from 'react';
import CompanyEnroll from '../components/CompanyEnroll';
import CompanyLanding from '../components/CompanyLanding';
import CompanyProfileAndEnrolledCourses from '../components/CompanyProfileAndEnrolledCourses';
import Footer from '../components/Footer';
import NavbarForAll from '../components/NavbarForAll'

const company = () => {
    const [currentPage, setCurrentPage] = useState(3)
    return (
        <>
            <NavbarForAll />
            <header className="h-12 mt-20 bg-[#1F497B] w-full flex items-center px-7 text-white text-lg">
                <div className='flex items-center gap-4 text-white font-medium'>
                    {/* <h2 onClick={() => setCurrentPage(1)} className={`underline cursor-pointer ${currentPage === 1 ? "text-red-500" : ""}`}>1st page</h2> */}
                    {/* <h2 onClick={() => setCurrentPage(2)} className={`underline cursor-pointer ${currentPage === 2 ? "text-red-500" : ""}`}>2nd page</h2> */}
                    <h2 onClick={() => setCurrentPage(2)} className={`underline cursor-pointer ${currentPage === 2 ? "text-red-500" : ""}`}>Company Enrollment</h2>
                </div>
            </header>

            {/* {
                currentPage === 1 ? 
                <CompanyLanding />
                // // <CompanyEnroll /> 
                // : currentPage === 2 ? 
                // <CompanyProfileAndEnrolledCourses />
                : <CompanyEnroll />
            } */}
            <CompanyEnroll />
            <Footer />
        </>
    );
};

export default company;
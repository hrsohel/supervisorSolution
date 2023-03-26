import React from 'react';
// import ask from '../public/images/ask.png';
import Image from 'next/image'
import NavbarForAll from '../components/NavbarForAll';
import Footer from '../components/Footer';

const faqask = () => {
    return (
        <>
        <NavbarForAll />
        <div className="bg-gradient-to-r from-[#fdfdfd] to-[#f7f3e9] p-4 pt-28">
            <dev>
                <img src="/images/ask.png" alt="faq"
                    className='block mx-auto object-cover rounded-md'
                    width={`350px`} height={`350px`}
                />
                {/* <Image 
                        src="/images/ask.png"
                        alt="faq"
                        width="350"
                        height="350"
                        className=" hover:drop-shadow-2xl block mx-auto" /> */}
            </dev>
            <dev className="text-left my-2 mx-2">
                <h1 className="text-left text-[#06356C] text-xl  font-semibold ">DOT Compliant</h1>
                <p className="  font-semibold  my-2">•	This course meets or exceeds the training requirements in all 50-states, the following federal agencies: FMCSA, FAA, FTA, FRA, USCG, PHMSA, and other counties that use the DOT guidelines.</p>
                  <h1 className="text-left text-[#06356C] text-xl  font-semibold ">Learn Anytime & Anywhere</h1>
                  <p className="  font-semibold  my-2">•	Our courses only expire when you're finished with the course, this means that employees don’t feel rushed into “cramming” for a course only to forget the material a week later and therefore perform better in practice and make fewer mistakes than in traditional training environments.</p>
                  <h1 className="text-left text-[#06356C] text-xl  font-semibold ">Credits Never Expire</h1>
                  <p className="  font-semibold  my-2"> •	Unused course credits never expire, so feel free to order bulk credits to receive maximum discounts.</p>
                  <h1 className="text-left text-[#06356C] text-xl  font-semibold ">	Downloadable Certificate</h1>
                  <p className="  font-semibold  my-2">•	Same-day certificate issuance after completing a course, downloadable in PDF format & printable.</p>
                   <h1 className="text-left text-[#06356C] text-xl  font-semibold ">2 Hours of Learning</h1>
                   <p className="  font-semibold  my-2">•	DOT Reasonable Suspicion Training for Supervisors may take longer or shorter to complete depending on student pace, reading, and comprehension level.</p>
	              <h1 className="text-left text-[#06356C] text-xl  font-semibold ">Instant Course Access</h1>
                  <p className="  font-semibold  my-2">•	Employees receive instant course access right after registration or invitation sent by a training manager, or supervisor.</p>
	               <h1 className="text-left text-[#06356C] text-xl  font-semibold ">Instant Manager Accounts</h1>
                   <p className="  font-semibold  my-2">•	When a employer purchases two or more credits we will automatically create a manager account which can then be used to invite employee, keep all training certificates in one place that will help you stay compliant and well prepared for a audit conduct by the DOT.</p>
	               <h1 className="text-left text-[#06356C] text-xl  font-semibold ">Volume Discounts</h1>
                   <p className="  font-semibold  my-2">•	Volume discounts for credits are automatically applied during the checkout process. Did you know that course credits never expire so feel free to purchase credits in bulk.</p>
                
            </dev>

        </div>
        <Footer/>
        </>
    );
};

export default faqask;
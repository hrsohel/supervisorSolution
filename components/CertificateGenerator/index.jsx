// import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';
import CertificateComponent from './CertificateComponent';
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';
import moment from 'moment';
import { Marks } from '../CompleteQuiz';
import { courseCode } from '../../pages/quiz/[quiz]';
import axios from 'axios';

// convert pixel unit value to milometer
const pxToMm = (px) => {
  return Math.floor(px/document.getElementById('myMm').offsetHeight);
};


const CertificateGenerator = () => {
  const componentRef = useRef(null);
  const formData = {marks: Marks, courseCode}
  // data for certificate
  const certificateData = {
    name: 'Hugh Jackman',
    course_name: "DOT FMCSA Supervisor Reasonable Suspension Signs and SymptomsDrug And Alcohol Training",
    compilation_detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh ipsum sit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi",
    optional_detail: "Fulfills the requirements of 49 CFR Part 382.603",
    compilation_date: `${moment(new Date(Date.now())).format("DD MMM, YYYY")}`,
    credential_id: '#234234',
    company_logo: '/logo1.png'
  }

  // const handleExportPdf = () => {
  //   const dom = document.getElementById('node')
  //   const a4WidthMm = 230;
  //   const domHeightMm = pxToMm(dom.offsetHeight);

  //   exportComponentAsPDF(componentRef, {
  //     fileName: 'Certificate',
  //     pdfOptions: {
  //       x: 0,
  //       y: 0,

  //       unit: "mm",
  //       // orientation: 'l',
  //       pdfFormat: [domHeightMm+10, a4WidthMm]
  //     }
  //   })
  // }

  // function to print pdf
  const handlePdfClick = async () => {
    let domElement = componentRef.current;
    const a4WidthMm = 230;
    const domHeightMm = pxToMm(document.getElementById('node').offsetHeight);
    htmlToImage.toPng(domElement)
      .then(async function (dataUrl) {
        console.log(dataUrl);
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: [domHeightMm+10, a4WidthMm],
        });
        pdf.addImage(dataUrl, 'PNG', 0, 0);
        pdf.save("download1.pdf");
        // await axios.post(`/api/certificate/${dfhd}`, {Marks, courseCode})
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
    await axios.post(`/api/certificate/${courseCode}`, {formData})
  }

  return (
    <React.Fragment>
      <div className='grid gap-4 mt-4'>
        <div>
          {/* <button className='px-2 py-1 border rounded bg-emerald-600 text-lime-50 mr-2' onClick={() => exportComponentAsJPEG(componentRef)}>
            Export As JPEG
          </button> */}
          <button className='px-2 py-1 border rounded bg-emerald-600 text-lime-50 mr-2' 
            onClick={handlePdfClick}>
            Export As PDF
          </button>
          {/* <button className='px-2 py-1 border rounded bg-emerald-600 text-lime-50 mr-2' onClick={() => exportComponentAsPNG(componentRef)}>
            Export As PNG
          </button> */}
        </div>

        <div id="myMm" style={{height: "1mm"}} />

          <CertificateComponent ref={componentRef} certificateData={certificateData}/>
      </div>
      
    </React.Fragment>
  );
};

export default CertificateGenerator;
import React from 'react';
import {Document, pdfjs} from 'react-pdf'
import workerSrc from '../pdf-worker'
import pdf from './download.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const PdfViwer = () => {
  return (
    <>
      <Document file={pdf}>

      </Document>
    </>
  );
};

export default PdfViwer;
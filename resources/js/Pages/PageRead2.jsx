import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import PDF2 from '@/assets/Diabetis Diagnosis.pdf';
import '@/css/styles.css';




const PageRead2 = () => {

    const [totalPages, setTotalPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    
    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;
        //pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        //pdfjs.GlobalWorkerOptions.workerSrc = `http://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
       // pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js'
    },[]);

    /**
    * @param {Object} event
    *
    * this func will be called when the pdf is Loaded
    */
    function onDocLoad(event) {
           // console.log("PDF FILES LOADED: ", event.numPages);
            //store total pages of the pdf in a state called setTotalPages
            setTotalPages(event.numPages);
    };

    const changePage = (param) => {
        if (param === "prev") {
            setPageNumber((prev) => prev - 1)
        }
        if (param === "next") {
            setPageNumber((prev) => prev + 1)
        }
    };
    

    return (

        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    First PDF
                </h2>
            }>

            <div className="w-full h-screen flex justify-start items-start overflow-hidden" >
                <div className='border-r-2 border-gray-400 px-3 w-60 p-2 h-full'>
                    <div className='px-2 py-3 border-b-2 text-center font-semibold '>
                    <h2 className="text-white"> DOCUMENT PANEL </h2>
                    </div>

                    <div className='mt-2 h-full'>
                        <Document 
                            className={"flex flex-col justify-start items-center overflow-auto h-full pdf-container"}
                            file = {PDF2}
                            onLoadSuccess={onDocLoad}
                        >
                            {
                                Array(totalPages)
                                    .fill()
                                    .map((_, index) => ( 
                                        <div 
                                            onClick={() => setPageNumber(index)}
                                            className={`border-[4px] cursor-pointer relative rounded my-2
                                                ${pageNumber === index ? "border-rose-700": ""}`}
                                        >
                                        <Page 
                                            height = {180} 
                                            pageIndex={index +1}
                                            pageNumber={index}></Page>
                                        </div>
                                ))
                            }
                            
                        </Document>
                    </div>
                    
                </div>


                <div className="w-full h-full">
                    <div className="w-full bg-slate-100 h-full"> 
                        <div className="bg-slate-200 h-16 py-2 px-4 flex justify-between items-center">
                            <div className="font-semibold text-lg"> FILE NAME HERE</div>
                            <div className="flex justify-center items-center gap-1">

                                <button onClick={() => changePage("prev")}
                                    className="cursor-pointer inline-flex items-center rounded-md border border-transparent
                                    bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out
                                    hover:text-gray-700 focus:outline-none dark:bg-gray-800
                                    dark:text-gray-400 dark:hover:text-gray-300">
                                        PREVIOUS
                                </button>
                                    <div className="px-3 py-1 rounded">{pageNumber}</div>
                                        of
                                    <div className="px-3 py-1 rounded">{totalPages}</div>

                                
                                <button onClick={() => changePage("next")}
                                    className="cursor-pointer inline-flex items-center rounded-md border border-transparent
                                    bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out
                                    hover:text-gray-700 focus:outline-none dark:bg-gray-800
                                    dark:text-gray-400 dark:hover:text-gray-300">
                                        NEXT
                                </button>
                                            

                            </div>

                            <div>
                                <button className="bg-black text-white px-6 cursor-pointer py-2 rounded">
                                    DOWNLOAD
                                </button>
                            </div>
                        </div>

                        <div className="w-full bg-slate-100 p-4 h-full overflow-auto flex justify-center items-start">

                            <Document size="A4" file={PDF2} className={"w-max pdf-container"}>
                                <Page pageNumber={pageNumber} pageIndex={pageNumber}>

                                </Page>
                            </Document>
                        </div>


                    </div>
                </div>  

            </div>

                           
        
           
        


            </AuthenticatedLayout>
    );
        
};

export default PageRead2;




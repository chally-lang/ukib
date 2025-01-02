import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, usePage } from '@inertiajs/react';
import { Document, Page, pdfjs } from 'react-pdf';
import PDF1 from '@/assets/Concurrent Programming.pdf';
import { useState } from 'react';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import '@/css/styles.css';
import PrimaryButton from '@/Components/PrimaryButton';




pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;




export default function PageRead() {
    const user = usePage().props.auth.user;
    const pdf = PDF1
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);


    const onDocumentLoadSuccess = ({numPages})=>{
        setNumPages(numPages);
    }

    const nextPage = ()=>{
        if(pageNumber<numPages) {
            setPageNumber(pageNumber+1);
        }
    }

    const prevPage = ()=>{
        if(pageNumber>1) {
            setPageNumber(pageNumber-1);
        }
    }

    

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-white dark:text-gray-200">
                     First PDF
                </h2>
            }
        >
            <Head title="My Books" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">


                <div className="wrap" onContextMenu={(e)=>e.preventDefault()}>
                    <div className= "controls" onContextMenu={(e)=>e.preventDefault()}>
                        <PrimaryButton onClick = {prevPage} disabled = {pageNumber===1}>
                            Prev 
                        </PrimaryButton>
                        <span className=''></span>
                        <PrimaryButton onClick = {nextPage} disabled = {pageNumber===numPages}>
                            Next
                        </PrimaryButton>
                        

                    </div>
                </div>
                
                <Document size="A4" file={pdf} 
                    onLoadSuccess={onDocumentLoadSuccess} 
                    onContextMenu={(e)=>e.preventDefault()}
                        className="pdf-container">

                        <Page pageNumber={pageNumber}/>

                </Document>
                       


                        </div>
                    </div>
                </div>
            </div>

            
            
            

        </AuthenticatedLayout>
    );
}




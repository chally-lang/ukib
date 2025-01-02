import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
import { faq } from "@/constants/index";
import { useState } from "react";


export default function Dashboard({ success }) {
    const user = usePage().props.auth.user;
    const [open, setOpen] = useState(false);

    const halfLength = Math.floor(faq.length / 2);

    const { data, setData, post, processing, errors, reset } = useForm({
        category: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("sub.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-white dark:text-gray-200">
                    Dashboards
                </h2>
            }
        >
            <Head title="Dashboard" />

            {success && (
                <div className="py-5">
                    <div className="mx-auto max-w-3xl sm:px-1 lg:px-1">
                        <div className="overflow-hidden bg-green-500 shadow-sm sm:rounded-lg dark:bg-green-500">
                            <div className="font-bold p-3 text-white dark:text-gray-100">
                                <p className="text-sm text-center">{success}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

               {/* //menu items navs */}
            <div className="py-2">
                <div className="py-3">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="container relative z-2 py-5">
                                <div className="text-p1 font-bold mb-2">
                                    Library Menu Items
                                    <div className="pl-4 max-w-1/5">
                                        <hr className="border-cyan-500 mt-3"></hr>
                                    </div>
                                </div>

                            </div>
                            
                            <div className=" grid grid-cols-2 gap-3 p-6 text-gray-900 dark:text-gray-100">
                                
                               
                                <div className="bg-s1 px-3 py-3 rounded-14">
                                    <h2 className="text-sm font-medium text-p1 dark:text-p1">
                                        My Notes
                                    </h2>

                                    <p className="mt-2 text-sm text-gray-200 pb-5">
                                        Lets You Create Notes/Task which you can
                                        Edit and View at any time. our latest
                                        books.
                                    </p>
                                    <Link
                                        href={route("note.index")}
                                        as="button"
                                        className=" bg-s4  px-6 cursor-pointer py-2 
                                rounded-md text-sm text-white underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                                    >
                                        Go to My Notes
                                    </Link>
                                </div>

                                <div className="bg-s1 px-3 py-3 rounded-14">
                                    <h2 className="text-sm font-medium text-p1 dark:text-p1">
                                        My Books
                                    </h2>

                                    <p className="mt-2 text-sm text-gray-200 pb-5">
                                        Lets You View and Use The E-library Books, Allowing you to Study and Read 
                                        Your Prefered Selected Books, PDF, JOURNALS AND ARTCICLES etc.
                                        
                                    </p>
                                    <Link
                                        href={route("books")}
                                        as="button"
                                        className=" bg-s3  px-6 cursor-pointer py-2 
                                rounded-md text-sm text-white underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                                    >
                                        Visit Your Book Shelve.
                                    </Link>
                                </div>
                            </div>
                            


                            <div className=" grid grid-cols-2 gap-3 p-6 text-gray-900 dark:text-gray-100">
                                
                            

                                <div className="bg-s1 px-3 py-3 rounded-14">
                                    <h2 className="text-sm font-medium text-p1 dark:text-p1">
                                        Upcomming Features
                                    </h2>

                                    <p className="mt-2 text-sm text-gray-200 pb-5">
                                        Updates on Our Library Contents and Modules
                                    </p>
                                    <Link
                                        href={route("homeblog.index")}
                                        as="button"
                                        className=" bg-s3  px-6 cursor-pointer py-2 
                                rounded-md text-sm text-white underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                                    >
                                        News / Home
                                    </Link>
                                
                                </div>

                                {user.role === 1 && (
                                <div className="bg-s1 px-3 py-3 rounded-14">
                                    <h2 className="text-sm font-medium text-p1 dark:text-p1">
                                    Library News / Updates
                                    </h2>

                                    <p className="mt-2 text-sm text-gray-200 pb-5">
                                       Check and Read News, Blog Items From our Admins, Book Authors and more Updates
                                    </p>
                                    <Link
                                        href={route("blog.index")}
                                        as="button"
                                        className=" bg-s4  px-6 cursor-pointer py-2 
                                rounded-md text-sm text-white underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                                    >
                                        News
                                    </Link>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

          
            
            {/* //footer navs */}
            <div className="py-2">
                <div className="py-3">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className=" grid grid-cols-2 gap-3 p-6 text-gray-900 dark:text-gray-100">
                                <div className="bg-s1 px-3 py-3 rounded-14">
                                    <h2 className="text-sm font-medium text-p1 dark:text-p1">
                                        My Notes
                                    </h2>

                                    <p className="mt-2 text-sm text-gray-200 pb-5">
                                        Lets You Create Notes/Task which you can
                                        Edit and View at any time. our latest
                                        books.
                                    </p>
                                    <Link
                                        href={route("note.index")}
                                        as="button"
                                        className=" bg-s4  px-6 cursor-pointer py-2 
                                rounded-md text-sm text-white underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                                    >
                                        Go to My Notes
                                    </Link>
                                </div>

                                <div className="bg-s1 px-3 py-3 rounded-14">
                                    <h2 className="text-sm font-medium text-p1 dark:text-p1">
                                        My Books
                                    </h2>

                                    <p className="mt-2 text-sm text-gray-200 pb-5">
                                        Lets You Create Notes/Task which you can
                                        Edit and View at any time. our latest
                                        books.
                                    </p>
                                    <Link
                                        href={route("books")}
                                        as="button"
                                        className=" bg-s3  px-6 cursor-pointer py-2 
                                rounded-md text-sm text-white underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                                    >
                                        Visit Your Book Shelve.
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-2">
                    <Link
                        preserveScroll
                        className="block title mt-[1000px] text-white text-center "
                        href="/blog-page"
                    >
                        {new Date().toLocaleTimeString()}
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

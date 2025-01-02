import { Head, Link } from "@inertiajs/react";
import Header from "../Home/Header";
import Pagination from "@/Components/Pagination";
import { Carousel } from "flowbite-react";
// import Hero from './Home/Hero';
// import Slider from './Home/Slider';
// import Features from './Home/Features';
// import Newsletter from './Home/Newsletter';

export default function Index({ blogs, head_blog, sub_head_blog }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };
    return (
        <>
            <Head title="Blog News" />

            <main className="overflow-hidden">
                <Header />
                {/* <section className="pt-40 relative">
                    <div className="container">
                        <div className="relative z-2 max-w-212">
                            <div class="grid grid-cols-12 items-center gap-1">
                                <div class="col-span-6 row-span-2">
                                    <div className="caption small-2 uppercase text-p3">
                                        Discover the power our E-Library
                                    </div>

                                    <h2 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-4xl max-md:leading-12">
                                        Study & Research with ease
                                    </h2>

                                    <a>
                                        <button>
                                            <a href={route("dashboard")}>
                                                Try it now
                                            </a>
                                        </button>
                                    </a>
                                </div>

                                <div class="col-span-6">
                                    <p className="max-w-430 mb-10 body-1 max-md:mb-5">
                                        Better Research. Better Learning. Better
                                        Insights. A dynamic library for all.
                                        Research, Education & Library Solutions
                                    </p>
                                </div>

                                <div class="mt-3 col-span-12">
                                    <center>
                                        <p className="max-w-430 mb-10 body-1 max-md:mb-5">
                                           {head_blog.title}
                                        </p>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="mt-10">
                   
                    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
                       
                        <h2 className="text-p1 text-center text-2xl font-bold md:text-3xl lg:text-left">
                            Latest Library News And Updates
                        </h2>
                        <p className="text-white mb-8 mt-4 text-center text-sm sm:text-base md:mb-12 lg:mb-16 lg:text-left">
                            Always Check out News And Updates from our Admin
                            Desk
                        </p>
                       
                        <div className="mx-auto grid gap-8 lg:grid-cols-2">
                           
                            <a
                                href="#"
                                className="flex flex-col gap-4 rounded-md [grid-area:1/1/4/2] lg:pr-8"
                            >
                                <img
                                    src={head_blog.image_path}
                                    alt=""
                                    className="inline-block h-72 w-full object-cover"
                                />
                                <div className="flex flex-col items-start py-4">
                                    <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
                                        <p className="text-sm font-semibold text-blue-600">
                                            {head_blog.category}
                                        </p>
                                    </div>
                                    <p className="text-p3 mb-4 text-xl font-bold md:text-2xl">
                                        {head_blog.title}
                                    </p>
                                    <div className="flex flex-col text-sm text-white lg:flex-row">
                                        <p>Admin</p>
                                        <p className="mx-2 hidden lg:block">
                                            -
                                        </p>
                                        <p>{head_blog.date}</p>
                                    </div>
                                </div>
                            </a>

                            <div className="md:flex md:justify-between lg:flex-col">
                                {blogs.data.map((blog) => (
                                    <a
                                        href="#"
                                        className="py-5 px-5 flex flex-col pb-5 lg:mb-3 lg:flex-row lg:border-b lg:border-gray-300"
                                        key={blog.id}
                                    >
                                        <img
                                            src={blog.image_path}
                                            alt=""
                                            className="inline-block h-60 w-full object-cover md:h-32 lg:h-32 lg:w-32"
                                        />
                                        <div className="flex flex-col items-start pt-4 lg:px-8">
                                            <div className="mb-2 rounded-md bg-gray-100 px-2 py-1.5">
                                                <p className="text-sm font-semibold text-blue-600">
                                                    {blog.category}
                                                </p>
                                            </div>
                                            <p className="text-p3 mb-2 text-sm font-bold sm:text-base">
                                                {blog.title}
                                            </p>
                                            <div className="text-white flex flex-col items-start">
                                                <div className="text-white flex flex-col text-sm sm:text-base lg:flex-row lg:items-center">
                                                    <p>Admin</p>
                                                    <p className=" mx-2 hidden lg:block">
                                                        -
                                                    </p>
                                                    <p>{blog.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                  
                                ))}
                            </div>
                            <Pagination links={blogs.meta.links} />
                        </div>
                    </div>
                </section>


                <section>
                    {/* Container */}
                    <div className="mx-auto w-full max-w-7xl px-4 py-3 md:px-3 md:py-5">
                        {/* Component */}

                        <div
                            className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl 
                        bg-black-100 w-full max-w-11xl mb-5 mx-auto h-56 sm:h-64 xl:h-80 2xl:h-96"
                        >
                            <Carousel>
                                <div className="flex h-full items-center justify-center dark:text-white">
                                    <h3 className="text-lg sm:text-1xl lg:text-2xl text-center tracking-wide">
                                        <b className="mb-3">
                                            Learn From Diverse Perspectives
                                        </b>
                                        <br></br>
                                        <span className="mt-5 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                                            {" "}
                                            our Library is for Everyone,
                                            regardless of race, gender, physical
                                            ability, age or belief.
                                        </span>
                                    </h3>
                                </div>

                                <div className="flex h-full items-center justify-center dark:text-white">
                                    <h3 className="text-lg sm:text-1xl lg:text-2xl text-center tracking-wide">
                                        <b className="mb-3">
                                            {" "}
                                            Enjoy the Intuitive user interface
                                        </b>
                                        <br></br>
                                        <span className="mt-5 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                                            {" "}
                                            Our E-Library is Clear, highly
                                            visual and easy-to-navigate which
                                            guides users to their research topic
                                            and books of choice
                                        </span>
                                    </h3>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </section>



                <section>
                    
                    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
                        {/* Title */}
                        <h2 className="text-p1 text-center text-1xl font-bold md:text-2xl lg:text-left">
                            The latest and greatest news
                        </h2>
                        <p className="mb-8 mt-4 text-center text-sm text-white sm:text-base md:mb-12 lg:mb-16 lg:text-left">
                            Stay up to date and be informed
                        </p>
                        {/* Content */}
                        <div className="grid justify-items-stretch md:mb-12 md:grid-cols-3 md:gap-4 lg:mb-16 lg:gap-6">
                            
                            
                        {head_blog.id === null && (
                                   <div>
                                    <span>
                                        this is not available
                                    </span>
                                   </div>
                                )}
                            <a
                                href="#"
                                className="relative flex h-[500px] flex-col gap-4 rounded-md px-4 py-8 [grid-area:1/1/2/2] md:p-0 md:[grid-area:1/1/2/4]"
                            >
                                <div className="bg-s5 absolute bottom-12 left-8 z-20 flex w-56 max-w-lg flex-col items-start rounded-md p-6 sm:w-full md:bottom-[10px] md:left-[10px]">
                                    <div className="mb-4 rounded-md bg-s1 px-2 py-1.5">
                                        <p className="text-sm font-semibold text-blue-600">
                                            {sub_head_blog.category}
                                        </p>
                                    </div>
                                    <p className="mb-4 max-w-xs text-xl font-bold md:text-2xl">
                                        {sub_head_blog.title}
                                    </p>
                                    <div className="flex flex-col text-sm text-white lg:flex-row">
                                        <p>Admin</p>
                                        <p className="mx-2 hidden lg:block">
                                            -
                                        </p>
                                        <p> {sub_head_blog.date}</p>
                                    </div>
                                </div>
                                <img
                                    src={sub_head_blog.image_path}
                                    // style={{
                                    //     width: 60,
                                    // }}
                                    alt=""
                                    className="inline-block h-full w-full object-cover"
                                />
                            </a>

                            {blogs.data.map((blog) => (
                                <a
                                    href="#"
                                    className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0"
                                >
                                    <img
                                    
                                    src={blog.image_path}
                                        alt=""
                                        className="inline-block h-60 w-full object-cover"
                                    />
                                    <div className="flex flex-col items-start py-4">
                                        <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
                                            <p className="text-sm font-semibold text-blue-600">
                                            {blog.category}
                                            </p>
                                        </div>
                                        <p className="text-p3 mb-4 text-xl font-bold md:text-2xl">
                                            {blog.title}
                                        </p>
                                        <div className="text-white flex flex-col text-sm  lg:flex-row">
                                            <p>Admin</p>
                                            <p className="mx-2 hidden lg:block">
                                                -
                                            </p>
                                            <p>{blog.date}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

            

                
            </main>
        </>
    );
}

import { Element, Link as LinkScroll } from "react-scroll";
import Button from "@/Components/Home/Button";

import herop from "@/images/herop.png";


const Hero = ({success}) => {
    return (
        <section className="pt-40 relative">
            <Element name="hero">
                <div className="container">
                    <div className="relative z-2 max-w-212">
                        <div class="grid grid-cols-12 items-center gap-1">
                            <div class="col-span-6 row-span-2">
                                {success && (
                                    <div className="py-5">
                                        <div className="mx-auto max-w-3xl sm:px-1 lg:px-1">
                                            <div className="overflow-hidden bg-green-500 shadow-sm sm:rounded-lg dark:bg-green-500">
                                                <div className="font-bold p-3 text-white dark:text-gray-100">
                                                    <p className="text-sm text-center">
                                                        {success}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="caption small-2 uppercase text-p3">
                                    Discover the power our E-Library
                                </div>

                                <h2 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-4xl max-md:leading-12">
                                    Study & Research <br />
                                    <span className="text-p3">with ease</span>
                                </h2>

                                <Button>
                                    <button>
                                        <a href={route("dashboard")}>
                                            Try it now
                                        </a>
                                    </button>
                                </Button>

                                {/* <LinkScroll to="features" offset={-100} spy smooth>
                                    
                                </LinkScroll> */}
                            </div>

                            <div class="col-span-6">
                                <div className="left pointer-events-none hero-img_res">
                                    <img
                                        src={herop}
                                        className="size-200 max-lg:h-300 max-w-200 mr-20"
                                        alt="hero"
                                    />
                                </div>
                            </div>

                            <div class="mt-3 col-span-12">
                                <center>
                                    <p className="max-w-430 mb-10 body-1 max-md:mb-5">
                                        Better Research. Better Learning. Better
                                        Insights. A dynamic library for all.
                                        Research, Education & Library Solutions
                                    </p>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>

      
    );
};

export default Hero;



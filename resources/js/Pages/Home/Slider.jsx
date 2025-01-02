import { Carousel } from "flowbite-react";

import { Element, Link as LinkScroll } from "react-scroll";


const Slider = () => {
    return (
        <section>
            <Element name="slider">
                <div className="container">
                    <div
                        className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl 
                        bg-black-100 w-full max-w-11xl mb-5 mx-auto h-56 sm:h-64 xl:h-80 2xl:h-96"
                    >
                        <Carousel>
                            <div className="flex h-full items-center justify-center dark:text-white">
                                <h3 className="text-lg sm:text-1xl lg:text-1xl text-center tracking-wide">
                                    <b className="mb-5">
                                        Learn From Diverse Perspectives
                                    </b>
                                    <br></br>
                                    <br></br>
                                    <span className="font-medium mt-5 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                                        {" "}
                                        our Library is for Everyone, regardless
                                        of race, gender, physical ability, age
                                        or belief.
                                    </span>
                                </h3>
                            </div>

                            <div className="flex h-full items-center justify-center dark:text-white">
                                <h3 className="text-lg sm:text-1xl lg:text-2xl text-center tracking-wide">
                                    <b className="mb-3">
                                        Discover the Power of our Library{" "}
                                    </b>
                                    <br></br>
                                    <br></br>
                                    
                                    <span className="mt-5 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                                        {" "}
                                        Our Library is designed impact knowledge
                                        which has many range of contents,
                                        including scholarly journals, ebooks,
                                        videos, dissertations, and more, all
                                        accessible through a single,
                                        user-friendly platform
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
                                    <br></br>
                                    
                                    <span className="mt-5 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                                        {" "}
                                        Our E-Library is Clear, highly visual
                                        and easy-to-navigate which guides users
                                        to their research topic and books of
                                        choice
                                    </span>
                                </h3>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Slider;

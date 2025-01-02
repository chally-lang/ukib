import TextInput from "@/Components/TextInput";
import { Element } from "react-scroll";
import Button from "@/Components/Home/Button";


const Userletter = () => {
    //   const halfLength = Math.floor(faq.length / 2);

    return (
        <section>
            <Element name="userletter" className="relative">
                <div className="items-center container relative z-2 py-28">
                    <div>
                        <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p3">
                            Our Userletter Subscription
                        </h3>
                        <p className="body-1 max-lg:max-w-sm">
                            Wish to Get more Information and Update from our
                            Library. Subscribe to Our Userletter.
                        </p>
                    </div>
                    <div>
                        <div class="mt-5 grid grid-cols-12 gap-3">
                            <div class="col-span-8">
                                <TextInput placeholder="Type Your Email Here" className="mt-2 block w-full" />

                            </div>

                            <div class="col-span-4">
                                <Button> Subscribe</Button>
                            </div>

                           
                        </div>
                        
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Userletter;

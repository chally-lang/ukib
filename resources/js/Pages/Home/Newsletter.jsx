import TextInput from "@/Components/TextInput";
import { Element } from "react-scroll";
import Button from "@/Components/Home/Button";
import InputError from "@/Components/InputError";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";


const Newsletter = ({ status, success }) => {
    //   const halfLength = Math.floor(faq.length / 2);

    const {
        data,
        setData,
        post,
        errors,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        email: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("newsletter.store"));
    };

    return (
        <section>
            <Element name="newsletter" className="relative">
                <div className="items-center container relative z-2 py-28">
                    <div>
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
                        <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p3">
                            Our Newsletter Subscription
                        </h3>
                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Saved.
                            </p>
                        </Transition>
                        <p className="body-1 max-lg:max-w-sm">
                            Wish to Get more Information and Update from our
                            Library. Subscribe to Our Newsletter.
                        </p>
                    </div>
                    <div>
                        <div class="mt-5 grid grid-cols-12 gap-3">
                            <form
                                onSubmit={onSubmit}
                                className="w-full col-span-7 lg:col-span-7 t-6 space-y-6"
                            >
                                <div col>
                                    {/* <InputLabel htmlFor="email" value="Email" /> */}

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Type Your Email Here"
                                        className="mt-1 block w-full"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.email}
                                    />
                                </div>

                                <div class="col-span-4">
                                    <Button> Subscribe</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Newsletter;

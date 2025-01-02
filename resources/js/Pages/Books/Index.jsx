
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";

import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { faq } from "@/constants/index";
import FaqItem from "@/Components/FaqItem";

import faqLogo from "@/images/faq-logo.svg";



export default function Index({ success }) {
    const user = usePage().props.auth.user;

    const [open, setOpen] = useState(false);

    const halfLength = Math.floor(faq.length / 2);

    return (
        <AuthenticatedLayout
            header={
                <div className="grid grid-cols-5">
                    <div className="col-span-2">
                        <h2 className="font-semibold leading-tight text-gray-200 dark:text-gray-200">
                            User Book Shelve
                        </h2>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2 mr-10">
                        <a
                            href={route("user.index")}
                            className="bg-blue-950 rounded  text-sm text-nowrap px-3 py-3 text-gray-100 "
                        >
                            Check Subscribers
                        </a>
                    </div>
                </div>
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

            {/* SUB FORM */}

            {user.category === "un_subscribed" && (
                <section>
                    <div className="py-10">
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                                <div className="p-6 text-white dark:text-gray-100">
                                    <header>
                                        <h2 className="text-lg font-medium text-p1 dark:text-p1">
                                            Library Book Subscription
                                        </h2>

                                        <p className="mt-1 text-sm text-white">
                                            Welcome to Our E-library , a Unique
                                            Library of its Kind. 
                                            
                                        </p>

                                        <span className="pt-2 text-sm">
                                                Please Click on the Link below,
                                                and Subscribe To our LIbrary
                                                Subscriptions to View Library
                                                Books Subscription, The Admin
                                                will Activate your subscription
                                                immediately
                                            </span>
                                    </header>
                                    <div className="mt-6">
                                        <Link
                                            href={route("profile.edit")}
                                            as="button"
                                            className=" bg-s4  px-6 cursor-pointer py-2 
                                    rounded-md text-sm text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:bg-yellow-500 dark:focus:ring-offset-gray-800"
                                        >
                                            Subscription Link
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <div>
                <div className="py-1">
                    <div className="mx-auto max-w-7xl sm:px-3 lg:px-5">
                        <div className="overflow-hidden bg-s1 shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-2 text-gray-900 dark:text-gray-100">
                                <div className="container relative z-2 py-10">
                                    <div className="text-p1 font-bold mb-5">
                                        BOOK MENU LIST
                                        <div className="max-w-1/5">
                                            <hr className="border-cyan-500 mt-3"></hr>
                                        </div>
                                    </div>

                                    <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
                                </div>

                                {user.status === "de_activated" && (
                                    <div className="container relative z-2 py-10">
                                        <div className="text-sm text-p1  mb-5">
                                            <span>Your Book Subscription Was Successful, But Please wait for activation 
                                            Once Activation is Completed by the System,  Book list will Appear here.
                                            
                                            </span><br></br>
                                            <span>
                                                Wait for the Admin to Activate Your Library Status
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {user.status === "activated" && (
                                    <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
                                        <div className="container flex gap-10 max-lg:block">
                                            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
                                                <img
                                                    src={faqLogo}
                                                    alt="logo"
                                                    className="size-1/2"
                                                />
                                            </div>

                                            <div className="relative flex-1 pt-24">
                                                {faq
                                                    .slice(0, halfLength)
                                                    .map((item, index) => (
                                                        <FaqItem
                                                            key={item.id}
                                                            item={item}
                                                            index={index}
                                                        />
                                                    ))}
                                            </div>

                                            <div className="relative flex-1 lg:pt-24">
                                                {faq
                                                    .slice(halfLength)
                                                    .map((item, index) => (
                                                        <FaqItem
                                                            key={item.id}
                                                            item={item}
                                                            index={
                                                                halfLength +
                                                                index
                                                            }
                                                        />
                                                    ))}
                                            </div>
                                        </div>

                                        <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </AuthenticatedLayout>
    );
}

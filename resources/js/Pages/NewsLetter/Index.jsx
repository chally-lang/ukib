import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Button from "../../Components/Home/Button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import TextAreaInput from "@/Components/TextAreaInput";
import { Link, usePage } from "@inertiajs/react";
// import { Flowbite, Tabs } from "flowbite-react";
import { Alert, TabItem, theme, Flowbite } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { defaultTheme } from "tailwindcss/defaultTheme";
import { Card } from "flowbite-react";
import Pagination from "@/Components/Pagination"; 
import { BLOG_STATUS_TEXT_MAP, BLOG_STATUS_CLASS_MAP } from "@/constants";
import chevUp from "@/images/chevUp.svg";
import chevDown from "@/images/chevDown.svg";

export default function Index({ newsletter, queryParams = null, success }) {
    queryParams = queryParams || {};
    const searchFieldChanged = (email, value) => {
        if (value) {
            queryParams[email] = value;
        } else {
            delete queryParams[email];
        }

        router.get(route("newsletter.index"), queryParams);
    };

    const onKeyPress = (email, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(email, e.target.value);
    };

 


    const sortChanged = (email) => {
        if (email === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = email;
            queryParams.sort_direction = "asc";
        }
        router.get(route("newsletter.index"), queryParams);
    };

    const deleteNewsSub = (newsletter) => {
        if (!window.confirm("Do You Want to Delete This Subscription ?")) {
            return;
        }
        router.delete(route("newsletter.destroy", newsletter.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="grid grid-cols-4">
                    <div className="col-span-2">
                        <h2 className="font-semibold leading-tight text-gray-200 dark:text-gray-200">
                            News Letter Subscribers
                        </h2>
                    </div>
                    <div className="col-span-1"></div>
                    
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

            <div className="py-10">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-white dark:text-gray-100">
                            <h4 className="font-bold mb-7 text-p1">
                                Library / Newsletter Subscription
                            </h4>

                            <div className="pt-4 overflow-x-auto">
                                <Flowbite>
                                    <Tabs
                                        aria-label="Full width tabs"
                                        variant="pills"
                                    >
                                        <Tabs.Item
                                            active
                                            title="Blog Table View"
                                            icon={HiUserCircle}
                                        >
                                            <div>
                                                <span className="text-sm text-p1 dark:text-white">
                                                    Subcribers Emails, displayed in
                                                    Table Format
                                                    <hr className="border-cyan-500 mt-3"></hr>
                                                </span>
                                                
                                            </div>

                                            <div className="pt-7">
                                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <thead className="text-xs text-white uppercase bg-gra-s500 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                                        <tr className="text-nowrap text-p1">
                                                            <th
                                                                onClick={(e) =>
                                                                    sortChanged(
                                                                        "id"
                                                                    )
                                                                }
                                                                className="px-3 py-3 text-center"
                                                            >
                                                                <img
                                                                    src={chevUp}
                                                                    className="text-center"
                                                                />
                                                                ID
                                                                <img
                                                                    src={
                                                                        chevDown
                                                                    }
                                                                    className="text-center"
                                                                />
                                                            </th>
                                                            
                                                            <th
                                                                onClick={(e) =>
                                                                    sortChanged(
                                                                        "email"
                                                                    )
                                                                }
                                                                className="px-3 py-3"
                                                            >
                                                                Email Address
                                                            </th>
                                                            

                                                            <th
                                                                onClick={(e) =>
                                                                    sortChanged(
                                                                        "created_at"
                                                                    )
                                                                }
                                                                className="px-3 py-3"
                                                            >
                                                                Date
                                                            </th>
                                                            
                                                            <th className="px-3 py-3 text-right">
                                                                Actions
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <thead className="text-xs text-white uppercase bg-gra-s500 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                                        <tr className="text-nowrap text-p1">
                                                            <th className="px-3 py-3"></th>

                                                            <th className="px-3 py-3"></th>

                                                            <th className="px-3 py-3">
                                                                <TextInput
                                                                    className="w-full text-sm"
                                                                    placeholder="Search By Email"
                                                                    defaultValue={
                                                                        queryParams.email
                                                                    }
                                                                    onBlur={(
                                                                        e
                                                                    ) =>
                                                                        searchFieldChanged(
                                                                            "email",
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    onKeyPress={(
                                                                        e
                                                                    ) =>
                                                                        onKeyPress(
                                                                            "email",
                                                                            e
                                                                        )
                                                                    }
                                                                />
                                                            </th>
                                                            <th className="px-3 py-3">
                                                               
                                                            </th>

                                                            <th className="px-3 py-3">
                                                               
                                                            </th>

                                                            <th className="px-3 py-3"></th>

                                                            <th className="px-3 py-3"></th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        
                                                      
                                                        {newsletter.data.map(
                                                            (news_sub) => (
                                                                <tr
                                                                    key={
                                                                        news_sub.id
                                                                    }
                                                                    className="bg-s1 border-b text-white dark:bg-gray-800 dark:border-gray-700"
                                                                >
                                                                    <td className="px-3 py-2">
                                                                        {" "}
                                                                        {
                                                                            news_sub.id
                                                                        }
                                                                    </td>
                                                                    
                                                                    <td className="px-3 py-2 hover:underline text-nowrap">
                                                                        <Link
                                                                            
                                                                        >
                                                                            {
                                                                                news_sub.email
                                                                            }
                                                                        </Link>
                                                                    </td>
                                                                   
                                                                    <td className="px-3 py-2 text-nowrap">
                                                                        {" "}
                                                                        {
                                                                            news_sub.date
                                                                        }
                                                                    </td>

                                                                    
                                                                    <td className="px-3 py-2 ">
                                                                       

                                                                        <button
                                                                            onClick={(
                                                                                e
                                                                            ) =>
                                                                                deleteNewsSub(
                                                                                    news_sub
                                                                                )
                                                                            }
                                                                            className="font-medium text-red-600 hover:underline mx-1"
                                                                        >
                                                                            {" "}
                                                                            Delete
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}

                                                        
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* pagination */}
                                            <Pagination
                                                links={newsletter.meta.links}
                                            />
                                        </Tabs.Item>

                                       
                                       
                                    </Tabs>
                                </Flowbite>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

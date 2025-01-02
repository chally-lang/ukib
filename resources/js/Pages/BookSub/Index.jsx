import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Button from "@/Components/Home/Button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import TextAreaInput from "@/Components/TextAreaInput";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { faq } from "@/constants/index";
import FaqItem from "@/Components/FaqItem";
import PrimaryButton from "@/Components/PrimaryButton";
import faqLogo from "@/images/faq-logo.svg";

// import { Flowbite, Tabs } from "flowbite-react";
import { Alert, TabItem, theme, Flowbite } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { defaultTheme } from "tailwindcss/defaultTheme";
import { Card } from "flowbite-react";
import Pagination from "@/Components/Pagination";
import {
    BOOKUSER_STATUS_TEXT_MAP,
    BOOKUSER_STATUS_CLASS_MAP,
} from "@/constants";
import chevUp from "@/images/chevUp.svg";
import chevDown from "@/images/chevDown.svg";

export default function Index({ booksub, queryParams = null, success }) {
    const user = usePage().props.auth.user;

    const role = booksub.role;
    // form
    const { data, setData, post, errors, processing } = useForm({
        name: user.name,
        sub_category: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("booksub.store"));
    };
    const [open, setOpen] = useState(false);

    const halfLength = Math.floor(faq.length / 2);
    ///// for the book menuslider

    //search
    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("booksub.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("booksub.index"), queryParams);
    };

    const deleteBookSub = (booksub) => {
        if (!window.confirm("Do You Want to Delete This USer Subscription ?")) {
            return;
        }
        router.delete(route("booksub.destroy", booksub.id));
    };

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
                            href="#all_subscribers"
                            className="bg-blue-950 rounded  text-sm text-nowrap px-3 py-3 text-gray-100 "
                        >
                            All Library Subscribers
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
            <section>
                <div className="py-10">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-white dark:text-gray-100">
                                <header>
                                    <h2 className="text-lg font-medium text-p1 dark:text-p1">
                                        Book Subscription Form
                                    </h2>

                                    <p className="mt-1 text-sm text-white">
                                        Subscribe to be able view our latest
                                        books. Select and submit your
                                        Subscription, The Admin will Activate
                                        your subscription immediately
                                    </p>
                                </header>

                                <form
                                    onSubmit={submit}
                                    className="mt-10 space-y-6"
                                >
                                    <div>
                                        <InputLabel
                                            className="text-p1 mb-3"
                                            htmlFor="sub_category"
                                            value="Select Subscription"
                                        />

                                        <SelectInput
                                            id="sub_category"
                                            name="sub_category"
                                            onChange={(e) =>
                                                setData(
                                                    "sub_category",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-2 w-full text-sm text-white bg-cyan-900"
                                        >
                                            <option value="">
                                                Select Subscription Status
                                            </option>
                                            <option value="subscribed">
                                                Subscribe
                                            </option>
                                        </SelectInput>

                                        <InputError
                                            message={errors.sub_category}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <PrimaryButton disabled={processing}>
                                            Subscribe Now
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* {!role === 3 && (
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}

            {/* BOOK MENU */}
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
                                                    index={halfLength + index}
                                                />
                                            ))}
                                    </div>
                                </div>

                                <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SUBSCRIBERS TABLE */}
            <section id="all_subscribers">
                <div className="py-10">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-white dark:text-gray-100">
                                <h4 className="font-medium mb-7 text-p1">
                                    Library Books Subcriptions
                                </h4>

                                <div className="pt-4 overflow-x-auto">
                                    <Flowbite>
                                        <Tabs
                                            aria-label="Full width tabs"
                                            variant="pills"
                                        >
                                            <Tabs.Item
                                                active
                                                title="Library Subscribers"
                                                icon={HiUserCircle}
                                            >
                                                <div>
                                                    <span className="text-sm text-p1 dark:text-white">
                                                        List of Users Who
                                                        Already Subscribed to
                                                        the E-libray
                                                        <hr className="border-cyan-500 mt-3"></hr>
                                                    </span>
                                                </div>

                                                <div className="pt-7">
                                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                        <thead className="text-xs text-white uppercase bg-gra-s500 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                                            <tr className="text-nowrap text-p1">
                                                                <th
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        sortChanged(
                                                                            "id"
                                                                        )
                                                                    }
                                                                    className="px-3 py-3 text-center"
                                                                >
                                                                    <img
                                                                        src={
                                                                            chevUp
                                                                        }
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
                                                                <th className="px-3 py-3">
                                                                    Photo
                                                                </th>
                                                                <th
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        sortChanged(
                                                                            "name"
                                                                        )
                                                                    }
                                                                    className="px-3 py-3"
                                                                >
                                                                    Users Name
                                                                </th>
                                                                <th className="px-3 py-3">
                                                                    Status
                                                                </th>

                                                                <th
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        sortChanged(
                                                                            "created_at"
                                                                        )
                                                                    }
                                                                    className="px-3 py-3"
                                                                >
                                                                    Date
                                                                </th>
                                                                {/* <th className="px-3 py-3">
                                                                Sub By
                                                            </th> */}
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
                                                                        placeholder="Search By User Names"
                                                                        defaultValue={
                                                                            queryParams.name
                                                                        }
                                                                        onBlur={(
                                                                            e
                                                                        ) =>
                                                                            searchFieldChanged(
                                                                                "name",
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                        }
                                                                        onKeyPress={(
                                                                            e
                                                                        ) =>
                                                                            onKeyPress(
                                                                                "name",
                                                                                e
                                                                            )
                                                                        }
                                                                    />
                                                                </th>
                                                                <th className="px-3 py-3">
                                                                    <SelectInput
                                                                        className="w-full text-sm"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            searchFieldChanged(
                                                                                "status",
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                        }
                                                                        defaultValue={
                                                                            queryParams.status
                                                                        }
                                                                    >
                                                                        <option value="">
                                                                            Search
                                                                            By
                                                                            Status
                                                                        </option>
                                                                        <option value="activated">
                                                                            Activated
                                                                        </option>
                                                                        <option value="de_activated">
                                                                            De
                                                                            Activated
                                                                        </option>
                                                                    </SelectInput>
                                                                </th>

                                                                <th className="px-3 py-3"></th>

                                                                <th className="px-3 py-3"></th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            {booksub.data.map(
                                                                (booksub) => (
                                                                    <tr
                                                                        key={
                                                                            booksub.id
                                                                        }
                                                                        className="bg-s1 border-b text-white dark:bg-gray-800 dark:border-gray-700"
                                                                    >
                                                                        <td className="px-3 py-2">
                                                                            {" "}
                                                                            {
                                                                                booksub.id
                                                                            }
                                                                        </td>
                                                                        <td className="px-3 py-2">
                                                                            <img
                                                                                src={
                                                                                    booksub
                                                                                        .createdBy
                                                                                        .image_path
                                                                                }
                                                                                style={{
                                                                                    width: 60,
                                                                                }}
                                                                            />
                                                                        </td>
                                                                        <td className="px-3 py-2 hover:underline text-nowrap">
                                                                            <Link
                                                                                href={route(
                                                                                    "booksub.edit",
                                                                                    booksub.id
                                                                                )}
                                                                            >
                                                                                {
                                                                                    booksub.name
                                                                                    // .createdBy
                                                                                    // .name
                                                                                }
                                                                            </Link>
                                                                        </td>
                                                                        <td className="px-3 py-2 ">
                                                                            {" "}
                                                                            <span
                                                                                className={
                                                                                    "px-2 py-1 rounded text-nowrap text-gray-100 " +
                                                                                    BOOKUSER_STATUS_CLASS_MAP[
                                                                                        booksub
                                                                                            .status
                                                                                    ]
                                                                                }
                                                                            >
                                                                                {
                                                                                    BOOKUSER_STATUS_TEXT_MAP[
                                                                                        booksub
                                                                                            .status
                                                                                    ]
                                                                                }
                                                                            </span>
                                                                        </td>
                                                                        <td className="px-3 py-2 text-nowrap">
                                                                            {" "}
                                                                            {
                                                                                booksub.created_at
                                                                            }
                                                                        </td>

                                                                        {/* <td className="px-3 py-2">
                                                                        {
                                                                            booksub
                                                                                .createdBy
                                                                                .name
                                                                        }
                                                                    </td> */}
                                                                        <td className="px-3 py-2 ">
                                                                            <Link
                                                                                href={route(
                                                                                    "booksub.edit",
                                                                                    booksub.id
                                                                                )}
                                                                                className="font-medium text-blue-500 hover:underline mx-1"
                                                                            >
                                                                                {" "}
                                                                                Edit
                                                                            </Link>

                                                                            <button
                                                                                onClick={(
                                                                                    e
                                                                                ) =>
                                                                                    deleteBookSub(
                                                                                        booksub
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
                                                    links={booksub.meta.links}
                                                />
                                            </Tabs.Item>

                                            <Tabs.Item
                                                title="Create New BookSub"
                                                icon={HiClipboardList}
                                            >
                                                <hr className="border-cyan-500"></hr>
                                                <div className="py-5">
                                                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                                                        <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                                                            <div className="p-6 text-white dark:text-gray-100">
                                                                <h4 className="text-sm h6 max-md:h5 mb-7 text-p1">
                                                                    Create News
                                                                </h4>

                                                                <form
                                                                // onSubmit={
                                                                //     onSubmit
                                                                // }
                                                                >
                                                                    <div className="w-full content-center items-center pb-7 justify-between">
                                                                        <div className=" grid grid-cols-12 items-center gap-3 pb-7 justify-between">
                                                                            <div className="w-full col-span-6 lg:col-span-6">
                                                                                <InputLabel
                                                                                    className="text-p1 mb-3"
                                                                                    htmlFor="image_path"
                                                                                    value="News Image "
                                                                                />
                                                                                <TextInput
                                                                                    id="image_path"
                                                                                    type="file"
                                                                                    name="image_path"
                                                                                    className="mt-2 block w-full text-sm text-white bg-cyan-900"
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        setData(
                                                                                            "image_path",
                                                                                            e
                                                                                                .target
                                                                                                .files[0]
                                                                                        )
                                                                                    }
                                                                                />
                                                                                <InputError
                                                                                    message={
                                                                                        errors.image_path
                                                                                    }
                                                                                    className="mt-2"
                                                                                />
                                                                            </div>
                                                                            <div className="w-full col-span-1 lg:col-span-1"></div>

                                                                            <div className="w-full col-span-5 lg:col-span-5">
                                                                                <div className="w-full mb-7">
                                                                                    <InputLabel
                                                                                        className="text-p1"
                                                                                        htmlFor="status"
                                                                                        value="Select News Status "
                                                                                    />

                                                                                    <SelectInput
                                                                                        id="status"
                                                                                        name="status"
                                                                                        onChange={(
                                                                                            e
                                                                                        ) =>
                                                                                            setData(
                                                                                                "status",
                                                                                                e
                                                                                                    .target
                                                                                                    .value
                                                                                            )
                                                                                        }
                                                                                        className="mt-2 w-full text-sm text-white bg-cyan-900"
                                                                                    >
                                                                                        <option value="">
                                                                                            Select
                                                                                            News
                                                                                            Status
                                                                                        </option>
                                                                                        <option value="published">
                                                                                            Publish
                                                                                        </option>
                                                                                        <option value="un_Published">
                                                                                            Un
                                                                                            Publish
                                                                                        </option>
                                                                                        <option value="in_progress">
                                                                                            In
                                                                                            Progress
                                                                                        </option>
                                                                                    </SelectInput>

                                                                                    <InputError
                                                                                        message={
                                                                                            errors.status
                                                                                        }
                                                                                        className="mt-2"
                                                                                    />
                                                                                </div>

                                                                                <div>
                                                                                    <InputLabel
                                                                                        className="text-p1"
                                                                                        htmlFor="category"
                                                                                        value="Select Note Category "
                                                                                    />

                                                                                    <SelectInput
                                                                                        id="category"
                                                                                        name="category"
                                                                                        onChange={(
                                                                                            e
                                                                                        ) =>
                                                                                            setData(
                                                                                                "category",
                                                                                                e
                                                                                                    .target
                                                                                                    .value
                                                                                            )
                                                                                        }
                                                                                        className="mt-2 w-full text-sm text-white bg-cyan-900"
                                                                                    >
                                                                                        <option value="">
                                                                                            Select
                                                                                            News
                                                                                            Category
                                                                                        </option>
                                                                                        <option value="News">
                                                                                            News
                                                                                        </option>
                                                                                        <option value="Articles">
                                                                                            Articles
                                                                                        </option>
                                                                                        <option value="Author_&_Publishers">
                                                                                            Author
                                                                                            &
                                                                                            Publishers
                                                                                            Post
                                                                                        </option>
                                                                                        <option value="Tips_&_Tricks">
                                                                                            Tips
                                                                                            &
                                                                                            Trick
                                                                                            Post
                                                                                        </option>
                                                                                        <option value="Reading_List">
                                                                                            Reading_List
                                                                                        </option>
                                                                                        <option value="Promotional_Post">
                                                                                            Promotional
                                                                                            Post
                                                                                        </option>
                                                                                    </SelectInput>

                                                                                    <InputError
                                                                                        message={
                                                                                            errors.category
                                                                                        }
                                                                                        className="mt-2"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className=" grid grid-cols-12 items-center pb-7 justify-between">
                                                                            <div className="w-full col-span-7 lg:col-span-7">
                                                                                <InputLabel
                                                                                    className="text-p1 mb-3"
                                                                                    htmlFor="title"
                                                                                    value="News Title "
                                                                                />
                                                                                <TextInput
                                                                                    id="title"
                                                                                    type="text"
                                                                                    isFocused={
                                                                                        true
                                                                                    }
                                                                                    name="title"
                                                                                    value={
                                                                                        data.title
                                                                                    }
                                                                                    className="mt-2 block w-full text-sm"
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        setData(
                                                                                            "title",
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                />
                                                                                <InputError
                                                                                    message={
                                                                                        errors.title
                                                                                    }
                                                                                    className="mt-2"
                                                                                />
                                                                            </div>
                                                                            <div className="w-full col-span-1 lg:col-span-1"></div>
                                                                            <div className="w-full col-span-4 lg:col-span-4">
                                                                                <InputLabel
                                                                                    className="text-p1"
                                                                                    htmlFor="date"
                                                                                    value="News Date "
                                                                                />

                                                                                <TextInput
                                                                                    id="news_date"
                                                                                    type="date"
                                                                                    name="date"
                                                                                    value={
                                                                                        data.date
                                                                                    }
                                                                                    className="mt-2 block w-full text-sm text-white bg-cyan-900"
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        setData(
                                                                                            "date",
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                />

                                                                                <InputError
                                                                                    message={
                                                                                        errors.date
                                                                                    }
                                                                                    className="mt-2"
                                                                                />
                                                                            </div>
                                                                        </div>

                                                                        <div className=" grid grid-cols-12 items-center gap-3 pb-7 justify-between">
                                                                            <div className="w-full col-span-9 lg:col-span-9">
                                                                                <InputLabel
                                                                                    className="text-p1"
                                                                                    htmlFor="paragraph"
                                                                                    value="News Description"
                                                                                />

                                                                                <TextAreaInput
                                                                                    id="paragraph"
                                                                                    name="paragraph"
                                                                                    value={
                                                                                        data.paragraph
                                                                                    }
                                                                                    className="mt-3 block w-full"
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        setData(
                                                                                            "paragraph",
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                />
                                                                                <InputError
                                                                                    message={
                                                                                        errors.paragraph
                                                                                    }
                                                                                    className="mt-2"
                                                                                />
                                                                            </div>

                                                                            <div className="mt-5 ml-2 w-full col-span-3 lg:col-span-3">
                                                                                <div className="px-1">
                                                                                    <Button className="wrap">
                                                                                        Submit
                                                                                    </Button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tabs.Item>
                                        </Tabs>
                                    </Flowbite>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}

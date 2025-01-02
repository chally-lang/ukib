import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Button from "../../Components/Home/Button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
// import { Flowbite, Tabs } from "flowbite-react";
import { Alert, TabItem, theme, Flowbite } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { defaultTheme } from "tailwindcss/defaultTheme";
import { Card } from "flowbite-react";
import Pagination from "@/Components/Pagination";
import { BOOKUSER_STATUS_TEXT_MAP, BOOKUSER_STATUS_CLASS_MAP } from "@/constants";

export default function Index({ booksub, queryParams = null }) {
    queryParams = queryParams || {};
    const searchFieldChanged = (title, value) => {
        if (value) {
            queryParams[title] = value;
        } else {
            delete queryParams[title];
        }

        router.get(route("booksub.index"), queryParams);
    };

    const onKeyPress = (title, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(title, e.target.value);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    BookSub / News Page
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-10">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-white dark:text-gray-100">
                            <h4 className="text-sm h6 max-md:h5 mb-7 text-p1">
                                BookSubs / News
                            </h4>

                            <div className="pt-4 overflow-x-auto">
                                <Flowbite>
                                    <Tabs
                                        aria-label="Full width tabs"
                                        variant="pills"
                                    >
                                        <Tabs.Item
                                            active
                                            title="BookSub Table View"
                                            icon={HiUserCircle}
                                        >
                                            <div>
                                                <span className="font-medium text-p1 dark:text-white">
                                                    News/BookSubs, displayed in
                                                    Table Format
                                                </span>
                                                <div className="px-1 py-4">
                                                    <p className="py-3 font-medium text-gray-300 dark:text-white">
                                                        Select Card Category
                                                        Below displayed in GRID
                                                        Format
                                                    </p>

                                                    <SelectInput
                                                        className="w-full text-sm text-white bg-cyan-900"
                                                        onChange={(e) =>
                                                            searchFieldChanged(
                                                                "category",
                                                                e.target.value
                                                            )
                                                        }
                                                        defaultValue={
                                                            queryParams.category
                                                        }
                                                    >
                                                        <option value="">
                                                            Select News Category
                                                        </option>
                                                        <option value="News">
                                                            News
                                                        </option>
                                                        <option value="Articles">
                                                            Articles
                                                        </option>
                                                        <option value="Author_&_Publishers">
                                                            Author & Publishers
                                                            Post
                                                        </option>
                                                        <option value="Tips_&_Tricks">
                                                            Tips & Trick Post
                                                        </option>
                                                        <option value="Reading_List">
                                                            Reading_List
                                                        </option>
                                                        <option value="Promotional_Post">
                                                            Promotional Post
                                                        </option>
                                                    </SelectInput>
                                                </div>
                                            </div>

                                            <div className="pt-7">
                                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <thead className="text-xs text-white uppercase bg-gra-s500 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                                        <tr className="text-nowrap text-p1">
                                                            <th className="px-3 py-3">
                                                                ID
                                                            </th>
                                                            <th className="px-3 py-3">
                                                                Photo
                                                            </th>
                                                            <th className="px-3 py-3">
                                                                News Title
                                                            </th>
                                                            <th className="px-3 py-3">
                                                                Status
                                                            </th>

                                                            <th className="px-3 py-3">
                                                                Date
                                                            </th>
                                                            <th className="px-3 py-3">
                                                                Created By
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
                                                                    placeholder="Search By BookSub Title"
                                                                    defaultValue={
                                                                        queryParams.title
                                                                    }
                                                                    onBlur={(
                                                                        e
                                                                    ) =>
                                                                        searchFieldChanged(
                                                                            "title",
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    onKeyPress={(
                                                                        e
                                                                    ) =>
                                                                        onKeyPress(
                                                                            "title",
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
                                                                        Select
                                                                        Status
                                                                    </option>
                                                                    <option value="published">
                                                                        Published
                                                                    </option>
                                                                    <option value="un_Published">
                                                                        Un
                                                                        Published
                                                                    </option>
                                                                    <option value="in_progress">
                                                                        In
                                                                        Progress
                                                                    </option>
                                                                </SelectInput>
                                                            </th>

                                                            <th className="px-3 py-3">
                                                                <SelectInput
                                                                    className="w-full text-sm text-white bg-cyan-900"
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        searchFieldChanged(
                                                                            "category",
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    defaultValue={
                                                                        queryParams.category
                                                                    }
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
                                                                        Author &
                                                                        Publishers
                                                                        Post
                                                                    </option>
                                                                    <option value="Tips_&_Tricks">
                                                                        Tips &
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
                                                                                booksub.image_path
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
                                                                                booksub.title
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

                                                                    <td className="px-3 py-2">
                                                                        {
                                                                            booksub
                                                                                .createdBy
                                                                                .name
                                                                        }
                                                                    </td>
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

                                                                        <Link
                                                                            href={route(
                                                                                "booksub.destroy",
                                                                                booksub.id
                                                                            )}
                                                                            className="font-medium text-red-600 hover:underline mx-1"
                                                                        >
                                                                            {" "}
                                                                            Delete
                                                                        </Link>
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
                                            active
                                            title="BookSub Cards"
                                            icon={MdDashboard}
                                        >
                                            <span className="font-medium text-p1 dark:text-white">
                                                News/BookSubs displayed in GRID AND
                                                CARD format
                                            </span>

                                            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
                                                {booksub.data.map((booksubnews) => (
                                                    <>
                                                        <a
                                                            href="#"
                                                            className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
                                                        >
                                                            <img
                                                                className="h-60 object-cover"
                                                                src={
                                                                    booksubnews.image_path
                                                                }
                                                                alt=""
                                                            />
                                                            <div
                                                                className="px-6 py-4"
                                                                key={
                                                                    booksubnews.id
                                                                }
                                                            >
                                                                <div className="flex">
                                                                    <p className="mb-4 text-sm font-semibold uppercase text-p1">
                                                                        {
                                                                            booksubnews.category
                                                                        }
                                                                    </p>

                                                                    <span
                                                                        className={
                                                                            "ml-3 lg:ml-10 px-1 py-1 mb-3 rounded text-nowrap text-gray-100 " +
                                                                            BOOKUSER_STATUS_CLASS_MAP[
                                                                                booksubnews
                                                                                    .status
                                                                            ]
                                                                        }
                                                                    >
                                                                        {
                                                                            BOOKUSER_STATUS_TEXT_MAP[
                                                                                booksubnews
                                                                                    .status
                                                                            ]
                                                                        }
                                                                    </span>
                                                                </div>

                                                                <p className="mb-4 text-xl font-semibold">
                                                                    <Link
                                                                        href={route(
                                                                            "booksub.show",
                                                                            booksubnews.id
                                                                        )}
                                                                    >
                                                                        {
                                                                            booksubnews.title
                                                                        }
                                                                    </Link>
                                                                   
                                                                </p>
                                                                <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                                                                    {
                                                                        booksubnews.paragraph
                                                                    }
                                                                </p>
                                                                <div className="flex">
                                                                    <img
                                                                        src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPLaceholder%20Image%20Secondary.svg?alt=media&token=b8276192-19ff-4dd9-8750-80bc5f7d6844"
                                                                        alt=""
                                                                        className="mr-4 h-10 w-10 rounded-full object-cover"
                                                                    />
                                                                    <div className="flex flex-col">
                                                                        <h6 className="text-base font-bold">
                                                                            {
                                                                                booksubnews
                                                                                    .createdBy
                                                                                    .name
                                                                            }
                                                                        </h6>
                                                                        <div className="flex flex-col lg:flex-row">
                                                                            <p className="text-sm text-gray-500">
                                                                                {
                                                                                    booksubnews.created_at
                                                                                }
                                                                            </p>
                                                                            <p className="mx-2 hidden text-sm text-gray-500 lg:flex">
                                                                                -
                                                                            </p>
                                                                            <p className="text-sm mt-2">
                                                                                <Link
                                                                                    // href={route(
                                                                                    //     "booksubnews.edit",
                                                                                    //     booksubnews.id
                                                                                    // )}
                                                                                    className="mx-3 bg-blue-800 rounded px-2 py-1 text-nowrap font-medium text-gray-100 "
                                                                                >
                                                                                    Edit
                                                                                </Link>

                                                                                <Link
                                                                                    // href={route(
                                                                                    //     "booksubnews.destroy",
                                                                                    //     booksubnews.id
                                                                                    // )}
                                                                                    className="mx-3 bg-red-800 rounded px-2 py-1 text-nowrap font-medium text-gray-200"
                                                                                >
                                                                                    Delete
                                                                                </Link>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </>
                                                ))}
                                            </div>

                                            {/* <Pagination
                                                links={booksub.meta.links}
                                            /> */}
                                        </Tabs.Item>

                                        <Tabs.Item
                                            title="Create New BookSub"
                                            icon={HiClipboardList}
                                        >
                                            <span className="font-medium text-gray-800 dark:text-white">
                                                Create New BookSub HERE
                                            </span>
                                            . Clicking another tab will toggle
                                            the visibility of this one for the
                                            next. The tab JavaScript swaps
                                            classes to control the content
                                            visibility and styling.
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

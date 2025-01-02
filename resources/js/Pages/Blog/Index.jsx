import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Button from "@/Components/Home/Button";
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

import Pagination from "@/Components/Pagination"; 
import { BLOG_STATUS_TEXT_MAP, BLOG_STATUS_CLASS_MAP } from "@/constants";
import chevUp from "@/images/chevUp.svg";
import chevDown from "@/images/chevDown.svg";

export default function Index({ blogs, queryParams = null, success }) {
    queryParams = queryParams || {};
    const searchFieldChanged = (title, value) => {
        if (value) {
            queryParams[title] = value;
        } else {
            delete queryParams[title];
        }

        router.get(route("blog.index"), queryParams);
    };

    const onKeyPress = (title, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(title, e.target.value);
    };

    const { data, setData, post, errors, reset } = useForm({
        image_path: "",
        title: "",
        paragraph: "",
        status: "",
        category: "",
        date: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        // post(route("blog.store"));
        post(route("blog.store"), {
            onFinish: () => reset("title", "paragraph", "status", "category"),
        });
    };

    const sortChanged = (title) => {
        if (title === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = title;
            queryParams.sort_direction = "asc";
        }
        router.get(route("blog.index"), queryParams);
    };

    const deleteBlog = (blog) => {
        if (!window.confirm("Do You Want to Delete This News ?")) {
            return;
        }
        router.delete(route("blog.destroy", blog.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="grid grid-cols-4">
                    <div className="col-span-2">
                        <h2 className="font-semibold leading-tight text-gray-200 dark:text-gray-200">
                            Blog / News Page
                        </h2>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-1 mr-10">
                        <Link
                            href={route("blog.create")}
                            className="bg-blue-950 rounded px-3 py-3 text-nowrap text-sm text-gray-100 "
                        >
                            Create New
                        </Link>
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

            <div className="py-10">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-white dark:text-gray-100">
                            <h4 className="font-bold mb-7 text-p1">
                                Blogs / News
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
                                                    News/Blogs, displayed in
                                                    Table Format
                                                    <hr className="border-cyan-500 mt-3"></hr>
                                                </span>
                                                <div className="px-1 py-4">
                                                    <p className="py-3 text-sm text-gray-300 dark:text-white">
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
                                                            <th className="px-3 py-3">
                                                                Photo
                                                            </th>
                                                            <th
                                                                onClick={(e) =>
                                                                    sortChanged(
                                                                        "title"
                                                                    )
                                                                }
                                                                className="px-3 py-3"
                                                            >
                                                                News Title
                                                            </th>
                                                            <th className="px-3 py-3">
                                                                Status
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
                                                                    placeholder="Search By Blog Title"
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
                                                        
                                                      
                                                        {blogs.data.map(
                                                            (blog) => (
                                                                <tr
                                                                    key={
                                                                        blog.id
                                                                    }
                                                                    className="bg-s1 border-b text-white dark:bg-gray-800 dark:border-gray-700"
                                                                >
                                                                    <td className="px-3 py-2">
                                                                        {" "}
                                                                        {
                                                                            blog.id
                                                                        }
                                                                    </td>
                                                                    <td className="px-3 py-2">
                                                                        <img
                                                                            src={
                                                                                blog.image_path
                                                                            }
                                                                            style={{
                                                                                width: 60,
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td className="px-3 py-2 hover:underline text-nowrap">
                                                                        <Link
                                                                            href={route(
                                                                                "blog.edit",
                                                                                blog.id
                                                                            )}
                                                                        >
                                                                            {
                                                                                blog.title
                                                                            }
                                                                        </Link>
                                                                    </td>
                                                                    <td className="px-3 py-2 ">
                                                                        {" "}
                                                                        <span
                                                                            className={
                                                                                "px-2 py-1 rounded text-nowrap text-gray-100 " +
                                                                                BLOG_STATUS_CLASS_MAP[
                                                                                    blog
                                                                                        .status
                                                                                ]
                                                                            }
                                                                        >
                                                                            {
                                                                                BLOG_STATUS_TEXT_MAP[
                                                                                    blog
                                                                                        .status
                                                                                ]
                                                                            }
                                                                        </span>
                                                                    </td>
                                                                    <td className="px-3 py-2 text-nowrap">
                                                                        {" "}
                                                                        {
                                                                            blog.created_at
                                                                        }
                                                                    </td>

                                                                    <td className="px-3 py-2">
                                                                        {
                                                                            blog
                                                                                .createdBy
                                                                                .name
                                                                        }
                                                                    </td>
                                                                    <td className="px-3 py-2 ">
                                                                        <Link
                                                                            href={route(
                                                                                "blog.edit",
                                                                                blog.id
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
                                                                                deleteBlog(
                                                                                    blog
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
                                                links={blogs.meta.links}
                                            />
                                        </Tabs.Item>

                                        <Tabs.Item
                                            active
                                            title="Blog Cards"
                                            icon={MdDashboard}
                                        >
                                            <span className="text-sm font-medium text-p1 dark:text-white">
                                                News/Blogs displayed in GRID AND
                                                CARD format
                                                <hr className="border-cyan-500 mt-3"></hr>
                                            </span>

                                            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
                                                {blogs.data.map((blog) => (
                                                    <>
                                                        <div className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0">
                                                            <img
                                                                className="h-40 object-cover"
                                                                src={
                                                                    blog.image_path
                                                                }
                                                                alt=""
                                                            />
                                                            <div
                                                                className="px-3 py-2"
                                                                key={blog.id}
                                                            >
                                                                <div className="flex">
                                                                    <p className="mb-2 text-sm font-semibold uppercase text-p1">
                                                                        {
                                                                            blog.category
                                                                        }
                                                                    </p>

                                                                    <span
                                                                        className={
                                                                            "text-sm ml-6 lg:ml-10 px-1 py-1 mb-3 rounded text-nowrap text-gray-100 " +
                                                                            BLOG_STATUS_CLASS_MAP[
                                                                                blog
                                                                                    .status
                                                                            ]
                                                                        }
                                                                    >
                                                                        {
                                                                            BLOG_STATUS_TEXT_MAP[
                                                                                blog
                                                                                    .status
                                                                            ]
                                                                        }
                                                                    </span>
                                                                </div>

                                                                <p className="mb-4 text-sm font-semibold">
                                                                    <Link
                                                                        href={route(
                                                                            "blog.edit",
                                                                            blog.id
                                                                        )}
                                                                    >
                                                                        {
                                                                            blog.title
                                                                        }
                                                                    </Link>
                                                                </p>
                                                                <p className="mb-3 text-justify text-sm text-gray-500 lg:mb-3">
                                                                    {
                                                                        blog.paragraph
                                                                    }
                                                                </p>
                                                                <div className="flex">
                                                                    {/* <img
                                                                        src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPLaceholder%20Image%20Secondary.svg?alt=media&token=b8276192-19ff-4dd9-8750-80bc5f7d6844"
                                                                        alt=""
                                                                        className="mr-4 h-10 w-10 rounded-full object-cover"
                                                                    /> */}
                                                                    <div className="flex flex-col">
                                                                        <div className="flex flex-row gap-5">
                                                                            <h6 className="text-sm font-bold">
                                                                                {/* {
                                                                                blognews
                                                                                    .createdBy
                                                                                    .name
                                                                            } */}
                                                                                Administrator
                                                                            </h6>
                                                                            <p className="text-sm text-gray-500">
                                                                                {
                                                                                    blog.created_at
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                        <div className="flex flex-col lg:flex-row">
                                                                            {/* <p className="mx-2 hidden text-sm text-gray-500 lg:flex">
                                                                                -
                                                                            </p> */}
                                                                            <p className="text-sm mt-2">
                                                                                <Link
                                                                                    href={route(
                                                                                        "blog.edit",
                                                                                        blog.id
                                                                                    )}
                                                                                    className="mx-3 bg-blue-800 rounded px-2 py-1 text-nowrap font-medium text-gray-100 "
                                                                                >
                                                                                    Edit
                                                                                </Link>

                                                                                <button
                                                                                    onClick={(
                                                                                        e
                                                                                    ) =>
                                                                                        deleteBlog(
                                                                                            blog
                                                                                        )
                                                                                    }
                                                                                    className="button mx-3 bg-red-800 rounded px-2 py-1 text-nowrap font-medium text-gray-200"
                                                                                >
                                                                                    {" "}
                                                                                    Delete
                                                                                </button>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ))}
                                            </div>

                                            {/* <Pagination
                                                links={blogs.meta.links}
                                            /> */}
                                        </Tabs.Item>

                                        <Tabs.Item
                                            title="Create New Blog"
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
                                                                onSubmit={
                                                                    onSubmit
                                                                }
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
        </AuthenticatedLayout>
    );
}

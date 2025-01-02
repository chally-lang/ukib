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
import { defaultTheme } from "tailwindcss/defaultTheme";
import { Card } from "flowbite-react";
import Pagination from "@/Components/Pagination";
import { USER_STATUS_TEXT_MAP, USER_STATUS_CLASS_MAP } from "@/constants";
import chevUp from '@/images/chevUp.svg';
import chevDown from "@/images/chevDown.svg";

export default function Index({ users, queryParams = null, success }) {
    queryParams = queryParams || {};
    const searchFieldChanged = (title, value) => {
        if (value) {
            queryParams[title] = value;
        } else {
            delete queryParams[title];
        }

        router.get(route("user.index"), queryParams);
    };

    const onKeyPress = (title, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(title, e.target.value);
    };
    const user = usePage().props.auth.user;

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
        // post(route("user.store"));
        post(route("user.store"), {
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
        router.get(route("user.index"), queryParams);
    };

    const deleteUser = (user) => {
        if (!window.confirm("Do You Want to Delete This User ?")) {
            return;
        }
        router.delete(route("user.destroy", user.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="grid grid-cols-4">
                    <div className="col-span-2">
                        <h2 className="font-semibold leading-tight text-gray-200 dark:text-gray-200">
                            Library Users
                        </h2>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-1 mr-10">
                        {/* <Link
                            href={route("user.create")}
                            className="bg-blue-950 rounded px-3 py-3 text-nowrap font-medium text-gray-100 "
                        >
                            Create User
                        </Link> */}
                    </div>
                </div>
            }
        >
            <Head title="Users" />

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
                            <h4 className="font-medium mb-3 text-p1">
                                Library Users{" "}
                            </h4>
                            <hr className="border-cyan-500 mt-1"></hr>

                            <div></div>
                            <div className="pt-4 overflow-x-auto">
                                <Flowbite>
                                    <Tabs
                                        aria-label="Full width tabs"
                                        variant="pills"
                                    >
                                        <Tabs.Item
                                            active
                                            title="User Table View"
                                            icon={HiUserCircle}
                                        >
                                            <div>
                                                <span className="text-sm text-p1 dark:text-white">
                                                    Library Users displayed in
                                                    Table Format
                                                    <hr className="border-cyan-500 mt-3"></hr>
                                                </span>

                                                <div className="px-1 py-4">
                                                    <p className="text-sm py-3  text-gray-300 dark:text-white">
                                                        Search Users By Category
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
                                                            Select User Category
                                                        </option>
                                                        <option value="subscribed">
                                                            Subscribed
                                                        </option>
                                                        <option value="un_subscribed">
                                                            UnSubscribed
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
                                                                User Name
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
                                                                Email
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
                                                                    placeholder="Search By User Name"
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
                                                                        Select
                                                                        Status
                                                                    </option>
                                                                    <option value="activated">
                                                                        Activated
                                                                    </option>
                                                                    <option value="de_activated">
                                                                        Deactivated
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
                                                                        User
                                                                        Category
                                                                    </option>
                                                                    <option value="subscribed">
                                                                        Subscribed
                                                                    </option>
                                                                    <option value="un_subscribed">
                                                                        UnSubscribed
                                                                    </option>
                                                                </SelectInput>
                                                            </th>

                                                            <th className="px-3 py-3"></th>

                                                            <th className="px-3 py-3"></th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {users.data.map(
                                                            (user) => (
                                                                <tr
                                                                    key={
                                                                        user.id
                                                                    }
                                                                    className="bg-s1 border-b text-white dark:bg-gray-800 dark:border-gray-700"
                                                                >
                                                                    <td className="px-3 py-2">
                                                                        {
                                                                            user.id
                                                                        }
                                                                    </td>
                                                                    <td className="px-3 py-2">
                                                                        <img 
                                                                             className="border-2 border-solid border-emerald-400 w-16 h-15 rounded-full rounded-"
                                                                            src={
                                                                                user.image_path
                                                                            }
                                                                            // style={{
                                                                            //     width: 60,
                                                                            // }}
                                                                        />
                                                                    </td>
                                                                   
                                                                    <td className="px-3 py-2 hover:underline text-nowrap">
                                                                        <Link
                                                                            href={route(
                                                                                "user.edit",
                                                                                user.id
                                                                            )}
                                                                        >
                                                                            {
                                                                                user.name
                                                                            }
                                                                        </Link>
                                                                    </td>
                                                                    <td className="px-3 py-2 ">
                                                                        {" "}
                                                                        <span
                                                                            className={
                                                                                "px-2 py-1 rounded text-nowrap text-gray-100 " +
                                                                                USER_STATUS_CLASS_MAP[
                                                                                    user
                                                                                        .status
                                                                                ]
                                                                            }
                                                                        >
                                                                            {
                                                                                USER_STATUS_TEXT_MAP[
                                                                                    user
                                                                                        .status
                                                                                ]
                                                                            }
                                                                        </span>
                                                                    </td>
                                                                    <td className="px-3 py-2 text-nowrap">
                                                                        {" "}
                                                                        {
                                                                            user.created_at
                                                                        }
                                                                    </td>

                                                                    <td className="px-3 py-2">
                                                                        {
                                                                            user.email
                                                                        }
                                                                    </td>
                                                                    <td className="px-3 py-2 ">
                                                                        <Link
                                                                            href={route(
                                                                                "user.edit",
                                                                                user.id
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
                                                                                deleteUser(
                                                                                    user
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
                                                links={users.meta.links}
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

import TextInput from "@/Components/TextInput";
import Button from "../../Components/Home/Button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
// import { Flowbite, Tabs } from "flowbite-react"s;
import { Alert, TabItem, theme, Flowbite } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { defaultTheme } from "tailwindcss/defaultTheme";
import { Card } from "flowbite-react";
import Pagination from "@/Components/Pagination";
import { NOTE_PRIORITY_TEXT_MAP } from "@/constants";

export default function Index({ notesW, notesS, notesM, notesO }) {
    const user = usePage().props.auth.user;
    const Mytheme = theme;

    Mytheme: {
        tabs: {
            primary: "bg-red 500";
        }
    }

    return (
        <>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-white dark:text-gray-200">
                        My Notes
                    </h2>
                }
            >
                <Head title=" My Notes" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-white dark:text-gray-100">
                                <h6 className="text-xl font-semibold h6 max-md:h6 mb-7 text-p1">
                                    Welcome {user.name} , Add Your Note / Task
                                    Below
                                </h6>
                                <span className="w-9 px-3 py-1 rounded"></span>

                                <form>
                                    <div className="w-full content-center items-center pb-7 justify-between">
                                        <div className=" grid grid-cols-12 items-center gap-3 pb-7 justify-between">
                                            <div className="w-full col-span-8">
                                                <InputLabel
                                                    className="text-p1"
                                                    htmlFor="note"
                                                    value="Add Note Title "
                                                />

                                                <TextInput
                                                    id="note"
                                                    type="text"
                                                    name="note"
                                                    className="mt-3 block w-full h-16 "
                                                    autoComplete="username"
                                                    isFocused={true}
                                                />

                                                <InputError
                                                    message=""
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div className="w-full col-span-4 pt-8">
                                                <Button>Add Note</Button>
                                            </div>
                                        </div>

                                        <div className=" grid grid-cols-12 items-center gap-3 pb-7 justify-between">
                                            <div className="w-full col-span-8">
                                                <InputLabel
                                                    className="text-p1"
                                                    htmlFor="note"
                                                    value="Add Note Title "
                                                />

                                                <TextInput
                                                    id="noter"
                                                    type="text"
                                                    name="note"
                                                    className="mt-3 block w-full h-16 "
                                                    autoComplete="username"
                                                    isFocused={true}
                                                />

                                                <InputError
                                                    message=""
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div className="w-full col-span-4 pt-8">
                                                <Button>Add Note</Button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-5">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-white dark:text-gray-100">
                                <h6 className="text-sm h6 max-md:h6 mb-7 text-p1">
                                    All Note / Tasks
                                </h6>

                                <div className="overflow-x-auto">
                                    <Flowbite theme={Mytheme}>
                                        <Tabs
                                            aria-label="Full width tabs"
                                            variant="pills"
                                        >
                                            <Tabs.Item
                                                active
                                                title="WORK NOTES"
                                                icon={HiUserCircle}
                                            >
                                                <span className="text-xl font-semibold text-p1 dark:text-white">
                                                    These are task/notes you
                                                    created under WORK Category,
                                                    use the buttons on each task
                                                    to edit the task
                                                </span>

                                                <div className="grid grid-cols-2 items-center gap-3 py-5 lg:grid-cols-3">
                                                    {/* mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6 */}
                                                    {notesW.data.map(
                                                        (noter) => (
                                                            <div key={noter.id}>
                                                                <Card className="mt-7 max-w-sm bg-cyan-100 bg-opacity-80">
                                                                    <a href="#">
                                                                        <h5 className="font-medium tracking-tight text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.note
                                                                            }
                                                                        </h5>
                                                                    </a>
                                                                    <div className="mb-2 mt-1.5 flex items-center">
                                                                        <h5 className="font-medium ml-3 mr-2 rounded bg-s1 px-2.5 py-0.5  text-zinc-300 dark:bg-cyan-200 dark:text-cyan-800">
                                                                            {
                                                                                NOTE_PRIORITY_TEXT_MAP[
                                                                                    noter
                                                                                        .priority
                                                                                ]
                                                                            }
                                                                        </h5>
                                                                        <span className="text-1xl font-bold text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.date
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <p className="text-sm mt-2">
                                                                        <Link
                                                                            href={route(
                                                                                "blog.edit",
                                                                                noter.id
                                                                            )}
                                                                            className="mx-3 bg-blue-800 rounded px-2 py-1 text-nowrap font-medium text-gray-100 "
                                                                        >
                                                                            Edit
                                                                        </Link>

                                                                        <Link
                                                                            // href={route(
                                                                            //     "blog.destroy",
                                                                            //     blognews.id
                                                                            // )}
                                                                            className="mx-3 bg-red-800 rounded px-2 py-1 text-nowrap font-medium text-gray-200"
                                                                        >
                                                                            Delete
                                                                        </Link>
                                                                    </p>
                                                                    <div className="flex items-center justify-between">
                                                                        <a
                                                                            href="#"
                                                                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                                                        >
                                                                            Edit
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                                                        >
                                                                            Delete
                                                                        </a>
                                                                    </div>
                                                                </Card>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                {/* <Pagination links={notes.meta.links} /> */}
                                            </Tabs.Item>

                                            <Tabs.Item
                                                title="STUDY NOTES"
                                                icon={MdDashboard}
                                            >
                                                <span className="text-xl font-semibold text-p1 dark:text-white">
                                                    These are task/notes you
                                                    created under STUDY
                                                    Category, use the buttons on
                                                    each task to edit the task
                                                </span>

                                                <div className="grid grid-cols-2 items-center gap-3 py-5 lg:grid-cols-3">
                                                    {/* mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6 */}
                                                    {notesW.data.map(
                                                        (noter) => (
                                                            <div key={noter.id}>
                                                                <Card className="mt-7 max-w-sm bg-cyan-100 bg-opacity-80">
                                                                    <a href="#">
                                                                        <h5 className="font-medium tracking-tight text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.note
                                                                            }
                                                                        </h5>
                                                                    </a>
                                                                    <div className="mb-2 mt-1.5 flex items-center">
                                                                        <h5 className="font-medium ml-3 mr-2 rounded bg-s1 px-2.5 py-0.5  text-zinc-300 dark:bg-cyan-200 dark:text-cyan-800">
                                                                            {
                                                                                NOTE_PRIORITY_TEXT_MAP[
                                                                                    noter
                                                                                        .priority
                                                                                ]
                                                                            }
                                                                        </h5>
                                                                        <span className="text-1xl font-bold text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.date
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center justify-between">
                                                                        <a
                                                                            href="#"
                                                                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                                                        >
                                                                            Edit
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                                                        >
                                                                            Delete
                                                                        </a>
                                                                    </div>
                                                                </Card>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </Tabs.Item>

                                            <Tabs.Item
                                                active
                                                title="MEETINGS NOTE"
                                                icon={HiUserCircle}
                                            >
                                                <span className="text-xl font-semibold text-p1 dark:text-white">
                                                    These are task/notes you
                                                    created under MEETING
                                                    Category, use the buttons on
                                                    each task to edit the task
                                                </span>

                                                <div className="grid grid-cols-2 items-center gap-3 py-5 lg:grid-cols-3">
                                                    {/* mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6 */}
                                                    {notesM.data.map(
                                                        (noter) => (
                                                            <div key={noter.id}>
                                                                <Card className="mt-7 max-w-sm bg-cyan-100 bg-opacity-80">
                                                                    <a href="#">
                                                                        <h5 className="font-medium tracking-tight text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.note
                                                                            }
                                                                        </h5>
                                                                    </a>
                                                                    <div className="mb-2 mt-1.5 flex items-center">
                                                                        <h5 className="font-medium ml-3 mr-2 rounded bg-s1 px-2.5 py-0.5  text-zinc-300 dark:bg-cyan-200 dark:text-cyan-800">
                                                                            {
                                                                                NOTE_PRIORITY_TEXT_MAP[
                                                                                    noter
                                                                                        .priority
                                                                                ]
                                                                            }
                                                                        </h5>
                                                                        <span className="text-1xl font-bold text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.date
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center justify-between">
                                                                        <a
                                                                            href="#"
                                                                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                                                        >
                                                                            Edit
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                                                        >
                                                                            Delete
                                                                        </a>
                                                                    </div>
                                                                </Card>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                {/* <Pagination links={notes.meta.links} /> */}
                                            </Tabs.Item>

                                            <Tabs.Item
                                                title="OTHERS"
                                                icon={HiClipboardList}
                                            >
                                                <span className="text-xl font-semibold text-p1 dark:text-white">
                                                    These are task/notes you
                                                    created under OTHERS
                                                    Category, use the buttons on
                                                    each task to edit the task
                                                </span>

                                                <div className="grid grid-cols-2 items-center gap-3 py-5 lg:grid-cols-3">
                                                    {/* mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6 */}
                                                    {notesO.data.map(
                                                        (noter) => (
                                                            <div key={noter.id}>
                                                                <Card className="mt-7 max-w-sm bg-cyan-100 bg-opacity-80">
                                                                    <a href="#">
                                                                        <h5 className="font-medium tracking-tight text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.note
                                                                            }
                                                                        </h5>
                                                                    </a>
                                                                    <div className="mb-2 mt-1.5 flex items-center">
                                                                        <h5 className="font-medium ml-3 mr-2 rounded bg-s1 px-2.5 py-0.5  text-zinc-300 dark:bg-cyan-200 dark:text-cyan-800">
                                                                            {
                                                                                NOTE_PRIORITY_TEXT_MAP[
                                                                                    noter
                                                                                        .priority
                                                                                ]
                                                                            }
                                                                        </h5>
                                                                        <span className="text-1xl font-bold text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.date
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center justify-between">
                                                                        <a
                                                                            href="#"
                                                                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                                                        >
                                                                            Edit
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                                                        >
                                                                            Delete
                                                                        </a>
                                                                    </div>
                                                                </Card>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </Tabs.Item>
                                        </Tabs>
                                    </Flowbite>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                Welcome {user.name} You're logged in!, Select
                                Book Category
                                <span className="w-9 px-3 py-1 rounded"></span>
                                <Link
                                    href={route("blog-page")}
                                    as="button"
                                    className=" bg-lime-800  px-6 cursor-pointer py-2 
                                rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                                >
                                    Check Your Blogs News.
                                </Link>
                                <Alert className="px-8 py-10 text-center text-red-800">
                                    How are you Doing Today
                                </Alert>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-2">
                    <Link
                        preserveScroll
                        className="block title mt-[1000px] text-white text-center "
                        href="/blog-page"
                    >
                        {new Date().toLocaleTimeString()}
                    </Link>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

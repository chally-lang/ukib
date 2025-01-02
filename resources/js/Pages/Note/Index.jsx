import TextInput from "@/Components/TextInput";
import Button from "../../Components/Home/Button";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { Link, usePage, useForm } from "@inertiajs/react";
// import { Flowbite, Tabs } from "flowbite-react"s;
import { Alert, TabItem, theme, Flowbite } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { defaultTheme } from "tailwindcss/defaultTheme";
import { Card } from "flowbite-react";
import Pagination from "@/Components/Pagination";
import { NOTE_PRIORITY_TEXT_MAP, NOTE_PRIORITY_CLASS_MAP } from "@/constants";
import xora2 from "@/images/bg-outlines-fill.png";
import deleteIcon from "@/images/delete.svg";
import editIcon from "@/images/edit.svg";

export default function Index({ notesW, notesS, notesM, notesO, success }) {
    const user = usePage().props.auth.user;
    const Mytheme = theme;

    const { data, setData, post, errors, reset } = useForm({
        note: "",
        paragraph: "",
        status: "",
        priority: "",
        date: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        // post(route("blog.store"));
        post(route("note.store"), {
            onFinish: () => reset("note"),
        });
    };

    
    const deleteNote = (noter) => {
        if (!window.confirm("Do You Want to Delete This Note ?")) {
            return;
        }
        router.delete(route("note.destroy", noter.id));
    };


    return (
        <>
            <AuthenticatedLayout
                header={
                    <div className="grid grid-cols-4 justify-between">
                        <div className="col-span-2">
                            <h2 className="font-semibold leading-tight text-white dark:text-gray-200">
                                My Notes
                            </h2>
                        </div>
                        <div className="col-span-1 "></div>
                        <div className="text-nowrap col-span-1 mr-10">
                            <a
                                href="#all_notes"
                                className="bg-blue-950 rounded px-3 py-3 text-sm text-gray-100 "
                            >
                                All Notes
                            </a>
                        </div>
                    </div>
                }
            >
                <Head title=" My Notes" />

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

                <hr className="border-cyan-500"></hr>
                <div className="py-5">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-white dark:text-gray-100">
                                <p className="text-sm font-semibold  mb-5 text-p1">
                                    Welcome {user.name} , Add Your Note / Task
                                    Below
                                </p>
                                <hr className="border-cyan-500"></hr>

                                <form onSubmit={onSubmit}>
                                    <div className="w-full content-center items-center pt-5 pb-7 justify-between">
                                        <div className=" grid grid-cols-12 items-center pb-7 justify-between">
                                            <div className="w-full col-span-7 lg:col-span-7">
                                                <InputLabel
                                                    className="text-p1 mb-3"
                                                    htmlFor="note"
                                                    value="Note Title "
                                                />
                                                <TextInput
                                                    id="note"
                                                    type="text"
                                                    // isFocused={true}
                                                    name="note"
                                                    value={data.note}
                                                    className="mt-2 block w-full text-sm"
                                                    onChange={(e) =>
                                                        setData(
                                                            "note",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.note}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="w-full col-span-1 lg:col-span-1"></div>
                                            <div className="w-full col-span-4 lg:col-span-4">
                                                <InputLabel
                                                    className="text-p1"
                                                    htmlFor="date"
                                                    value="Note Date "
                                                />

                                                <TextInput
                                                    id="date"
                                                    type="date"
                                                    name="date"
                                                    value={data.date}
                                                    className="mt-2 block w-full text-sm text-white bg-cyan-900"
                                                    onChange={(e) =>
                                                        setData(
                                                            "date",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={errors.date}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        <div className=" grid grid-cols-12 items-center pb-7 justify-between">
                                            <div className="w-full col-span-5 lg:col-span-5">
                                                <div className="w-full ">
                                                    <InputLabel
                                                        className="text-p1"
                                                        htmlFor="status"
                                                        value="Note Status "
                                                    />

                                                    <SelectInput
                                                        id="status"
                                                        name="status"
                                                        onChange={(e) =>
                                                            setData(
                                                                "status",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mt-2 w-full text-sm text-white bg-cyan-900"
                                                    >
                                                        <option value="">
                                                            Select Status
                                                        </option>
                                                        <option value="Work">
                                                            Work Notes
                                                        </option>
                                                        <option value="Study">
                                                            Study Notes
                                                        </option>
                                                        <option value="Meeting">
                                                            Meeting Notes
                                                        </option>
                                                        <option value="Others">
                                                            Other Notes
                                                        </option>
                                                    </SelectInput>

                                                    <InputError
                                                        message={errors.status}
                                                        className="mt-2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full col-span-2 lg:col-span-2"></div>

                                            <div className="w-full col-span-5 lg:col-span-5">
                                                <div>
                                                    <InputLabel
                                                        className="text-p1"
                                                        htmlFor="priority"
                                                        value="Select Note Priority"
                                                    />

                                                    <SelectInput
                                                        id="priority"
                                                        name="priority"
                                                        onChange={(e) =>
                                                            setData(
                                                                "priority",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mt-2 w-full text-sm text-white bg-cyan-900"
                                                    >
                                                        <option value="">
                                                            Select Priority
                                                        </option>

                                                        <option value="Todo">
                                                            Todo
                                                        </option>
                                                        <option value="Doing">
                                                            In Progress
                                                        </option>
                                                        <option value="Done">
                                                            Completed
                                                        </option>
                                                    </SelectInput>

                                                    <InputError
                                                        message={
                                                            errors.priority
                                                        }
                                                        className="mt-2"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" grid grid-cols-12 items-center gap-3 pb-7 justify-between">
                                            <div className="w-full col-span-9 lg:col-span-9">
                                                <InputLabel
                                                    className="text-p1"
                                                    htmlFor="paragraph"
                                                    value="Note Description"
                                                />

                                                <TextAreaInput
                                                    id="paragraph"
                                                    name="paragraph"
                                                    value={data.paragraph}
                                                    className="mt-3 block w-full"
                                                    onChange={(e) =>
                                                        setData(
                                                            "paragraph",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.paragraph}
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

                {/* <section id="all_notes">
                    <div className="w-full pt-4">
                        <Button>Add Note</Button>
                    </div>
                </section> */}

                <div id="all_notes" className="py-5">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-white dark:text-gray-100">
                                <h6 className="text-sm  mb-7 text-p1">
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
                                                <span className="text-sm font-semibold text-p1 dark:text-white">
                                                    These are task/notes you
                                                    created under WORK Category,
                                                    use the buttons on each task
                                                    to edit the task
                                                </span>
                                                <hr className="border-cyan-500 mt-5"></hr>

                                                <div className="grid grid-cols-2 items-center gap-3 py-5 lg:grid-cols-3">
                                                    {/* mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6 */}
                                                    {notesW.data.map(
                                                        (noter) => (
                                                            <div key={noter.id}>
                                                                <Card className="mt-7 max-w-sm bg-cyan-100 bg-opacity-80">
                                                                    <a
                                                                        href={route(
                                                                            "note.edit",
                                                                            noter.id
                                                                        )}
                                                                    >
                                                                        <h5 className="text-sm font-semibold tracking-tight text-blue-800 dark:text-white">
                                                                            {
                                                                                noter.note
                                                                            }
                                                                        </h5>
                                                                    </a>
                                                                    <div className="mb-2 mt-1.5 flex items-center">
                                                                        {/* <h5 className="text-sm font-semibold ml-3 mr-2 rounded bg-s1 px-2.5 py-0.5  text-zinc-300 dark:bg-cyan-200 dark:text-cyan-800">
                                                                            {
                                                                                NOTE_PRIORITY_TEXT_MAP[
                                                                                    noter
                                                                                        .priority
                                                                                ]
                                                                            }
                                                                        </h5> */}
                                                                        <span
                                                                            className={
                                                                                "text-sm px-2 py-1 rounded text-nowrap text-gray-100 " +
                                                                                NOTE_PRIORITY_CLASS_MAP[
                                                                                    noter
                                                                                        .priority
                                                                                ]
                                                                            }
                                                                        >
                                                                            {
                                                                                NOTE_PRIORITY_TEXT_MAP[
                                                                                    noter
                                                                                        .priority
                                                                                ]
                                                                            }
                                                                        </span>
                                                                        <span className="ml-5 text-sm font-semibold text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.date
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center justify-between">
                                                                        <div>
                                                                            <a
                                                                                href={route(
                                                                                    "note.edit",
                                                                                    noter.id
                                                                                )}
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        editIcon
                                                                                    }
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                        <div>
                                                                            <button
                                                                                onClick={(
                                                                                    e
                                                                                ) =>
                                                                                    deleteNote(
                                                                                        noter
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        deleteIcon
                                                                                    }
                                                                                />
                                                                            </button>
                                                                            {/* <a
                                                                                href={route(
                                                                                    "note.destroy",
                                                                                    noter.id
                                                                                )}
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        deleteIcon
                                                                                    }
                                                                                />
                                                                            </a> */}
                                                                        </div>
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
                                                <span className="text-sm font-semibold text-p1 dark:text-white">
                                                    These are task/notes you
                                                    created under STUDY
                                                    Category, use the buttons on
                                                    each task to edit the task
                                                </span>
                                                <hr className="border-cyan-500 mt-5"></hr>

                                                <div className="grid grid-cols-2 items-center gap-3 py-5 lg:grid-cols-3">
                                                    {/* mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6 */}
                                                    {notesS.data.map(
                                                        (noter) => (
                                                            <div key={noter.id}>
                                                                <Card className="mt-7 max-w-sm bg-cyan-100 bg-opacity-80">
                                                                    <a
                                                                        href={route(
                                                                            "note.edit",
                                                                            noter.id
                                                                        )}
                                                                    >
                                                                        <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.note
                                                                            }
                                                                        </h5>
                                                                    </a>
                                                                    <div className="mb-2 mt-1.5 flex items-center">
                                                                        <span
                                                                            className={
                                                                                "text-sm px-2 py-1 rounded text-nowrap text-gray-100 " +
                                                                                NOTE_PRIORITY_CLASS_MAP[
                                                                                    noter
                                                                                        .priority
                                                                                ]
                                                                            }
                                                                        >
                                                                            {
                                                                                NOTE_PRIORITY_TEXT_MAP[
                                                                                    noter
                                                                                        .priority
                                                                                ]
                                                                            }
                                                                        </span>
                                                                        <span className="ml-5 text-sm font-bold text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.date
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center justify-between">
                                                                        <div>
                                                                            <a
                                                                                href={route(
                                                                                    "note.edit",
                                                                                    noter.id
                                                                                )}
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        editIcon
                                                                                    }
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                        <div>
                                                                            {/* <a
                                                                                href={route(
                                                                                    "note.destroy",
                                                                                    noter.id
                                                                                )}
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        deleteIcon
                                                                                    }
                                                                                />
                                                                            </a> */}
                                                                            <button
                                                                                onClick={(
                                                                                    e
                                                                                ) =>
                                                                                    deleteNote(
                                                                                        noter
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        deleteIcon
                                                                                    }
                                                                                />
                                                                            </button>
                                                                        </div>
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
                                                <span className="text-sm font-semibold text-p1 dark:text-white">
                                                    These are task/notes you
                                                    created under MEETING
                                                    Category, use the buttons on
                                                    each task to edit the task
                                                </span>
                                                <hr className="border-cyan-500 mt-5"></hr>

                                                <div className="grid grid-cols-2 items-center gap-3 py-5 lg:grid-cols-3">
                                                    {/* mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6 */}
                                                    {notesM.data.map(
                                                        (noter) => (
                                                            <div key={noter.id}>
                                                                <Card className="mt-7 max-w-sm bg-cyan-100 bg-opacity-80">
                                                                    <a href="#">
                                                                        <h5 className="text-sm font-medium tracking-tight text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.note
                                                                            }
                                                                        </h5>
                                                                    </a>
                                                                    <div className="mb-2 mt-1.5 flex items-center">
                                                                        <span
                                                                            className={
                                                                                "text-sm px-2 py-1 rounded text-nowrap text-gray-100 " +
                                                                                NOTE_PRIORITY_CLASS_MAP[
                                                                                    noter
                                                                                        .priority
                                                                                ]
                                                                            }
                                                                        >
                                                                            {
                                                                                NOTE_PRIORITY_TEXT_MAP[
                                                                                    noter
                                                                                        .priority
                                                                                ]
                                                                            }
                                                                        </span>
                                                                        <span className="ml-4 text-sm font-bold text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.date
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center justify-between">
                                                                        <div>
                                                                            <a
                                                                                href={route(
                                                                                    "note.edit",
                                                                                    noter.id
                                                                                )}
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        editIcon
                                                                                    }
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                        <div>
                                                                            {/* <a
                                                                                href={route(
                                                                                    "note.destroy",
                                                                                    noter.id
                                                                                )}
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        deleteIcon
                                                                                    }
                                                                                />
                                                                            </a> */}
                                                                            <button
                                                                                onClick={(
                                                                                    e
                                                                                ) =>
                                                                                    deleteNote(
                                                                                        noter
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        deleteIcon
                                                                                    }
                                                                                />
                                                                            </button>
                                                                        </div>
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
                                                <span className="text-sm font-semibold text-p1 dark:text-white">
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
                                                                    <a
                                                                        href={route(
                                                                            "note.edit",
                                                                            noter.id
                                                                        )}
                                                                    >
                                                                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.note
                                                                            }
                                                                        </h5>
                                                                    </a>
                                                                    <div className="mb-2 mt-1.5 flex items-center text-nowrap">
                                                                        <span
                                                                            className={
                                                                                "text-sm px-2 py-1 rounded  text-gray-100 " +
                                                                                NOTE_PRIORITY_CLASS_MAP[
                                                                                    noter
                                                                                        .priority
                                                                                ]
                                                                            }
                                                                        >
                                                                            {
                                                                                NOTE_PRIORITY_TEXT_MAP[
                                                                                    noter
                                                                                        .priority
                                                                                ]
                                                                            }
                                                                        </span>
                                                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                                                                            {
                                                                                noter.date
                                                                            }
                                                                        </span>
                                                                    </div>

                                                                    <div className="flex items-center justify-between">
                                                                        <div>
                                                                            <a
                                                                                href={route(
                                                                                    "note.edit",
                                                                                    noter.id
                                                                                )}
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        editIcon
                                                                                    }
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                        <div>
                                                                            <button
                                                                                onClick={(
                                                                                    e
                                                                                ) =>
                                                                                    deleteNote(
                                                                                        noter
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        deleteIcon
                                                                                    }
                                                                                />
                                                                            </button>
                                                                        </div>
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

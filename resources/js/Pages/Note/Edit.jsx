import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import Button from "@/Components/Home/Button";
import SelectInput from "@/Components/SelectInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
// import { Flowbite, Tabs } from "flowbite-react"s;
import { Alert, TabItem, theme, Flowbite } from "flowbite-react";


export default function Edit({note}) {
    const user = usePage().props.auth.user;
    
    const { data, setData, put, errors, reset } = useForm({
        note: note.note || "",
        paragraph: note.paragraph || "",
        status: note.status || "",
        priority: note.priority || "",
        date: note.date || "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route("note.update", note.id));
        
    };

    return (
        <>
            <AuthenticatedLayout
                header={
                    <h2 className=" font-semibold leading-tight text-white dark:text-gray-200">
                        Note - {note.note}
                    </h2>
                }
            >
                <Head title= {note.note}  />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-white dark:text-gray-100">
                                <h6 className="font-semibold h6 max-md:h6 mb-7 text-p1">
                                    {/* Note - {note.note} */}
                                    <p>{note.note}</p>
                                    {/* <p>{`Notes - "${note.note}"`}</p> */}
                                    
                                </h6>
                                <span className="w-9 px-3 py-1 rounded"></span>

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
                                                    isFocused={true}
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
                                                        Update
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

                <div className="py-5">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-white dark:text-gray-100">
                                <h6 className="text-sm mb-7 text-p1">
                                    All Note / Tasks
                                </h6>

                                
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

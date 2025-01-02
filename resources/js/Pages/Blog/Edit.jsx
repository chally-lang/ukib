import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Button from "@/Components/Home/Button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";

export default function Edit({ blog }) {
    const { data, setData, post, errors, reset } = useForm({
        //image_path: blog.image_path || "",
        title: blog.title || "",
        paragraph: blog.paragraph || "",
        status: blog.status || "",
        role: blog.role || "",
        category: blog.category || "",
        date: blog.date || "",
        _method: "PUT",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("blog.update", blog.id));
        // put(route("blog.update, blog.id"), {
        //     onFinish: () => reset("title", "paragraph", "status", "category"),
        // });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-white dark:text-gray-200">
                    <p>{`Edit News - ${blog.title}`}</p>
                </h2>
            }
        >
            <Head title={blog.title} />

            <div className="py-10">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-white dark:text-gray-100">
                            <h4 className="text-sm  mb-7 text-p1">
                                <span className="text-white"> Edit News </span>{" "}
                                - {blog.title}
                            </h4>

                            <form onSubmit={onSubmit}>
                                <div className="w-full content-center items-center pb-7 justify-between">
                                    <div className=" grid grid-cols-12 items-center gap-3 pb-7 justify-between">
                                        <div className="w-full col-span-6 lg:col-span-6">
                                            {blog.image_path && (
                                                <div className="mb-5">
                                                    <img
                                                        src={blog.image_path}
                                                        className="w-50"
                                                    />
                                                </div>
                                            )}
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
                                                onChange={(e) =>
                                                    setData(
                                                        "image_path",
                                                        e.target.files[0]
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.image_path}
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
                                                    onChange={(e) =>
                                                        setData(
                                                            "status",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-2 w-full text-sm text-white bg-cyan-900"
                                                >
                                                    <option value="">
                                                        Select News Status
                                                    </option>
                                                    <option value="published">
                                                        Publish
                                                    </option>
                                                    <option value="un_Published">
                                                        Un Publish
                                                    </option>
                                                    <option value="in_progress">
                                                        In Progress
                                                    </option>
                                                </SelectInput>

                                                <InputError
                                                    message={errors.status}
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
                                                    onChange={(e) =>
                                                        setData(
                                                            "category",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-2 w-full text-sm text-white bg-cyan-900"
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
                                                        Author & Publishers Post
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

                                                <InputError
                                                    message={errors.category}
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
                                                isFocused={true}
                                                name="title"
                                                value={data.title}
                                                className="mt-2 block w-full text-sm"
                                                onChange={(e) =>
                                                    setData(
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.title}
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

                                    <div className=" grid grid-cols-12 items-center gap-3 pb-7 justify-between">
                                        <div className="w-full col-span-8 lg:col-span-8">
                                            <InputLabel
                                                className="text-p1"
                                                htmlFor="paragraph"
                                                value="News Description"
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

                                        <div className="mt-5 ml-2 w-full col-span-4 lg:col-span-4">
                                            <div className=" grid grid-cols-6 items-center pb-7 justify-between">
                                                <div className="col-span-5 mb-7">
                                                    <InputLabel
                                                        className="text-p1"
                                                        htmlFor="role"
                                                        value="Add Role "
                                                    />

                                                    <SelectInput
                                                        id="role"
                                                        name="role"
                                                        onChange={(e) =>
                                                            setData(
                                                                "role",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mt-2 w-full text-sm text-white bg-cyan-900"
                                                    >
                                                        <option value="">
                                                            Select Role
                                                        </option>
                                                        <option value="1">
                                                            Head Blog
                                                        </option>
                                                        <option value="2">
                                                            Sub Blog
                                                        </option>
                                                        <option value="3">
                                                            Normal Blog
                                                        </option>
                                                    </SelectInput>

                                                    <InputError
                                                        message={
                                                            errors.category
                                                        }
                                                        className="mt-2"
                                                    />
                                                </div>

                                                <div className="col-span-2">
                                                    <Button className="wrap">
                                                        Update
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

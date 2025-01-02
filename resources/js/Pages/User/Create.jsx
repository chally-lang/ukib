import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Button from "../../Components/Home/Button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
// import { Flowbite, Tabs } from "flowbite-react";
import { Alert, TabItem, theme, Flowbite } from "flowbite-react";
import { USER_STATUS_TEXT_MAP, USER_STATUS_CLASS_MAP } from "@/constants";
import TextAreaInput from "@/Components/TextAreaInput";

export default function Create({}) {
    //inetertia use form veiarables
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        email: "",
        // status: "",
        // category: "",
        
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("user.store"));
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-white dark:text-gray-200">
                    <p>Create User</p>
                </h2>
            }
        >
            <Head title="Create User" />

            <div className="py-10">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-white dark:text-gray-100">
                            <h4 className="text-sm h6 max-md:h5 mb-7 text-p1">
                                Create User
                            </h4>

                            <form onSubmit={onSubmit}>
                                <div className="w-full content-center items-center pb-7 justify-between">
                                    <div className=" grid grid-cols-12 items-center pb-7 justify-between">
                                        <div className="w-full col-span-6 lg:col-span-7">
                                            <InputLabel
                                                className="text-p1 mb-3"
                                                htmlFor="name"
                                                value="User Name "
                                            />
                                            <TextInput
                                                id="name"
                                                type="text"
                                                isFocused={true}
                                                name="name"
                                                value={data.name}
                                                className="mt-2 block w-full text-sm"
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="w-full col-span-1 lg:col-span-1"></div>
                                        {/* <div className="w-full col-span-4 lg:col-span-7">
                                            <InputLabel
                                                className="text-p1"
                                                htmlFor="status"
                                                value="User Sub Status "
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
                                                    Select User Status
                                                </option>

                                                <option value="activated">
                                                    Activate
                                                </option>
                                                <option value="de_activated">
                                                    De Activate
                                                </option>
                                            </SelectInput>

                                            <InputError
                                                message={errors.status}
                                                className="mt-2"
                                            />
                                        </div> */}
                                    </div>

                                    <div className=" grid grid-cols-12 items-center pb-7 justify-between">
                                        <div className="w-full col-span-6 lg:col-span-7">
                                            <InputLabel
                                                className="text-p1 mb-3"
                                                htmlFor="email"
                                                value="User Email"
                                            />
                                            <TextInput
                                                id="email"
                                                type="text"                                                
                                                name="email"
                                                value={data.email}
                                                className="mt-2 block w-full text-sm"
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="w-full col-span-1 lg:col-span-1"></div>
                                        {/* <div className="w-full col-span-4 lg:col-span-7">
                                            <InputLabel
                                                className="text-p1"
                                                htmlFor="category"
                                                value="User Category "
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
                                                    Select User Category
                                                </option>

                                                <option value="subscribed">
                                                    Subscribed
                                                </option>
                                                <option value="un_subscribed">
                                                    Un Subscribed
                                                </option>
                                            </SelectInput>

                                            <InputError
                                                message={errors.category}
                                                className="mt-2"
                                            />
                                        </div> */}
                                    </div>

                                    <div className=" grid grid-cols-12 items-center gap-3 pb-7 justify-between">
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
        </AuthenticatedLayout>
    );
}

import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";

import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import MakeAdminForm from "./Partials/MakeAdminForm";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
import {
    USER_STATUS_TEXT_MAP,
    USER_STATUS_CLASS_MAP,
    USER_CAT_TEXT_MAP,
    USER_CAT_CLASS_MAP,
} from "@/constants/index";

export default function Edit({ eUser }) {
    const user = usePage().props.auth.user;
    const { data, setData, put, processing, errors, reset } = useForm({
        status: eUser.status || "",
        category: eUser.category || "",
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("user.update", eUser.id));
        // put(route("user.update, user.id"), {
        //     onFinish: () => reset("title", "paragraph", "status", "category"),
        // });
    };

    return (
        <AuthenticatedLayout
            header={
                <span className="font-semibold leading-tight text-white dark:text-gray-200">
                    <p>{`Edit User - ${eUser.name}`}</p>
                </span>
            }
        >
            <Head title={eUser.name} />

            <div className="py-5">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-white dark:text-gray-100">
                            <h4 className="text-sm font-medium mb-7 text-p1">
                                <span className="text-white">
                                    {" "}
                                    User Details{" "}
                                </span>{" "}
                            </h4>

                            <div className=" grid grid-cols-12 items-center gap-3 pb-7 justify-between">
                                <div className="w-full col-span-6 lg:col-span-6">
                                    {eUser.image_path && (
                                        <div className="">
                                            <img
                                                src={eUser.image_path}
                                                className="border-2 border-solid border-emerald-400 w-20 h-20 rounded-full rounded-"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="w-full col-span-6 lg:col-span-6">
                                    <div>
                                        <h4 className="text-sm  mb-7 text-p1">
                                            <span className="text-white">
                                                {" "}
                                                Name{" "}
                                            </span>{" "}
                                            - {eUser.name}
                                        </h4>
                                    </div>
                                    <div>
                                        <h4 className="text-sm  mb-7 text-p1">
                                            <span className="text-white">
                                                {" "}
                                                Email{" "}
                                            </span>{" "}
                                            - {eUser.email}
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div className=" grid grid-cols-12 items-center gap-3 pb-7 justify-between">
                                <div className="w-full col-span-6 lg:col-span-6">
                                    <h4 className="text-sm  mb-7 text-p1">
                                        <span className="text-white">
                                            {" "}
                                            Suscription status{" -"}
                                        </span>{" "}
                                        <span
                                            className={
                                                "px-2 py-1 rounded text-nowrap text-gray-100 " +
                                                USER_CAT_CLASS_MAP[
                                                    eUser.category
                                                ]
                                            }
                                        >
                                            {" "}
                                            {USER_CAT_TEXT_MAP[eUser.category]}
                                        </span>
                                    </h4>
                                </div>

                                <div className="w-full col-span-6 lg:col-span-6">
                                    <div>
                                        <h4 className="text-sm  mb-7 text-p1">
                                            <span className="text-white">
                                                {" "}
                                                Library Status{" -"}
                                            </span>{" "}
                                            <span
                                                className={
                                                    "px-2 py-1 rounded text-nowrap text-gray-100 " +
                                                    USER_STATUS_CLASS_MAP[
                                                        eUser.status
                                                    ]
                                                }
                                            >
                                                {" "}
                                                {
                                                    USER_STATUS_TEXT_MAP[
                                                        eUser.status
                                                    ]
                                                }
                                            </span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* //subscription form // */}
            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-white dark:text-gray-100">
                            <h4 className="text-sm font-medium mb-7 text-p1">
                                <span className="text-white">
                                    {" "}
                                    Approve and Update User Subscription Status
                                </span>{" "}
                            </h4>

                            <section>
                                <header>
                                    <p className="mt-1 text-sm text-p1">
                                        Set User Subscription status below
                                    </p>
                                </header>

                                <form
                                    onSubmit={submit}
                                    className="mt-6 space-y-6"
                                >
                                    <div>
                                        <InputLabel
                                            className="text-p1 mb-3"
                                            htmlFor="category"
                                            value="Select Subscription"
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
                                                Select Subscription Status
                                            </option>
                                            <option value="subscribed">
                                                Subscribe
                                            </option>
                                            <option value="un_subscribed">
                                                Un Subscribe
                                            </option>
                                        </SelectInput>

                                        <InputError
                                            message={errors.category}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="pt-3">
                                        <InputLabel
                                            className="text-p1 mt-5 mb-3"
                                            htmlFor="status"
                                            value="Library Status"
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
                                                Select Library Status
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
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <PrimaryButton disabled={processing}>
                                            Update Now
                                        </PrimaryButton>

                                        {/* <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out"
                                            enterFrom="opacity-0"
                                            leave="transition ease-in-out"
                                            leaveTo="opacity-0"
                                        >
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Saved.
                                            </p>
                                        </Transition> */}
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {user.role === 1 && (
                <div className="py-6">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-white dark:text-gray-100">
                                <h4 className="text-sm font-medium mb-7 text-p1">
                                    <span className="text-white">
                                        {" "}
                                        Manage User Control Settings
                                    </span>{" "}
                                </h4>
                                <MakeAdminForm
                                    eUser={eUser}
                                    className="max-w-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}

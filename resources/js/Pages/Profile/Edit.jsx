import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import Subscription from "./Partials/Subcription";
import ProfilePhoto from "./Partials/ProfilePhoto";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function Edit({ mustVerifyEmail, status, current_user }) {
    const user = usePage().props.auth.user;
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-100">
                    Profile
                </h2>
                <div className="">

                <img 
                    className="border border-solid border-emerald-400 w-10 h-10 rounded-full rounded-"
                    src={current_user.image_path}
                    // style={{
                    //     width: 60,
                    // }}
                />
                </div>
            </div>
            }
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    {user.category === "un_subscribed" && (
                        <div className="bg-s2 p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                            <Subscription
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>
                    )}

                    <div className="bg-s2 p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <ProfilePhoto
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            current_user={current_user}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

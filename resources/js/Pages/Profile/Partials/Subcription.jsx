import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function Subscription({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            category: "",
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.sub"));
    };

    return (
        <section className={className}>
            <Transition
                show={recentlySuccessful}
                enter="transition ease-in-out"
                enterFrom="opacity-0"
                leave="transition ease-in-out"
                leaveTo="opacity-0"
            >
                <p className="text-sm text-yellow-200 dark:text-yellow-200">
                    Your Subscription Was Submitted Successfully, Please Wait
                    for Administrator Approval.
                </p>
            </Transition>
            <header>
                <h2 className="text-lg font-medium text-p1">
                    Book Subscription Form
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                    Select Subscription status to view libray books.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel  className="text-p1 mb-3" htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                

                <div>
                    <InputLabel
                        className="text-p1 mb-3"
                        htmlFor="category"
                        value="Select Subscription Below"
                    />

                    <SelectInput
                        id="category"
                        name="category"
                        onChange={(e) => setData("category", e.target.value)}
                        className="mt-2 w-full text-sm text-white bg-cyan-900"
                    >
                        <option value="">Select Subscription Status</option>
                        <option value="subscribed">Subscribe</option>
                    </SelectInput>

                    <InputError message={errors.category} className="mt-2" />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>SUBSCRIBE</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-yellow-200 dark:text-yellow-200">
                            Your Subscription Was Submitted Successfully, Please
                            Wait for Administrator Approval.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}

// import InputError from "@/Components/InputError";
// import InputLabel from "@/Components/InputLabel";
// import PrimaryButton from "@/Components/PrimaryButton";
// import TextInput from "@/Components/TextInput";
// import { Transition } from "@headlessui/react";
// import { Link, useForm, usePage } from "@inertiajs/react";
// import SelectInput from "@/Components/SelectInput";

// export default function Subscription({
//     mustVerifyEmail,
//     status,
//     className = "",
// }) {
//     const user = usePage().props.auth.user;

//     const { data, setData, patch, errors, processing, recentlySuccessful } =
//         useForm({

//             category: "",
//         });

//     const submit = (e) => {
//         e.preventDefault();

//         patch(route("profile.sub"));
//     };

//     return (
//         <section className={className}>
//             <header>
//                 <h2 className="text-lg font-medium text-p1 dark:text-p1">
//                     Book Subscription Form
//                 </h2>

//                 <p className="mt-1 text-sm text-p1">
//                     Saved
//                 </p>
//             </header>

//             <form onSubmit={submit} className="mt-6 space-y-6">

//                 <div>
//                     <InputLabel
//                         className="text-p1 mb-3"
//                         htmlFor="category"
//                         value="Select Subscription"
//                     />

//                     <SelectInput
//                         id="category"
//                         name="category"
//                         onChange={(e) => setData("category", e.target.value)}
//                         className="mt-2 w-full text-sm text-white bg-cyan-900"
//                     >
//                         <option value="">Select Subscription Status</option>
//                         <option value="subscribed">Subscribe</option>
//                     </SelectInput>

//                     <InputError message={errors.category} className="mt-2" />
//                 </div>

//                 {mustVerifyEmail && user.email_verified_at === null && (
//                     <div>
//                         <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
//                             Your email address is unverified.
//                             <Link
//                                 href={route("verification.send")}
//                                 method="post"
//                                 as="button"
//                                 className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
//                             >
//                                 Click here to re-send the verification email.
//                             </Link>
//                         </p>

//                         {status === "verification-link-sent" && (
//                             <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
//                                 A new verification link has been sent to your
//                                 email address.
//                             </div>
//                         )}
//                     </div>
//                 )}

//                 <div className="flex items-center gap-4">
//                     <PrimaryButton disabled={processing}>Subscribe Now</PrimaryButton>

//                     <Transition
//                         show={recentlySuccessful}
//                         enter="transition ease-in-out"
//                         enterFrom="opacity-0"
//                         leave="transition ease-in-out"
//                         leaveTo="opacity-0"
//                     >
//                         <p className="text-sm text-white dark:text-white">
//                             Saved
//                         </p>
//                     </Transition>
//                 </div>
//             </form>
//         </section>
//     );
// }

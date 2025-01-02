import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Button from "../../Components/Home/Button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";


export default function Edit({ sub, booksub, booksub2 }) {
    // const { data, setData, put, errors, reset } = useForm({
    //     // image_path: booksub.image_path || "",
    //     // status: bookSub.status || "",
    //     // date: bookSub.date || "",

    // });

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     put(route("booksub.update", booksub.id));
    //     // put(route("booksub.update, booksub.id"), {
    //     //     onFinish: () => reset("title", "paragraph", "status", "category"),
    //     // });
    // };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-white dark:text-gray-200">
                    {/* <p>{`Edit User Subscription - ${sub.date}`}</p> */}
                    
                    <p>{`Edit User Subscription - ${sub.role}`}</p>
                    
                    <p>{`Edit User Subscription - ${sub.created_at}`}</p>
                    <p>{`Edit User Subscription - ${booksub2.created_at}`}</p>
                    <p>{`Edit User Subscription - ${sub.sub_category}`}</p>
                    <p>{`Edit User Subscription - ${booksub.role}`}</p>
                    <p>{`Edit User Subscription - ${booksub.status}`}</p>
                    <p>{`Edit User Subscription - ${booksub2.id}`}</p>
                    <p>{`Edit User Subscription - ${booksub2.user_id}`}</p>
                    <p>{`Edit User Subscription - ${booksub.created_at}`}</p>
                    <p>{`Edit User Subscription - ${booksub.id}`}</p>
                    <p>{`Edit News - ${booksub.role}`}</p>
                </h2>
            }
        >
            <Head title={sub.name} />

            <div className="py-10">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-s2 shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-white dark:text-gray-100">
                            <h4 className="text-sm  mb-7 text-p1">
                                {/* <span className="text-white"> Edit Sub </span> - {booksub.sub_categorys} */}
                            </h4>

                            

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Button from "../../../Components/Home/Button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";


import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
// import {
//     USER_STATUS_TEXT_MAP,
//     USER_STATUS_CLASS_MAP,
//     USER_CAT_TEXT_MAP,
//     USER_CAT_CLASS_MAP,
// } from "@/constants";

export default function MakeAdminForm({ eUser }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        role: "",
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("user.update", eUser.id));
        //put(route("user.make_admin", eUser.id));
        // put(route("user.update, user.id"), {
        //     onFinish: () => reset("title", "paragraph", "status", "category"),
        // });
    };

    return (
        <section>
            <header className="flex">
                <p className="mt-1 text-sm text-p1">
                    Add and Remove A User From Admin Roles
                </p>
                <span className="pl-10 pt-1">{eUser.role}</span>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel
                        className="text-p1 mb-3"
                        htmlFor="category"
                        value="Select User Roles Status"
                    />

                    <SelectInput
                        id="role"
                        name="role"
                        onChange={(e) => setData("role", e.target.value)}
                        className="mt-2 w-full text-sm text-white bg-cyan-900"
                    >
                        <option value="">Select Role</option>
                        <option value="1">Make Admin</option>
                        <option value="3">Make Normal User</option>
                    </SelectInput>

                    <InputError message={errors.role} className="mt-2" />
                </div>

               

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>
                        Update User 
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
}

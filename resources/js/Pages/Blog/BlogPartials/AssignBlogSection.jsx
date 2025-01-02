
import SelectInput from "@/Components/SelectInput";
import Button from "../../../Components/Home/Button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { Head, router, useForm } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";

export default function AssignBlogSection({ blog }) {
    const { data, setData, put, errors, reset } = useForm({
        // image_path: blog.image_path || "",
        role: "",
        
    });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route("blog.update", blog.id));
        // put(route("blog.update, blog.id"), {
        //     onFinish: () => reset("title", "paragraph", "status", "category"),
        // });
    };

    // const { data, setData, put, processing, errors, reset } = useForm({
    //     role: "",
    // });

    // const submit = (e) => {
    //     e.preventDefault();
    //     put(route("user.update", eUser.id));
    //     //put(route("user.make_admin", eUser.id));
    //     // put(route("user.update, user.id"), {
    //     //     onFinish: () => reset("title", "paragraph", "status", "category"),
    //     // });
    // };

    return (
        <section>
            <form onSubmit={onSubmit}>
                <div className="w-full content-center items-center pb-7 justify-between">
                    <div className=" grid grid-cols-12 items-center gap-3 pb-7 justify-between">
                        <div className="w-full col-span-5 lg:col-span-5">
                            <span>{blog.role}</span>
                            <div className="w-full ">
                                <InputLabel
                                    className="text-p1 mb-3"
                                    htmlFor="role"
                                    value="Assign Blog Roles Status"
                                />

                                <SelectInput
                                    id="role"
                                    name="role"
                                    onChange={(e) =>
                                        setData("role", e.target.value)
                                    }
                                    className="mt-2 w-full text-sm text-white bg-cyan-900"
                                >
                                    <option value="">Select Role</option>
                                    <option value="1">Head Blog</option>
                                    <option value="2">Sub Head Blog</option>
                                </SelectInput>

                                <InputError
                                    message={errors.role}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                    </div>

                    <div className=" grid grid-cols-1 items-center pb-3 justify-between">
                        <div className="mt-5 ml-2 w-full col-span-3 lg:col-span-3">
                            <div className="px-1">
                                <Button className="wrap">Update</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

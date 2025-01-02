
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import elib from "@/images/elib.png";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-s1 dark:bg-s1">
            <nav className=" bg-s1 py-5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                <img src={elib} width={130} height={70} alt="logo" className="fill-current text-p1"  /> 
                                    {/* <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" /> */}
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink href={route("dashboard")}>
                                    <span className="text-p1 text-sm font-semibold leading-tight">
                                        Dashboard
                                    </span>
                                </NavLink>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink href={route("note.index")}>
                                    <span className="text-p1 text-sm font-semibold leading-tight">
                                        Notes
                                    </span>
                                </NavLink>
                            </div>

                            {user.role === 1 && (
                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink href={route("blog.index")}>
                                        <span className="text-p1 text-sm font-semibold leading-tight">
                                            News
                                        </span>
                                    </NavLink>
                                </div>
                            )}

                            {user.role === 1 && (
                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        // href={route("user.index")}
                                        href={route("user.index")}
                                    >
                                        <span className="text-p1 text-sm font-semibold leading-tight">
                                            Users
                                        </span>
                                    </NavLink>
                                </div>
                            )}

                            {user.role === 1 && (
                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        // href={route("user.index")}
                                        href={route("newsletter.index")}
                                    >
                                        <span className="text-p1 text-sm font-semibold leading-tight">
                                            NewsLetter Sub
                                        </span>
                                    </NavLink>
                                </div>
                            )}

                            {/* <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                {user.image_path && (
                                    <div className="mb-5">
                                        <img
                                            src={user.image_path}
                                            className="w-50"
                                        />
                                    </div>
                                )}
                                <div>
                                    <span>
                                        {user.image_path}
                                        {user.category}
                                        {user.role}
                                        
                                    </span>
                                </div>
                                <img
                                    src={user.image_path}
                                    style={{
                                        width: 60,
                                    }}
                                />
                                
                            </div> */}
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="space-y-1 pb-3 pt-6">
                        <div class="pl-9 grid grid-cols-12 justify-between gap-1 text-sm">
                            <div class="col-span-3 text-sm">
                                <button className="bg-slate-950 text-p2 px-4  py-3 rounded">
                                    <a href={route("dashboard")}>Dashboard</a>
                                </button>
                            </div>

                            <div class="col-span-3">
                                <button className="bg-slate-950 text-sm text-p3 px-4 cursor-pointer py-3 rounded">
                                    <a href={route("note.index")}>My Notes</a>
                                </button>
                            </div>

                            {user.role === 1 && (
                                <div class="col-span-3">
                                    <button className="bg-slate-950 text-sm text-p5 px-4 cursor-pointer py-3 rounded">
                                        <a href={route("blog.index")}>News</a>
                                    </button>
                                </div>
                            )}
                            {user.role === 1 && (
                                <div class="col-span-3">
                                    <button className="bg-slate-950 text-p3 px-4 cursor-pointer py-3 rounded">
                                        <a href={route("user.index")}>Users</a>
                                    </button>
                                </div>
                            )}
                            {user.role === 1 && (
                                <div class="col-span-3">
                                    <button className="bg-slate-950 text-p3 px-4 cursor-pointer py-3 rounded">
                                        <a href={route("newsletter.index")}>
                                            Newsletter Sub
                                        </a>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="border-t border-p1 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-p1 dark:text-p2">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                className="text-p1"
                                href={route("profile.edit")}
                            >
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                                className="text-p1"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-s4 shadow-200 text-p1 dark:bg-gray-800">
                    <div className=" mx-auto max-w-7xl px-2 py-4 sm:px-4 lg:px-6">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}

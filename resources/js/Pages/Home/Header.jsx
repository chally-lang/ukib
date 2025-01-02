import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";
import elib from "@/images/elib.png";
import xora2 from "@/images/elib.png";
import xora3 from "@/images/bg-outlines.svg";

// import Dashboard from "./../../../../vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/Pages/Dashboard";

const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const auth = usePage().props.auth;

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const NavLink = ({ title }) => (
        <LinkScroll
            onClick={() => setIsOpen(false)}
            to={title}
            offset={-100}
            spy
            smooth
            activeClass="nav-active"
            className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
        >
            {title}
        </LinkScroll>
    );

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
                hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]"
            )}
        >
            <div className="container flex h-14 items-center max-lg:px-5">
                <a className="lg:hidden flex-1 cursor-pointer z-2">
                    <img src={elib} width={130} height={70} alt="logo" />
                </a>

                <div
                    className={clsx(
                        "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
                        isOpen
                            ? "max-lg:opacity-100"
                            : "max-lg:pointer-events-none"
                    )}
                >
                    <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                        <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                            <ul className="flex max-lg:block max-lg:px-12">
                                {auth.user ? (
                                    <>
                                        <li className="nav-li">
                                            <Link
                                                href={route("homeblog.index")}
                                                className="text-sm text-p4 uppercase 
                                                transition-colors duration-500 
                                                cursor-pointer hover:text-p1 max-lg:my-4
                                                 max-lg:h5"
                                            >
                                                <span className="font-medium">
                                                    NEWS{" "}
                                                </span>
                                            </Link>
                                            <div className="dot" />
                                        </li>

                                        <li className="nav-logo">
                                            <LinkScroll
                                                to
                                                offset={-250}
                                                spy
                                                smooth
                                                className={clsx(
                                                    "max-lg:hidden transition-transform duration-500 cursor-pointer"
                                                )}
                                            >
                                                <Link
                                                    href={route("welcome")}
                                                    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                                                >
                                                    <img
                                                        src={elib}
                                                        width={170}
                                                        height={60}
                                                        alt="logo"
                                                    />
                                                </Link>
                                            </LinkScroll>
                                        </li>

                                        <li className="nav-li">
                                            <div className="dot" />

                                            <Link
                                                href={route("dashboard")}
                                                className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                                            >
                                                my Dashboard
                                            </Link>
                                            <div className="dot" />
                                            {/* <Link
                                                href={route("logout")}
                                                method="post"
                                                className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                                            >
                                                Logout 
                                            </Link> */}
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-li">
                                            <Link
                                                 href={route("welcome")}
                                                className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                                            >
                                                E-Library
                                            </Link>
                                            <div className="dot" />
                                            <NavLink title="features" />
                             
                                        </li>

                                        <li className="nav-logo">
                                            <LinkScroll
                                                offset={-250}
                                                spy
                                                smooth
                                                className={clsx(
                                                    "max-lg:hidden transition-transform duration-500 cursor-pointer"
                                                )}
                                            >
                                                <Link
                                                    href={route("welcome")}
                                                    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                                                >
                                                    <img
                                                        src={elib}
                                                        width={170}
                                                        height={65}
                                                        alt="logo"
                                                    />
                                                </Link>
                                            </LinkScroll>
                                        </li>

                                        <li className="nav-li">
                                            <Link
                                                href={route("homeblog.index")}
                                                className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                                            >
                                                NEWS
                                            </Link>
                                            <div className="dot" />

                                            <Link
                                                href={route("login")}
                                                className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                                            >
                                                Log in
                                            </Link>
                                            <div className="dot" />
                                            <Link
                                                href={route("register")}
                                                className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </nav>

                        <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                            <Link
                                href={route("welcome")}
                                className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                            >
                                <img
                                    src={xora3}
                                    width={960}
                                    height={380}
                                    alt="outline"
                                    className="relative z-2"
                                />
                            </Link>
                            <Link
                                href={route("welcome")}
                                className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                            >
                                <img
                                    src={xora2}
                                    width={960}
                                    height={380}
                                    alt="outline"
                                    className="absolute inset-0 mix-blend-soft-light opacity-5"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <button
                    className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
                    onClick={() => setIsOpen((prevState) => !prevState)}
                >
                    <img
                        src={`/images/${isOpen ? "close" : "magic"}.svg`}
                        alt="magic"
                        className="size-1/2 object-contain"
                    />
                </button>

                {/* src={`/images/${isOpen ? "close" : "magic"}.svg`} */}
            </div>
        </header>
    );
};

export default Header;

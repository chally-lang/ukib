
import {socials}  from '@/constants';

const Footer = () => {
    return (
        <footer>
            <div className="bg-s2 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-full flex-col items-center justify-center">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="mt-20 grid grid-cols-2 items-center gap-2 lg:grid-cols-3"></header>

                       
                            <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
                                <p className=" text-p1 opacity-70">
                                    Copyright, Elib-Hub
                                </p>
                            </div>
                            <div className="flex items-center justify-center sm:ml-auto">
                                <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
                                    Privacy Policy
                                </p>
                                <p className="text-p5 transition-all duration-500 hover:text-p1">
                                    Terms of Use
                                </p>
                            </div>

                            <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
                                {socials.map(({ id, url, icon, title }) => (
                                    <li key={id}>
                                        <a href={url} className="social-icon">
                                            <img
                                                src={icon}
                                                alt={title}
                                                className="size-1/3 object-contain"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                       
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;


import { Link } from '@inertiajs/react';
import elib from "@/images/elib.png";


export default function Guest({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-s1 pt-6 sm:justify-center sm:pt-0 dark:bg-s1">
            <div>
                <Link href="/">
                    
                    <img src={elib} width={130} height={70} alt="logo" className="fill-current text-p1"  />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-s2 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                {children}
            </div>
        </div>
    );
}

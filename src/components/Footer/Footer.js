import { NavLink } from "react-router-dom";
import Logo from "../../images/synergieoi.png";

export default function Footer(){
    return(
        <>
        <footer className="bg-transparent rounded-lg shadow-lg dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <NavLink to="#" className="mr-4 hover:underline md:mr-6 ">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="mr-4 hover:underline md:mr-6 ">Licensing</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="hover:underline">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>
        </>
    )
}
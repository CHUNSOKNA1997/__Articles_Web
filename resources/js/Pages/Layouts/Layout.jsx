import React from "react";
import { usePage } from "@inertiajs/react";
import { Home, Copy, LogOut, Lock } from "lucide-react";
import { Link } from "@inertiajs/react";

const Layout = ({ children }) => {
    const { auth } = usePage().props;

    return (
        <div>
            <aside
                id="sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                href={route("admin.posts.index")}
                                className={`flex items-center p-2 text-white rounded-lg dark:hover:bg-gray-700 group ${
                                    route().current("admin.posts.index")
                                        ? "bg-gray-700"
                                        : ""
                                }`}
                            >
                                <Home className="w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-200 group-hover:text-white dark:group-hover:text-white" />
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>

                        {/* Conditionally render Sign In / Sign Up based on user authentication */}
                        {!auth.user ? (
                            <>
                                <li>
                                    <Link
                                        href="#"
                                        className={`flex items-center p-2 text-white rounded-lg dark:hover:bg-gray-700 group ${
                                            route().current("login")
                                                ? "bg-gray-700"
                                                : ""
                                        }`}
                                    >
                                        <Lock className="shrink-0 w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-200 group-hover:text-white dark:group-hover:text-white" />
                                        <span className="flex-1 ms-3 whitespace-nowrap">
                                            Sign In
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={`flex items-center p-2 text-white rounded-lg dark:hover:bg-gray-700 group ${
                                            route().current("register")
                                                ? "bg-gray-700"
                                                : ""
                                        }`}
                                    >
                                        <LogOut className="shrink-0 w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-200 group-hover:text-white dark:group-hover:text-white" />
                                        <span className="flex-1 ms-3 whitespace-nowrap">
                                            Sign Up
                                        </span>
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                {/* If authenticated, show logout button */}
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <Link
                                        method="post"
                                        as="button"
                                        href={route("logout")}
                                        className="flex items-center justify-start w-full p-2 text-white rounded-lg dark:hover:bg-gray-700 group hover:cursor-pointer"
                                    >
                                        <LogOut className="shrink-0 w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-200 group-hover:text-white dark:group-hover:text-white" />
                                        <span className="ms-3 whitespace-nowrap">
                                            Logout
                                        </span>
                                    </Link>
                                </div>
                            </>
                        )}
                    </ul>
                </div>
            </aside>

            <main className="ml-64">
                <div>{children}</div>
            </main>
        </div>
    );
};

export default Layout;

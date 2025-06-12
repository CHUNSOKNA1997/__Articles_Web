import React, { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { router, usePage } from "@inertiajs/react";

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const { url } = usePage();

    const isActive = (path) => url === path;

    const linkClasses = (active) =>
        `block py-2 px-4 rounded transition-colors font-semibold hover:cursor-pointer ${
            active ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
        }`;

    const handleNavigate = (routeName, path) => {
        setIsMenuOpen(false);
        router.visit(route(routeName));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 h-[80px] z-50 bg-gray-900 border-b border-gray-800 flex items-center">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <button
                        onClick={() => handleNavigate("posts", "/")}
                        className="text-2xl font-bold text-white"
                    >
                        Krumuk<span className="text-blue-500">NewsV2</span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 font-medium text-sm">
                        <button
                            onClick={() => handleNavigate("posts", "/")}
                            className={linkClasses(isActive("/"))}
                        >
                            Home
                        </button>
                        <button
                            onClick={() =>
                                handleNavigate("posts.contact", "/contact")
                            }
                            className={linkClasses(isActive("/contact"))}
                        >
                            Contact
                        </button>
                        <button
                            onClick={() =>
                                handleNavigate(
                                    "posts.privacy-and-policy",
                                    "/privacy-and-policy"
                                )
                            }
                            className={linkClasses(
                                isActive("/privacy-and-policy")
                            )}
                        >
                            Privacy & Policy
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden hover:cursor-pointer"
                    >
                        {isMenuOpen ? (
                            <XIcon className="h-6 w-6 text-white" />
                        ) : (
                            <MenuIcon className="h-6 w-6 text-white" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute top-[80px] left-0 right-0 bg-gray-900 border-t border-gray-800 py-4 transition-all duration-300 md:hidden">
                        <div className="flex flex-col space-y-2 px-4">
                            <button
                                onClick={() => handleNavigate("posts", "/")}
                                className={linkClasses(isActive("/"))}
                            >
                                Home
                            </button>
                            <button
                                onClick={() =>
                                    handleNavigate("posts.contact", "/contact")
                                }
                                className={linkClasses(isActive("/contact"))}
                            >
                                Contact
                            </button>
                            <button
                                onClick={() =>
                                    handleNavigate(
                                        "posts.privacy-and-policy",
                                        "/privacy-and-policy"
                                    )
                                }
                                className={linkClasses(
                                    isActive("/privacy-and-policy")
                                )}
                            >
                                Privacy & Policy
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-grow pt-[80px]">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 text-sm">
                <div className="container mx-auto px-4 py-6 text-center">
                    &copy; {new Date().getFullYear()} KrumukNewsV2. All rights
                    reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;

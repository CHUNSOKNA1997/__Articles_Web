import React, { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { router, usePage } from "@inertiajs/react";

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const { url } = usePage();

    const isActive = (path) => url === path;

    const linkClasses = (active) =>
        `hover:cursor-pointer transition-colors ${
            active ? "text-blue-400" : "text-gray-400 hover:text-blue-400"
        }`;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 h-[100px] z-50 bg-gray-900 border-b border-gray-800 flex justify-between items-center">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <button
                                onClick={() => router.visit(route("posts"))}
                                className="text-xl font-bold text-white hover:cursor-pointer"
                            >
                                Krumuk
                                <span className="text-blue-500">NewsV2</span>
                            </button>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8 font-semibold  ">
                            <button
                                onClick={() => router.visit(route("posts"))}
                                className={linkClasses(isActive("/"))}
                            >
                                Home
                            </button>
                            <button
                                onClick={() =>
                                    router.visit(route("posts.contact"))
                                }
                                className={linkClasses(isActive("/contact"))}
                            >
                                Contact
                            </button>
                            <button
                                onClick={() =>
                                    router.visit(
                                        route("posts.privacy-and-policy")
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
                        <div className="md:hidden py-4 border-t border-gray-800">
                            <div className="flex flex-col space-y-4">
                                <a
                                    href="/"
                                    className={linkClasses(isActive("/"))}
                                >
                                    Home
                                </a>
                                <a
                                    href="/contact"
                                    className={linkClasses(
                                        isActive("/contact")
                                    )}
                                >
                                    Contact
                                </a>
                                <a
                                    href="/privacy-and-policy"
                                    className={linkClasses(
                                        isActive("/privacy-and-policy")
                                    )}
                                >
                                    Privacy & Policy
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Main Content */}
            <main className="h-full mt-20 flex-grow">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white flex justify-center mt-auto">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center">
                        <p>
                            &copy; {new Date().getFullYear()} KrumukNewsV2. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

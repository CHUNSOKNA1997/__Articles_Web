import React, { useState } from "react";
import { SearchIcon, MenuIcon, XIcon } from "lucide-react";

const FrontLayout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a
                                href="/"
                                className="text-xl font-bold text-white"
                            >
                                Krumuk
                                <span className="text-blue-500">NewsV2</span>
                            </a>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            <a
                                href="/"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                Contact
                            </a>
                            <a
                                href="/contact"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                Privacy & Policy
                            </a>
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
                                    className="text-white hover:text-blue-400 transition-colors"
                                >
                                    Home
                                </a>
                                <a
                                    href="/about"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    Contact
                                </a>
                                <a
                                    href="/contact"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    Privacy & Policy
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Main Content */}
            <main className="h-full mt-12">{children}</main>

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

export default FrontLayout;

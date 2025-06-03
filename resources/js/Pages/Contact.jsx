import React from "react";

const Contact = () => {
    return (
        <div className="max-h-screen bg-gray-900 pt-24 pb-54 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-2/3">
                        <header className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Contact Us
                            </h1>
                            <p className="text-lg text-gray-400">
                                Get in touch with us using the information below
                            </p>
                        </header>
                        <section className="bg-gray-800 rounded-md p-6 space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold text-white mb-2">
                                    Email
                                </h2>
                                <a
                                    href="mailto:chun.sokna.1222@gmail.com"
                                    className="text-blue-400 hover:text-blue-300"
                                >
                                    chun.sokna.1222@gmail.com
                                </a>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-white mb-2">
                                    Phone
                                </h2>
                                <a
                                    href="tel:097 531 0355"
                                    className="text-blue-400 hover:text-blue-300"
                                >
                                    (+855) 97 531 0355
                                </a>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-white mb-2">
                                    Address
                                </h2>
                                <p className="text-gray-300">
                                    Russian Federation Boulevard, Toul Kork,
                                    Phnom Penh, Cambodia.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

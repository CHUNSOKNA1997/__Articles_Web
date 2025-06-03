import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-900 pt-24 pb-10 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-2/3">
                        <header className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Contact Us
                            </h1>
                            <p className="text-lg text-gray-400">
                                We would love to hear from you!
                            </p>
                        </header>
                        <section className="bg-gray-800 rounded-xl p-6">
                            <form className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 hover:cursor-pointer"
                                >
                                    Send Message
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

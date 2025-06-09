import React from "react";
import { Head } from "@inertiajs/react";

const PrivacyAndPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-900 pt-24 pb-20 px-4">
            <Head title="Privacy & Policy" />
            <div className="container mx-auto max-w-6xl">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-400">
                        Learn how we collect, use, and protect your data when
                        you use our news platform.
                    </p>
                </header>

                <div className="bg-gray-800 rounded-md p-6 space-y-12">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Information We Collect
                        </h2>
                        <p className="text-gray-300 mb-4">
                            When you visit our news website, we may collect
                            certain information about your visit, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                            <li>Your IP address and browser information</li>
                            <li>Pages you view on our website</li>
                            <li>
                                Information you voluntarily provide through
                                forms or subscriptions
                            </li>
                            <li>
                                Comments and interactions on our news articles
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            How We Use Your Information
                        </h2>
                        <p className="text-gray-300 mb-4">
                            We use the collected information to:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                            <li>
                                Deliver relevant news content and personalized
                                experiences
                            </li>
                            <li>
                                Improve our news coverage and website
                                functionality
                            </li>
                            <li>
                                Send newsletters and updates (with your consent)
                            </li>
                            <li>Analyze website traffic and user engagement</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Data Protection
                        </h2>
                        <p className="text-gray-300">
                            We implement appropriate security measures to
                            protect your personal information. Your data is
                            encrypted and stored securely, and we do not share
                            your personal information with third parties without
                            your explicit consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Cookies Policy
                        </h2>
                        <p className="text-gray-300">
                            Our website uses cookies to enhance your browsing
                            experience and analyze website traffic. You can
                            control cookie preferences through your browser
                            settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Contact Us
                        </h2>
                        <p className="text-gray-300">
                            If you have any questions about our privacy policy,
                            please contact us at{" "}
                            <a
                                href="mailto:chun.sokna.1222@gmail.com"
                                className="text-blue-400 hover:text-blue-300"
                            >
                                chun.sokna.1222@gmail.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyAndPolicy;

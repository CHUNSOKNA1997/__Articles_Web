import React from "react";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submitCallback = (e) => {
        e.preventDefault();
        post(route("register"), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast.success("Successfully registered!", {
                    autoClose: 3000,
                });
            },
            onError: () => {
                setData("password", "");
                setData("password_confirmation", "");
            },
        });
    };

    return (
        <div className="min-h-screen flex">
            {/* Toast Container */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="dark"
            />

            {/* Left Section: Branding or Image */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-700 to-indigo-900 items-center justify-center text-white p-10">
                <div className="text-center space-y-8">
                    <h1 className="text-5xl font-bold tracking-tight">
                        Join Our Community
                    </h1>
                    <p className="text-xl text-gray-200/90 max-w-md mx-auto leading-relaxed">
                        Create an account to start sharing your stories and
                        connecting with our vibrant community.
                    </p>
                    <div className="flex flex-col items-center space-y-4">
                        <span className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            KrumukNewsV2
                        </span>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Right Section: Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-900 p-6">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-white">
                            Create your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-400">
                            Already registered?{" "}
                            <Link
                                href={route("login")}
                                className="text-blue-400 hover:underline"
                            >
                                Login here
                            </Link>
                        </p>
                    </div>

                    <form
                        onSubmit={submitCallback}
                        className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg"
                    >
                        <div className="grid gap-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Name
                                </label>
                                <input
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="mt-1 w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.name && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Email Address
                                </label>
                                <input
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="mt-1 w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.email && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Password
                                </label>
                                <input
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="mt-1 w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.password && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    id="password_confirmation"
                                    type="password"
                                    placeholder="Confirm your password"
                                    className="mt-1 w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.password_confirmation && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.password_confirmation}
                                    </div>
                                )}
                            </div>
                        </div>
                        <button
                            disabled={processing}
                            type="submit"
                            className={`w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${
                                processing
                                    ? "opacity-75 cursor-not-allowed"
                                    : "hover:cursor-pointer"
                            }`}
                        >
                            {processing ? "Registering..." : "Register"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

Register.layout = (page) => page;
export default Register;

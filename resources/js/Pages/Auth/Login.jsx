import React from "react";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import { Head } from "@inertiajs/react";

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember_me: false,
    });

    const handleChange = (e) => {
        setData(
            e.target.name,
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        post(route("login"), {
            onSuccess: () => {
                toast.success("Login successful", {
                    autoClose: 3000,
                });
            },
            onError: (error) => {
                toast.error("Login failed. Please check your credentials.", {
                    autoClose: 3000,
                });
            },
        });
    };

    return (
        <div className="min-h-screen flex">
            <Head title="Login" />
            {/* Left Section: Branding or Image */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-700 to-indigo-900 items-center justify-center text-white p-10">
                <div className="text-center space-y-8">
                    <h1 className="text-5xl font-bold tracking-tight">
                        Welcome Back
                    </h1>
                    <p className="text-xl text-gray-200/90 max-w-md mx-auto leading-relaxed">
                        Log in to manage your posts and access exclusive
                        features designed just for you.
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
                            Login to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-400">
                            Welcome! Please sign in to your account.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg"
                    >
                        <div className="grid gap-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={data.email}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.email && (
                                    <p className="text-xs text-red-500">
                                        {errors.email}
                                    </p>
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
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={data.password}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.password && (
                                    <p className="text-xs text-red-500">
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                checked={data.remember_me}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                            />
                            <label
                                htmlFor="remember_me"
                                className="ml-2 text-sm text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:cursor-pointer"
                        >
                            {processing ? "Logging in..." : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

Login.layout = (page) => page;

export default Login;

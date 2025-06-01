import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail, LogIn } from "lucide-react";
import { Link, useForm } from "@inertiajs/react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Checkbox } from "../../components/ui/checkbox";

const Login = ({ status, canResetPassword }) => {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm shadow-2xl">
                    <CardHeader className="space-y-2 text-center">
                        <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                            <LogIn className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-white">
                            Welcome Back
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                            Sign in to your account to continue
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        {/* Status Message */}
                        {status && (
                            <Alert className="bg-green-900/20 border-green-800 text-green-300">
                                <AlertDescription>{status}</AlertDescription>
                            </Alert>
                        )}

                        {/* Display validation errors */}
                        {Object.keys(errors).length > 0 && (
                            <Alert className="bg-red-900/20 border-red-800 text-red-300">
                                <AlertDescription>
                                    {Object.values(errors)[0]}
                                </AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email Field */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="text-gray-300"
                                >
                                    Email Address
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="pl-10 bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your email"
                                        required
                                        autoComplete="email"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-400 text-sm">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="password"
                                    className="text-gray-300"
                                >
                                    Password
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <Input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className="pl-10 pr-10 bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your password"
                                        required
                                        autoComplete="current-password"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-4 h-4" />
                                        ) : (
                                            <Eye className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-400 text-sm">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="remember"
                                        checked={data.remember}
                                        onCheckedChange={(checked) =>
                                            setData("remember", checked)
                                        }
                                        className="border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                                    />
                                    <Label
                                        htmlFor="remember"
                                        className="text-sm text-gray-300 cursor-pointer"
                                    >
                                        Remember me
                                    </Label>
                                </div>
                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        Forgot password?
                                    </Link>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processing ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Signing in...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center space-x-2">
                                        <LogIn className="w-4 h-4" />
                                        <span>Sign In</span>
                                    </div>
                                )}
                            </Button>
                        </form>

                        {/* Sign Up Link */}
                        <div className="text-center pt-4 border-t border-gray-700">
                            <p className="text-gray-400 text-sm">
                                Don't have an account?{" "}
                                <Link
                                    href={route("register")}
                                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                                >
                                    Sign up here
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer */}
                <div className="text-center mt-8 text-gray-500 text-sm">
                    <p>&copy; 2025 Your Company. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

Login.layout = (page) => page;
export default Login;

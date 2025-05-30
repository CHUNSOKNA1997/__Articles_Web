import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { router, useForm } from "@inertiajs/react";

const Create = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        content: "",
        author: "",
        image: null,
    });

    const [previewPath, setPreviewPath] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("image", file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewPath(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.posts.store"), {
            forceFormData: true,
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                reset();
                setPreviewPath(null);
            },
        });
    };

    const dashboardCallBack = () => {
        router.visit(route("admin.posts.index"));
    };

    return (
        <div className="min-w-screen h-screen bg-gray-900 p-6 flex flex-col items-center">
            <main className="w-1/2 mt-12">
                <div className="flex justify-between items-center">
                    <button
                        type="button"
                        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors duration-150 hover:cursor-pointer"
                        onClick={dashboardCallBack}
                    >
                        <ChevronLeft size={24} />
                        <span>Back to Dashboard</span>
                    </button>
                    <h1 className="text-3xl font-bold text-white mb-6">
                        Create New Post
                    </h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300 mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter post title"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-2">
                            Content
                        </label>
                        <textarea
                            name="content"
                            value={data.content}
                            onChange={(e) => setData("content", e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter post content"
                            rows="4"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-2">
                            Author
                        </label>
                        <input
                            type="text"
                            name="author"
                            value={data.author}
                            onChange={(e) => setData("author", e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter author name"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600 relative"
                        >
                            {previewPath ? (
                                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                    <img
                                        src={previewPath}
                                        alt="Preview"
                                        className="max-w-full max-h-full object-contain rounded-lg"
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        className="w-8 h-8 mb-4 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-400">
                                        <span className="font-semibold">
                                            Click to upload
                                        </span>{" "}
                                        or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        SVG, PNG, JPG or GIF
                                    </p>
                                </div>
                            )}
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                        </label>
                    </div>
                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
                            disabled={processing}
                        >
                            Add Post
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default Create;

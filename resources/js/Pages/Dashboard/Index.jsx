import { router } from "@inertiajs/react";
import React from "react";
import { confirmDelete, showDeletedAlert } from "./utils/confirmDelete";
import { CopyPlus } from "lucide-react";
import { usePage } from "@inertiajs/react";
import Layout from "../Layouts/Layout";

const Index = ({ posts = [] }) => {
    const { auth } = usePage().props;

    const postsData = posts.data || [];

    const handleCreateNewPost = () => {
        router.visit("/admin/posts/create");
    };

    const viewCallBack = (post) => {
        router.visit(
            route("admin.posts.show", {
                post: post.uuid,
            })
        );
    };

    const editCallBack = (post) => {
        router.visit(
            route("admin.posts.edit", {
                post: post.uuid,
            })
        );
    };

    const deleteCallBack = async (post) => {
        const result = await confirmDelete();

        if (result.isConfirmed) {
            router.visit(
                route("admin.posts.destroy", {
                    post: post.uuid,
                }),
                {
                    method: "delete",
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        showDeletedAlert();
                    },
                }
            );
        }
    };
    return (
        <div className="min-h-screen bg-gray-900 p-6">
            {/* Dashboard Header */}
            <header className="mb-6 flex justify-between items-center mt-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                    <p className="text-gray-300 text-xl">
                        Welcome back, {auth.user.name}! Here's a summary of your
                        posts.
                    </p>
                </div>

                <button
                    onClick={handleCreateNewPost}
                    type="button"
                    className="flex gap-2 items-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-sm px-4 py-2 transition-colors duration-150 hover:cursor-pointer"
                >
                    <CopyPlus size={20} />
                    <span>Create New Post</span>
                </button>
            </header>

            {/* Posts Table */}
            <div className="bg-gray-800 rounded-2xl shadow p-4">
                <div className="overflow-x-auto rounded-md">
                    <table className="w-full text-sm text-left text-gray-300">
                        <thead className="text-xs uppercase bg-gray-700 text-gray-200">
                            <tr>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Author</th>
                                <th className="px-6 py-3">Comment Count</th>
                                <th className="px-6 py-3 text-left w-[100px]">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {postsData.length > 0 ? (
                                postsData.map((post) => (
                                    <tr
                                        key={post.uuid}
                                        className="bg-gray-900 border-b border-gray-700 hover:bg-gray-800"
                                    >
                                        <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                            {post.title}
                                        </td>
                                        <td className="px-6 py-4">
                                            {post.author}
                                        </td>
                                        <td className="px-6 py-4">
                                            {post.comments_count ?? 0}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-end space-x-4">
                                                <button
                                                    onClick={() =>
                                                        viewCallBack(post)
                                                    }
                                                    className="text-sm font-medium text-green-400 hover:underline hover:cursor-pointer"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        editCallBack(post)
                                                    }
                                                    className="text-sm font-medium text-blue-400 hover:underline hover:cursor-pointer"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        deleteCallBack(post)
                                                    }
                                                    className="text-sm font-medium text-red-400 hover:underline hover:cursor-pointer"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="px-6 py-4 text-center text-gray-400"
                                    >
                                        There are no posts available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

Index.layout = (page) => <Layout children={page} />;

export default Index;

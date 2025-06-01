import React from "react";
import { router } from "@inertiajs/react";
import { ChevronLeft, MessageSquare, Calendar } from "lucide-react";

const Show = ({ post, comments = [] }) => {
    const commentData = comments.data || [];

    console.log(commentData);
    const handleBack = () => {
        router.visit(route("admin.posts.index"));
    };

    const postData = post.data || {};

    console.log(postData);
    return (
        <div className="min-h-screen bg-gray-900 p-6">
            {/* Back Button */}
            <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors duration-150 hover:cursor-pointer"
            >
                <ChevronLeft size={20} />
                <span>Back to Posts</span>
            </button>

            {/* Post Content */}
            <div className="bg-gray-800 rounded-2xl shadow p-6 space-y-6">
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-white">
                        {postData.title}
                    </h1>
                    <div className="flex items-center gap-4 text-gray-400">
                        <span>By {postData.author}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>Published: {postData.created_at}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>Updated: {postData.updated_at}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <MessageSquare size={16} />
                            <span>{postData.comment_count ?? 0} comments</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6">
                    {postData.image_path && (
                        <div className="w-1/2">
                            <img
                                src={postData.image_path}
                                alt={postData.title}
                                className="w-full h-auto rounded-lg object-cover max-h-[500px]"
                            />
                        </div>
                    )}

                    <div className="prose prose-invert w-1/2">
                        <p className="text-gray-300 whitespace-pre-wrap">
                            {postData.content}
                        </p>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="border-t border-gray-700 pt-6 mt-8">
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Comments
                    </h2>
                    {post.comments && post.comments.length > 0 ? (
                        <div className="space-y-4">
                            {post.comments.map((comment) => (
                                <div
                                    key={comment.id}
                                    className="bg-gray-900 rounded-lg p-4 space-y-2"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-white">
                                            {comment.author}
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            {comment.created_at}
                                        </span>
                                    </div>
                                    <p className="text-gray-300">
                                        {comment.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-400">No comments yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

Show.layout = (page) => page;
export default Show;

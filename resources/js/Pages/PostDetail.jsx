import React from "react";
import { Link, useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

const PostDetail = ({ post, latestPosts, comment }) => {
    const postData = post?.data;
    const commentData = comment?.data || [];
    const {
        data,
        setData,
        post: submit,
        processing,
        errors,
        reset,
    } = useForm({
        author_name: "",
        content: "",
        post_id: postData?.id || null,
    });

    const handleCommentCallBack = (e) => {
        e.preventDefault();
        if (!postData) return;

        submit(route("admin.comments.store", postData.uuid), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                console.log("Form errors:", errors);
            },
        });
    };

    if (!postData) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <p className="text-gray-400 text-xl font-medium">
                    Post not found.
                </p>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-gray-900 pt-24 pb-10 px-4">
            <Head title={postData.title} />
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        {/* Back Button */}
                        <Link
                            href="/"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition group"
                        >
                            <svg
                                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back to Articles
                        </Link>

                        {/* Article Header */}
                        <header className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {postData.title}
                            </h1>
                            <div className="flex items-center text-gray-400 space-x-3">
                                <span className="text-lg font-medium">
                                    By {postData.author}
                                </span>
                                <span>•</span>
                                <time className="text-gray-500">
                                    {postData.created_at}
                                </time>
                            </div>
                        </header>

                        {/* Featured Image */}
                        {postData.image_path && (
                            <div className="rounded-2xl overflow-hidden mb-12 bg-gray-800 shadow-2xl">
                                <img
                                    src={postData.image_path}
                                    alt={postData.title}
                                    className="w-full h-auto max-h-[600px] object-contain"
                                    loading="lazy"
                                />
                            </div>
                        )}

                        {/* Article Content */}
                        <section className="prose prose-lg prose-invert max-w-none text-gray-300 space-y-6 text-base leading-relaxed">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: postData.content,
                                }}
                            />
                        </section>

                        {/* Comments Section */}
                        <section className="mt-12 bg-gray-800 rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-white mb-6">
                                Comments
                            </h2>

                            {/* Comment Form */}
                            <form
                                className="space-y-4 mb-8"
                                onSubmit={handleCommentCallBack}
                            >
                                <div>
                                    <label
                                        htmlFor="author_name"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="author_name"
                                        value={data.author_name}
                                        onChange={(e) =>
                                            setData(
                                                "author_name",
                                                e.target.value
                                            )
                                        }
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your name"
                                    />
                                    {errors.author_name && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.author_name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="content"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Comment
                                    </label>
                                    <textarea
                                        id="content"
                                        rows="4"
                                        value={data.content}
                                        onChange={(e) =>
                                            setData("content", e.target.value)
                                        }
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                                        placeholder="Write your comment here..."
                                    ></textarea>
                                    {errors.content && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.content}
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={
                                        processing ||
                                        !data.author_name.trim() ||
                                        !data.content.trim()
                                    }
                                >
                                    {processing
                                        ? "Submitting..."
                                        : "Submit Comment"}
                                </button>
                            </form>

                            {/* Comment List */}
                            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                                {commentData.length > 0 ? (
                                    commentData.map((comment) => (
                                        <div
                                            key={comment.id}
                                            className="bg-gray-700 rounded-lg p-4"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-white font-medium">
                                                    {comment.author_name}
                                                </h3>
                                                <time className="text-gray-400 text-sm">
                                                    {comment.created_at}
                                                </time>
                                            </div>
                                            <p className="text-gray-400 text-sm">
                                                {comment.content}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8">
                                        <p className="text-gray-400">
                                            No comments yet. Be the first to
                                            comment!
                                        </p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar: Latest Posts */}
                    <aside className="lg:w-1/3 mt-12 lg:mt-0">
                        <div className="sticky top-24">
                            <h2 className="text-2xl font-bold text-white mb-6">
                                Latest Posts
                            </h2>
                            <div className="space-y-6">
                                {latestPosts?.map((latestPost) => (
                                    <Link
                                        key={latestPost.id}
                                        href={`/posts/${latestPost.uuid}`}
                                        className="block group"
                                    >
                                        <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition duration-300">
                                            {latestPost.image_path && (
                                                <div className="w-full h-48">
                                                    <img
                                                        src={`/storage/${latestPost.image_path}`}
                                                        alt={latestPost.title}
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            )}
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition">
                                                    {latestPost.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm">
                                                    {latestPost.created_at}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
};

export default PostDetail;

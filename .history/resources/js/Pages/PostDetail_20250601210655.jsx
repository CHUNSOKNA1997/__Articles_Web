import React from "react";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react"; // Make sure this import exists

const PostDetail = ({ post, latestPosts }) => {
    const {
        data,
        setData,
        post: submit,
        processing,
        errors,
        reset,
    } = useForm({
        name: "",
        description: "",
    });

    const handleCommentCallBack = (e) => {
        e.preventDefault();
        
        submit("POST", `/posts/${postData.uuid}/comments`, {
            onSuccess: () => {
                reset();
            },
        });
    };

    const postData = post?.data;
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
                            <form
                                className="space-y-4"
                                onSubmit={handleCommentCallBack}
                            >
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
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="comment"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Comment
                                    </label>
                                    <textarea
                                        id="comment"
                                        rows="4"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                                        placeholder="Write your comment here..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                                >
                                    Submit Comment
                                </button>
                            </form>
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

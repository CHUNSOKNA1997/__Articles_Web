import React from "react";
import { Link } from "@inertiajs/react";
import { Skeleton } from "@/components/ui/skeleton";

const ArticleGrid = ({ posts = [], isLoading = true }) => {
    const postData = (Array.isArray(posts) ? posts : posts?.data || []).sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    const ArticleSkeleton = () => (
        <div className="bg-[#1E293B] rounded-xl overflow-hidden shadow-md">
            <Skeleton className="h-72 w-full" />
            <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-4 w-1/2" />
            </div>
        </div>
    );

    return (
        <section className="bg-[#0F172A] px-6 md:px-20 py-10 min-h-screen text-white">
            <h2 className="text-3xl font-bold mb-6">Latest News</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {isLoading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <ArticleSkeleton key={index} />
                    ))
                ) : postData && postData.length > 0 ? (
                    postData.map((post, index) => (
                        <Link
                            href={`/posts/${post.uuid}`}
                            key={post.id || index}
                            className="group bg-[#1E293B] rounded-xl overflow-hidden shadow-md hover:bg-gray-700 transition duration-300 hover:cursor-pointer"
                        >
                            {post.image_path && (
                                <div className="aspect-w-16 aspect-h-9 h-72">
                                    <img
                                        src={post.image_path}
                                        alt={post.title || "Article image"}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            )}
                            <div className="p-4">
                                <h3 className="text-lg font-bold leading-tight group-hover:text-blue-400 transition">
                                    {post.title || "Untitled"}
                                </h3>
                                <p className="mt-3 text-xs text-slate-400">
                                    {post.author || "Unknown Author"} •{" "}
                                    {post.created_at || "Unknown Date"}
                                </p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-slate-400">No articles found.</p>
                )}
            </div>
        </section>
    );
};

export default ArticleGrid;

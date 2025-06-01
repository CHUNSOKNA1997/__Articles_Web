import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";

export function ArticleCard({ posts = [] }) {
    const [mainPost, ...secondaryPosts] = posts.slice(0, 3);

    console.log("##image: ", mainPost?.image_path);

    return (
        <section className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Featured Blog Post */}
                {mainPost && (
                    <Card className="lg:col-span-2 group cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                        <div className="relative overflow-hidden">
                            <div className="aspect-[16/9] relative">
                                <img
                                    src={`http://127.0.0.1:8000/storage/${mainPost.image_path}`}
                                    alt={mainPost.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                            </div>
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-md text-sm font-medium shadow-sm">
                                    Blog
                                </span>
                            </div>
                        </div>

                        <CardHeader className="pb-3 pt-5">
                            <CardTitle className="text-2xl font-bold line-clamp-2 leading-tight text-gray-900 dark:text-white hover:text-blue-600 transition-colors duration-200">
                                {mainPost.title}
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="pt-0 pb-5">
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${mainPost.author}&background=3b82f6&color=fff&size=32`}
                                    alt={mainPost.author}
                                    className="w-8 h-8 rounded-full mr-3"
                                />
                                <div className="flex items-center">
                                    <span className="font-medium text-gray-900 dark:text-white">
                                        {mainPost.author}
                                    </span>
                                    <span className="mx-2 text-gray-400">
                                        •
                                    </span>
                                    <time className="text-gray-500">
                                        {mainPost.created_at}
                                    </time>
                                </div>
                            </div>

                            {/* Read More Link */}
                            <div className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                                <span>Read full article</span>
                                <svg
                                    className="w-4 h-4 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Recent Blog Posts */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                        Recent Posts
                    </h3>
                    {secondaryPosts.map((post, index) => (
                        <Card
                            key={post.id || index}
                            className="group cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="flex p-4">
                                <div className="w-20 h-20 flex-shrink-0 relative overflow-hidden rounded-lg">
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${post.image_path}`}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex-1 ml-4 min-w-0">
                                    <CardTitle className="text-sm font-semibold line-clamp-2 leading-snug text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-200 mb-2">
                                        {post.title}
                                    </CardTitle>
                                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                        <img
                                            src={`https://ui-avatars.com/api/?name=${post.author}&background=6b7280&color=fff&size=20`}
                                            alt={post.author}
                                            className="w-5 h-5 rounded-full mr-2"
                                        />
                                        <span>{post.author}</span>
                                        <span className="mx-2">•</span>
                                        <time>{post.created_at}</time>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

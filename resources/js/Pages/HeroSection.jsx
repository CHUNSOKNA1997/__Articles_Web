import React from "react";

export function HeroSection({ posts = [] }) {
    // Get the first 3 posts for the hero section
    const [mainPost, ...secondaryPosts] = posts.slice(0, 3);

    return (
        <section className="pt-24 pb-10 px-4 bg-gray-900">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Featured Article */}
                    {mainPost && (
                        <div className="lg:col-span-2 relative overflow-hidden rounded-lg group">
                            <div className="relative h-[400px] overflow-hidden">
                                <img
                                    src={mainPost.image_path}
                                    alt={mainPost.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 hover:cursor-pointer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {mainPost.title}
                                </h3>
                                <div className="flex items-center text-lg text-gray-400 mt-2">
                                    <span>By {mainPost.author}</span>
                                    <span className="mx-2">•</span>
                                    <span>{mainPost.created_at}</span>
                                </div>
                                <p className="text-gray-300 mt-2 line-clamp-2">
                                    {mainPost.excerpt}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Secondary Featured Articles */}
                    <div className="flex flex-col space-y-6">
                        {secondaryPosts.map((post) => (
                            <div
                                key={post.uuid}
                                className="relative overflow-hidden rounded-lg group"
                            >
                                <div className="relative h-[190px]">
                                    <img
                                        src={post.image_path}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center text-xs text-gray-400 mt-2">
                                        <span>By {post.author}</span>
                                        <span className="mx-2">•</span>
                                        <span>{post.created_at}</span>
                                    </div>
                                    <p className="text-gray-300 mt-2 text-sm line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

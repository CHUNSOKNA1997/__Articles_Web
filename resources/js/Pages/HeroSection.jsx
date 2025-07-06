import React from "react";
import { Link } from "@inertiajs/react";
import { Skeleton } from "@/components/ui/skeleton";

export function HeroSection({ posts = [] }) {
    // Get the first 3 posts for the hero section
    const [mainPost, ...secondaryPosts] = posts.slice(0, 3);

    if (!mainPost) return null;

    return (
        <section className="pt-12 pb-10 px-4 bg-gray-900">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Featured Article */}
                    <Link
                        href={`/posts/${mainPost.uuid}`}
                        className="lg:col-span-2 relative overflow-hidden rounded-lg group"
                    >
                        <div className="relative h-[500px] lg:h-[585px] overflow-hidden">
                            <img
                                src={mainPost.image_path}
                                alt={mainPost.title}
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 hover:cursor-pointer"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                {mainPost.title}
                            </h3>
                            <div className="flex items-center text-lg text-gray-300 mt-3">
                                <span>By {mainPost.author}</span>
                                <span className="mx-2">•</span>
                                <span>{mainPost.created_at}</span>
                            </div>
                            <p className="text-gray-300 mt-3 line-clamp-2 text-lg">
                                {mainPost.excerpt}
                            </p>
                        </div>
                    </Link>

                    {/* Secondary Featured Articles */}
                    <div className="flex flex-col space-y-6">
                        {secondaryPosts.map((post) => (
                            <Link
                                key={post.uuid}
                                href={`/posts/${post.uuid}`}
                                className="relative overflow-hidden rounded-lg group"
                            >
                                <div className="relative h-[280px]">
                                    <img
                                        src={post.image_path}
                                        alt={post.title}
                                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center text-sm text-gray-300 mt-2">
                                        <span>By {post.author}</span>
                                        <span className="mx-2">•</span>
                                        <span>{post.created_at}</span>
                                    </div>
                                    <p className="text-gray-300 mt-2 text-base line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const HeroSkeleton = () => (
    <section className="pt-12 pb-10 px-4 bg-gray-900">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Featured Article Skeleton */}
                <div className="lg:col-span-2 relative overflow-hidden rounded-lg">
                    <Skeleton className="h-96 w-full" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <Skeleton className="h-8 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </div>

                {/* Secondary Articles Skeleton */}
                <div className="space-y-6">
                    {Array.from({ length: 2 }).map((_, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg"
                        >
                            <Skeleton className="h-48 w-full" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <Skeleton className="h-6 w-full mb-2" />
                                <Skeleton className="h-4 w-2/3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

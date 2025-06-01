import React from "react";
import { Link } from "@inertiajs/react";

import { Card, CardContent, CardFooter } from "../components/ui/card";
import { AspectRatio } from "../components/ui/aspect-ratio";
import {
    TypographyH3,
    TypographyP,
    TypographySmall,
} from "../components/ui/typography";

export function HeroSection({ posts = [] }) {
    const [mainPost, ...secondaryPosts] = posts.slice(0, 3);

    if (!mainPost) return null;

    return (
        <section className="pt-24 pb-10 px-4 bg-gray-900">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Featured Article */}
                    <Link
                        href={`/posts/${mainPost.uuid}`}
                        className="lg:col-span-2 group"
                    >
                        <Card className="relative overflow-hidden rounded-lg cursor-pointer">
                            <AspectRatio ratio={16 / 9} className="relative">
                                <img
                                    src={mainPost.image_path}
                                    alt={mainPost.title}
                                    className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                            </AspectRatio>
                            <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <TypographyH3 className="group-hover:text-blue-400 transition-colors">
                                    {mainPost.title}
                                </TypographyH3>
                                <div className="flex items-center text-lg text-gray-300 mt-3">
                                    <span>By {mainPost.author}</span>
                                    <span className="mx-2">•</span>
                                    <span>{mainPost.created_at}</span>
                                </div>
                                <TypographyP className="mt-3 line-clamp-2 text-lg text-gray-300">
                                    {mainPost.excerpt}
                                </TypographyP>
                            </CardContent>
                        </Card>
                    </Link>

                    {/* Secondary Featured Articles */}
                    <div className="flex flex-col space-y-6">
                        {secondaryPosts.map((post) => (
                            <Link
                                key={post.uuid}
                                href={`/posts/${post.uuid}`}
                                className="group"
                            >
                                <Card className="relative overflow-hidden rounded-lg cursor-pointer">
                                    <AspectRatio
                                        ratio={16 / 9}
                                        className="relative"
                                    >
                                        <img
                                            src={post.image_path}
                                            alt={post.title}
                                            className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                                    </AspectRatio>
                                    <CardContent className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                        <TypographyH3 className="group-hover:text-blue-400 transition-colors text-xl font-bold">
                                            {post.title}
                                        </TypographyH3>
                                        <div className="flex items-center text-sm text-gray-300 mt-2">
                                            <span>By {post.author}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.created_at}</span>
                                        </div>
                                        <TypographyP className="mt-2 line-clamp-2 text-base text-gray-300">
                                            {post.excerpt}
                                        </TypographyP>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

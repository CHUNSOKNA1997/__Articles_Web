import React from "react";
import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import {
    ChevronLeft,
    MessageSquare,
    Calendar,
    User,
    Clock,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../../components/ui/avatar";

const Show = ({ post }) => {
    const handleBack = () => {
        router.visit(route("admin.posts.index"));
    };

    const postData = post.data || {};

    // Format date helper
    const formatDate = (dateString) => {
        if (!dateString) return "Unknown";
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    console.log(postData);
    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBack}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
                >
                    <ChevronLeft size={20} />
                    Back to Posts
                </Button>

                {/* Main Post Card */}
                <Card className="overflow-hidden">
                    <CardHeader className="space-y-4">
                        <div className="space-y-2">
                            <CardTitle className="text-xl font-bold leading-tight">
                                {postData.title}
                            </CardTitle>

                            {/* Post Meta Information */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-6 w-6">
                                        <AvatarFallback className="text-xs">
                                            {postData.author
                                                ?.charAt(0)
                                                .toUpperCase() || "A"}
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="font-medium">
                                        By {postData.author}
                                    </span>
                                </div>

                                <Separator
                                    orientation="vertical"
                                    className="h-4"
                                />

                                <div className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    <span>
                                        Published{" "}
                                        {formatDate(postData.created_at)}
                                    </span>
                                </div>

                                {postData.updated_at !==
                                    postData.created_at && (
                                    <>
                                        <Separator
                                            orientation="vertical"
                                            className="h-4"
                                        />
                                        <div className="flex items-center gap-1">
                                            <Clock size={14} />
                                            <span>
                                                Updated{" "}
                                                {formatDate(
                                                    postData.updated_at
                                                )}
                                            </span>
                                        </div>
                                    </>
                                )}

                                <Separator
                                    orientation="vertical"
                                    className="h-4"
                                />

                                <div className="flex items-center gap-1">
                                    <MessageSquare size={14} />
                                    <span>
                                        {postData.comments_count ?? 0} comments
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Featured Image */}
                        {postData.image_path && (
                            <div className="rounded-lg overflow-hidden">
                                <img
                                    src={postData.image_path}
                                    alt={postData.title}
                                    className="w-full h-auto object-cover max-h-[500px]"
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div className="max-w-none">
                            <div className="whitespace-pre-wrap leading-relaxed">
                                {postData.content}
                            </div>
                        </div>

                        {/* Tags/Categories (if you have them) */}
                        {/* <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Technology</Badge>
                            <Badge variant="secondary">Programming</Badge>
                        </div> */}
                    </CardContent>
                </Card>

                {/* Comments Section */}
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MessageSquare size={20} />
                            Comments ({postData.comments_count ?? 0})
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Placeholder for comments - uncomment and modify when you have comments data */}
                        {/* {post.comments && post.comments.length > 0 ? (
                            <div className="space-y-4">
                                {post.comments.map((comment) => (
                                    <Card key={comment.id} className="bg-muted/50">
                                        <CardContent className="pt-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Avatar className="h-8 w-8">
                                                        <AvatarFallback className="text-sm">
                                                            {comment.author?.charAt(0).toUpperCase() || "U"}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <span className="font-medium">{comment.author}</span>
                                                </div>
                                                <span className="text-sm text-muted-foreground">
                                                    {formatDate(comment.created_at)}
                                                </span>
                                            </div>
                                            <p className="text-foreground ml-10">
                                                {comment.content}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : ( */}
                        <div className="text-center py-8">
                            <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                            <p className="text-muted-foreground">
                                No comments yet.
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Be the first to share your thoughts!
                            </p>
                        </div>
                        {/* )} */}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

Show.layout = (page) => page;
export default Show;

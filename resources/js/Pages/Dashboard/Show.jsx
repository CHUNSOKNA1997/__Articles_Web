import React from "react";
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

const Show = ({ post, comments = [] }) => {
    const commentData = comments.data || [];
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
                                <span>
                                    {postData.comment_count ?? 0} comments
                                </span>
                            </div>
                        </div>
                    </div>

                    <Card>
                        <CardHeader>
                            <div>
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
                                            {postData.comments_count ?? 0}{" "}
                                            comments
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
                    <div className="border-t border-gray-700 pt-6 mt-8 w-1/2">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Comments
                        </h2>
                        {commentData && commentData.length > 0 ? (
                            <div className="space-y-4">
                                {commentData.map((comment) => (
                                    <div
                                        key={comment.id}
                                        className="bg-gray-900 rounded-lg p-4 space-y-2"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium text-white">
                                                {comment.author_name}
                                            </span>
                                            <span className="text-sm text-gray-400">
                                                {comment.created_at}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm">
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
        </div>
    );
};

Show.layout = (page) => page;
export default Show;

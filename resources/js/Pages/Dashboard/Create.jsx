import React, { useState } from "react";
import { ChevronLeft, Upload, ImageIcon } from "lucide-react";
import { router, useForm } from "@inertiajs/react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { Alert, AlertDescription } from "../../components/ui/alert";

const Create = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        content: "",
        author: "",
        image: null,
    });

    const [previewPath, setPreviewPath] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("image", file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewPath(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.posts.store"), {
            forceFormData: true,
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                reset();
                setPreviewPath(null);
            },
        });
    };

    const dashboardCallBack = () => {
        router.visit(route("admin.posts.index"));
    };

    return (
        <div className="min-h-screen bg-background p-6 flex flex-col items-center">
            <main className="w-full max-w-2xl mt-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        onClick={dashboardCallBack}
                    >
                        <ChevronLeft size={20} />
                        Back to Dashboard
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">
                            Create New Post
                        </CardTitle>
                        <CardDescription>
                            Fill out the form below to create a new blog post.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Title Field */}
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    placeholder="Enter post title"
                                    required
                                />
                                {errors.title && (
                                    <Alert variant="destructive">
                                        <AlertDescription>
                                            {errors.title}
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </div>

                            {/* Author Field */}
                            <div className="space-y-2">
                                <Label htmlFor="author">Author</Label>
                                <Input
                                    id="author"
                                    name="author"
                                    value={data.author}
                                    onChange={(e) =>
                                        setData("author", e.target.value)
                                    }
                                    placeholder="Enter author name"
                                    required
                                />
                                {errors.author && (
                                    <Alert variant="destructive">
                                        <AlertDescription>
                                            {errors.author}
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </div>

                            {/* Content Field */}
                            <div className="space-y-2">
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    name="content"
                                    value={data.content}
                                    onChange={(e) =>
                                        setData("content", e.target.value)
                                    }
                                    placeholder="Enter post content"
                                    rows={6}
                                    required
                                />
                                {errors.content && (
                                    <Alert variant="destructive">
                                        <AlertDescription>
                                            {errors.content}
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </div>

                            {/* Image Upload */}
                            <div className="space-y-2">
                                <Label htmlFor="image">Featured Image</Label>
                                <div className="flex items-center justify-center w-full">
                                    <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/50 hover:bg-muted transition-colors relative overflow-hidden"
                                    >
                                        {previewPath ? (
                                            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                                <img
                                                    src={previewPath}
                                                    alt="Preview"
                                                    className="max-w-full max-h-full object-contain rounded-lg"
                                                />
                                                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <div className="text-white text-sm font-medium">
                                                        Click to change image
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <Upload className="w-10 h-10 mb-4 text-muted-foreground" />
                                                <p className="mb-2 text-sm text-muted-foreground">
                                                    <span className="font-semibold">
                                                        Click to upload
                                                    </span>{" "}
                                                    or drag and drop
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    PNG, JPG, GIF up to 10MB
                                                </p>
                                            </div>
                                        )}
                                        <input
                                            id="dropzone-file"
                                            type="file"
                                            className="hidden"
                                            onChange={handleFileChange}
                                            accept="image/*"
                                        />
                                    </label>
                                </div>
                                {errors.image && (
                                    <Alert variant="destructive">
                                        <AlertDescription>
                                            {errors.image}
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end pt-4">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="min-w-[120px]"
                                >
                                    {processing ? "Creating..." : "Create Post"}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

Create.layout = (page) => page;
export default Create;

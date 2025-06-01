import React, { useState, useEffect } from "react";
import { ChevronLeft, Upload } from "lucide-react";
import { router, useForm } from "@inertiajs/react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Card, CardContent } from "../../components/ui/card";

const Edit = ({ posted }) => {
    const postedData = posted.data || [];

    const { data, setData, put, processing, errors, reset } = useForm({
        title: postedData.title,
        content: postedData.content,
        author: postedData.author,
        image: null,
    });

    const [previewPath, setPreviewPath] = useState(null);

    useEffect(() => {
        if (postedData.image_path) {
            setPreviewPath(postedData.image_path);
        }
    }, [postedData.image_path]);

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

        const formData = new FormData();
        formData.append("_method", "PUT");
        formData.append("title", data.title);
        formData.append("content", data.content);
        formData.append("author", data.author);
        if (data.image) {
            formData.append("image", data.image);
        }

        router.post(
            route("admin.posts.update", { post: postedData.uuid }),
            formData,
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    reset();
                    setPreviewPath(null);
                },
            }
        );
    };

    const dashboardCallBack = () => {
        router.visit(route("admin.posts.index"));
    };

    return (
        <div className=" h-fit p-4 flex flex-col items-center">
            <main className="w-1/2">
                <div className="flex justify-between items-center">
                    <Button
                        variant="ghost"
                        onClick={dashboardCallBack}
                        className="flex items-center gap-2 mb-6 transition-colors duration-150"
                    >
                        <ChevronLeft size={24} />
                        <span>Back to Dashboard</span>
                    </Button>
                    <h1 className="text-xl font-bold text-white mb-6">
                        Edit Selected Post
                    </h1>
                </div>

                <Card>
                    <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    className="focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter post title"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    name="content"
                                    value={data.content}
                                    onChange={(e) =>
                                        setData("content", e.target.value)
                                    }
                                    className="focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                                    placeholder="Enter post content"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="author">Author</Label>
                                <Input
                                    id="author"
                                    name="author"
                                    value={data.author}
                                    onChange={(e) =>
                                        setData("author", e.target.value)
                                    }
                                    className="focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter author name"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Image</Label>
                                <div className="flex items-center justify-center w-full">
                                    <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer relative transition-colors"
                                    >
                                        {previewPath ? (
                                            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                                <img
                                                    src={previewPath}
                                                    alt="Preview"
                                                    className="max-w-full max-h-full object-contain rounded-lg"
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <Upload className="w-8 h-8 mb-4" />
                                                <p className="mb-2 text-sm">
                                                    <span className="font-semibold">
                                                        Click to upload
                                                    </span>{" "}
                                                    or drag and drop
                                                </p>
                                                <p className="text-xs">
                                                    SVG, PNG, JPG or GIF
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
                            </div>

                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="font-semibold"
                                >
                                    {processing ? "Updating..." : "Update Post"}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

Edit.layout = (page) => page;
export default Edit;

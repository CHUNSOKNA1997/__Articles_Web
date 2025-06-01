import { router } from "@inertiajs/react";
import React, { useState } from "react";
import { confirmDelete, showDeletedAlert } from "./utils/confirmDelete";
import {
    CopyPlus,
    Home,
    FileText,
    Users,
    Settings,
    Menu,
    MoreHorizontal,
    Sun,
    Moon,
} from "lucide-react";

// Shadcn UI imports
import { Button } from "../../components/ui/button";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "../../components/ui/sidebar";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Badge } from "../../components/ui/badge";
import { ThemeProvider, useTheme } from "../../provider/theme-provider";

const Index = ({ posts = [] }) => {
    const { theme, setTheme } = useTheme();
    console.log(posts);
    const postsData = posts.data || [];

    const handleCreateNewPost = () => {
        router.visit("/admin/posts/create");
    };

    const viewCallBack = (post) => {
        router.visit(
            route("admin.posts.show", {
                post: post.uuid,
            })
        );
    };

    const editCallBack = (post) => {
        router.visit(
            route("admin.posts.edit", {
                post: post.uuid,
            })
        );
    };

    const deleteCallBack = async (post) => {
        const result = await confirmDelete();

        if (result.isConfirmed) {
            router.visit(
                route("admin.posts.destroy", {
                    post: post.uuid,
                }),
                {
                    method: "delete",
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        showDeletedAlert();
                    },
                }
            );
        }
    };

    // Sidebar navigation items
    const navigationItems = [
        {
            title: "Dashboard",
            url: "/admin",
            icon: Home,
            isActive: true,
        },
        {
            title: "Posts",
            url: "/admin/posts",
            icon: FileText,
            isActive: false,
        },
        {
            title: "Users",
            url: "/admin/users",
            icon: Users,
            isActive: false,
        },
        {
            title: "Settings",
            url: "/admin/settings",
            icon: Settings,
            isActive: false,
        },
    ];

    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                {/* Shadcn Sidebar */}
                <Sidebar>
                    <SidebarHeader>
                        <div className="flex items-center gap-2 px-4 py-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                <FileText className="h-4 w-4" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">
                                    Admin Panel
                                </span>
                                <span className="truncate text-xs">
                                    Blog Management
                                </span>
                            </div>
                        </div>
                    </SidebarHeader>

                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {navigationItems.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton
                                                asChild
                                                isActive={item.isActive}
                                            >
                                                <a href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>

                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <div className="flex items-center gap-2">
                                        <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center">
                                            <span className="text-sm font-medium">
                                                A
                                            </span>
                                        </div>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">
                                                Admin User
                                            </span>
                                            <span className="truncate text-xs">
                                                admin@example.com
                                            </span>
                                        </div>
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>

                {/* Main Content */}
                <div className="flex-1">
                    {/* Header */}
                    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                        <SidebarTrigger className="-ml-1" />
                        <div className="flex-1">
                            <h1 className="text-lg font-semibold">Dashboard</h1>
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                                setTheme(theme === "light" ? "dark" : "light")
                            }
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                        <Button onClick={handleCreateNewPost} className="gap-2">
                            <CopyPlus className="h-4 w-4" />
                            Create New Post
                        </Button>
                    </header>

                    {/* Main Content Area */}
                    <main className="flex-1 space-y-4 p-4 pt-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold tracking-tight">
                                Posts Management
                            </h2>
                            <p className="text-muted-foreground">
                                Manage all your blog posts from here
                            </p>
                        </div>

                        {/* Shadcn Table */}
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Author</TableHead>
                                        <TableHead>Comments</TableHead>
                                        <TableHead className="text-right">
                                            Actions
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {postsData.length > 0 ? (
                                        postsData.map((post) => (
                                            <TableRow key={post.uuid}>
                                                <TableCell className="font-medium">
                                                    {post.title}
                                                </TableCell>
                                                <TableCell>
                                                    {post.author}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary">
                                                        {post.comments_count ??
                                                            0}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger
                                                            asChild
                                                        >
                                                            <Button
                                                                variant="ghost"
                                                                className="h-8 w-8 p-0"
                                                            >
                                                                <span className="sr-only">
                                                                    Open menu
                                                                </span>
                                                                <MoreHorizontal className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>
                                                                Actions
                                                            </DropdownMenuLabel>
                                                            <DropdownMenuItem
                                                                onClick={() =>
                                                                    viewCallBack(
                                                                        post
                                                                    )
                                                                }
                                                            >
                                                                View post
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem
                                                                onClick={() =>
                                                                    editCallBack(
                                                                        post
                                                                    )
                                                                }
                                                            >
                                                                Edit post
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem
                                                                onClick={() =>
                                                                    deleteCallBack(
                                                                        post
                                                                    )
                                                                }
                                                                className="text-red-600"
                                                            >
                                                                Delete post
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell
                                                colSpan={4}
                                                className="h-24 text-center"
                                            >
                                                No posts found.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
};

Index.layout = (page) => page;
export default Index;

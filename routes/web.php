<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Models\Post;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $posts = Post::with('comments')->paginate(10); // or ->get()
    return Inertia::render('Home', [
        'posts' => $posts,
    ]);
});

// Inertia React page route
Route::get('/comments', [CommentController::class, 'index'])->name('comments.index');

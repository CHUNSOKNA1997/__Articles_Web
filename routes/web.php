<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PostController::class, 'post'])->name('post');
Route::get('posts/{post}', [PostController::class, 'detail'])->name('posts.detail');

Route::get('/contact', [PostController::class, 'contact'])->name('contact');

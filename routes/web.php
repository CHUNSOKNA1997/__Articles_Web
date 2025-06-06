<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PostController::class, 'post'])->name('posts');
Route::get('posts/{post}', [PostController::class, 'detail'])->name('posts.detail');

Route::get('/contact', [PostController::class, 'contact'])->name('posts.contact');
Route::get('/privacy-and-policy', [PostController::class, 'privacyAndPolicy'])->name('posts.privacy-and-policy');

// Authentication routes for admin
Route::get('/register', [AuthController::class, 'show'])->name('register');
Route::post('/register', [AuthController::class, 'store'])->name('register');
Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'authenticate']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
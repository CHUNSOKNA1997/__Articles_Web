<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

// Route::group([
//     'prefix' => 'admin',
//     'as' => 'admin.',
//     'middleware' => ['auth', 'admin'],
// ], function () {
//     Route::post('/posts/{post}/comments', [CommentController::class, 'store'])->name('comments.store');
//     Route::resources([
//         'posts' => PostController::class,
//     ]);
// });

Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
    Route::post('/posts/{post}/comments', [CommentController::class, 'store'])->name('comments.store');
    Route::resources([
        'posts' => PostController::class,
    ]);
});
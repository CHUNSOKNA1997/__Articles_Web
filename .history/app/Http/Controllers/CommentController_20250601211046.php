<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Route;

class CommentController extends Controller
{
    public function store(Request $request, Post $post)
    {
        dd($request->all());
    }
}

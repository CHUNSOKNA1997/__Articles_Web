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
        try{
            DB::beginTransaction();
            $validated = $request->validate([
                'author_name' => 'required|string|max:255',
                'content' => 'required|string',
            ]);
    
            Comment::create([
                'post_id' => $post->id,
                'author_name' => $validated['author_name'],
                'content' => $validated['content'],
            ]);
    
            return redirect()->back()->with('success', 'Comment added successfully.');
        }
    }

}

<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class CommentController extends Controller
{
    public function store(Request $request, Post $post)
    {
        try{
            DB::beginTransaction();
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'comment' => 'required|string'
            ]);
            
            $comment = new Comment([
                'author_name' => $validated['name'],
                'content' => $validated['comment'],
            ]);

            $post->comments()->save($comment);            
            return back()->with('success', 'Comment added successfully');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Failed to add comment: ' . $e->getMessage());
        }
    }
}

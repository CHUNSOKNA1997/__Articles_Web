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
        try {
            DB::beginTransaction();

            $validated = $request->validate([
                'author_name' => 'required|string|max:255',
                'content' => 'required|string',
            ]);
    
            $comment = Comment::create([
                'post_id' => $post->id,
                'author_name' => $validated['author_name'],
                'content' => $validated['content'],
            ]);
    
            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Comment added successfully.',
                'comment' => [
                    'id' => $comment->id,
                    'author_name' => $comment->author_name,
                    'content' => $comment->content,
                    'created_at' => $comment->created_at->format('Y-m-d H:i:s')
                ]
            ]);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
                'success' => false,
                'message' => 'Failed to add comment. Please try again.'
            ], 422);
        }
    }
}

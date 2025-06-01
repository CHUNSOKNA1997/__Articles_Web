<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    // List all comments
    public function index()
    {
        $comments = Comment::all();
        return response()->json($comments);
    }

    // Store a new comment
    public function store(Request $request)
    {
        $validated = $request->validate([
            'post_id' => 'nullable|exists:posts,id',
            'author_name' => 'nullable|string|max:255',
            'content' => 'required|string',
        ]);

        $comment = Comment::create($validated);
        return response()->json($comment, 201);
    }

    // Show a specific comment
    public function show($id)
    {
        $comment = Comment::findOrFail($id);
        return response()->json($comment);
    }

    // Update a comment
    public function update(Request $request, $id)
    {
        $comment = Comment::findOrFail($id);

        $validated = $request->validate([
            'post_id' => 'nullable|exists:posts,id',
            'author_name' => 'nullable|string|max:255',
            'content' => 'required|string',
        ]);

        $comment->update($validated);

        return response()->json($comment);
    }

    // Delete a comment
    public function destroy($id)
    {
        $comment = Comment::findOrFail($id);
        $comment->delete();

        return response()->json(null, 204);
    }
}

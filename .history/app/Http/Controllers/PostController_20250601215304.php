<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationData;

class PostController extends Controller
{
    //

    public function index()
    {
        $posts = Post::withCount('comments')->get();
        return Inertia::render('Dashboard/Index', [
            'posts' => PostResource::collection($posts),
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Create');
    }

        /**
     * 
     * Display the specified resource.
     * 
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return Inertia::render('Dashboard/Show', [
            'post' => new PostResource($post),
            'comments' => Comment::where('post_id', $post->id)->get(),
        ]);
    }

    /**
     * 
     * Store a newly created resource in storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        // dd($request->all());
        try {
            DB::beginTransaction();
            $validated = $request->validate([
                'title' => ['required', 'string'],
                'content' => ['required', 'string'],
                'author' => ['required', 'string'],
                'image' => ['nullable', 'image', 'max:2048'],
            ]);
            
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('articles', 'public');
                $validated['image_path'] = $imagePath;
            }
            
            Post::create($validated);
            DB::commit();
            
            return redirect()->route('admin.posts.index')
                ->with('message', 'Post created successfully');
                
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()
                ->withInput()
                ->withErrors(['error' => 'Failed to create post. ' . $e->getMessage()]);
        }
    }

    /**
     * 
     * Show the form for editing the specified resource.
     * 
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        return Inertia::render('Dashboard/Edit', [
            'posted' => new PostResource($post),
        ]);
    }

    /**
     * 
     * Update the specified resource in storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        try{
            DB::beginTransaction();
            $validated = $request->validate([
                'title' => ['required','string'],
                'content' => ['required','string'],
                'author' => ['required','string'],
                'image' => ['nullable', 'image','max:2048'],
            ]);

            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('articles', 'public');
                $validated['image_path'] = $imagePath;
            }

            $post->update($validated);

            DB::commit();

            return redirect()->route('admin.posts.index')
                ->with('message', 'Post updated successfully');
        }catch(\Exception $e){
            DB::rollBack();
            return redirect()->back()
                ->withErrors(['error' => 'Failed to update post. '. $e->getMessage()]);
        }
    }  


    /**
     * 
     * Delete the specified resource from storage.
     * 
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        try{
            DB::beginTransaction();

            $post->delete();
            DB::commit();
            
            return redirect()->route('admin.posts.index')
                ->with('message', 'Post deleted successfully');
        }catch(\Exception $e){
            DB::rollBack();
            return redirect()->back()
                ->withErrors(['error' => 'Failed to delete post. '. $e->getMessage()]);
        }
    }

    public function post()
    {
        return Inertia::render('Home', [
            'posts' => PostResource::collection(Post::all()),
        ]);
    }

    public function detail(Post $post)
{
    $latestPosts = Post::latest()
        ->take(5)
        ->get()
        ->map(function ($post) {
            return [
                'id' => $post->id,
                'uuid' => $post->uuid, // make sure uuid is available for the link
                'title' => $post->title,
                'content' => $post->content,
                'author' => $post->author,
                'image_path' => $post->image_path,
                'created_at' => $post->created_at->format('F d, Y'),
                'updated_at' => $post->updated_at->format('F d, Y'),
            ];
        });

    // Fetch related comments
    $comments = Comment::where('post_id', $post->id)
        ->latest()
        ->get()
        ->map(function ($comment) {
            return [
                'id' => $comment->id,
                'author_name' => $comment->author_name,
                'content' => $comment->content,
                'created_at' => $comment->created_at->format('F d, Y h:i A'),
            ];
        });

    return Inertia::render('PostDetail', [
        'post' => new \App\Http\Resources\PostResource($post),
        'latestPosts' => $latestPosts,
        'comment' => [
            'data' => $comments,
        ],
    ]);
}
}

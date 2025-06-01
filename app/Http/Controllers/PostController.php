<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PostController extends Controller
{
    //

    public function index(Request $request)
    {
            $search = $request->input('search');

           $post = $posts = Post::query()
    ->when($search, function ($query, $search) {
        $query->where('title', 'like', "%{$search}%");
    })
    ->get()
    ->mapInto(PostResource::class);


        return Inertia::render('Dashboard/Index', [
            'posts' => PostResource::collection($post),
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
}

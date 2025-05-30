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

    public function index()
    {
        $post = Post::all();
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
}

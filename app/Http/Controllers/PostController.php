<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PostController extends Controller
{
    //

    public function index()
    {
        return Inertia::render('Dashboard/Index');
    }

    public function create()
    {
        return Inertia::render('Dashboard/Create');
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
         try {
             DB::beginTransaction();
             $validated = $request->validate([
                 'title' => ['required', 'string'],
                 'content' => ['required', 'string'],
                 'author' => ['required', 'string'],
                 'image' => ['required', 'image', 'mimes:jpg,png,jpeg,gif,svg,webp'],
             ]);
             
             if ($request->hasFile('image')) {
                 $path = $request->file('image')->store('articles', 'public');
                 $validated['image_path'] = asset('storage/' . $path);
                 unset($validated['image']);
             }
             
             Post::create($validated);
             DB::commit();
             return redirect()->route('admin.posts.index')->with('message', 'Post created successfully');
         } catch (\Exception $e) {
             DB::rollBack();
             dd($e->getMessage());
         }
     }

}

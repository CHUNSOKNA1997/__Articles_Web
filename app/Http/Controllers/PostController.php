<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;
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
}

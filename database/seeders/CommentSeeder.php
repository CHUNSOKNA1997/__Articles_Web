<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
   public function run()
{
    Comment::create(['author_name' => 'Alice', 'content' => 'Hello from Alice!']);
    Comment::create(['author_name' => 'Bob', 'content' => 'Hey, Bob here.']);
}
}

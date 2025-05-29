<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory;

    protected $fillable = [
        'uuid',
        'title',
        'content',
        'author',
        'image_path',
    ];

    /**
     * Get the comments for the post.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * 
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    
    /**
     * Auto generate uuid for post.
     * 
     * @param \Illuminate\Database\Eloquent\Model $post
     * @return string
     */
    protected static function booted()
    {
        static::creating(function ($post) {
            $post->uuid = (string) Str::uuid();
        });
    }
}

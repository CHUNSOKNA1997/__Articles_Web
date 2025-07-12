<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return array_merge(parent::toArray($request), [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'title' => $this->title,
            'content' => $this->content,
            'author' => $this->author,
            'comment_count' => $this->comments->count(),
            'image_path' => $this->image_path ? asset('storage/' . $this->image_path) : null,
            'created_at' => $this->created_at->format('F d, Y g:iA'),
            'updated_at' => $this->updated_at->format('F d, Y g:iA'),
        ]);

    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'author_name' => $this->author_name,
            'content' => $this->content,
            'created_at' => $this->created_at->format('F d, Y g:iA'),
            'updated_at' => $this->updated_at->format('F d, Y g:iA'),
        ];
    }
}

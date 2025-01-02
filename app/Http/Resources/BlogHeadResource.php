<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Http\Resources\UserResource;

class BlogHeadResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        return [
            //we pass what we need to be returned to the browser
            'id' => $this->id,
            'title' => $this->title,
            'paragraph' => $this->paragraph,
            'role' => $this->role,
            'image_path' => $this->image_path ? Storage::url($this->image_path) : '',
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'date' => (new Carbon($this->date))->format('Y-m-d'),
            'status' => $this->status,
            'category' => $this->category,
            'createdBy' => new UserResource($this->createdBy),
            'updatedBy' => new UserResource($this->updatedBy),
            // $this->createdBy is a relation created in the user model 
            //in relation to blogs
            //'updatedBy' => $this->updatedBy,
            //continue from 1:15:22
            
        ];
    }
}

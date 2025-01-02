<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;


class UserUpdateResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'image_path' => $this->image_path ? Storage::url($this->image_path) : '',
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'date' => (new Carbon($this->date))->format('Y-m-d'),
            'status' => $this->status,
            'category' => $this->category,
  
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;
use App\Http\Resources\UserResource;

class NoteResource extends JsonResource
{
    //for disbaling wrap
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
            'note' => $this->note,
            'paragraph' => $this->paragraph,
            // 'image_path' => $this->image_path,
            'priority' => $this->priority,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'date' => (new Carbon($this->date))->format('Y-m-d'),
            'status' => $this->status,
            
            'createdBy' => new UserResource($this->createdBy),
            'updatedBy' => new UserResource($this->updatedBy),
            
        ];
    }
}


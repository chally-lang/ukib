<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Http\Resources\UserResource;

class NewsLetterResource extends JsonResource
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
            'email' => $this->email,
            'date' => (new Carbon($this->date))->format('Y-m-d'),
          
            
        ];
    }
}

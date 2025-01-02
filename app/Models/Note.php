<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Note extends Model
{
    /** @use HasFactory<\Database\Factories\NoteFactory> */
    use HasFactory;

    protected $fillable = [
     'note',
     'paragraph',
     'priority',
     'status',
     'date',
     'created_by',
     'updated_by',
     'assigned_user_id'
]; 

    
    public function createdBy()
    {               
         return $this->belongsTo(User::class, 'created_by');

    }

    public function updatedBy()
    {
         return $this->belongsTo(User::class, 'updated_by');
                 
    }
}

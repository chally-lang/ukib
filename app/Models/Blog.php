<?php

namespace App\Models;

use App\Models\Comment;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Blog extends Model
{
    /** @use HasFactory<\Database\Factories\BlogFactory> */
    use HasFactory;

    protected $fillable = [
          
          'image_path',
          'title',
          'paragraph',
          'category',
          'status',
          'date',
          'role',
          'created_by',
          'updated_by'
    ]; 

    public function comments()
    {
         return $this->hasMany(Comment::class);        
         //engaging a each comment to a blog o the user who created it in the foreign key coulmn
         // column created_by which holds the user id
    }

    
    public function createdBy()
    {
         return $this->belongsTo(User::class, 'created_by');
         //is a func engaging a each blog to the user who created it in the foreign key coulmn
         // column created_by which holds the user id

    }

    public function updatedBy()
    {
         return $this->belongsTo(User::class, 'updated_by');
           //is a func engaging a each blog to the user who updated the blog in the foreign key coulmn
         // column created_by which holds the user id
                 
    }
}

<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\Note;
use App\Models\BookSub;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use App\Models\Survey;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
//here we run our post factory
        User::factory()->create([
            'name' => 'Duna Rector',
            'email' => 'director@gmail.com',
            'password' => bcrypt('5000@_Gods'),
            'role' => '1',
            'email_verified_at' => time(),
            'status' => 'activated',
            'category' => 'subscribed'
        ]);


        // Survey::factory()->count(30)->hasReports(30)->create();

        
        // Blog::factory()->count(5)->hasComments(1)->create();
        // Note::factory()->count(10)->create();
        

    }
}

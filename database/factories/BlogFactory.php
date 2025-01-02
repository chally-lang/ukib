<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'title' => fake()->sentence(),
            'paragraph' => fake()->realText(),
            'date' => fake()->dateTimeBetween('now', '+1 year'),
            'status' => fake()->randomElement(['published', 'in_progress', 'un_Published']),
            'category' => fake()->randomElement(['News', 'Articles', 'Promotional_Post', 'Author_&_Publishers', 'Tips_&_Tricks', 'Reading_List']),
            'image_path' => fake()->imageUrl(),
            'created_by' => 1,
            'updated_by' => 1,
            'created_at' => time(),
            'updated_at' => time()
        ];
    }
}

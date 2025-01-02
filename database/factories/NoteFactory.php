<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Note>
 */
class NoteFactory extends Factory
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
            'note' => fake()->sentence(),
            'paragraph' => fake()->paragraph(),
            'date' => fake()->dateTimeBetween('now', '+1 year'),
            'status' => fake()->randomElement(['Work', 'Study', 'Meeting', 'Others']),
            'priority' => fake()->randomElement(['Todo', 'Doing', 'Done']),
            'image_path' => fake()->imageUrl(),
            'created_by' => 1,
            'updated_by' => 1,
            'assigned_user_id' => 1,
            'created_at' => time(),
            'updated_at' => time()
        ];
    }
}

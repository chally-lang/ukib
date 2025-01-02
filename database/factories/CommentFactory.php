<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
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
            'comment' => fake()->sentence(),
            'date' => fake()->dateTimeBetween('now', '+1 year'),
            'status' => fake()->randomElement(['on', 'in_progress', 'off']),
            'priority' => fake()->randomElement(['low', 'medium', 'high']),
            'created_by' => 1,
            'updated_by' => 1,
            'assigned_user_id' => 1,
            'created_at' => time(),
            'updated_at' => time()
        ];
    }
}

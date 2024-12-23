<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as FakerFactory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Patient>
 */
class PatientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = FakerFactory::create('fa_IR');
        return [
            'name' => $faker->name,
            'sure_name' => $faker->lastName,
            'dad_name' => $faker->lastName,
            'id_no' => $faker->nationalCode(),
            'phone' => '09' . random_int(100000000, 900000000),
            'description' => $faker->sentence,
        ];
    }
}

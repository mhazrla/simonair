<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AlatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('dashboard')->insert([
            'nama_alat' => Str::random(5),
            'alatId' => Str::random(10),
            'ph' => fake()->randomFloat(2, 0, 1),
            'suhu' => fake()->randomFloat(2, 0, 1),
            'amonia' => fake()->randomFloat(2, 0, 1),
            'tds' => fake()->randomFloat(2, 0, 1),
            'tss' => fake()->randomFloat(2, 0, 1),
            'salinitas' => fake()->randomFloat(2, 0, 1),
        ]);
    }
}

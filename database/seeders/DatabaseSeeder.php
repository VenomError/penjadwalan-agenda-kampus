<?php

namespace Database\Seeders;

use App\Enum\UserRole;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->command->info("Create new Prodi Account");
        $user = new User([
            'name' => $this->command->ask('nama'),
            'email'  => $this->command->ask('email'),
            'password' => $this->command->ask('password'),
            'role' => UserRole::PRODI
        ]);

        if ($user->save()) {
            $this->command->info("Create Prodi Accoutn Success");
        }
    }
}

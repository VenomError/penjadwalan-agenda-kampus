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
        if ($this->command->confirm("create prodi account")) {
            $this->command->info("Create new Prodi Account");
            $prodi = new User([
                'name' => $this->command->ask('nama'),
                'email' => $this->command->ask('email'),
                'password' => $this->command->ask('password'),
                'role' => UserRole::PRODI
            ]);
            if ($prodi->save()) {
                $this->command->info("Create Prodi Accoutn Success");
            }
        }

        if ($this->command->confirm("create admin account")) {

            $this->command->info("Create new admin Account");
            $admin = new User([
                'name' => $this->command->ask('nama'),
                'email' => $this->command->ask('email'),
                'password' => $this->command->ask('password'),
                'role' => UserRole::ADMIN
            ]);

            if ($admin->save()) {
                $this->command->info("Create Admin Account Success");
            }
        }
    }
}

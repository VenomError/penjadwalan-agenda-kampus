<?php

namespace App\Services;

use App\Enum\UserRole;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LoginService
{
    /**
     * Create a new class instance.
     */
    public function __construct(
        public $email,
        public $password,
        public $remember = false
    ) {
        //
    }

    public function handle()
    {
        $isLogin = Auth::attempt(['email' => $this->email, 'password' => $this->password], $this->remember);
        if ($isLogin) {
            // Check Role
            $role = Auth::user()->role;
            return match ($role) {
                UserRole::ADMIN => redirect()->intended('/dashboard/admin'),
                UserRole::PRODI => redirect()->intended('/dashboard/prodi'),
                UserRole::MAHASISWA => redirect()->intended('/dashboard/mahasiswa'),
                default => throw new \Exception("Invalid User Role"),
            };
        } else {
            throw new \Exception("Login Failed");
        }
    }
}

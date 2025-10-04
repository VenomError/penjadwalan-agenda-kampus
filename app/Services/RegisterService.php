<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;

class RegisterService
{
    /**
     * Create a new class instance.
     */
    public function __construct(
        public $name,
        public $email,
        public $password,
        public $nim,
    ) {

    }


    public function handle()
    {
        $user = DB::transaction(function (): User {
            $user = new User([
                'name' => $this->name,
                'email' => $this->email,
                'password' => $this->password, // hash password
                'nim' => $this->nim,
            ]);

            $user->save();

            return $user;
        });

        $loginService = new LoginService(
            $this->email,
            $this->password
        );

        return $loginService->handle();
    }
}

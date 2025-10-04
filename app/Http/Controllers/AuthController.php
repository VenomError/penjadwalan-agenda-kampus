<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\LoginService;
use App\Services\RegisterService;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function login()
    {
        return view('auth.login');
    }
    public function loginProcess(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'remember' => 'nullable'
        ]);
        try {
            $service = new LoginService(
                $request->email,
                $request->password,
                $request->remember,
            );

            return $service->handle();
        } catch (\Throwable $th) {
            return back()->with([
                'isSuccess' => false
            ])->withInput();
        }

    }
    public function register()
    {
        return view('auth.register');
    }
    public function registerProcess(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'nullable',
            'nim' => 'required|unique:users,nim',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed:password_confirmation',
            'password_confirmation' => 'required',
        ]);

        try {
            $name = $request->first_name . " " . $request->last_name;
            $service = new RegisterService(
                $name,
                $request->email,
                $request->password,
                $request->nim,
            );

            return $service->handle();

        } catch (\Throwable $th) {
            return back()->with('register-failed', true);
        }

    }

    public function logout(Request $request)
    {

        Auth::logout();

        $request->session()->invalidate();       // hapus session lama
        $request->session()->regenerateToken();  // buat CSRF token baru

        return redirect('/login');

    }

    public function dashboard(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            return redirect('/login');
        }

        return match ($user->role->value) {
            'admin' => redirect('/dashboard/admin'),
            'prodi' => redirect('/dashboard/prodi'),
            'mahasiswa' => redirect('/dashboard/mahasiswa'),
            default => abort(403, 'Role not allowed'),
        };
    }
}

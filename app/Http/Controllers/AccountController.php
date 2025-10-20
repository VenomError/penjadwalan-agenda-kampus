<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Repository\UserRepository;
use App\Services\UploadService;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function mahasiswa()
    {
        $mahasiswas = User::mahasiswa()->get();
        return view('account.mahasiswa', compact('mahasiswas'));
    }

    public function createMahasiswa(Request $request)
    {
        try {
            $data = $request->validate(
                [
                    'name' => "required",
                    'email' => "required|email|unique:users,email",
                    'password' => "required",
                    'avatar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
                    'nim' => "required",
                ]
            );

            $data['avatar'] = UploadService::upload($request->file('avatar'), 'avatar');

            $userRepo = new UserRepository();
            $user = $userRepo->createMahasiswa($data);
            sweetalert("create mahasiswa {$user->name} success ");
            return back();
        } catch (\Throwable $th) {
            session()->flash('showModal');
            throw $th;
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Enum\UserRole;
use App\Models\User;
use App\Repository\UserRepository;
use App\Services\UploadService;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function user(UserRole $role)
    {
        // ambil data user berdasarkan {role}
        $users = User::whereRole($role)->get();
        // tampilkan halaman berdasarkan {role} dan kirim data pengguna
        return view('account.' . $role->value, compact('users'));
    }

    public function createUser(Request $request, UserRole $role)
    {
        try {
            // Validasi Inputan Data
            $data = $request->validate(
                [
                    'name' => "required",
                    'email' => "required|email|unique:users,email",
                    'password' => "required",
                    'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                    'nim' => "nullable",
                ]
            );

            // cek apakah ada upload avatar , jika ada simpan ke storage/app/public/avatar
            if ($request->file('avatar')) {
                $data['avatar'] = UploadService::upload($request->file('avatar'), 'avatar');
            }

            // panggil repo untuk handle CRUD
            $userRepo = new UserRepository();
            // tambah user berdasarkan {role}
            $user = $userRepo->createUser($data, $role);
            // tampilkan pesan success
            sweetalert("create {$role->value} {$user->name} success ");
            return back();
        } catch (\Throwable $th) {
            // tampilkan modal createUser jika ada error
            session()->flash('showModal', 'modalCreate');
            throw $th;
        }
    }

    public function edit($id)
    {
        // cari user berdasarkan {id}
        $user = User::find($id);
        // jika data user ditemukan , tampilkan modal Update
        if ($user) {
            session()->flash('showModal', 'modalUpdate');
            session()->flash('userId', $user->id);
            // kembalikan ke view list user/{role}
            return back();
        } else {
            // jika ada error tampilkan error not found
            sweetalert("User not Found", 'error');
            return back();
        }
    }

    public function updateUser(Request $request, User $user)
    {
        try {
            // validasi inputan user
            $request->validate(
                [
                    'name' => "required",
                    'email' => "required|email|unique:users,email,{$user->id}",
                    'nim' => "nullable",
                ]
            );

            // isi data user yg mau diupdate dari inputan jika ada
            $user->fill($request->toArray());

            // simpan user
            if ($user->save()) {
                // tampilkan pesan success
                sweetalert("Update User Success");
            } else {
                // tampilkan pesan gagal update
                sweetalert("Update User Failed", 'error');
            }
            return back();
        } catch (\Throwable $th) {
            // tambilkan lagi modal update jika ada error
            session()->flash('showModal', 'modalUpdate');
            session()->flash('userId', $user->id);
            throw $th;
        }
    }

    public function remove(User $user)
    {
        // panggil repo untuk handle CRUD
        $repo = new UserRepository();
        // hapus data user
        if ($repo->deleteUser($user)) {
            // jika terhapus tampilkan pesan berhasil
            sweetalert("Delete User Success");
        } else {
            // jika gagal terhapus tampilkan pesan gagal
            sweetalert("Delete User Failed", 'error');
        }

        return back();
    }

}

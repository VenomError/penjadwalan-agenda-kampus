<?php

namespace App\Http\Controllers;

use App\Repository\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SettingController extends Controller
{
    public function account()
    {
        $user = Auth::user();
        return view('settings.account', compact('user'));
    }

    public function accountUpdate(Request $request)
    {
        // ambil data user yg sedang login
        $user = Auth::user();

        // validasi inputan dari user
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'nim' => 'nullable',
            'password' => 'required|current_password',
            'new_password' => 'nullable',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        // isi data user dari inputan
        $user->fill($data);

        // cek apakah ada inputan new_password
        if ($request->new_password) {
            $user->password = $request->new_password;
        }

        // save user
        $saved = $user->save();
        // cek apakah user berhasil di save
        if ($saved) {
            // tampilkan pesan success jika berhasil
            sweetalert("Data Berhasil di Update");
        } else {
            // tampilkan pesan error
            sweetalert()->error("Data Gagal di Update");
        }

        // kembali ke halaman setting accont
        return back();
    }
}

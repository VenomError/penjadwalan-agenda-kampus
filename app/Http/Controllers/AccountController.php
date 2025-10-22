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
        $users = User::whereRole($role)->get();
        return view('account.' . $role->value, compact('users'));
    }

    public function createUser(Request $request, UserRole $role)
    {
        try {
            $data = $request->validate(
                [
                    'name' => "required",
                    'email' => "required|email|unique:users,email",
                    'password' => "required",
                    'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                    'nim' => "nullable",
                ]
            );

            if ($request->file('avatar')) {
                $data['avatar'] = UploadService::upload($request->file('avatar'), 'avatar');
            }

            $userRepo = new UserRepository();
            $user = $userRepo->createUser($data, $role);
            sweetalert("create {$role->value} {$user->name} success ");
            return back();
        } catch (\Throwable $th) {
            session()->flash('showModal', 'modalCreate');
            throw $th;
        }
    }

    public function edit($id)
    {
        $user = User::find($id);
        if ($user) {
            session()->flash('showModal', 'modalUpdate');
            session()->flash('userId', $user->id);
            return back();
        } else {
            sweetalert("User not Found", 'error');
            return back();
        }
    }

    public function updateUser(Request $request, User $user)
    {
        try {
            $request->validate(
                [
                    'name' => "required",
                    'email' => "required|email|unique:users,email,{$user->id}",
                    'nim' => "nullable",
                ]
            );

            $user->fill($request->toArray());

            if ($user->save()) {
                sweetalert("Update User Success");
            } else {
                sweetalert("Update User Failed", 'error');
            }
            return back();
        } catch (\Throwable $th) {
            session()->flash('showModal', 'modalUpdate');
            session()->flash('userId', $user->id);
            throw $th;
        }
    }

    public function remove(User $user)
    {
        $repo = new UserRepository();
        if ($repo->deleteUser($user)) {
            sweetalert("Delete User Success");
        } else {
            sweetalert("Delete User Failed", 'error');
        }

        return back();
    }

}

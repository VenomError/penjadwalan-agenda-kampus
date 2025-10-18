<?php

namespace App\Repository;

use App\Enum\UserRole;
use App\Models\User;

class UserRepository
{
    public function createUser(array $data, UserRole $role = UserRole::MAHASISWA)
    {
        $data['role'] = $role;
        $user = new User($data);
        $user->save();

        return $user;
    }

    public function createAdmin(array $data)
    {
        return $this->createUser($data, UserRole::ADMIN);
    }
    public function createProdi(array $data)
    {
        return $this->createUser($data, UserRole::PRODI);
    }
    public function createMahasiswa(array $data)
    {
        return $this->createUser($data, UserRole::MAHASISWA);
    }

    public function updateUser(User $user, array $data)
    {
        $user->update($data);
        $user->save();
        $user->refresh();

        return $user;
    }

    public function deleteUser(User $user)
    {
        return $user->forceDelete();
    }
}

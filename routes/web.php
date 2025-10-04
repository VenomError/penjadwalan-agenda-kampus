<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::middleware('guest')->controller(AuthController::class)->group(function () {
    Route::get('/login', 'login')->name('login');
    Route::post('/login', 'loginProcess')->name('login-process');
    Route::get('/register', 'register')->name('register');
    Route::post('/register', 'registerProcess')->name('register-process');
});
// Logout Prcesss
Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth')->name('logout');


// Route Mahasiswa
Route::middleware(['auth', 'role:admin'])->prefix('dashboard/admin')->name('admin.')->group(function () {
    Route::get('/', function () {
        return view('dashboard.admin.index');
    });
});


Route::get('/dashboard', [AuthController::class , 'dashboard'])->name('dashboard');

// Route Mahasiswa
Route::middleware(['auth' , 'role:mahasiswa'])->prefix('dashboard/mahasiswa')->name('mahasiswa.')->group(function () {
    Route::get('/', function () {
        return view('dashboard.mahasiswa.index');
    });
});

// Route Prodi
Route::middleware(['auth', 'role:prodi'])->prefix('dashboard/prodi')->name('prodi.')->group(function () {
    Route::get('/', function () {
        return view('dashboard.prodi.index');
    });
});

Route::get('/', function () {
    return 'welcome dashboard';
});

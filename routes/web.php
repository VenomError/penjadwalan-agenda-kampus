<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/login', [AuthController::class, 'loginProcess'])->name('login-process');
    Route::get('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/register', [AuthController::class, 'registerProcess'])->name('register-process');
});
// Logout Prcesss
Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth')->name('logout');


// Route Mahasiswa
Route::middleware(['auth', 'role:admin'])->prefix('dashboard/admin')->name('admin.')->group(function () {
    Route::view('/', 'dashboard.admin.index');
});
Route::view('/event', 'event.list');
Route::view('/event/calendar', 'event.calendar');
Route::view('/event/add', 'event.add');
Route::prefix('/account')->name('account')->controller(AccountController::class)->group(function () {
    Route::view('/admin', 'account.admin')->name('.admin');
    Route::get('/mahasiswa', 'mahasiswa')->name('.mahasiswa');
    Route::post('/mahasiswa', 'createMahasiswa')->name('.mahasiswa-create');
    Route::view('/prodi', 'account.prodi')->name('.prodi');
});
Route::view('/settings/account', 'settings.account');


Route::get('/dashboard', [AuthController::class, 'dashboard'])->name('dashboard');

// Route Mahasiswa
Route::middleware(['auth', 'role:mahasiswa'])->prefix('dashboard/mahasiswa')->name('mahasiswa.')->group(function () {
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
    return view('landing.index');
})->name('home');

<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SettingController;
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
Route::name('account')->group(function () {
    Route::get('/account/{role}', [AccountController::class, 'user'])->name('.user');
    Route::post('/account/{role}', [AccountController::class, 'createUser'])->name('.user-create');
    Route::get('/account/edit/{user}', [AccountController::class, 'edit'])->name('.user-edit');
    Route::put('/account/update/{user?}', [AccountController::class, 'updateUser'])->name('.user-update');
    Route::delete('/account/remove/{user}', [AccountController::class, 'remove'])->name('.user-remove');
});


Route::get('/settings/account', [SettingController::class, 'account'])->name('settings.account');
Route::put('/settings/account', [SettingController::class, 'accountUpdate'])->name('settings.account-update');


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

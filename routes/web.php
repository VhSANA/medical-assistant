<?php

use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SecretaryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// fast login
Route::get('/s', function () {
    Auth::loginUsingId(1);
    return Inertia::render('Secretary/Index');
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// register patient
Route::middleware('auth')->prefix('secretary')->group(function () {
    Route::get('register', [SecretaryController::class, 'index'])->name('patient.fast.register');
});

// doctor panel
Route::middleware('auth')->prefix('doctor')->group(function () {
    Route::get('/patients', [PatientController::class, 'index'])->name('doctor.all.patients');
});

require __DIR__.'/auth.php';

<?php

use App\Http\Controllers\UserSubController;
use App\Http\Controllers\HomeBlogController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\NewsLetterController;
use App\Http\Controllers\UserController;
use App\Http\Controller\PostController;
use App\Http\Controllers\BooksController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'status' => session('status'),
        'success' =>session('success'),
    ]);
})->name('welcome');



Route::get('/home-blog', [HomeBlogController::class, 'index'])->name('homeblog.index');


Route::resource('newsletter', NewsLetterController::class);



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))
    ->name('dashboard');
    Route::get('/blog-page', fn() => Inertia::render('BlogPage'))
    ->name('blog-page');
    Route::get('/page-read', fn() => Inertia::render('PageRead'))
    ->name('page-read');
    Route::get('/page-read2', fn() => Inertia::render('PageRead2'))
    ->name('page-read2');

    
    Route::put('subscription', [UserController::class, 'update_sub'])->name('subscription.update_sub');
    Route::put('userAdmin', [UserController::class, 'make_admin'])->name('user.make_admin');

    Route::resource('user', UserController::class);
    Route::resource('note', NoteController::class);
    Route::resource('comment', CommentController::class);
    Route::resource('blog', BlogController::class);
    
});




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::patch('/sub', [ProfileController::class, 'sub'])->name('profile.sub');
    Route::post('/photo', [ProfileController::class, 'photo'])->name('profile.photo');
    Route::put('/sub2', [ProfileController::class, 'sub2'])->name('profile.sub2');
    Route::get('/books', [BooksController::class, 'index'])->name('books');
});





// // SUPER ADMIN //
// Route::get('/dashboard-super', function () {
//     return Inertia::render('DashboardSuper');
// })->middleware(['auth', 'verified'])->name('dashboard-super');

// // ADMIN ADMIN //
// Route::get('/dashboard-admin', function () {
//     return Inertia::render('DashboardAdmin');
// })->middleware(['auth', 'verified'])->name('dashboard-admin');

// // NORMAL USER DASHBOARD //
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/auth.php';


// Route::get('/{any}', function() {
//     return view('app');
// })->where('any', '.*');



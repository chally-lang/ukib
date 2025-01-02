<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse

    {
        $request->authenticate();

        $request->session()->regenerate();

        

        return redirect()->intended(route('dashboard', absolute: false));
    }


    // public function store(LoginRequest $request): RedirectResponse
    // {
    //     $request->authenticate();

    //     $request->session()->regenerate();

    //     //dd($request->all(), $request->user()); to check the exact oject been returend
       
    //     $loggedInUserRole = $request->user()->role;
    //     //conddition for log  between users
        
    //      //SUPER ADMIN
    //     if ($loggedInUserRole == 1) {
    //         return redirect()->intended(route('dashboard-super', absolute: false));
    //     }
    //     // ADMIN
    //     elseif ($loggedInUserRole == 2) {
    //         return redirect()->intended(route('dashboard-admin', absolute: false));
    //     }
    //     else {
    //         return redirect()->intended(route('dashboard', absolute: false));
    //     }
    //     //NORMAL USER 

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}

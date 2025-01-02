<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest; 
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\SubFillRequest;
use App\Models\User;
use App\Http\Resources\UserResource;
use Illuminate\Support\Str;
use App\Http\Requests\ProfilePhotoRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request, User $user): Response
    {
        $query = User::query();
        // $current_user = $query->find("id", $request->user()->id);
        $current_user = User::where("id", Auth::user()->id)->first() ?: null;
        // $sub_head_blog = Blog::where("role", 2)->first();


        return Inertia::render('Profile/Edit', [
            "current_user" => UserResource::make($current_user),
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    public function sub(SubFillRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        // if ($request->user()->isDirty('email')) {
        //     $request->user()->email_verified_at = null;
        // }

        $request->user()->save();

        return Redirect::route('books');

        //return  to_route('dashboard')->with('success_message', 'Your Subscription was Submitted Successfully');
    }

    public function photo(ProfilePhotoRequest $request): RedirectResponse
    {
        
        $data = $request->validated();
        // dd($data);
        $image_path = $data['image_path'] ?? null;
        $data['updated_by'] = Auth::id();

        $user = $request->user();
        if($image_path) {
            //if image exist and user changed it 
            if($user->image_path) {
                //delete the prev image path
                // Storage::disk('public')->delete($blog->image_path);
                Storage::disk('public')->deleteDirectory(dirname($user->image_path));
            }
            //save new uploaded image
            $data['image_path'] = $image_path->store('user/'.Str::random(), 'public');
        }
        //update the data
        $user->update($data);
        //$data->user()->save();
        
        // $request->user()->fill($request->validated());

        // // if ($request->user()->isDirty('email')) {
        // //     $request->user()->email_verified_at = null;
        // // }


        // $request->validate([
        //     'password' => ['required', 'current_password'],
        // ]);

        // $user = $request->user();



        // $request->user()->save();

        return Redirect::route('profile.edit');

        //return  to_route('dashboard')->with('success_message', 'Your Subscription was Submitted Successfully');
    }

    // public function sub2(Request $request): Response
    // {
    //     return Inertia::render('Profile/Edit', [
    //         'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
    //         'status' => session('status'),
    //     ]);
    // }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}

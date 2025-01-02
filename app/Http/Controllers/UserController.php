<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\MakeAdminRequest;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserUpdateResource;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Carbon\Carbon; 

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      
        $query = User::query();

        if (request("name")) {
            $query->where("name","like","%". request("name") ."%");
        };
        if (request("status")) {
            $query->where("status", request("status"));
        };
        if (request("category")) {
            $query->where("category", request("category"));
        };
        if (request("designation")) {
            $query->where("designation", request("designation"));
        };
        if (request("email")) {
            $query->where("email","like","%". request("email") ."%");
        };
       

        $sortField  = request("sort_field", 'created_at');
        $sortDirection  = request("sort_direction", 'desc');

        $users  = $query->orderBy($sortField, $sortDirection)->paginate(6)->onEachSide(1);
        //we use resource controller to avoid passing  all database files to the view
        return inertia("User/Index", [
            "users" => UserResource::collection($users),
            'queryParams' => request()->query() ?: null,
            'success' =>session('success'),
        ]);
        //dd($project);
        // return inertia('Project/Index', ["project" => ($project)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return inertia("User/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        
        // $data['created_at'] = time();
        // $data['updated_at'] = time();
        // $data['category'] = "subscribed";
        
        $data = $request->validated();
        User::create($data);
        return  to_route('user.index')->with('success', 'News User Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        // $user = Auth::user();
        return inertia('User/Edit', [
            'eUser' =>  new UserUpdateResource($user),
            // 'eUser' =>  $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        //
        $data = $request->validated();
        $data['updated_by'] = Auth::id();
        // $data['assigned_user_id'] = Auth::id();

        // if($image_path) {
        //     $data['image_path'] = image_path->store('blog/'.Str::random(), 'public');
        // }
        $user->update($data);
        return  to_route('user.index')->with('success', 'User subscription Updated Successfully');
    }

    public function make_admin(MakeAdminRequest $request, User $user)
    {
        //
        $data = $request->validated();
        $data['updated_by'] = Auth::id();
        
        $user->update($data);
        return  to_route('user.index')->with('success', 'User Now Admin');
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }

    // public function update_sub(Request $request, User $user)
    // {
    //     $data = $request->validate([
    //         'category' => 'required',
    //     ]);
    //     $data['sub_date'] = time();
    //     // $data['sub_date'] = (new Carbon($this->date))->format('Y-m-d');
        
    //     $dd($data);
    //     $user->update($data);
    //     return  to_route('dashboard')->with('success', 'Your Subscription will soon be Approved Successfully');
    // }
}

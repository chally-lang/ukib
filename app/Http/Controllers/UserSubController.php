<?php

namespace App\Http\Controllers;

use App\Models\Sub;
use App\Models\User;
use App\Http\Requests\StoreSubRequest;
use App\Http\Requests\UpdateSubRequest;

class UserSubController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSubRequest $request)
    {
        //
        $data = $request->validated();
        $data['updated_at'] = time();
        $data['created_at'] = time();
        User::create($data);
        return  to_route('dashboard')->with('success', 'Your SUBSCRIPTION Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Sub $sub)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sub $sub)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSubRequest $request, Sub $sub)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sub $sub)
    {
        //
    }
}

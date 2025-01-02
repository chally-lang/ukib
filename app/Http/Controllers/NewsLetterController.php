<?php

namespace App\Http\Controllers;

use App\Models\NewsLetter;
use App\Http\Requests\StoreNewsLetterRequest;
use App\Http\Requests\UpdateNewsLetterRequest;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\NewsLetterResource;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class NewsLetterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $query = NewsLetter::query();

        if (request("email")) {
            $query->where("email","like","%". request("email") ."%");
        };
        // if (request("status")) {
        //     $query->where("status", request("status"));
        // };
        // if (request("category")) {
        //     $query->where("category", request("category"));
        // };

        $sortField  = request("sort_field", 'created_at');
        $sortDirection  = request("sort_direction", 'desc');

        $newsletter  = $query->orderBy($sortField, $sortDirection)->paginate(10)->onEachSide(1);
        //we use resource controller to avoid passing  all database files to the view
        // return inertia("Newsletters/Index", [
        //     "newsletter" => NewsLetterResource::collection($newsletter),
        //     'queryParams' => request()->query() ?: null,
        //     'success' =>session('success'),
        // ]);
        // return inertia("Blog/Index", [
        //     "blogs" => BlogResource::collection($blogs),
        //     'queryParams' => request()->query() ?: null,
        //     'success' =>session('success'),
        // ]);
        //dd($project);
        return inertia('NewsLetter/Index', [
            "newsletter" => NewsLetterResource::collection($newsletter),
              'queryParams' => request()->query() ?: null,
            'success' =>session('success'),
            ]);
    
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
    public function store(StoreNewsLetterRequest $request)
    {
        //

         $data = $request->validated();
         $data['date'] = now();
         //dd($data);
        //  $image_path = $data['image_path'] ?? null;
        
         Newsletter::create($data);
        //return  to_route('/')->with('success', 'You Successfully Subscribed to our Newsletter ');
        return Redirect::to('/')->with('success', 'You Successfully Subscribed to our Newsletter ');

        
        // return inertia("Welcome", [
           
        //     'success' =>session('success'),
            
        // ]);
 
    }

    /**
     * Display the specified resource.
     */
    public function show(NewsLetter $newsLetter)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(NewsLetter $newsLetter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNewsLetterRequest $request, NewsLetter $newsLetter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NewsLetter $newsletter)
    {
        //

        // $name = $newsLetter->email;
        // // dd($name);
        // $newsLetter->delete();
        // return to_route('newsletter.index')
        //     ->with('success', "Subscription from \"$name\"was deleted successfully");
            $newsletter->delete();
            return to_route('newsletter.index')->with('success', "Email  was Deleted Successfully");
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\Blog;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use App\Http\Resources\BlogResource;
use Illuminate\Support\Str;


class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        //return inertia('Blog/Index');
        $query = Blog::query();

        if (request("title")) {
            $query->where("title","like","%". request("title") ."%");
        };
        if (request("status")) {
            $query->where("status", request("status"));
        };
        if (request("category")) {
            $query->where("category", request("category"));
        };

        $sortField  = request("sort_field", 'created_at');
        $sortDirection  = request("sort_direction", 'desc');

        $blogs  = $query->orderBy($sortField, $sortDirection)->paginate(10)->onEachSide(1);
        //we use resource controller to avoid passing  all database files to the view
        return inertia("Blog/Index", [
            "blogs" => BlogResource::collection($blogs),
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
        return inertia('Blog/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        /** @var $image_path \Illuminate\Http\UploadedFile */
        $data = $request->validated();
        //dd($data);
        // $data['created_by'] = 1;
        $image_path = $data['image_path'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();

        if($image_path) {
            $data['image_path'] = $image_path->store('blog/'.Str::random(), 'public');
         }
        Blog::create($data);
        return  to_route('blog.index')->with('success', 'Blog News Was Created Successfully');

    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        return inertia('Blog/Show', [
            'blog' => new BlogResource($blog),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        return inertia('Blog/Edit', [
            'blog' => new BlogResource($blog),
        ]);
        // return inertia('Blog/Edit', ["blog" => ($blog)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        //
        $data = $request->validated();
        $image_path = $data['image_path'] ?? null;
        $data['updated_by'] = Auth::id();

        if($image_path) {
            //if image exist and user changed it 
            if($blog->image_path) {
                //delete the prev image path
                // Storage::disk('public')->delete($blog->image_path);
                Storage::disk('public')->deleteDirectory(dirname($blog->image_path));
            }
            //save new uploaded image
            $data['image_path'] = $image_path->store('blog/'.Str::random(), 'public');
        }
        //update the data
        $blog->update($data);

        return  to_route('blog.index')->with('success', 'Blog News Was Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        //
        $name = $blog->title;
        $blog->delete();
        //if blog image path exist
        if($blog->image_path) {
            //delete the prev image path
            Storage::disk('public')->deleteDirectory(dirname($blog->image_path));
        }
        return to_route('blog.index')
            ->with('success', "Blog \"$name\"was deleted successfully");
    }
}

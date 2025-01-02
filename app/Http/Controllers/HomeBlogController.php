<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Http\Resources\BlogResource;
use App\Http\Resources\BlogHeadResource;
use Illuminate\Support\Str;

class HomeBlogController extends Controller
{
    //

    public function index()
    {
        
        //return inertia('Blog/Index');
        // $query = Blog::query();
        // //$head_blog = $query->find("role", "1");
        // $head_blog = Blog::where("role", 1)->first();
        // $sub_head_blog = Blog::where("role", 2)->first();

        // if (request("title")) {
        //     $query->where("title","like","%". request("title") ."%");
        // };
        // if (request("status")) {
        //     $query->where("status", request("status"));
        // };
        // if (request("category")) {
        //     $query->where("category", request("category"));
        // };

        // $sortField  = request("sort_field", 'created_at');
        // $sortDirection  = request("sort_direction", 'desc');

        // $blogs  = $query->orderBy($sortField, $sortDirection)->paginate(3)->onEachSide(1);
        // //we use resource controller to avoid passing  all database files to the view
        // return inertia("HomeBlog/Index", [
        //     // "head_blog" => $head_blog,
        //     "sub_head_blog" => BlogHeadResource::make($sub_head_blog),
        //     "head_blog" => BlogHeadResource::make($head_blog),
        //     "blogs" => BlogResource::collection($blogs),
            // 'queryParams' => request()->query() ?: null
            
        // ]);

        $query = Blog::query();
        //$head_blog = $query->find("role", "1");
        $head_blog = Blog::where("role", 1)->first() ?: null;
        $sub_head_blog = Blog::where("role", 2)->first() ?: null;

        $sortField  = request("sort_field", 'created_at');
        $sortDirection  = request("sort_direction", 'desc');

        $blogs  = $query->orderBy($sortField, $sortDirection)->paginate(3)->onEachSide(1);
       
        return inertia("HomeBlog/Index", [
            "head_blog" => BlogHeadResource::make($head_blog) ?: null,
            "sub_head_blog" => BlogHeadResource::make($sub_head_blog) ?: null,
            "blogs" => BlogResource::collection($blogs),
        ]);
    }


}

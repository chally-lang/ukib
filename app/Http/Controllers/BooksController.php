<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BooksController extends Controller
{
    //
    public function index()
    {
        
        return inertia('Books/Index'); 
        
    }

}

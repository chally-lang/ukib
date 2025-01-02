<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Http\Requests\StoreNoteRequest;
use App\Http\Requests\UpdateNoteRequest;
use App\Http\Resources\NoteResource;
use Illuminate\Support\Facades\Auth;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        //return inertia('Note/Index'); 
        //
        $notesW = Note::query()->where('status', 'Work')->where('created_by', Auth::id())->get();
        $notesS = Note::query()->where('status', 'Study')->where('created_by', Auth::id())->get();
        $notesM = Note::query()->where('status', 'Meeting')->where('created_by', Auth::id())->get();
        $notesO = Note::query()->where('status', 'Others')->where('created_by', Auth::id())->get();
        //$notes  = $query;//->paginate(6)->onEachSide(1);
        //we use resource controller to avoid passing  all database files to the view
        return inertia("Note/Index", [
            "notesW" => NoteResource::collection($notesW),
            "notesS" => NoteResource::collection($notesS),
            "notesM" => NoteResource::collection($notesM),
            "notesO" => NoteResource::collection($notesO),
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
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNoteRequest $request)
    {
        //
        
        $data = $request->validated();
        //dd($data);
        // $data['created_by'] = 1;
        // $image_path = $data['image_path'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        $data['assigned_user_id'] = Auth::id();

        // if($image_path) {
        //     $data['image_path'] = image_path->store('blog/'.Str::random(), 'public');
        // }
        Note::create($data);
        return  to_route('note.index')->with('success', 'Your Note Was Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Note $note)
    {
        return inertia('Note/Show', [
            'note' => new NoteResource($note),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Note $note)
    {
        //dd(new NoteResource($note));
        return inertia('Note/Edit', [
            "note" => new NoteResource($note)]);
        // return inertia('Note/Edit', [
        //     'note' => new NoteResource($note),
        // ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNoteRequest $request, Note $note)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::id();
        $data['assigned_user_id'] = Auth::id();

        // if($image_path) {
        //     $data['image_path'] = image_path->store('blog/'.Str::random(), 'public');
        // }
        $note->update($data);
        return  to_route('note.index')->with('success', 'Your Note Was Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Note $note)
    {
        //
        $note->delete();
        return to_route('note.index')->with('success', "Your Note was Deleted Successfully");
    }
}

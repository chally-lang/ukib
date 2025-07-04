<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class StoreNoteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        
        return [
            // we return the various rules neded
            "note" => ['required', 'max:60'],         
            "paragraph" => ['nullable', 'string'],
            "date" => ['nullable', 'date', 'required'],
            "priority" => ['required', Rule::in(['Todo', 'Doing', 'Done'])],
            "status" => ['required', Rule::in(['Work', 'Study', 'Meeting', 'Others'])]
            
        ];
    }
}

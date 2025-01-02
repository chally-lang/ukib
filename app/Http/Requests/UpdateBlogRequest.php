<?php

namespace App\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class UpdateBlogRequest extends FormRequest
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
            "title" => ['required', 'max:60'],         
            "paragraph" => ['nullable', 'string'],
            "image_path" => ['nullable', 'image'],
            "role" => ['nullable', Rule::in(['1', '2', '3'])],
            "date" => ['nullable', 'date'],
            "status" => [Rule::in(['published', 'un_Published', 'in_progress'])],
            "category" => [
                Rule::in([
                    'Tips_&_Tricks',
                    'Author_&_Publishers', 
                    'News',
                    'Articles',
                    'Promotional_Post', 
                    'Reading_List'
                ])]
            
            
        ];
    }
}

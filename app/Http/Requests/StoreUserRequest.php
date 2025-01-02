<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUserRequest extends FormRequest
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
            //
            'created_at' => time(),
            'updated_at' => time(),
            "name" => ['required', 'string', 'max:255'],         
            "email" => ['required', 'email', 'string'],
            // "status" => ['required', Rule::in(['activated', 'de_activated'])],
            // "category" => ['required', 
            //     Rule::in([
            //         'subscribed',
            //         'un_subscribed', 
            //     ])],

        ];
    }
}

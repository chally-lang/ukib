<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;


class UserSubscriptionController extends Controller
{
    //


    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'category' => 'required',
        ]);
        $data['sub_date'] = (new Carbon($this->date))->format('Y-m-d');
        
        
        $user->update($data);
        return  to_route('/dashboard')->with('success', 'Your Subscription will soon be Approved Successfully');
    }

    
}

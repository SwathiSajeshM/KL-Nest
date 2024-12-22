<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function adminregistration(Request $req) {

        $validator = Validator::make($req->all(), [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|min:8',
        ]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        
            $admin = new Admin();
            $admin->name=$req->input('name');
            $admin->email=$req->input('email');
            $admin->password= Hash::make($req->input('password'));
            $admin->save();
            return$admin;

    }


    
    function adminlogin(Request $req)
    {
        $admin= Admin::where('email',$req->email)->first();
        if(!$admin || !Hash::check($req->password,$admin->password))
        {
            return ["error"=>"Email or password is not matched"];
        }
        return $admin;
    }




}

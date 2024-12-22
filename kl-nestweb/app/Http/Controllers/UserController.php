<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
   public function userregistration(Request $req)
    {
        $validator = Validator::make($req->all(),[
            'name' => 'required|max:255',
            'email' => 'required|max:255|email',
            'password' => 'required|min:8',
        ]);

        if($validator->fails())
        {
            return response()->json($validator->errors(),400);
        }

        $user= new User();
        $user->name= $req->input('name');
        $user->email= $req->input('email');
        $user->password= Hash::make($req->input('password'));
      
        $user->save();
        return $user;

    }


    function userlogin(Request $req)
    {

        $validator = Validator::make($req->all(),[
            'email' => 'required|max:255|email',
            'password' => 'required|min:8',
        ]);

        if($validator->fails())
        {
            return response()->json(['errors' => $validator->errors()],400);
        }

        $user= User::where('email',$req->email)->first();
        if(!$user || !Hash::check($req->password,$user->password))
        {
            return ["error"=>"Email or password is not matched"];
        }
        return response()->json($user, 200);
    }


    
}

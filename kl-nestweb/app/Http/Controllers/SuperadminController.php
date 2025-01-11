<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Superadmin;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class SuperadminController extends Controller
{
    //________________________ SuperAdmin SignUp function field ______________________
        public function superadminregistration(Request $request) 
            {
                $validator = Validator::make($request->all(),[
                    'name' => 'required|max:255',
                    'email' => 'required|max:255|email',
                    'password' => 'required|min:8', ]);
                
                if($validator->fails())
                { return response()->json($validator->errors(),400); }

                    $superadmin = new Superadmin();
                    $superadmin->name=$request->input('name');
                    $superadmin->email=$request->input('email');
                    $superadmin->password= Hash::make($request->input('password'));
                    $superadmin->save();
                    return$superadmin;
            }

    function superadminlogin(Request $req)
    {
        $validator = Validator::make($req->all(),[
            'email'=> 'required|max:255K|email',
            'password'=> 'required|min:8', ]);

        if($validator->fails())
        {
            return response()->json(['errors' => $validator->errors()],400); 
        }

        $superadmin= Superadmin::where('email',$req->email)->first();
        if(!$superadmin || !Hash::check($req->password,$superadmin->password))
        {
            return ["error"=>"Email or password is not matched"];
        }
        return $superadmin;
    }
}

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AdminController;
use App\Http\Controllers\SuperadminController;
use App\Http\Controllers\UserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/user',[UserController::class,'userregistration']);
Route::post('/admin',[AdminController:: class,'adminregistration']);
Route::post('/superadmin',[SuperadminController:: class,'superadminregistration']);
Route::post('/userlogin',[UserController:: class,'userlogin']);
Route::post('/adminlogin',[AdminController:: class,'adminlogin']);
Route::post('/superadminlogin',[AdminController:: class,'supeadminlogin']);

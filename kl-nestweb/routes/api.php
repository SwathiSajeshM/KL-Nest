<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\SuperadminController;
use App\Http\Controllers\UserController;

//_______________________ UserController _____________________
Route::controller(UserController::class)->group(function(){
    Route::post('/user','userregistration');
    Route::post('/adduser','userregistration');
    Route::post('/userlogin','userlogin');
    Route::get('/userlist','displayuserlist');
});

//_______________________ AdminController _____________________
Route::post('/admin',[AdminController::class,'adminregistration']);
Route::post('/adminlogin',[AdminController::class,'adminlogin']);
Route::post('/superadminlogin',[AdminController::class,'supeadminlogin']);

//_______________________ RoomController _____________________
Route::post('/updaterooms',[RoomController::class,'updateRoom']);
Route::get('/displayroom',[RoomController::class,'displayRoom']);

//_______________________ SuperAdminController _____________________
Route::post('/superadmin',[SuperadminController::class,'superadminregistration']);


           

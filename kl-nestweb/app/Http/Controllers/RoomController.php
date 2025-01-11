<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    //_________________________ to admin add the room of hostel __________________________
        public function updateRoom(Request $request) {
            $room = new Room();
            $room->name = $request->input('name');
            $room->description = $request->input('description');
            $room->amount = $request->input('price');
            $room->image = $request->file('image')->store('roomsimages', 'public'); 
            $room->save();
            return response()->json(['message' => 'Room created successfully', 'room' => $room], 201); }

    //__________________________ To send data of Frontend _________________________________
        public function displayRoom()
        { return Room::all(); }
}
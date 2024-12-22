import React, { useState } from 'react';
import Banner from '../../bannerProps/Banner';

const RoomBooking = () => {
  const [bookings, setBookings] = useState([
    { id: 1, guestName: 'John Doe', roomNumber: 101, checkIn: '2023-12-20', checkOut: '2023-12-25', status: 'Confirmed' },
    { id: 2, guestName: 'Jane Smith', roomNumber: 102, checkIn: '2023-12-18', checkOut: '2023-12-22', status: 'Pending' },
  ]);

  const handleAddBooking = () => {
    const newBooking = {
      id: bookings.length + 1,
      guestName: 'New Guest',
      roomNumber: 103,
      checkIn: '2023-12-25',
      checkOut: '2023-12-30',
      status: 'Confirmed',
    };
    setBookings([...bookings, newBooking]);
  };

  return (
    <main>
     
      <div>
       <Banner title='Room Bookings' logoName='Admin' link='/admin'/>

        <section className="py-12 px-20 bg-white">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Manage Room Bookings</h2>
          <button
            onClick={handleAddBooking}
            className="mb-6 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add Booking
          </button>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-blue-50 border rounded-lg">
              <thead>
                <tr className="text-left border-b">
                  <th className="px-6 py-4 font-bold text-blue-950">ID</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Guest Name</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Room Number</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Check-In</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Check-Out</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b">
                    <td className="px-6 py-4">{booking.id}</td>
                    <td className="px-6 py-4">{booking.guestName}</td>
                    <td className="px-6 py-4">{booking.roomNumber}</td>
                    <td className="px-6 py-4">{booking.checkIn}</td>
                    <td className="px-6 py-4">{booking.checkOut}</td>
                    <td className="px-6 py-4">{booking.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      
    </main>
  );
};

export default RoomBooking;

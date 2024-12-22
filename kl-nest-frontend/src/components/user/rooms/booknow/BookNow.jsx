import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Banner from '../../../bannerProps/Banner';

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { roomTitle, roomPrice, roomImage } = location.state || {};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value, }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} in ${roomTitle}!`);
    navigate('/rooms'); 
  };

  return (
    <main>
      <Navbar />
      <div className="pt-36">
        <Banner title='Book Now' logoName='Rooms' link='/rooms'/>
       
        <section className="py-12 px-20 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/*____________ Room Details _____________________*/}
            <div className="bg-blue-50  rounded-lg shadow-lg flex flex-col items-center">
              <img src={roomImage} alt={roomTitle} className="w-full h-64 object-cover mb-6 rounded-lg" />
              <h2 className="text-3xl font-bold text-blue-950 mb-4"> {roomTitle || 'Room Details'} </h2>
              <p className="text-gray-600 text-lg mb-6">Experience comfort and convenience in this wonderful room, perfectly tailored to make your stay memorable.</p>
              <p className="text-2xl font-semibold text-blue-950">{roomPrice || 'Price not available'}</p>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Complete Your Booking</h3>

              <div className="flex flex-col">
                <label htmlFor="name" className="font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-2 p-2 border rounded-md" placeholder="Enter your full name" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="mt-2 p-2 border rounded-md" placeholder="Enter your email" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="checkIn" className="font-medium text-gray-700">Check-In</label>
                  <input type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleInputChange} required className="mt-2 p-2 border rounded-md" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="checkOut" className="font-medium text-gray-700">Check-Out</label>
                  <input type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleInputChange} required className="mt-2 p-2 border rounded-md" />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="guests" className="font-medium text-gray-700">
                  Guests
                </label>
                <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleInputChange} required min={1} className="mt-2 p-2 border rounded-md" placeholder="Enter number of guests" />
              </div>

              <button type="submit" className="mt-4 px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition">Confirm Booking</button>
            </form>

          </div>

        </section>

      </div>

      <Footer />
      
    </main>
  );
};

export default BookNow;

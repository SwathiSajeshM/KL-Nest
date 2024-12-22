import React from 'react';
import Navbar from '../navbar/Navbar';
import roomImage1 from '../../../assets/hostel-1.webp'; 
import roomImage2 from '../../../assets/hostel2.png';
import roomImage3 from '../../../assets/shelodge.jpg';
import roomImage4 from '../../../assets/pg-edapalli.jpg';
import roomImage5 from '../../../assets/unisexHostels.webp';
import roomImage6 from '../../../assets/lavenderHostel.jpeg';
import Footer from '../footer/Footer';
import Banner from '../../bannerProps/Banner';
import Search from '../../searchProps/Search';
import { useNavigate } from 'react-router-dom';

const Rooms = () => {  
  const rooms = [
    {id: 1,
      image: roomImage1,
      title: 'Zephyr Hostel',
      price: '₹2,000/night',},

    {id: 2,
      image: roomImage2,
      title: 'YWCA Hostel',
      price: '₹1,500/night',},

    {id: 3,
      image: roomImage3,
      title: 'She Lodge',
      price: '₹100/night',}, 

    {id: 4,
      image: roomImage4,
      title: 'PG-Edappalli',
      price: '₹5500/month',},
        
    { id: 5,
      image: roomImage5,
      title: 'UniSex Hostel',
      price: '₹5500/month',},  
    {id: 6,
      image: roomImage6,
      title: 'Lavender Garden(gents)',
      price: '₹5500/month',},];


  const navigate = useNavigate();

  const handleBookNow = (room) => {
    navigate('/rooms/book-now', {
      state: {
        roomTitle: room.title,
        roomPrice: room.price,
        roomImage:room.image,
      },});
    };

  return (
    <main>
                <Navbar />
        <div className="pt-36">
           {/*___________________ Banner Props  ____________________________*/}
          <Banner title='Rooms' logoName='KL~Nest' link='/home'/>
            
            <section className="py-12 px-20 bg-white">

              <div className='flex justify-between items-center'>
                <h2 className="text-3xl font-bold text-blue-950 mb-6">Explore Hostel Rooms</h2>
                {/*___________________ Search tool props  ____________________________*/}
                <Search placeholders='Find Your Hostel'/>             
              </div>

                {/*_____________ Room Details ________________*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {rooms.map((room) => (
                    <div key={room.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">             
                        <img src={room.image} alt={room.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                        <h3 className="text-xl font-bold text-blue-950">{room.title}</h3>
                        <p className="text-gray-600 text-lg">{room.price}</p>
                        <button onClick={() => handleBookNow(room)} className="mt-4 bg-blue-950 text-white px-4 py-2 rounded-md shadow hover:bg-blue-800 transition duration-300" > Book Now </button>
                        </div>
                    </div> ))}
                </div>

            </section>
        </div>
              <Footer/>
    </main>
  );
};

export default Rooms;

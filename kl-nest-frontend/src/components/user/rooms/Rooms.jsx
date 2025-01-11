import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Banner from '../../bannerProps/Banner';
import Search from '../../searchProps/Search';
import { Link } from 'react-router-dom';

const Rooms = () => {  
  const [displayroom, setDisplayroom]=useState([]);
  
  useEffect(() => {

    async function displayroombak(){
        const resultroom =await fetch('http://127.0.0.1:8000/api/displayroom')
        const jsonResult = await resultroom.json(); // Parse JSON
        setDisplayroom(jsonResult);
        
    }
    displayroombak();
  }, [])
  
  return (
    <main>
                <Navbar />
        <div className="pt-36">
                {/*___________________ Banner Props  ____________________________*/}
              <Banner title='Rooms' logoName='KL~Nest' pipesimbol='|' link='/home'/>

            <section className="py-12 px-20 bg-white">
                {/*___________________ Rooms Heading  ____________________________*/}
              <div className='flex justify-between items-center'>
                <h2 className="text-3xl font-bold text-blue-950 mb-6">Explore Hostel Rooms</h2>
                {/*___________________ Search tool props  ____________________________*/}
                <Search placeholders='Find Your Hostel'/>             
              </div>

                {/*_____________ Room card Details ________________*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">    
                  {displayroom.map((room)=>(

                    <div key={room.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">             
                    <img src={"http://127.0.0.1:8000/storage/" + room.image} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-950">{room.name}</h3>
                      <p className="text-gray-600 text-lg">₹{room.amount}/month</p>
                      <Link to='/rooms/book-now'><button  className="mt-4 bg-blue-950 text-white px-4 py-2 rounded-md shadow hover:bg-blue-800 transition duration-300" > Book Now </button></Link>
                    </div>
                    </div> ))}       
                    
                    
                </div>

            </section>
        </div>
                {/*___________________ Foote Section  ____________________________*/}

              <Footer/>
    </main>
  );
};

export default Rooms;

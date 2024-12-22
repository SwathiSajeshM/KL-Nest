import React from 'react';
import Navbar from '../navbar/Navbar';

// Import images
import img1 from '../../../assets/hostel-1.webp';
import img2 from '../../../assets/room-2.webp';
import img3 from '../../../assets/hall-1.webp';
import img4 from '../../../assets/room-3.webp';
import img5 from '../../../assets/room-8.avif';
import img6 from '../../../assets/room-9.avif';
import img7 from '../../../assets/room-6.jpg';
import img8 from '../../../assets/foodarea.webp';

const Pics = () => {  
  const photos = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <main>
      <Navbar />
      <div className="pt-14">  

        {/*_____________________________ Photo details ____________________ */}
        <section className="py-12 px-20 bg-white">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Our Gallery</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">Explore moments captured at KL Nest. From cozy rooms to vibrant events, here's a glimpse of our hostel. </p>

          {/*_____________________________ Photos ____________________ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "> {photos.map((photo, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg ">
                  <img src={photo} alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
                </div>))}
            </div>
        </section>
        
      </div>
    </main>
  );
};

export default Pics;

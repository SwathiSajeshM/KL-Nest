import React from 'react';
import Navbar from '../navbar/Navbar';
import aboutImage from '../../../assets/room-5.webp'; 
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Banner from '../../bannerProps/Banner';

const About = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-36">
   
<Banner title='About' logoName='KL~Nest' link='/home' />

       
        <section className="py-12 px-20 bg-white flex flex-col md:flex-row gap-10 items-center">
          
          <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">Welcome to KL Nest</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    KL Nest is your ultimate haven for students seeking comfort, community, and affordability. 
                    Located in the vibrant heart of India, we offer an unparalleled hostel experience for 
                    backpackers, explorers, and wanderlust-filled adventurers.
                </p>

                <h3 className="text-2xl font-semibold text-blue-950 mt-8">Why Choose KL Nest?</h3>
                <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed mt-4">
                    <li> <strong>Prime Location:</strong> Situated near major attractions, KL Nest makes exploring easy and fun. </li>
                    <li> <strong>Affordable Comfort:</strong> Clean and cozy accommodations at wallet-friendly prices. </li>
                    <li> <strong>Community Vibes:</strong> Meet like-minded travelers at our events, lounges, and common areas. </li>
                    <li> <strong>Modern Amenities:</strong> High-speed Wi-Fi, secure lockers, and fully equipped kitchens. </li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-950 mt-8">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed mt-4">
                    At KL Nest, we're committed to creating memorable travel experiences by offering a safe, friendly, 
                    and welcoming environment. Our goal is to bring people together and make every stay unforgettable.
                </p>

                <h3 className="text-2xl font-semibold text-blue-950 mt-8">Get in Touch</h3>
                <p className="text-gray-600 text-lg leading-relaxed mt-4">
                    Whether you're looking to book a room or simply have questions, we're here to help. Contact us today,{''} 
                    and let's make your journey extraordinary!
                    <Link to='/contact'><p className='text-[#8a8c91] hover:underline text-base'>more...</p></Link>
                </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img  src={aboutImage}  alt="About KL Nest"  className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          
        </section>
      </div>
      <Footer/>
      
    </main>
  );
};

export default About;

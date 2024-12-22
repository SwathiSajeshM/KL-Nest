import React from 'react';
import Navbar from '../navbar/Navbar';
import user0 from '../../../assets/user-0.jpg';
import user1 from '../../../assets/user-1.jpeg';
import user2 from '../../../assets/user-2.webp';
import user3 from '../../../assets/user-3.jpg';

const testimonials = [
  {
    name: 'Emily Johnson',
    feedback: 'KL Nest provided me with a home away from home. The rooms were cozy, and the staff was incredibly welcoming!',
    photo: user0, 
  },
  {
    name: 'Eesha',
    feedback: 'I had an amazing experience at KL Nest. The location is perfect for exploring, and the amenities are top-notch!',
    photo: user2,
  },
  {
    name: 'Rajesh Kumar',
    feedback: 'The community vibes at KL Nest are unmatched. I made lifelong friends during my stay!',
    photo: user1,
  },
  {
    name: 'Sreeharsh',
    feedback: 'Affordable, clean, and super friendly staff. Highly recommend KL Nest to all travelers!',
    photo: user3,
  },
];

const Testimonials = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-36">   
        <section className="py-12 px-20 bg-white">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">What Our Guests Say</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10"> We love hearing from our guests! Here's what some of them have to say about their experience at KL Nest.</p>
         
          {/*_________________ testimonial array details ____________________*/}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">{testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-blue-50 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                <img src={testimonial.photo}  alt={testimonial.name} className="w-24 h-24 rounded-full object-cover mb-4 shadow-md transition-transform duration-300 hover:scale-105" />
                <h3 className="text-xl font-bold text-blue-950">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{testimonial.feedback}</p>
              </div> ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Testimonials;

import React from 'react';
import Navbar from '../navbar/Navbar';
import contactImage from '../../../assets/contact.avif'
import Footer from '../footer/Footer';
import Banner from '../../bannerProps/Banner';

const Contact = () => {
  return (
    <main>

      <Navbar />

            <div className="pt-36">  

                <Banner title='Contact' logoName='KL~Nest' pipesimbol='|' link='/home'  />       

                <section className="py-12 px-20 bg-white flex flex-col md:flex-row gap-10 items-center"> 
                    <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold text-blue-950 mb-6">Get in Touch</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6"> Have questions or need assistance? Feel free to reach out. Our team is here to help you! </p> 
                        <form className="space-y-6">              
                            <div> <label className="block text-gray-700 font-medium mb-2" htmlFor="name"> Your Name </label>
                                  <input type="text" id="name"autoComplete='off' placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" /> </div>
                            <div> <label className="block text-gray-700 font-medium mb-2" htmlFor="email"> Your Email </label>
                                  <input type="email" id="email" autoComplete='off' placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" /> </div>
                            <div> <label className="block text-gray-700 font-medium mb-2" htmlFor="message"> Your Message </label>
                                  <textarea id="message" autoComplete='off' placeholder="Write your message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"> </textarea> </div>
                            <button type="submit" className="bg-blue-950 text-white px-6 py-2 rounded-md shadow hover:bg-blue-800 transition duration-300" > Submit </button>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src={contactImage} alt="Contact Us" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
                    </div>
                </section>
            </div>
            
            <Footer/>
            
    </main>
  );
};

export default Contact;

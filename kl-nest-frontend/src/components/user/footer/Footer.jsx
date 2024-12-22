import React from 'react';
import navlogo from '../../../assets/kl-logo.png'
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdAddCall } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-8 ">
      <div className="container mx-auto px-20">
        
          {/*__________________ iFrame ___________________ */}

          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg p-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093567!2d144.9630555156361!3d-37.81362774202012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1c5b9b3%3A0x5e4dc93edfb85617!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1633284577981!5m2!1sen!2sus"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="KL Nest Location" > </iframe>
          </div>

          {/*__________________ left-footer ___________________ */}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
         
            <div className="w-full md:w-1/3 ">
                <Link to='/home'> <img src={navlogo} alt="" className='h-24 rounded-full ' /> </Link>  
                <p className="text-gray-600  text-lg leading-relaxed"> Your next adventure starts here! </p>
              <p className='pt-4 text-blue-950 flex gap-7'>
                <a href="tel:8921225912" target="_blank" rel="noopener noreferrer"> <MdAddCall /> </a>
                <a href="https://wa.me/8921225912" target="_blank" rel="noopener noreferrer"> <FaWhatsapp /> </a>
                <a href="mailto:swathimknr@gmail.com" target="_blank" rel="noopener noreferrer"> <BiLogoGmail /> </a>
                <a href="https://www.instagram.com/swathi_s_a_j_e_s_h" target="_blank" rel="noopener noreferrer"> <FaInstagram /> </a>
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"> <FaFacebook /> </a>
              </p>
            </div>

          {/*__________________ Quick Links___________________ */}

          <div className="w-full md:w-1/3 pt-8">
              <h3 className="text-xl font-bold text-blue-950">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li> <Link  to="/home" className="text-gray-600 hover:text-blue-950 transition duration-300">Home</Link> </li>
              <li> <Link to="/about" className="text-gray-600 hover:text-blue-950 transition duration-300">About Us</Link> </li>
              <li> <Link to="/contact" className="text-gray-600 hover:text-blue-950 transition duration-300">Contact</Link> </li>
              <li> <Link to="/rooms" className="text-gray-600 hover:text-blue-950 transition duration-300">Rooms</Link> </li>
            </ul>
          </div>

          {/*______________________ Contact Info ____________________ */}

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold text-blue-950">Contact Us </h3>
            <p className="mt-4 text-gray-600"><strong>Email:</strong> info@klnest.com </p>
            <p className="text-gray-600"><strong>Phone:</strong> +91-123-456-7890 </p>
            <p className="text-gray-600"><strong>Address:</strong> 123, KL Nest Street, New Delhi, India </p>
          </div>
        </div>

        {/*______________________ Footer Bottom Section _________________*/}
          <div className="mt-8 border-t border-gray-300 pt-4 text-center">
            <p className="text-gray-600 text-sm"> © {new Date().getFullYear()} KL~Nest. All rights reserved. Designed for explorers. </p>
          </div>
     
      </div>
    </footer>
  );
};

export default Footer;

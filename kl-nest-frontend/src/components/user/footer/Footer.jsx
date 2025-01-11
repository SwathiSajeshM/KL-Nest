import React from 'react';
import navlogo from '../../../assets/kl-logo.png';
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white to-[#b1c8e4] text-gray-800">
      <div className="container mx-auto py-12 px-8">

        <div className="flex flex-wrap justify-between items-start gap-8">
          {/*_________________ Logo and Description _________________________*/}
          <div className="w-full md:w-1/4">
            <Link to="/home"><img src={navlogo} alt="Logo" className="h-24 rounded-full" /></Link>
            <p className="mt-4 text-gray-700 text-sm">Discover your next adventure with KL Nest. Find the perfect room and enjoy your stay!</p>
          </div>

          {/*_________________________  Subscription ______________________*/}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold text-blue-950">Subscribe to Our Newsletter</h3>
            <p className="mt-2 text-gray-600 text-sm">Stay updated with the latest offers, news, and tips for travelers!</p>
            <form className="mt-4 flex">
              <input type="email" placeholder="Enter your email" className="placeholder:text-[#667894] text-black outline-none bg-white w-full px-3 py-3 border  focus:border-blue-950 transition duration-700 ease-in-out rounded-r-none rounded-l-md" />
              <button className="bg-blue-950 text-white px-4 py-2 rounded-r-lg hover:bg-blue-950 transition">Subscribe</button>
            </form>
          </div>

          {/*__________________________ Quick Links ________________________*/}
          <div className="w-full md:w-1/6">
            <h3 className="text-lg font-bold text-blue-950">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/home" className="text-gray-700 hover:text-blue-950 transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-blue-950 transition">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-blue-950 transition">Contact</Link></li>
              <li><Link to="/rooms" className="text-gray-700 hover:text-blue-950 transition">Rooms</Link></li>
            </ul>
          </div>

          {/*_____________________________ Contact Info ________________________*/}
          <div className="w-full md:w-1/4">

            <h3 className="text-lg font-bold text-blue-950">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li><strong>Email:</strong> info@klnest.com</li>
              <li><strong>Phone:</strong> +91-123-456-7890</li>
              <li><strong>Address:</strong> 123, KL Nest Street, New Delhi, India</li>
            </ul>

            <div className="flex mt-4 space-x-4 text-blue-950">
              <Link to="https://wa.me/8921225912" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={20} /></Link>
              <Link to="mailto:swathimknr@gmail.com" target="_blank" rel="noopener noreferrer"><BiLogoGmail size={20} /></Link>
              <Link to="https://www.instagram.com/swathi_s_a_j_e_s_h" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></Link>
              <Link to="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></Link>
              <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={20} /></Link>
              <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></Link>
            </div>

          </div>
        </div>

        {/*________________________ Bottom Section _____________________*/}
        <div className="mt-12 border-t border-gray-300 pt-6 text-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} KL~Nest. All rights reserved. Designed for adventurers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

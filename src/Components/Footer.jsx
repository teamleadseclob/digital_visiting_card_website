import React from 'react'; 
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWordpress } from 'react-icons/fa';
import LogoFooter from '.././assets/LogoFooter.png';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-[#006391] text-white p-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Section 1: Logo */}
        <div className="mb-8 w-40 h-auto items-start">
          <img src={LogoFooter} alt="Seclob Logo" />  
        </div>

        {/* Section 2: Learn More */}
        <div className="mb-6 lg:col-span-1">
          <h2 className="font-medium mb-4 text-base sm:text-[18px] lg:text-[18px]">Learn More</h2>
          <ul className="text-sm space-y-2 sm:text-[14px] lg:text-[14px]">
            <li>About Seclob</li>
            <li>Press Releases</li>
            <li>Environment</li>
            <li>Jobs</li> 
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Section 3: Tickets & Booking */}
        <div className="mb-6 lg:col-span-1">
          <h2 className="font-medium mb-4 text-base sm:text-[18px] lg:text-[18px]">Tickets & Booking</h2>
          <ul className="text-sm space-y-2 sm:text-[14px] lg:text-[14px]">
            <li>Seclob Tickets</li>
            <li>Season Passes</li>
            <li>Vacation Packages</li>
          </ul>
        </div>

        {/* Section 4: Contact Us */}
        <div className="mb-6 lg:col-span-1">
          <h2 className="font-medium mb-4 text-base sm:text-[18px] lg:text-[18px]">Contact Us</h2>
          <ul className="text-sm space-y-2 sm:text-[14px] lg:text-[14px]">
            <li>Hotel Reservation: <span className="font-bold">123-456-7890</span></li>
            <li>Ticket Office: <span className="font-bold">123-456-7890</span></li>
          </ul>
        </div>

        {/* Section 5: Social Media Icons */}
        <div className="mb-6 lg:col-span-1">
          <h2 className="font-medium mb-4 text-base sm:text-[18px] lg:text-[18px]">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="text-white hover:text-blue-500" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" className="text-white hover:text-pink-500" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" className="text-white hover:text-blue-400" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com" className="text-white hover:text-red-600" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://www.wordpress.com" className="text-white hover:text-gray-500" aria-label="WordPress">
              <FaWordpress />
            </a>
          </div>
        </div>
      </div>

      {/* Reach Out to Us Section */}
      <div className="flex justify-end mt-8 w-full">
        <div className="flex items-center space-x-2 bg-white p-2 rounded-full w-full max-w-md">
          <input
            type="text"
            placeholder="Reach out to us"
            className="flex-grow p-2 rounded-full bg-white text-gray-800 focus:outline-none"
          />
          <button className="bg-[#006391] text-white rounded-full px-4 py-2 font-medium">
            Send
          </button>
        </div>
      </div>

      <div className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
        &copy; 2024 Seclob Media | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

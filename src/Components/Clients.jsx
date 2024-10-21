import React from 'react';
import { BsGraphUpArrow } from 'react-icons/bs'; 
import ClientImg from '../assets/Client.jpg';

const Clients = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 mt-20">
      {/* Title Section */}
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1167b1]">Our Trusted Clients</h2>
        <p className="text-gray-600 mt-1">
          Proudly partnered with leading brands, businesses,
          and professionals across the globe!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl space-y-4 md:space-y-0">

        {/* Left Stats */}
        <div className="flex flex-col items-center md:items-start space-y-2 w-full md:w-1/3">
          <p className="text-lg font-semibold">
            500k<span className="text-blue-600">+</span>
          </p>
          <p className="text-gray-500 text-sm">Trusted professionals</p>

          {/* Adjusted Users Box */}
          <div className="border border-gray-200 rounded-lg p-4 shadow-lg w-40">
            <p className="text-5xl font-semibold">1M<span className="text-blue-600">+</span></p>
            <p className="text-gray-500 text-sm">Users</p>
            {/* Avatar Section */}
            <div className="flex justify-center mt-2 space-x-2">
              {/* Individual Avatars */}
              <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                <img src={ClientImg} alt="Client 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                <img src={ClientImg} alt="Client 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                <img src={ClientImg} alt="Client 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <div className="w-full max-w-lg rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
            <img src={ClientImg} alt="Client" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Right Stats */}
        <div className="flex flex-col items-center md:items-end space-y-2 w-full md:w-1/3">
          <p className="text-gray-500 text-center md:text-left text-sm">
            <span>Join our plan & connect</span> <br />
            <span>with a community of</span> <br /> 
            <span>satisfied users today!</span> <br />
          </p>
          <div className="border border-gray-200 rounded-lg p-4 shadow-lg w-40 relative">
            <p className="text-4xl font-semibold text-start">2.5L</p>
            <p className="text-gray-500 text-start text-sm">Plans purchased</p>

            {/* Updated Icon Section with Graph Up Arrow */}
            <div className="mt-2 flex space-x-2 justify-start items-center">
              {/* Graph Up Arrow Icon */}
              <BsGraphUpArrow className='text-[#1167b1] size-10' size={24} /> {/* Adjust size here */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;


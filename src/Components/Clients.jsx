import React from 'react';
import ClientCenter from '../assets/ClientCenter.svg';
import ClientRight from '../assets/ClientRight.svg';
import ClientLeft from '../assets/ClientLeft.svg';

const Clients = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 ">
      {/* Title Section */}
      <div className="text-center mb-4 sm:space-y-8 md:space-y-6 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#006391]">Our Trusted Clients</h2>
        <p className="text-gray-600 mt-1 text-base sm:text-[18px] lg:text-[18px]">
          Proudly partnered with leading brands, businesses, and professionals across the globe!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:space-y-6 md:space-y-10 md:flex-row justify-between items-center w-full max-w-4xl">

        {/* Left Stats */}
        <div className="flex flex-col mt-8 items-center md:items-start space-y-2 w-full md:w-1/3 mb-8 sm:mb-0">
          <p className="text-lg font-semibold">
            500k<span className="text-[#006391]">+</span>
          </p>
          <p className="text-gray-500 text-sm">Trusted professionals</p>

          {/* Adjusted Users Box */}
          <div className="border border-gray-200 mt-8 rounded-lg p-4 shadow-lg w-40">
            {/* Avatar Section */}
            <div className="flex justify-center space-x-2">
              {/* Individual Avatars */}
              <img src={ClientRight} alt="" />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 sm:mb-12 md:mb-0">
          <div className="w-full max-w-lg rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
            <img src={ClientCenter} alt="Client" className="w-full h-auto object-cover" />
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
            <img src={ClientLeft} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

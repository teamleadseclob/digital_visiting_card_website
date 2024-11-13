import React from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import Card1 from '../assets/Card1.png';
import Card2 from '../assets/Card2.png';
import Card3 from '../assets/Card3.png';

const CardComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 mt-20">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#006391]">Type of Cards</h1>
      
      {/* Card Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mt-12">
        
        {/* PVC Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
          <img 
            src={Card1}
            alt="PVC Card" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">PVC Cards</h3>
            <p className="text-gray-600 text-sm mt-2">
              Plastic cards made from polyvinyl chloride (PVC), a synthetic polymer.
            </p>
          </div>
          {/* Arrow Icon */}
          <div className="absolute bottom-4 right-4 text-gray-400 text-2xl">
          <IoIosArrowDropright />
          </div>
        </div>

        {/* Metal Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
          <img 
            src={Card2}
            alt="Metal Card" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Metal Cards</h3>
            <p className="text-gray-600 text-sm mt-2">
              These cards are generally made of metal, offering durability.
            </p>
          </div>
          {/* Arrow Icon */}
          <div className="absolute bottom-4 right-4 text-gray-400 text-2xl">
          <IoIosArrowDropright />
          </div>
        </div>

        {/* Bamboo Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
          <img 
            src={Card3}
            alt="Bamboo Card" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Bamboo Cards</h3>
            <p className="text-gray-600 text-sm mt-2">
              Unique cards crafted from bamboo and blended with cotton.
            </p>
          </div>
          {/* Arrow Icon */}
          <div className="absolute bottom-4 right-4 text-gray-400 text-2xl">
          <IoIosArrowDropright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

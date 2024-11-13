import React from 'react';
import Frame from '../assets/Frame1.svg';

const CardComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 mt-20">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#006391]">Sample Templates</h1>
      
      {/* Card Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-12">
        
        {/* Template Card */}
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300 p-4">
            <div className="border border-gray-300 p-2 rounded-lg">
              <img 
                src={Frame}
                alt={`Frame ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default CardComponent;

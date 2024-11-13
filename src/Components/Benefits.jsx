import React from 'react'
import Card1 from '../assets/TypeCard1.png';
import Card2 from '../assets/TypeCard2.png';
import Card3 from '../assets/TypeCard3.png';
import Card4 from '../assets/TypeCard4.png'; 
import Card5 from '../assets/TypeCard5.png';
import Card6 from '../assets/TypeCard6.png';
import Card7 from '../assets/TypeCard7.png';
import Card8 from '../assets/TypeCard8.png';

const Benefits = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 mt-20">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#006391]">Digital ecard is Beneficial for?</h1>
      
      {/* Card Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl mt-12">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden relative">
          <img 
            src={Card1}
            alt="PVC Card" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl text-center font-semibold">Business owners</h3>
            <p className="text-gray-600 text-center text-sm mt-2">
            Business owners who call and/or meet prospects personally to get business
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden relative">
          <img 
            src={Card2}
            alt="Metal Card" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Sales professionals</h3>
            <p className="text-gray-600 text-sm mt-2">
            Independent sales professionals, Field staff and sales executives.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden relative">
          <img 
            src={Card3}
            alt="Bamboo Card" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Software & IT</h3>
            <p className="text-gray-600 text-sm mt-2">
            Web designers, Digital and Social Media Marketers who call / meet business peoples
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden relative">
          <img 
            src={Card4}
            alt="Card 4" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Marketing agencies</h3>
            <p className="text-gray-600 text-sm mt-2">
            Advertising, Branding, News paper, Printing and Media Planning Houses
            </p>
          </div>
        </div>
        
        {/* Card 5 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden relative">
          <img 
            src={Card5}
            alt="Card 5" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Consultants</h3>
            <p className="text-gray-600 text-sm mt-2">
            Architect, Interior Designer,CA, Finance ant other consultants
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden relative">
          <img 
            src={Card6}
            alt="Card 6" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Events & Travels</h3>
            <p className="text-gray-600 text-sm mt-2">
            Professionals from Event Management, Tours and Travel Companies
            </p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden relative">
          <img 
            src={Card7}
            alt="Card 7" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Health & Beauty</h3>
            <p className="text-gray-600 text-sm mt-2">
            Gym, Beautician, Salon, Dietician, Image Consultants, Yoga & Dance Professionals
            </p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden relative">
          <img 
            src={Card8}
            alt="Card 8" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Education & Training</h3>
            <p className="text-gray-600 text-sm mt-2">
            Gym, Beautician, Salon, Dietician, Image Consultants, Yoga & Dance Professionals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

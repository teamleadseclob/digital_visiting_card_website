import React from 'react';
import { FaPencilAlt } from 'react-icons/fa'; 
import { PiMoneyBold } from "react-icons/pi";
import { IoShareSocialSharp } from "react-icons/io5";

const features = [
    { icon: <FaPencilAlt />, label: 'Create your digital ecard' },
    { icon: <PiMoneyBold />, label: 'Embed your digital ecard' },
    { icon: <IoShareSocialSharp />, label: 'Share with customers & friends' },
];

const CardWork = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white p-8 mt-20">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#006391]">
                How ecard works?
            </h1>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl mt-10">
                {features.map((feature, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-2xl shadow-md min-h-[220px] flex flex-col items-center justify-center relative p-6 border-8 border-[#EEEEEE]"
                    >
                        {/* Icon */}
                        <div className="text-gray-400 text-4xl mb-4">
                            {feature.icon}
                        </div>
                        {/* Label */}
                        <h1 className="text-center text-gray-400 font-medium text-lg sm:text-xl md:text-2xl">
                            {feature.label}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardWork;
 
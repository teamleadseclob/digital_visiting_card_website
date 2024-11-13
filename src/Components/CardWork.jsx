import React from 'react';
import { FaPencilAlt } from 'react-icons/fa'; 
import { PiMoneyBold } from "react-icons/pi";
import { IoShareSocialSharp } from "react-icons/io5";

const CardWork = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white p-8 mt-20">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#006391]">How Seclob ecard works?</h1>

            {/* Card Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mt-12">

                {/* PVC Card */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center relative p-8 min-h-[300px] border-8 border-gray-300">
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-gray-400 text-3xl">
                        <FaPencilAlt />
                    </div>
                    <h1 className="text-center text-gray-400 font-semibold text-xl sm:text-2xl md:text-3xl mt-16">
                        Create your
                        digital ecard
                    </h1>
                </div>

                {/* Metal Card */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center relative p-8 min-h-[300px] border-8 border-gray-300">
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-gray-400 text-4xl">
                        <PiMoneyBold />
                    </div>  
                    <h1 className="text-center text-gray-400 font-semibold text-xl sm:text-2xl md:text-3xl mt-16">
                        Embed your
                        digital ecard
                    </h1>
                </div>

                {/* Bamboo Card */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center relative p-8 min-h-[300px] border-8  border-gray-300">
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-gray-400 text-4xl">
                        <IoShareSocialSharp />
                    </div>
                    <h1 className="text-center text-gray-400 font-semibold text-xl sm:text-2xl md:text-3xl mt-16">
                        Share with your
                        customers and
                        friends
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default CardWork;

import React from 'react';
import { FaCheck } from 'react-icons/fa';

const PricingSection = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white p-20 sm:p-16 md:p-32">
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1167b1]">
                    Get Your Digital Card Package Now   
                </h1>
                <p className="text-gray-700 mt-1">      
                    Select a plan that best suits your needs and create professional digital cards effortlessly. 
                </p>
            </div>

            {/* Pricing Plans */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {/* Basic Plan */}
                <div className="bg-gray-50 p-5 rounded-lg shadow-md text-left flex flex-col min-h-[400px]">
                    <h3 className="text-[#1167b1] mb-2 font-bold">Basic Plan</h3>
                    <h2 className="text-black text-4xl font-bold mb-5">$12.3</h2>
                    <ul className="list-none p-0 mb-5 flex-grow">
                        <li className="mb-4 text-gray-800 flex items-center">
                            <FaCheck className="text-black mr-2" />
                            Upload Video up to 720p Resolution
                        </li>
                        <li className="mb-4 text-gray-800 flex items-center">
                            <FaCheck className="text-black mr-2" />
                            Attachment & Post Scheduling
                        </li>
                        <li className="mb-4 text-gray-800 flex items-center">
                            <FaCheck className="text-black mr-2" />
                            Set your rates
                        </li>
                    </ul>
                    <button className="mt-auto w-full text-[#1167b1] border-2 border-[#1167b1] py-2 px-4 rounded transition-colors duration-300 hover:bg-[#1167b1] hover:text-white hover:border-[#1167b1]">
                        Get Plan
                    </button>
                </div>

                {/* Silver Plan */}
                <div className="bg-gray-50 p-5 rounded-lg shadow-md text-left flex flex-col min-h-[400px]">
                    <h3 className="text-[#1167b1] mb-2 font-bold">Silver Plan</h3>
                    <h2 className="text-black text-4xl font-bold mb-5">$43.5</h2>
                    <ul className="list-none p-0 mb-5 flex-grow">
                        <li className="mb-4 text-gray-800 flex items-center">
                            <FaCheck className="text-black mr-2" />
                            Upload Video up to 720p Resolution
                        </li>
                        <li className="mb-4 text-gray-800 flex items-center">
                            <FaCheck className="text-black mr-2" />
                            Attachment & Post Scheduling
                        </li>
                        <li className="mb-4 text-gray-800 flex items-center">
                            <FaCheck className="text-black mr-2" />
                            Set your rates
                        </li>
                    </ul>
                    <button className="mt-auto w-full text-[#1167b1] border-2 border-[#1167b1] py-2 px-4 rounded transition-colors duration-300 hover:bg-[#1167b1] hover:text-white hover:border-[#1167b1]">
                        Get Plan
                    </button>
                </div>

                {/* Gold Plan */}
                <div className="bg-gray-50 p-5 rounded-lg shadow-md text-left flex flex-col min-h-[400px]">
                    <h3 className="text-[#1167b1] mb-2 font-bold">Gold Plan</h3>
                    <h2 className="text-black text-4xl font-bold mb-5">$78.9</h2>
                    <ul className="list-none p-0 mb-5 flex-grow">
                        <li className="mb-4 text-gray-800 flex items-center">
                            <FaCheck className="text-black mr-2" />
                            Upload Video up to 720p Resolution
                        </li>
                        <li className="mb-4 text-gray-800 flex items-center">
                            <FaCheck className="text-black mr-2" />
                            Attachment & Post Scheduling
                        </li>
                        <li className="mb-4 text-gray-800 flex items-center">
                            <FaCheck className="text-black mr-2" />
                            Set your rates
                        </li>
                    </ul>
                    <button className="mt-auto w-full text-[#1167b1] border-2 border-[#1167b1] py-2 px-4 rounded transition-colors duration-300 hover:bg-[#1167b1] hover:text-white hover:border-[#1167b1]">
                        Get Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;

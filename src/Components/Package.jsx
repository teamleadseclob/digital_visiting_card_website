import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { CgEditBlackPoint } from "react-icons/cg";

const PricingPlan = ({ planName, price, features }) => {
    return (
        <div className="bg-gray-100 p-5 rounded-lg shadow-lg text-left flex flex-col min-h-[400px]">
            <li className="mb-4 text-gray-800 flex items-center">
                <CgEditBlackPoint className="text-[#006391] mb-2 mr-2" />
                <h3 className="text-[#006391] mb-2 font-bold">{planName}</h3>
            </li>
            <h2 className="text-black text-4xl font-semibold mb-5">{price}</h2>
            <ul className="list-none p-0 mb-5 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="mb-4 text-gray-800 flex items-center">
                        <FaCheck className="text-black mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>
            <button className="mt-auto w-full text-[#006391] border-2 border-[#006391] py-2 px-4 rounded transition-colors duration-300 hover:bg-[#006391] hover:text-white hover:border-[#006391]">
                Get Plan
            </button>
        </div>
    );
};

const PricingSection = () => {
    const plans = [
        {
            name: 'Basic Plan',
            price: '$12.3',
            features: [
                'Upload Video up to 720p Resolution',
                'Attachment & Post Scheduling',
                'Set your rates'
            ]
        },
        {
            name: 'Silver Plan',
            price: '$43.5',
            features: [
                'Upload Video up to 720p Resolution',
                'Attachment & Post Scheduling',
                'Set your rates'
            ]
        },
        {
            name: 'Gold Plan',
            price: '$78.9',
            features: [
                'Upload Video up to 720p Resolution',
                'Attachment & Post Scheduling',
                'Set your rates'
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center bg-white p-8 mt-20">
            <div className="text-center mb-4 sm:space-y-8 md:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#006391]">
                    Get Your Digital Card Package Now
                </h1>
                <p className="text-gray-600 mt-1 text-base sm:text-[18px] lg:text-[18px]">
                    Select a plan that best suits your needs and create professional digital cards effortlessly.
                </p>
            </div>
            {/* Pricing Plans */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mt-12">
                {plans.map((plan, index) => (
                    <PricingPlan 
                        key={index}
                        planName={plan.name}
                        price={plan.price}
                        features={plan.features}
                    />
                ))}
            </div>
        </div>
    );
};

export default PricingSection;


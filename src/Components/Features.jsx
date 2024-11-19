import React from 'react';
import { IoShareSocialSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md"; 
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { MdFeedback, MdContacts } from "react-icons/md";
import { IoLinkSharp } from "react-icons/io5";
import { SiGoogleforms } from "react-icons/si";

const Features = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white p-8 mt-20">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#006391]">Features of ecard</h1>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl mt-12">

                {/* Feature Cards */}
                {[
                    { icon: <MdPhone />, label: 'One click call' },
                    { icon: <IoLogoWhatsapp />, label: 'One click WhatsApp' },
                    { icon: <BiLogoGmail />, label: 'One click Email' },
                    { icon: <MdFeedback />, label: 'Get customer feedbacks' },
                    { icon: <MdContacts />, label: 'Add to contacts easily' },
                    { icon: <IoShareSocialSharp />, label: 'Unlimited shares' },
                    { icon: <IoLinkSharp />, label: 'Websites & Social links' },
                    { icon: <SiGoogleforms />, label: 'Enquiry form' }
                ].map((feature, index) => (
                    <div key={index} className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col items-center justify-center relative p-6 min-h-[100px] border-8 border-[#EEEEEE]">
                        <div className="text-gray-400 text-3xl mb-4">
                            {feature.icon}
                        </div>
                        <h1 className="text-center text-gray-400 font-medium text-lg sm:text-xl">
                            {feature.label}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;

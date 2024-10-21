// import React from 'react';
// import Pro2 from '.././assets/Screenshot (36).png';
// import Pro3 from '.././assets/Screenshot (35).png';

// const Home = () => {
//     return (
//         <>
//             {/* Wrapper for overall alignment and spacing */}
//             <div className="flex flex-col items-center justify-center bg-white p-28">
//                 {/* Container for first section */}
//                 <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl p-4 md:p-6">
//                     {/* Left Section */}
//                     <div className="md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
//                         <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1167b1]">
//                             Create Your Digital <br />
//                             Business ID Card In <br />
//                             Seconds Today!
//                         </h1>
//                         <p className="text-lg text-gray-600">
//                             Instantly create a personalized digital ID card showcasing <br/>
//                             your business services, products, contact details, and reviews Start now!
//                         </p>
//                         <button className="bg-[#1167b1] text-white px-4 md:px-6 py-2 rounded-lg hover:bg-[#0f5b9d] transition duration-200">
//                             Try It Now
//                         </button>
//                     </div>

//                     {/* Right Section with image */}
//                     <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
//                         <img src={Pro2} alt="Digital Business ID Card" className="w-64 sm:w-80 md:w-full max-w-sm h-auto" />
//                     </div>
//                 </div>

//                 {/* Container for second section */}
//                 <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-6xl p-4 md:p-6 mt-12">
//                     {/* Right Section with image */}
//                     <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
//                         <img src={Pro3} alt="Digital Business ID Card" className="w-64 sm:w-80 md:w-full max-w-sm h-auto" />
//                     </div>

//                     {/* Left Section */}
//                     <div className="md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
//                         <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1167b1]">
//                             Effortlessly
//                             Create Your Digital
//                             Business Identity
//                         </h1>
//                         <p className="text-lg  text-gray-600">
//                             Design, manage, and share digital business ID cards to
//                             simplify networking and build trust professionally, all while
//                             ensuring your contact details and services are instantly
//                             accessible. Empower your brand with a seamless, modern
//                             solution for connecting with clients and partners.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;



import React from 'react';
import Pro2 from '.././assets/Screenshot (36).png';
import Pro3 from '.././assets/Screenshot (35).png';

const Home = () => {
    return (
        <>
            {/* Wrapper for overall alignment and spacing */}
            <div className="flex flex-col items-center justify-center bg-white p-24">
                {/* Container for first section */}
                <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl p-4 md:p-6">
                    {/* Right Section */}
                    <div className="md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1167b1]">
                            Create Your Digital Business ID Card In Seconds Today!
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600">
                            Instantly create a personalized digital ID card showcasing your business services, products, contact details, and reviews. Start now!
                        </p>
                        <button className="bg-[#1167b1] text-white px-4 md:px-6 py-2 rounded-lg hover:bg-[#0f5b9d] transition duration-200">
                            Try It Now
                        </button>
                    </div>

                    {/* Right Section with image */}
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <img src={Pro2} alt="Digital Business ID Card" className="w-64 sm:w-80 md:w-full max-w-sm h-auto" />
                    </div>
                </div>


                {/* Container for second section */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-center  max-w-6xl p-4 md:p-6 mt-6">
                    {/* left Section with image */}
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <img src={Pro3} alt="Digital Business ID Card" className="w-64 sm:w-80 md:w-full max-w-sm h-auto" />
                    </div>

                    {/* Left Section */}
                    <div className="md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1167b1]">
                            Effortlessly Create Your Digital Business Identity
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600">
                            Design, manage, and share digital business ID cards to simplify networking and build trust professionally, all while ensuring your contact details and services are instantly accessible. Empower your brand with a seamless, modern solution for connecting with clients and partners.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;

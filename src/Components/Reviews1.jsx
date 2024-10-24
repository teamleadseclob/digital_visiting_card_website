import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Import the icons

const Reviews1 = ({ currentReviews, totalPages, currentPage, handlePageChange, isLongReview }) => {
    // Handle previous and next page clicks
    const handlePrevious = () => {
        if (currentPage > 0) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            handlePageChange(currentPage + 1);
        }
    };

    return (
        <div className="w-full max-w-7xl">
            {/* Reviews Section */}
            <div className="flex justify-center gap-4 py-4 overflow-hidden">
                {currentReviews.map((client, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-6 rounded-lg shadow-md min-w-[300px] max-w-xs text-left flex flex-col items-start transition-opacity duration-300"
                        style={{ height: '200px' }} // Increased height
                    >
                        {/* Image, Name, and Role in one row */}
                        <div className="flex items-center mb-4">
                            <img
                                src={client.imgUrl}
                                alt={`${client.name}'s profile`}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h3 className="text-[18px] font-semibold">{client.name}</h3>
                                <p className="text-gray-500 text-[14px]">{client.role}</p>
                            </div>
                        </div>

                        {/* Review Text with Scroll */}
                        <p
                            className={`text-gray-700 text-[16px] ${isLongReview(client.review) ? 'overflow-y-auto' : ''}`}
                            style={{ maxHeight: isLongReview(client.review) ? '80px' : 'auto' }} 
                        >
                            {client.review}
                        </p>
                    </div>
                ))}
            </div>

            {/* Pagination Section with Previous/Next Icons and Current Page Display */}
            <div className="flex justify-center items-center mt-6">
                {/* Previous Icon */}
                <button
                    onClick={handlePrevious}
                    className="py-2 mx-2 rounded-md text-black flex items-center justify-center"
                    disabled={currentPage === 0}
                >
                    <AiOutlineLeft size={20} /> 
                </button>

                {/* Current Page Number */}
                <span className="text-xl font-normal mx-4">
                    {currentPage + 1}
                </span>

                {/* Next Icon */}
                <button
                    onClick={handleNext}
                    className="py-2 mx-2 rounded-md text-black flex items-center justify-center"
                    disabled={currentPage === totalPages - 1}
                >
                    <AiOutlineRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default Reviews1;

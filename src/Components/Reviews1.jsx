// import React from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes for prop validation
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// const Reviews1 = ({ currentReviews, totalPages, currentPage, handlePageChange, isLongReview, reviewsPerPage }) => {
//     // Handle previous and next page clicks
//     const handlePrevious = () => {
//         if (currentPage > 0) {
//             handlePageChange(currentPage - 1);
//         }
//     };

//     const handleNext = () => {
//         if (currentPage < totalPages - 1) {
//             handlePageChange(currentPage + 1);
//         }
//     };

//     // Determine how many dots to show (1 dot for 1 review per page, 2 dots for 2 reviews per page)
//     const dotsToShow = reviewsPerPage === 1 ? 1 : 2;

//     return (
//         <div className="w-full max-w-7xl">
//             {/* Reviews Section */}
//             <div className="flex justify-center gap-4 py-4 overflow-hidden">
//                 {currentReviews.map((client) => (
//                     <div
//                         key={client.id} 
//                         className="bg-gray-100 p-6 rounded-lg shadow-md min-w-[300px] max-w-xs text-left flex flex-col items-start transition-opacity duration-300"
//                         style={{ height: '200px' }}
//                     >
//                         <div className="flex items-center mb-4">
//                             <img
//                                 src={client.imgUrl}
//                                 alt={`${client.name}'s profile`}
//                                 className="w-12 h-12 rounded-full mr-4"
//                             />
//                             <div>
//                                 <h3 className="text-[18px] font-semibold">{client.name}</h3>
//                                 <p className="text-gray-500 text-[14px]">{client.role}</p>
//                             </div>
//                         </div>
//                         <p
//                             className={`text-gray-700 text-[16px] ${isLongReview(client.review) ? 'overflow-y-auto' : ''}`}
//                             style={{ maxHeight: isLongReview(client.review) ? '100px' : 'auto' }}
//                         >
//                             {client.review}
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             {/* Pagination Section with Previous/Next Icons and Dots */}
//             <div className="flex justify-center items-center mt-6 gap-4">
//                 <button
//                     onClick={handlePrevious}
//                     className="text-gray-400 flex items-center justify-center"
//                     disabled={currentPage === 0}
//                 >
//                     <AiOutlineLeft size={18} />
//                 </button>

//                 {/* Conditionally render dots based on reviewsPerPage */}
//                 <div className="flex gap-2">
//                     {Array.from({ length: dotsToShow }).map((_, index) => (
//                         <button
//                             key={index}
//                             className={`w-3 h-3 rounded-full ${currentPage === index ? 'bg-[#006391]' : 'bg-[#e0e0e0]'}`} // Add a different color for inactive dots
//                             onClick={() => handlePageChange(index)}
//                         ></button>
//                     ))}
//                 </div>

//                 <button
//                     onClick={handleNext}
//                     className="text-gray-400 flex items-center justify-center"
//                     disabled={currentPage >= totalPages - 1}
//                 >
//                     <AiOutlineRight size={18} />
//                 </button>
//             </div>
//         </div>
//     );
// };

// // Prop validation
// Reviews1.propTypes = {
//     currentReviews: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired, 
//             imgUrl: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             role: PropTypes.string.isRequired,
//             review: PropTypes.string.isRequired,
//         })
//     ).isRequired,
//     totalPages: PropTypes.number.isRequired,
//     currentPage: PropTypes.number.isRequired,
//     handlePageChange: PropTypes.func.isRequired,
//     isLongReview: PropTypes.func.isRequired,
//     reviewsPerPage: PropTypes.number.isRequired,
// };

// export default Reviews1;




import React from 'react';
import PropTypes from 'prop-types'; 
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Reviews1 = ({ currentReviews, totalPages, currentPage, handlePageChange, isLongReview, reviewsPerPage }) => {
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

    // Determine how many dots to show (1 dot for 1 review per page, 2 dots for 2 reviews per page)
    const dotsToShow = reviewsPerPage === 1 ? 1 : Math.min(totalPages, 2);

    return (
        <div className="w-full max-w-7xl">
            {/* Reviews Section */}
            <div className="flex justify-center gap-4 py-4 overflow-hidden">
                {currentReviews.map((client) => (
                    <div
                        key={client.id} 
                        className="bg-gray-100 p-6 rounded-lg shadow-md min-w-[300px] max-w-xs text-left flex flex-col items-start transition-opacity duration-300"
                        style={{ height: '200px' }}
                    >
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
                        <p
                            className={`text-gray-700 text-[16px] ${isLongReview(client.review) ? 'overflow-y-auto' : ''}`}
                            style={{ maxHeight: isLongReview(client.review) ? '100px' : 'auto' }}
                        >
                            {client.review}
                        </p>
                    </div>
                ))}
            </div>

            {/* Pagination Section with Previous/Next Icons and Dots */}
            <div className="flex justify-center items-center mt-6 gap-4">
                <button
                    onClick={handlePrevious}
                    className="text-gray-200  flex items-center justify-center hover:text-gray-400"
                    disabled={currentPage === 0}
                >
                    <AiOutlineLeft size={18} />
                </button>

                {/* Conditionally render dots based on reviewsPerPage */}
                <div className="flex gap-2">
                    {Array.from({ length: dotsToShow }).map((_, idx) => (
                        <button
                            key={`page-dot-${currentPage}-${idx}`}
                            className={`w-3 h-3 rounded-full ${currentPage === idx ? 'bg-[#006391]' : 'bg-gray-400'}`} 
                            onClick={() => handlePageChange(idx)}
                        ></button>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="text-gray-200  flex items-center justify-center hover:text-gray-400"
                    disabled={currentPage >= totalPages - 1}
                >
                    <AiOutlineRight size={18} />
                </button>
            </div>
        </div>
    );
};

// Prop validation
Reviews1.propTypes = {
    currentReviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired, 
            imgUrl: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            review: PropTypes.string.isRequired,
        })
    ).isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    isLongReview: PropTypes.func.isRequired,
    reviewsPerPage: PropTypes.number.isRequired,
};

export default Reviews1;


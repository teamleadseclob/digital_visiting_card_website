import React, { useState, useEffect } from 'react';
import HomeImg1 from '.././assets/Review.svg';
import Reviews1 from './../Components/Reviews1';

const Reviews = () => {
    const clients = [
        {
            name: 'James Rodri',
            role: 'video editor',
            review: 'The templates were easy to use, and The templates were easy to use, and the final design was professional. Really happy with the result. the final design was professional. Really happy with the result.',
            imgUrl: 'https://via.placeholder.com/150',
        },
        {
            name: 'Linda Paul',
            role: 'graphic designer',
            review: 'The best experience I’ve had with online templates! My work is much easier now.',
            imgUrl: 'https://via.placeholder.com/150',
        },
        {
            name: 'Michael Stone',
            role: 'web developer',
            review: 'Great design options and easy to use. Highly recommend!',
            imgUrl: 'https://via.placeholder.com/150',
        },
        {
            name: 'Sophia Rae',
            role: 'photographer',
            review: 'The final result exceeded my expectations. I’m in love with the clean and professional look.',
            imgUrl: 'https://via.placeholder.com/150',
        },
        {
            name: 'Chris Walker',
            role: 'content creator',
            review: 'These templates have transformed the way I work. Absolutely worth it!',
            imgUrl: 'https://via.placeholder.com/150',
        }
    ];

    const [reviewsPerPage, setReviewsPerPage] = useState(3); 
    const [currentPage, setCurrentPage] = useState(0); 
    const [transition, setTransition] = useState(false);

    const totalPages = Math.ceil(clients.length / reviewsPerPage);

    // Get the reviews for the current page
    const currentReviews = clients.slice(
        currentPage * reviewsPerPage,
        (currentPage + 1) * reviewsPerPage
    );

    // Smooth transition effect
    useEffect(() => {
        if (transition) {
            const timeout = setTimeout(() => {
                setTransition(false);
            }, 300); 
            return () => clearTimeout(timeout);
        }
    }, [transition]);

    // Handle page change when clicking a dot
    const handlePageChange = (pageIndex) => {
        setTransition(true); 
        setCurrentPage(pageIndex);
    };

    // Adjust reviews per page based on screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setReviewsPerPage(1); 
            } else {
                setReviewsPerPage(2); 
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Helper function to check word count
    const isLongReview = (review) => {
        return review.split(' ').length > 20;
    };

    return (
        <div className="bg-white p-8 flex flex-col items-center justify-center w-full">
            {/* Top Section: Image + Heading + Paragraph */}
            <div className="flex flex-col mb-6 md:mb-10 md:flex-row items-center justify-center w-full max-w-7xl p-4 md:p-6">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center">
                    <img src={HomeImg1} alt="Happy Clients" className="w-64 sm:w-80 md:w-full max-w-sm h-auto" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left pl-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#006391]">Hear From Our Happy Clients</h2>
                    <p className="text-gray-600 mt-6 text-base sm:text-[18px] lg:text-[18px]">
                        Our Clients Love The Ease, Design Options, And Professionalism Our Digital Cards Bring To Their Business.
                    </p>
                    <div>
                        <Reviews1
                            currentReviews={currentReviews}
                            totalPages={totalPages}
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                            isLongReview={isLongReview}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;

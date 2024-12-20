import React, { useState, useEffect } from 'react';
import Reviews2 from '.././assets/Review.svg';
import Reviews1 from './../Components/Reviews1';

const Reviews = () => {
    const clients = [
        {
            name: 'Sample',
            role: 'web developer',
            review: 'A web developer builds and maintains websites, creating functional, user-friendly interfaces using programming languages like HTML, CSS, and JavaScript. They ensure responsive design, optimize performance, and integrate back-end services when needed.',
            imgUrl: 'https://via.placeholder.com/150',
        },
        {
            name: 'Sample1',        
            role: 'editor',
            review: 'An editor refines content by correcting grammar, structure, and style, ensuring clarity and coherence. They collaborate with writers, enhancing readability, tone, and alignment with publication standards.',
            imgUrl: 'https://via.placeholder.com/150',
        },  {   
            name: 'Sample2',
            role: 'tester',
            review: 'A tester ensures software functionality, identifying bugs, verifying requirements, and product quality through.',
            imgUrl: 'https://via.placeholder.com/150',
        }
    ];

    const [reviewsPerPage, setReviewsPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(0);
    const [transition, setTransition] = useState(false);

    const totalPages = Math.ceil(clients.length / reviewsPerPage);

    const currentReviews = clients.slice(
        currentPage * reviewsPerPage,
        (currentPage + 1) * reviewsPerPage
    );

    useEffect(() => {
        const handleResize = () => {
            setReviewsPerPage(window.innerWidth < 768 ? 1 : 2);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (transition) {
            const timeout = setTimeout(() => {
                setTransition(false);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [transition]);

    const handlePageChange = (pageIndex) => {
        setTransition(true);
        setCurrentPage(pageIndex);
    };

    const isLongReview = (review) => {
        return review.split(' ').length > 20;
    };

    return (
        <div className="bg-white flex flex-col items-center justify-center p-8 mt-20">
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl p-4 md:p-6">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center">
                    <img src={Reviews2} alt="Happy Clients" className="w-64 sm:w-80 md:w-full max-w-sm h-auto" />
                </div>
                <div className="w-full text-center md:text-left pl-0 md:pl-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#006391]">
                        Hear From Our Happy Clients
                    </h2>
                    <p className="text-gray-600 mt-6 text-base sm:text-[18px] lg:text-[18px]">
                        Our Clients Love The Ease, Design Options, And Professionalism Our Digital Cards Bring To Their Business.
                    </p>
                    <Reviews1
                        currentReviews={currentReviews}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                        isLongReview={isLongReview}
                        reviewsPerPage={reviewsPerPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Reviews;

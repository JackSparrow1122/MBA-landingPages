import React from 'react';
import backgroundImage from '../../assets/images/join-bg.jpg';

function CompJoin() {
  return (
    <div className="relative min-h-[30vh] sm:min-h-[80vh] md:min-h-[90vh] lg:min-h-screen">
      {/* Background image */}
      <div
        className="bg-cover bg-center absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Orange overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#F37021] opacity-70 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 px-6 sm:px-8 md:px-16 py-16 flex items-center justify-center min-h-full">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Join MBA Programme at IGSB, Pune
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Shaping visionary business leaders of tomorrow. Elevate your future with our dynamic curriculum, global exposure, and industry-driven expertise.
          </p>
          <button className="bg-transparent border-2 border-white text-white py-2 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg md:text-xl hover:bg-white hover:text-[#F37021] transition-all">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompJoin;

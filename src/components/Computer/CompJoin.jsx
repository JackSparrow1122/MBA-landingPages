import React from 'react';
import backgroundImage from '../../assets/images/join-bg.jpg'; // Adjust the path as necessary

function CompJoin() {
  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="bg-cover bg-center absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Blue overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#F37021] opacity-70 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 px-8 md:px-16 py-4">
        <div className="text-center mb-2">
          <h1 className="text-5xl font-bold text-white mb-6 mt-2">
           Join MBA Programme at IGSB, Pune 
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Shaping visionary business leaders of tomorrow. Elevate your future with our dynamic curriculum, global exposure, and industry-driven expertise. 
          </p>
          <button className="bg-transparent border-2 text-[#ffffff] py-2 px-6 rounded-full text-xl hover:bg-blue-700 hover:text-white transition-all">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompJoin;

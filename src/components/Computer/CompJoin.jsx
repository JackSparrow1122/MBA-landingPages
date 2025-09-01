import React, { useState } from 'react';
import backgroundImage from '../../assets/images/join-bg.jpg'; // Adjust the path as necessary
import NPFWidget from '../NPFWidget'; // Import the NPFWidget component

function CompJoin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsVisible(true), 10); // Small delay to trigger animation
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsModalOpen(false), 300); // Match transition duration
  };

  return (
    <>
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
            <p className="text-xl text-white mb-8">
            Shaping visionary business leaders of tomorrow. Elevate your future with our dynamic curriculum, global exposure, and industry-driven expertise. 
            </p>
            <button
              onClick={openModal}
              className="bg-transparent border-2 text-[#ffffff] py-2 px-6 rounded-full text-xl hover:bg-orange-700 hover:text-white transition-all"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(5px)",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            className="p-6 rounded-lg max-w-md w-full relative"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.95)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-300 text-2xl"
            >
              ×
            </button>
            <NPFWidget />
          </div>
        </div>
      )}
    </>
  );
}

export default CompJoin;

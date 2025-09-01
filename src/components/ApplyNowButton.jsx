import React, { useState } from "react";
import NPFWidget from "./NPFWidget"; // Import the NPFWidget component

function ApplyNowButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="fixed right-[-48px] top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={openModal}
          className="bg-gradient-to-b from-[#018699] to-[#003c84] text-white py-1 px-6 shadow-lg transition duration-300 flex items-center justify-center transform -rotate-90 hover:bg-blue-700 hover:underline hover:scale-105 cursor-pointer"
        >
          Apply Now
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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

export default ApplyNowButton;

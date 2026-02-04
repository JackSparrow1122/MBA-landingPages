import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import brochurePDF from "../../assets/images/Prospect.pdf"; // adjust path as needed
import NPFWidget from "../NPFWidget"; // Import the NPFWidget component

function CompBrochure() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsVisible(true), 10); // Small delay to trigger animation

    // Trigger PDF download after 5 seconds
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = brochurePDF;
      link.download = 'Prospect.pdf'; // Optional: specify download filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 5000);
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsModalOpen(false), 300); // Match transition duration
  };

  return (
    <>
      <div className="flex justify-center px-6 sm:px-12 md:px-16 py-8 bg-[#10404A]">
        <div className="w-full max-w-6xl bg-[#3AAFA9] p-6 sm:p-8 md:p-10 rounded-3xl flex flex-col sm:flex-row justify-between items-center border border-[#f37021] shadow-lg transition-all">
          {/* Text Section */}
          <div className="w-full sm:w-2/3 mb-4 sm:mb-0">
            <p className="text-base sm:text-lg md:text-xl text-white text-center sm:text-left">
              Get the brochure to explore our industry-aligned, outcome-based curriculum and complete programme details.
            </p>
          </div>

          {/* Download Button */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-end">
            <button
              onClick={openModal}
              className="bg-[#10404A] border border-[#f37021] text-white px-6 py-3 rounded-3xl hover:bg-white hover:text-black transition duration-300 flex items-center space-x-2 text-sm sm:text-base md:text-lg"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>Download Brochure</span>
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

export default CompBrochure;

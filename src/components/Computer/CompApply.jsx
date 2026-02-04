import React, { useState } from "react";
import backgroundImage from "../../assets/images/plane.png";
import NPFWidget from "../NPFWidget";

const AdmissionProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  return (
    <>
      {/* SECTION */}
      <div
        className="relative px-6 sm:px-12 md:px-16 py-14 text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Teal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10404A] via-[#3AAFA9] to-[#10404A] opacity-90"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            How to Apply
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-100">
            Follow these simple steps to apply for the MBA Programme at IGSB, Pune
          </p>

          {/* STEPS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className="relative bg-white/90 text-[#10404A] p-6 rounded-xl shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#F37021] text-white flex items-center justify-center font-bold shadow-lg">
                  {step}
                </div>

                <p className="text-sm sm:text-base md:text-lg mt-4">
                  {step === 1 && "Fill out the online application form on our website."}
                  {step === 2 && "Submit the required documents (mark sheets, ID, etc.)."}
                  {step === 3 && "Pay the application fee securely online."}
                  {step === 4 && "Attend the counseling and interview session."}
                  {step === 5 && "Confirm your seat and join IGSB!"}
                </p>
              </div>
            ))}
          </div>

          {/* APPLY BUTTON */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={openModal}
              className="bg-[#F37021] hover:bg-[#d65c1a] text-white py-3 px-10 rounded-full text-lg font-semibold shadow-xl transition-all"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            background: "rgba(16, 64, 74, 0.6)",
            backdropFilter: "blur(6px)",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            className="relative p-6 rounded-xl max-w-md w-full"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              transform: isVisible ? "scale(1)" : "scale(0.95)",
              transition: "all 0.3s ease",
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-white text-2xl hover:text-[#F37021]"
            >
              ×
            </button>
            <NPFWidget />
          </div>
        </div>
      )}
    </>
  );
};

export default AdmissionProcess;

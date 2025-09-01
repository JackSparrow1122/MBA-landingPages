import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUserGraduate,
  faTrophy,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import Testimonials from "./CompTestimonials"; // Import Testimonials component
import CompApply from "./CompApply"; // Import the CompApply component

function IGSBLandingPage() {
  return (
    <div className="bg-[#FCFAEE] py-16 relative poppins-regular">
      <div className="px-6 sm:px-12 md:px-16">
        {/* Programme Highlights */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            Why Choose <span className="text-[#F37021]">MBA</span> at IGSB College?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Card 1 */}
            <div className="bg-[#F7F3EF] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all flex flex-col items-center">
              <div className="w-16 h-16 bg-[#F37021] text-white rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#000000] mb-2 sm:mb-4 text-center">
                Top-notch Curriculum
              </h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Our MBA programme offers a robust curriculum designed to prepare you for the future of technology. Learn from experts in the field and gain hands-on experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F7F3EF] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all flex flex-col items-center">
              <div className="w-16 h-16 bg-[#F37021] text-white rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <FontAwesomeIcon icon={faUserGraduate} className="text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#000000] mb-2 sm:mb-4 text-center">
                Experienced Faculty
              </h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Learn from experienced professors and industry experts who are passionate about educating the next generation of entrepreneurs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F7F3EF] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all flex flex-col items-center">
              <div className="w-16 h-16 bg-[#F37021] text-white rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <FontAwesomeIcon icon={faTrophy} className="text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#000000] mb-2 sm:mb-4 text-center">
                Practical Learning Approach
              </h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                The MBA programme will facilitate practical learning of different functional areas of management with an integrated approach to various functions of management.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#F7F3EF] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all flex flex-col items-center">
              <div className="w-16 h-16 bg-[#F37021] text-white rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <FontAwesomeIcon icon={faRocket} className="text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#000000] mb-2 sm:mb-4 text-center">
                Excellent Placements
              </h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Our MBA graduates have gone on to secure prestigious positions in top companies, with an outstanding placement rate year after year.
              </p>
            </div>
          </div>
        </div>

        {/* Admission Process Section */}
        <CompApply /> {/* Use the CompApply component */}

        {/* Testimonials Section */}
        <Testimonials /> {/* Use the Testimonials component */}
      </div>
    </div>
  );
}

export default IGSBLandingPage;

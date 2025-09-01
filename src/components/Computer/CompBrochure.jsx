import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import brochurePDF from "../../assets/images/Prospect.pdf"; // adjust path as needed

function CompBrochure() {
  return (
    <div className="flex justify-center px-6 sm:px-12 md:px-16 py-8 bg-[#F7F3EF]">
      <div className="w-full max-w-6xl bg-[#FCFAEE] p-6 sm:p-8 md:p-10 rounded-3xl flex flex-col sm:flex-row justify-between items-center border border-[#f37021] shadow-lg transition-all">
        {/* Text Section */}
        <div className="w-full sm:w-2/3 mb-4 sm:mb-0">
          <p className="text-base sm:text-lg md:text-xl text-[#F37021] text-center sm:text-left">
            Get the brochure to explore our industry-aligned, outcome-based curriculum and complete programme details.
          </p>
        </div>

        {/* Download Button */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <a
            href={brochurePDF}
            download
            className="bg-[#F7F3EF] border border-[#f37021] text-[#F37021] px-6 py-3 rounded-3xl hover:bg-[#f37021] hover:text-black transition duration-300 flex items-center space-x-2 text-sm sm:text-base md:text-lg"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Brochure</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompBrochure;

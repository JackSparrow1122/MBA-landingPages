import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import brochurePDF from "../../assets/images/Prospect.pdf"; // adjust path as needed

function CompBrochure() {
  return (
    <div className="flex justify-between items-center bg-[#F7F3EF] bg-cover bg-center text-white shadow-lg h-48 px-8 md:px-16 poppins-regular">
      <div className="w-full bg-[#FCFAEE] p-6 rounded-3xl flex justify-between items-center border-1 border-[#f37021]">
        <div className="max-w-2/3 ">
          <p className="text-lg text-[#F37021]">
           Get the brochure to explore our industry-aligned, outcome-based curriculum and complete programme details.
 
 
          </p>
        </div>
        <div>
          <a
            href={brochurePDF}
            download
            className="bg-[#F7F3EF] border-1 border-[#f37021] text-[#f37021] px-6 py-3 rounded-3xl hover:bg-[#f37021] hover:text-black transition duration-300 flex items-center space-x-2"
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
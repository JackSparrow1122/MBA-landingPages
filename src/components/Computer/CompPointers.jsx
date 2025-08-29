import React, { useEffect } from 'react';
import { FaCalendarAlt, FaRegClock, FaMoneyBillWave } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CompPointers() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-12 poppins-regular bg-[#FCFAEE]">
      {/* Main Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16">
        {/* Card 1: programme Format */}
        <div className="bg-[#F7F3EF] p-6 shadow-lg flex items-center justify-center" data-aos="fade-up">
          <div className="flex items-center justify-center mr-4 space-x-4">
            <FaCalendarAlt size={40} className="text-[#F37021]" />
            <div className="text-center">
              <h2>Programme Format</h2>
              <p className="mt-2 text-2xl font-semibold">Offline</p>
            </div>
          </div>
        </div>

        {/* Card 2: Duration */}
        <div className="bg-[#F7F3EF] p-6 shadow-lg flex items-center justify-center" data-aos="fade-up">
          <div className="flex items-center justify-center mr-4 space-x-4">
            <FaRegClock size={40} className="text-[#F37021]" />
            <div className="text-center">
              <h2>Duration</h2>
              <p className="mt-2 text-2xl font-semibold">2 Years</p>
            </div>
          </div>
        </div>

        {/* Card 3: programme Fees */}
        <div className="bg-[#F7F3EF] p-6 shadow-lg flex items-center justify-center" data-aos="fade-up">
          <div className="flex items-center justify-center mr-4 space-x-4">
            <FaMoneyBillWave size={40} className="text-[#F37021]" />
            <div className="text-center">
              <h2>Programme Fees</h2>
              <p className="mt-2 text-2xl font-semibold">Rs. 1,56,500/-</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Note Section */}
      <div
        className="mt-6 text-center bg-[#F7F3EF] p-4 rounded shadow-md"
        data-aos="fade-up"
      >
        <p className="text-lg font-medium text-gray-700">
          Rs. 55,000 is charged separately for{" "}
          <span className="text-[#F37021] font-semibold">
            CLDP (Career & Leadership Development Programme)
          </span>.
        </p>
      </div>
    </div>
  );
}

export default CompPointers;

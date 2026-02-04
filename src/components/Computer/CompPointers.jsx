import React, { useEffect } from "react";
import { FaCalendarAlt, FaRegClock, FaMoneyBillWave } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function CompPointers() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const cardClass =
    "bg-[#3AAFA9] p-6 rounded-xl shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105";

  return (
    <div className="px-6 md:px-16 py-12 poppins-regular bg-white">
      
      {/* Main Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16">
        
        {/* Card 1 */}
        <div className={cardClass} data-aos="fade-up">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-[#F37021] shadow-md">
              <FaCalendarAlt size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-wide text-white">
                Programme Format
              </h2>
              <p className="mt-1 text-2xl font-bold text-white">
                Offline
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={cardClass} data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-[#F37021] shadow-md">
              <FaRegClock size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-wide text-white">
                Duration
              </h2>
              <p className="mt-1 text-2xl font-bold text-white">
                2 Years
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={cardClass} data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-[#F37021] shadow-md">
              <FaMoneyBillWave size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-wide text-white">
                Programme Fees
              </h2>
              <p className="mt-1 text-2xl font-bold text-white">
                ₹ 1,56,500/-
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Note */}
      <div
        className="mt-10 text-center bg-[#10404A] p-6 rounded-xl shadow-lg"
        data-aos="fade-up"
      >
        <p className="text-lg font-medium text-white">
          ₹ 55,000 is charged separately for{" "}
          <span className="text-[#F37021] font-semibold">
            CLDP (Career & Leadership Development Programme)
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default CompPointers;

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAward, faMedal, faCertificate } from '@fortawesome/free-solid-svg-icons';
import bgImage from '../../assets/images/highbg.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CompHighlights() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div
      className="poppins-regular"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="px-6 sm:px-8 md:px-16 py-8 bg-[#FCFAEE]">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 poppins-bold"
          data-aos="fade-up"
        >
          IGSB Highlights
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Card 1 */}
          <div
            className="bg-[#F7F3EF] p-4 sm:p-6 md:p-6 shadow-lg text-left overflow-hidden flex flex-col"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-12 h-12 bg-[#F37021] text-white rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faTrophy} className="text-xl sm:text-2xl" />
            </div>
            <p className="text-gray-600 text-sm sm:text-base md:text-base">
              Ranked 49th in Top 100 Private Engineering Institutes and Ranked 61st in Top 140 Engineering Institutes conducted by Times of India Engineering Colleges.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#F7F3EF] p-4 sm:p-6 md:p-6 shadow-lg text-left overflow-hidden flex flex-col"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 bg-[#F37021] text-white rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faAward} className="text-xl sm:text-2xl" />
            </div>
            <p className="text-gray-600 text-sm sm:text-base md:text-base">
              Ranking Survey - 2019 Winners of SmartIndia Hackathon for consecutive three years organized by Ministry of HRD, AICTE in association with NASSCOM.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#F7F3EF] p-4 sm:p-6 md:p-6 shadow-lg text-left overflow-hidden flex flex-col"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-12 h-12 bg-[#F37021] text-white rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faMedal} className="text-xl sm:text-2xl" />
            </div>
            <p className="text-gray-600 text-sm sm:text-base md:text-base">
              Received Outstanding Education Institute (West) Award by National Education Awards 2018.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="bg-[#F7F3EF] p-4 sm:p-6 md:p-6 shadow-lg text-left overflow-hidden flex flex-col"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-12 h-12 bg-[#F37021] text-white rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faCertificate} className="text-xl sm:text-2xl" />
            </div>
            <p className="text-gray-600 text-sm sm:text-base md:text-base">
              IGSB has been accredited with ‘B++’ grade by National Accreditation and Assessment Council (NAAC).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompHighlights;

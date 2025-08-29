import React, { useEffect } from 'react';
// Import the image
import ProgramImage from '../../assets/images/macpng.png';
import HatImage from '../../assets/images/hat.png';  // Import the floating hat image

// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProgramOverview() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="flex bg-[#F7F3EF] flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 px-8 md:px-16 py-3 md:py-6 poppins-regular">
      {/* Left Part: Heading and Paragraph */}
      <div className="flex-1" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-[#F37021] mb-4 relative">
          {/* Floating Hat Above the "P" */}
          <img
            src={HatImage}
            alt="Hat"
            className="absolute left-[-25px] top-[-38px] w-16 h-16 animate-floating " // Apply floating animation class
          />
          Program Overview
        </h2>
        <p className="text-2xl text-gray-600 tracking-wide">
          The MBA Department was established in the academic year 2007. Currently, the department offers one undergraduate program, B.E in Computer Engineering, with an intake of 120. The department has a team of highly qualified, motivated, and experienced faculty members with doctorates (Ph.D.) and M.E./M.Tech qualifications in various areas of specialization.
        </p>
      </div>

      {/* Right Part: Image */}
      <div className="flex-1 bg-[#F7F3EF]" data-aos="fade-left">  {/* Make container transparent */}
        <img
          src={ProgramImage} // Use the imported image
          alt="Program"
          className="w-full h-auto "
        />
      </div>

      {/* Floating animation CSS */}
      <style>{`
        @keyframes floating {
          0% {
            transform: translateY(0); /* Start at original position */
          }
          50% {
            transform: translateY(-10px); /* Move up a bit */
          }
          100% {
            transform: translateY(0); /* Return to original position */
          }
        }

        .animate-floating {
          animation: floating 3s ease-in-out infinite; /* Apply floating animation */
        }
      `}</style>
    </div>
  );
}

export default ProgramOverview;

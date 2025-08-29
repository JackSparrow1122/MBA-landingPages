import { useEffect, useRef, useState } from "react";
// Import the image
import ProgramImage from "../../assets/images/overview.jpg";
import HatImage from "../../assets/images/hat.png"; // Import the floating hat image

// Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

function ProgramOverview() {
  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState("auto");

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });

    // Set the height of the right image container to match the left
    function updateHeight() {
      if (leftRef.current) {
        setLeftHeight(leftRef.current.offsetHeight + "px");
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="flex bg-[#F7F3EF] flex-col md:flex-row justify-between items-stretch space-y-6 md:space-y-0 md:space-x-6 px-4 sm:px-8 md:px-16 py-6 sm:py-12 md:py-16 poppins-regular">
      {/* Left Part: Heading and Paragraph */}
      <div className="flex-1" data-aos="fade-right" ref={leftRef}>
        <h2 className="text-2xl md:text-4xl font-bold text-[#F37021] mb-4 relative">
          {/* Floating Hat Above the "P" */}
          <img
            src={HatImage}
            alt="Hat"
            className="absolute left-[-25px] top-[-38px] w-16 h-16 animate-floating"
          />
          MBA Programme Overview
        </h2>
        <p className="text-xl md:text-xl text-gray-600 tracking-wide">
          Indira Global School of Business (IGSB) offers a transformative
          two-year AICTE-approved MBA programme that blends academic excellence
          with real-world business insights. With global collaborations, diverse
          specializations, and industry-driven training, the programme
          emphasizes leadership, innovation, and ethical practices. Experiential
          learning through live projects, case studies, and international
          exposure ensures students gain the skills to thrive in a dynamic
          global economy.{" "}
        </p>
      </div>

      {/* Right Part: Image */}
      <div
        className="flex-1 bg-[#F7F3EF] flex items-center justify-center p-4"
        data-aos="fade-left"
        style={{ height: leftHeight, minHeight: 0 }}
      >
        <img
          src={ProgramImage} // Use the imported image
          alt="Programme"
          className="max-w-md w-full h-auto object-contain"
          style={{ maxHeight: "320px" }}
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

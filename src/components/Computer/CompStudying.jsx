import React, { useEffect } from "react";
import {
  FaStar,
  FaBuilding,
  FaUsers,
  FaLaptop,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";
import MyImage from "../../assets/images/studying.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function CompStudying() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const cards = [
    { icon: FaStar, text: "30+ Years of Academic Excellence" },
    { icon: FaUsers, text: "350+ Leading Recruiters on Campus" },
    { icon: FaBuilding, text: "State of the Art Infrastructure" },
    { icon: FaLaptop, text: "Career & Leadership Programme" },
    { icon: FaGraduationCap, text: "13.8 LPA Highest Package Offered" },
    { icon: FaChartLine, text: "Practice-Oriented Learning" },
  ];

  return (
    <section className="px-6 md:px-16 py-12 poppins-regular bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        
        {/* LEFT CONTENT */}
        <div className="md:w-7/12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#10404A]">
            Studying with
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F37021] mb-6">
            Indira Global School of Business
          </h2>

          <p
            className="text-base md:text-lg text-[#10404A] mb-8"
            data-aos="fade-up"
          >
            At IGSB, learning goes beyond classrooms to build globally aware,
            industry-ready leaders. Our AICTE-approved MBA programmes combine
            academic rigor with real-world exposure to prepare students for
            dynamic global markets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="flex items-center gap-4 bg-[#3AAFA9] p-5 rounded-xl shadow-md
                           hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-[#F37021] p-3 rounded-full">
                  <card.icon className="text-white text-2xl" />
                </div>
                <p className="text-white font-medium text-sm md:text-base">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE (DESKTOP ONLY) */}
        <div
          className="hidden md:block md:w-5/12 rounded-xl overflow-hidden shadow-lg"
          data-aos="fade-left"
        >
          <img
            src={MyImage}
            alt="Indira Global School of Business"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default CompStudying;

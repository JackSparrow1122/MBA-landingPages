import React, { useEffect, useRef, useState } from 'react';
import { FaStar, FaBuilding, FaUsers, FaLaptop, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import MyImage from '../../assets/images/studying.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CompStudying() {
  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState('auto');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const updateHeight = () => {
      if (leftRef.current) {
        setLeftHeight(leftRef.current.offsetHeight + 'px');
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const cards = [
    { icon: FaStar, text: '30+ Years of Academic Excellence' },
    { icon: FaUsers, text: '350+ Leading Recruiters on Campus' },
    { icon: FaBuilding, text: 'State of the Art Infrastructure' },
    { icon: FaLaptop, text: 'Career & Leadership Programme' },
    { icon: FaGraduationCap, text: '13.8 LPA, Highest Package Offered' },
    { icon: FaChartLine, text: 'Practice-Oriented Learning' },
  ];

  return (
    <div className="flex flex-col md:flex-row px-6 md:px-16 py-10 poppins-regular bg-[#FCFAEE] gap-8 md:gap-12 overflow-hidden">
      {/* Left Side */}
      <div className="md:w-7/12" ref={leftRef}>
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Studying with</h1>
        <h1 className="text-3xl md:text-4xl font-extralight text-[#F37021] mb-6">Indira Global School of Business</h1>
        <p className="text-base md:text-lg mb-8" data-aos="fade-up">
          At IGSB, learning goes beyond classrooms to build globally aware, industry-ready leaders. Our AICTE-approved MBA programmes blend academic rigor with real-world exposure, equipping students to handle dynamic markets with confidence and strategic insight.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F7F3EF] p-5 shadow-lg border border-[#F37021] flex items-center gap-4 rounded-lg hover:scale-105 transform transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <card.icon className="text-[#F37021] text-3xl md:text-4xl" />
              <span className="text-sm md:text-base font-medium">{card.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Hidden on mobile */}
      <div
        className="hidden md:flex md:w-5/12 items-center justify-center bg-[#F7F3EF] overflow-hidden rounded-lg"
        style={{ height: leftHeight, minHeight: 0 }}
        data-aos="fade-left"
      >
        <img src={MyImage} alt="Indira College" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default CompStudying;

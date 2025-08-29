import { FaGraduationCap,  FaLanguage, FaUniversity, FaBriefcase, FaChalkboardTeacher, FaDesktop } from 'react-icons/fa';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

function CompOfferings() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const elements = document.querySelectorAll('.circle');
    const icons = document.querySelectorAll('.icon');

    elements.forEach((circle, index) => {
      const icon = icons[index];

      gsap.set(circle, { opacity: 0, x: -50 });
      gsap.set(icon, { rotationY: 180 });

      circle.parentElement.addEventListener('mouseenter', () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3 });
        gsap.to(icon, { rotationY: 0, duration: 0.3 });
      });

      circle.parentElement.addEventListener('mouseleave', () => {
        gsap.to(circle, { opacity: 0, x: -50, duration: 0.3 });
        gsap.to(icon, { rotationY: 180, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-6 md:py-8 bg-[#FCFAEE] poppins-regular">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#000]" data-aos="fade-up"> What sets
        <span className='text-[#F37021]'> IGSB </span> apart?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 md:gap-x-20">
        {/* Excellent Academic Interface */}
        <div
          className="bg-[#F7F3EF] p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaGraduationCap size={50} className="text-[#F37021] mb-4 icon" />
          <p className="text-lg font-semibold">Excellent Academic Interface</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-[#F37021] rounded-full shadow-2xl"></div>
        </div>

      
        {/* Customized MPSC/MPSC-ES/UPSC Training Program */}
       
        {/* Guaranteed Core Placements for Core Branches */}
        <div
          className="bg-[#F7F3EF] p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaBriefcase size={50} className="text-[#F37021] mb-4 icon" />
          <p className="text-lg font-semibold bg-[#F7F3EF]">Top Campus Placements for Core Branches</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-[#F37021] rounded-full shadow-2xl"></div>
        </div>

        {/* Product Companies for Campus Placements */}
        <div
          className="bg-[#F7F3EF] p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaDesktop size={50} className="text-[#F37021] mb-4 icon" />
          <p className="text-lg font-semibold bg-[#F7F3EF]">Training And Placement Programme</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-[#F37021] rounded-full shadow-2xl"></div>
        </div>

      
      </div>
    </div>
  );
}


export default CompOfferings;

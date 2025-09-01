import { FaGraduationCap, FaBriefcase, FaDesktop } from 'react-icons/fa';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <div className="px-6 sm:px-8 md:px-16 py-10 bg-[#FCFAEE] poppins-regular">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-[#000]"
        data-aos="fade-up"
      >
        What sets <span className="text-[#F37021]">IGSB</span> apart?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {/* Card 1 */}
        <div
          className="bg-[#F7F3EF] p-6 shadow-xl flex flex-col items-center justify-center text-center relative rounded-xl transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaGraduationCap size={50} className="text-[#F37021] mb-4 icon" />
          <p className="text-lg md:text-xl font-semibold">
            Excellent Academic Interface
          </p>
          <div className="circle absolute bottom-[-16px] right-[-16px] w-12 h-12 bg-[#F37021] rounded-full shadow-2xl"></div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-[#F7F3EF] p-6 shadow-xl flex flex-col items-center justify-center text-center relative rounded-xl transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaBriefcase size={50} className="text-[#F37021] mb-4 icon" />
          <p className="text-lg md:text-xl font-semibold">
            Top Campus Placements for Core Branches
          </p>
          <div className="circle absolute bottom-[-16px] right-[-16px] w-12 h-12 bg-[#F37021] rounded-full shadow-2xl"></div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-[#F7F3EF] p-6 shadow-xl flex flex-col items-center justify-center text-center relative rounded-xl transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaDesktop size={50} className="text-[#F37021] mb-4 icon" />
          <p className="text-lg md:text-xl font-semibold">
            Training And Placement Programme
          </p>
          <div className="circle absolute bottom-[-16px] right-[-16px] w-12 h-12 bg-[#F37021] rounded-full shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default CompOfferings;

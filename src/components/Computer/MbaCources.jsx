import  { useState } from "react";
import marketingImg from "../../assets/images/mm-CRASWm9F.avif";
import financeImg from "../../assets/images/fm-s7bAl5qI.avif";
import hrImg from "../../assets/images/hrm-DfuHU7ta.avif";
import logi from "../../assets/images/logi-sup-OMcpAP5C.avif";
import NPFWidget from "../NPFWidget"; // Import the NPFWidget component

const mbaCourses = [
  { title: "Marketing Management", img: marketingImg },
  { title: "Financial Management", img: financeImg },
  { title: "Human Resource Management", img: hrImg },
  { title: "Operations Management", img: logi },
];

const MBACourses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsVisible(true), 10); // Small delay to trigger animation
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsModalOpen(false), 300); // Match transition duration
  };

  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 w-full bg-[#FCFAEE] py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Our <span className="text-[#F37021]">MBA</span> Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mbaCourses.map((course, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow bg-[#F7F3EF] flex flex-col h-full hover:shadow-lg transition"
            >
              {/* Image on top */}
              <div className="w-full flex items-center justify-center ">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-40 object-cover object-top rounded-t-lg"
                />
              </div>

              {/* Content below */}
              <div className="flex flex-col justify-between p-4 flex-1 w-full">
                <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-700 text-center">
                  {course.title}
                </h3>
                <button
                  onClick={openModal}
                  className="mt-auto px-4 py-2 bg-[#F37021] text-white rounded hover:bg-[#BF5700] transition text-sm"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(5px)",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            className="p-6 rounded-lg max-w-md w-full relative"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.95)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-300 text-2xl"
            >
              ×
            </button>
            <NPFWidget />
          </div>
        </div>
      )}
    </>
  );
};

export default MBACourses;

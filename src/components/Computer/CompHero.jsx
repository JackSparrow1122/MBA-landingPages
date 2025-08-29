import { useState, useEffect } from "react";
import backgroundImage from "../../assets/images/bgmba.jpg";
import mouseIcon from "../../assets/images/white.png";

function CompHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["Business ", "Innovation ", "Strategy ", "Leadership ", "Opportunity "];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.4,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white flex flex-col md:flex-row items-start px-6 md:px-16 pt-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10 pointer-events-none"></div>

      <style>
        {`
          ::selection {
            background-color: #F37021;
            color: #ffffff;
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>

      {/* Left content */}
      <div className="z-20 md:w-1/2 flex flex-col items-start mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
          Redefining{" "}
          <span className="relative text-[#F37021]">
            {currentText}
            <span className="ml-1 animate-blink">|</span>
          </span>{" "}
          for Your Future with <span className="text-[#F37021] font-bold">MBA</span> at IGSB.
        </h1>
        <p className="text-base md:text-2xl mt-2">
          Learn, innovate, and lead with an <span className="text-[#F37021]">MBA</span> aligned to global standards and industry needs.
        </p>
      </div>

      {/* Form */}
      <div className="z-20 md:w-1/2 flex justify-end w-full">
        <div className="w-full max-w-md bg-black p-6 rounded-lg shadow-lg backdrop-blur-sm">
          <form className="space-y-4">
            <input type="text" placeholder="Enter your name" className="w-full p-2 rounded border border-[#FCE8D5]" required />
            <input type="email" placeholder="Enter your email" className="w-full p-2 rounded border border-[#FCE8D5]" required />
            <input type="tel" placeholder="Enter your mobile number" className="w-full p-2 rounded border border-[#FCE8D5]" required />
            <select className="w-full p-2 rounded border border-[#FCE8D5]" required>
              <option value="">Select State</option>
            </select>
            <select className="w-full p-2 rounded border border-[#FCE8D5]" required>
              <option value="">Select City</option>
            </select>
            <select className="w-full p-2 rounded border border-[#FCE8D5]" required>
              <option value="">Select Discipline</option>
            </select>
            <select className="w-full p-2 rounded border border-[#FCE8D5]" required>
              <option value="">Select Course</option>
            </select>
            <select className="w-full p-2 rounded border border-[#FCE8D5]" required>
              <option value="">Select Programme</option>
            </select>
            <input type="number" placeholder="Enter CET Score" className="w-full p-2 rounded border border-[#FCE8D5]" />
            <button className="w-full py-2 bg-white text-[#F37021] border-2 border-[#F37021] rounded-lg font-semibold hover:bg-[#F37021] hover:text-white transition-colors">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Scroll Down */}
      <div
        className="absolute bottom-5 left-5 flex items-center z-20 cursor-pointer"
        onClick={handleScrollDown}
      >
        <img src={mouseIcon} alt="Scroll Down" className="w-6 h-10 animate-bounce mr-2 hidden sm:block" />
        <div className="flex flex-col">
          <p className="text-white text-sm md:text-lg">Scroll Down</p>
          <p className="text-gray-300 text-xs md:text-sm">to know more</p>
        </div>
      </div>
    </div>
  );
}

export default CompHero;

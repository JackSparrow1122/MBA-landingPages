import { useState, useEffect } from "react";
import backgroundImage from "../../assets/images/bgmba.jpg";
import mouseIcon from "../../assets/images/white.png"; // Make sure the path to your PNG is correct
 
function CompHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
 
  const words = [
    "Business ",
    "Innovation ",
    "Strategy ",
    "Leadership ",
    "Opportunity ",
  ];
 
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
 
      if (!isDeleting) {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000); // Shorter delay before starting to delete
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
 
    // Decrease time on deletion phase for faster typing/deleting
    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120); // Faster typing speed during typing phase and deleting
 
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);
 
  // Function to handle the scroll-down behavior
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.4, // Scrolls down by 40% of the viewport height
      behavior: "smooth", // Smooth scroll effect
    });
  };
 
  return (
    <div
      className=" font-baskervville-regular px-8 md:px-16 relative pt-8 min-h-screen bg-cover bg-right md:bg-center bg-no-repeat text-white flex items-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
 
  {/* Black Overlay for text contrast (now below all content and form, above orange overlay) */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-20 pointer-events-none"></div>
 
      {/* Add custom style for selected text */}
      <style>
        {`
          ::selection {
              background-color: #F37021; /* Orange background for selection */
            color: #ffffff; /* White text for selection */
          }
        `}
      </style>
 
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2">
        <h1 className="text-[60px] text-[#ffffff] font-semibold leading-tight mb-6">
          Redefining {" "}
          <span className="relative inline-block text-[#F37021]">
            {currentText}
            <span className="ml-1 animate-blink">|</span>
          </span>{" "}
          {" "}
            <span className="text-[#F37021] font-bold mech-hero-wrapper"></span>{" "}
         for Your Future with <span className="text-[#F37021] ">MBA</span> at IGSB.
        </h1>
        <p className="mt-4 text-2xl">
       Learn, innovate, and lead with an <span className=" text-[#F37021]">MBA</span> aligned to global standards and industry needs. 
        </p>
      </div>
 
      {/* Form container (Right side) */}
      <div className="flex justify-end w-full md:w-1/2 z-20">
        <div
          className="p-6 max-w-md w-full shadow-md bg-white/95 backdrop-blur-md"
            style={{ background: "#FCFAEE" }} // Even more solid orange
        >
          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div>
              <select
                id="state"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                required
              >
                <option value="">Select State</option>
                {/* Add state options here */}
              </select>
            </div>
            <div>
              <select
                id="city"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                required
              >
                <option value="">Select City</option>
                {/* Add city options here */}
              </select>
            </div>
            <div>
              <select
                id="discipline"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                required
              >
                <option value="">Select Discipline</option>
                {/* Add discipline options here */}
              </select>
            </div>
            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                required
              >
                <option value="">Select Course</option>
                {/* Add course options here */}
              </select>
            </div>
            <div>
              <select
                id="programme"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                required
              >
                <option value="">Select programme</option>
                {/* Add programme options here */}
              </select>
            </div>
            <div>
              <input
                type="number"
                id="cet-score"
                className="w-full p-1.5 bg-[#FCE8D5] text-black rounded border border-[#FCE8D5] focus:outline-none focus:ring-2 focus:ring-[#FCE8D5]"
                placeholder="Enter CET Score"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-white text-[#F37021] border-2 border-[#F37021] rounded-lg font-semibold hover:bg-[#F37021] hover:text-white transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
 
      {/* New Scroll Down Section */}
      <div
        className="absolute px-8 md:px-16 bottom-5 left-5 z-20 text-white text-lg flex cursor-pointer"
        onClick={handleScrollDown}
      >
        {/* First Column: Mouse Icon */}
        <div className="flex items-center justify-center mr-4">
          <img
            src={mouseIcon}
            alt="Scroll Down"
            className="w-8 h-12 animate-bounce"
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="text-lg text-white">Scroll Down</p>
          <p className="text-sm text-gray-300">to know more</p>
        </div>
      </div>
    </div>
  );
}
 
export default CompHero;
 
 
import backgroundImage from "../../assets/images/plane.png"; // Make sure the path is correct

const AdmissionProcess = () => {
  return (
    <div
      className="relative bg-[#FCFAEE] px-6 sm:px-12 md:px-16 py-12 text-center text-black shadow-lg bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Orange overlay above bg image, behind cards */}
      <div className="absolute inset-0 bg-[#F7F3EF] opacity-80 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
          How to Apply
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Follow these simple steps to apply for the MBA Programme at IGSB, Pune:
        </p>

        {/* Steps Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className="relative bg-[#f7a35c] text-black p-6 shadow-xl rounded-lg w-full"
              style={{ backgroundColor: "rgba(243, 112, 33, 0.35)" }}
            >
              <div
                className="absolute -top-3 -left-3 bg-[#F37021] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-lg sm:text-xl"
                style={{ backgroundColor: "rgba(243, 112, 33, 0.95)" }}
              >
                {step}
              </div>
              <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-4">
                {step === 1 && "Fill out the online application form on our website."}
                {step === 2 && "Submit the required documents (mark sheets, ID, etc.)"}
                {step === 3 && "Pay the application fee securely online."}
                {step === 4 && "Attend the counseling and interview session."}
                {step === 5 && "Confirm your seat and join IGSB!"}
              </p>
            </div>
          ))}
        </div>

        {/* Apply Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-[#F37021] text-white py-3 px-8 rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:bg-[#d65c1a] transition-all">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;

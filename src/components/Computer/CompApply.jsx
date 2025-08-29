import backgroundImage from "../../assets/images/plane.png"; // Make sure the path is correct
 
const AdmissionProcess = () => {
  return (
    <div
      className="relative bg-[#FCFAEE] px-8 md:px-16 py-8 text-center text-white shadow-lg bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Orange overlay above bg image, behind cards */}
      <div className="absolute inset-0 bg-[#F7F3EF] opacity-80 z-0"></div>
 
      <div className="relative z-10">
        <h2 className="text-3xl font-semibold mb-6 text-black">How to Apply</h2>
        <p className="text-lg mb-6 text-black">
          Follow these simple steps to apply for the MBA program at ICEM College
          Pune:
        </p>
 
        {/* Container for steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto ">
          {/* Step 1 */}
          <div
            className="relative bg-[#f7a35c] text-black p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(243, 112, 33, 0.35)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#F37021] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "rgba(243, 112, 33, 0.95)" }}
            >
              1
            </div>
            <p className="text-lg">
              Fill out the online application form on our website.
            </p>
          </div>
 
          {/* Step 2 */}
          <div
            className="relative bg-[#f7a35c] text-black p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(243, 112, 33, 0.35)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#F37021] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "rgba(243, 112, 33, 0.95)" }}
            >
              2
            </div>
            <p className="text-lg">
              Submit the required documents (mark sheets, ID, etc.)
            </p>
          </div>
 
          {/* Step 3 */}
          <div
            className="relative bg-[#f7a35c] text-black p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(243, 112, 33, 0.35)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#F37021] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "rgba(243, 112, 33, 0.95)" }}
            >
              3
            </div>
            <p className="text-lg">Pay the application fee securely online.</p>
          </div>
 
          {/* Step 4 */}
          <div
            className="relative bg-[#f7a35c] text-black p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(243, 112, 33, 0.35)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#F37021] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "rgba(243, 112, 33, 0.95)" }}
            >
              4
            </div>
            <p className="text-lg">
              Attend the counseling and interview session.
            </p>
          </div>
 
          {/* Step 5 */}
          <div
            className="relative bg-[#f7a35c] text-black p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(243, 112, 33, 0.35)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#F37021] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "rgba(243, 112, 33, 0.95)" }}
            >
              5
            </div>
            <p className="text-lg">Confirm your seat and join ICEM College!</p>
          </div>
        </div>
 
        <button className="bg-[#F37021] text-white py-3 px-8 rounded-full text-xl font-semibold shadow-lg hover:bg-[#d65c1a] transition-all mt-8">
          Apply Now
        </button>
      </div>
    </div>
  );
};
 
export default AdmissionProcess;
 
 
import { useEffect } from "react";

function ThankYouIGSB() {
useEffect(() => {
  if (window.gtag) {
    console.log("IGSB Conversion Fired ✅");
    window.gtag("event", "conversion", {
      send_to: "AW-17526005159/rg6fCN7u0ZIbEKe7hqVB",
    });
  } else {
    console.warn("gtag not found ❌");
  }
}, []);


  return (
    <div className="min-h-screen bg-[#FCFAEE] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          We have received your enquiry and will respond within 24 hours.  
          For urgent enquiries, please call us on:
        </p>
        <p className="text-gray-600 mb-6">
          <a href="tel:02114691417" className="font-semibold">
            02114 – 691417
          </a>
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="w-full bg-[#F37021] text-white py-2 px-4 rounded-md hover:bg-[#d65b0e] transition-colors font-semibold"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ThankYouIGSB;

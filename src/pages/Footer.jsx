import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

function Footer() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleLinkClick = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Show toast
    setToastMessage('Please fill in the application form details at the top of the page.');
    setShowToast(true);
    
    // Hide toast after 5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  useEffect(() => {
    // Dynamically inject Font Awesome CDN
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);

    // Cleanup when the component is unmounted
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-baskerville-regualr flex flex-col">
      <div className="bg-gray-100 px-8 md:px-16 text-black py-2 rounded-tl-4xl rounded-tr-4xl flex-grow">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-6">
          {/* Left Column */}
          <div className="space-y-1">
            <div className="flex flex-col justify-between h-full">
              {/* Logo Section */}
              <div className="flex mb-4 items-center justify-center">
                <img src={logo} alt="ICEM Logo" className="w-full" />
              </div>

              {/* Rest of the Content */}
              <div className="text-sm space-y-6">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt text-xl hover:text-blue-500"></i>
                  <div>
                    <p> Indira Chanakya Campus (ICC)</p>
                    <p>S.No. 64,65, Gat No. 276 At Post : Parandwadi,</p>
                    <p>Near Somatne phata, Tal. : Maval, Dist. Pune – 410 506</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-phone-alt text-xl hover:text-gray-700"></i>
                  <div>
                    <a href="tel:02114691417" className="hover:text-gray-800">02114691417</a>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-envelope text-xl hover:text-gray-500"></i>
                  <div>
                    <a href="mailto:mba.admissions@indiraigsb.edu.in" className="hover:text-gray-600">mba.admissions@indiraigsb.edu.in</a>
                  </div>
                </div>
                <div className="flex space-x-4 text-xl mb-4">
                  <a
                    href="https://www.facebook.com/igsbpune"
                    aria-label="Facebook"
                    className="hover:text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/indira.igsb/"
                    aria-label="Instagram"
                    className="hover:text-pink-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://in.linkedin.com/company/indira-global-school-of-business"
                    aria-label="LinkedIn"
                    className="hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/user/indiracollege"
                    aria-label="YouTube"
                    className="hover:text-red-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Middle Column */}
          <div className="space-y-6">
            <h3 className="text-2xl text-[#023b5e] font-bold">Important Links</h3>
            {/* Grid layout for links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-8">
                <a href="https://indiraigsb.edu.in/" className="block text-gray-500 hover:text-gray-400">
                  Home
                </a>
                <a href="https://indiraigsb.edu.in/shree-chanakya-education-society" className="block text-gray-500 hover:text-gray-400">
                  About Us
                </a>
                <a href="https://indiraigsb.edu.in/MBA-admission-and-course-details" className="block text-gray-500 hover:text-gray-400">
                  MBA Admission
                </a>
                <a href="https://indiraigsb.edu.in/alumni" className="block text-gray-500 hover:text-gray-400">
                  Alumni
                </a>
               
              </div>
              <div className="space-y-8">
                 <a href="https://indiraigsb.edu.in/contact-us" className="block text-gray-500 hover:text-gray-400">
                  Contact Us
                </a>
                <a href="https://indiraigsb.edu.in/privacy-policy" className="block text-gray-500 hover:text-gray-400">
                  Privacy Policy
                </a>
                <a href="https://indiraigsb.edu.in/student-achievements" className="block text-gray-500 hover:text-gray-400">
                  Student Achievements
                </a>
                <a href="https://indiraigsb.edu.in/student-life-at-IGBS" className="block text-gray-500 hover:text-gray-400">
                  Student Life at IGSB
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#023b5e] py-4 px-8 md:px-16 text-left text-white text-sm mt-auto">
        <p>© 2025. Indira Global School of Business (IGSB).</p>
      </div>

            {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-80 bg-[#F37021] text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300">
          <p className="text-center font-semibold">{toastMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Footer;

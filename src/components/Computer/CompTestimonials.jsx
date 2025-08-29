import Slider from "react-slick"; // Importing react-slick
import { FaUserCircle } from "react-icons/fa";
import newImage from "../../assets/images/testimony.webp"; // New Image for the right section

function Testimonials() {
  const testimonials = [
    {
      name: "Ritu Tripathi -  Tax Consultant",
      department: "Organization : Deloitte",
      text: '"My experience at Indira Global School of Business has meant career advancement to a highly responsible and challenging position in the corporate world. Along with that goes an increased sense of self-esteem and a feeling of accomplishment and personal satisfaction. The energy and enthusiasm driven by our Professors bought nothing but the best out of us. I didn’t spend time studying rather I spent it learning, growing and having fun. All this and beyond, to the best Alma Mater I’ve ever had."',
      image: null,
    },
    {
      name: "Akshay Shirke- Customer Service Manager",
      department: "Organization : Amazon",
      text: '"I have always felt that I was so lucky to be a student at IGSB. The thing I admire the most about IGSB is the support I received from everyone at the campus. I wouldn’t have been able to achieve what I have achieved without that caring environment. The friendly atmosphere here and the fact the teachers are really close to the students makes it unique. Here, I not only developed my academic skills but also got a global exposure in every field be it my specialization or other curricular activities. It has imparted a perfect blend of technical and soft skills and made me ready for industry."',
      image: null,
    },
  ];

  const settings = {
    dots: true, // Navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time (to ensure each slide holds 2 items)
    slidesToScroll: 1,
    vertical: true, // Enable vertical scrolling
    centerMode: true, // Center the active slide
    centerPadding: "0", // No padding around centered slide
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (3 seconds here)
    pauseOnHover: false, // Disable stopping on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
        },
      },
    ],
  };

  // Function to pair testimonials for each slide
  const pairedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    pairedTestimonials.push([testimonials[i], testimonials[i + 1]]);
  }

  return (
    <div className="mb-4 px-8 md:px-16 py-10 bg-[#FCFAEE] relative overflow-hidden">
      {/* Main Heading outside the white rectangle */}
      <h2 className="text-4xl font-semibold  text-center mb-8">
       Students Testimonials
      </h2>

      {/* Single glassmorphism rectangle container */}
      <div className="bg-white/70 backdrop-blur-md border-1 border-[#ffd6b3] rounded-2xl">
        <div className="flex justify-between items-center gap-4">
          {/* Testimonial Section - 60% */}
          <div className="w-3/5">
            {/* Slick Slider */}
            <Slider {...settings}>
              {pairedTestimonials.map((pair, index) => (
                <div key={index} className="flex flex-col">
                  {/* First Card: Profile and Testimonial */}
                  <div className="p-6 flex flex-col mb-6 min-h-[200px]">
                    {" "}
                    {/* Adjusted min-height */}
                    <div className="flex items-center mb-4">
                      <FaUserCircle className="w-12 h-12 text-[#F37021] mr-4" />
                      <div className="text-left">
                        <p className="text-lg font-semibold text-[#000000]">
                          {pair[0].name}
                        </p>
                        <hr className="my-1 border-t border-gray-300" />
                        <p className="text-sm text-gray-500">
                          {pair[0].department} | {pair[0].year}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600">{pair[0].text}</p>
                  </div>

                  {/* Second Card (for the next testimonial) */}
                  {pair[1] && (
                    <div className="p-6 flex flex-col mb-6 min-h-[200px]">
                      {" "}
                      {/* Adjusted min-height */}
                      <div className="flex items-center mb-4">
                        <FaUserCircle className="w-12 h-12 text-[#F37021] mr-4" />
                        <div className="text-left">
                          <p className="text-lg font-semibold text-[#000000]">
                            {pair[1].name}
                          </p>
                          <hr className="my-1 border-t border-gray-300" />
                          <p className="text-sm text-gray-500">
                            {pair[1].department} | {pair[1].year}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600">{pair[1].text}</p>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>

          {/* New Section - 40% with Image */}
          <div className="w-2/5">
            <img
              src={newImage}
              alt="New Image"
              className="w-full h-full object-cover shadow-lg transform scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

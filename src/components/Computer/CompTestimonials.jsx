import Slider from "react-slick"; 
import { FaUserCircle } from "react-icons/fa";
import newImage from "../../assets/images/testimony.webp"; 

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
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

  const pairedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    pairedTestimonials.push([testimonials[i], testimonials[i + 1]]);
  }

  return (
    <div className="mb-4 px-4 md:px-16 py-10 bg-[#FCFAEE] relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
        Students Testimonials
      </h2>

      <div className="bg-white/70 backdrop-blur-md border border-[#ffd6b3] rounded-2xl p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          {/* Testimonial Section */}
          <div className="w-full md:w-3/5">
            <Slider {...settings}>
              {pairedTestimonials.map((pair, index) => (
                <div key={index} className="flex flex-col">
                  
                  {/* First Card */}
                  <div className="p-4 md:p-6 flex flex-col mb-6 min-h-[200px]">
                    <div className="flex items-center mb-4">
                      <FaUserCircle className="w-10 h-10 md:w-12 md:h-12 text-[#F37021] mr-4" />
                      <div className="text-left">
                        <p className="text-base md:text-lg font-semibold text-black">
                          {pair[0].name}
                        </p>
                        <hr className="my-1 border-t border-gray-300" />
                        <p className="text-xs md:text-sm text-gray-500">
                          {pair[0].department}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">{pair[0].text}</p>
                  </div>

                  {/* Second Card */}
                  {pair[1] && (
                    <div className="p-4 md:p-6 flex flex-col mb-6 min-h-[200px]">
                      <div className="flex items-center mb-4">
                        <FaUserCircle className="w-10 h-10 md:w-12 md:h-12 text-[#F37021] mr-4" />
                        <div className="text-left">
                          <p className="text-base md:text-lg font-semibold text-black">
                            {pair[1].name}
                          </p>
                          <hr className="my-1 border-t border-gray-300" />
                          <p className="text-xs md:text-sm text-gray-500">
                            {pair[1].department}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm md:text-base">{pair[1].text}</p>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>

          {/* Image Section (hidden on mobile) */}
          <div className="hidden md:block w-2/5">
            <img
              src={newImage}
              alt="Testimonial"
              className="w-full h-full object-cover shadow-lg transform scale-x-[-1] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

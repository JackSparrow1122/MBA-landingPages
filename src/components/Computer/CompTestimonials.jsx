import Slider from "react-slick";
import { FaUserCircle } from "react-icons/fa";
import newImage from "../../assets/images/testimony.webp";

function Testimonials() {
  const testimonials = [
    {
      name: "Ritu Tripathi - Tax Consultant",
      department: "Organization: Deloitte",
      text: `"My experience at Indira Global School of Business has meant career advancement to a highly responsible and challenging position in the corporate world. Along with that goes an increased sense of self-esteem and a feeling of accomplishment and personal satisfaction. The energy and enthusiasm driven by our Professors brought nothing but the best out of us. I didn’t spend time studying rather I spent it learning, growing and having fun. All this and beyond, to the best Alma Mater I’ve ever had."`,
    },
    {
      name: "Akshay Shirke - Customer Service Manager",
      department: "Organization: Amazon",
      text: `"I have always felt that I was so lucky to be a student at IGSB. The thing I admire the most about IGSB is the support I received from everyone at the campus. I wouldn’t have been able to achieve what I have achieved without that caring environment. The friendly atmosphere here and the fact the teachers are really close to the students makes it unique. Here, I not only developed my academic skills but also got a global exposure in every field be it my specialization or other curricular activities. It has imparted a perfect blend of technical and soft skills and made me ready for industry."`,
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
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  // Pair testimonials (2 per slide)
  const pairedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    pairedTestimonials.push([testimonials[i], testimonials[i + 1]]);
  }

  return (
    <div className="px-8 md:px-16 py-12 bg-[#FCFAEE] poppins-regular">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-10">
        Students Testimonials
      </h2>

      <div className="bg-white/70 backdrop-blur-md border border-[#ffd6b3] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Slider Section - 60% */}
        <div className="md:w-3/5">
          <Slider {...settings}>
            {pairedTestimonials.map((pair, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                {pair.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-lg shadow-lg border border-[#f2b87c]"
                  >
                    <div className="flex items-center mb-4">
                      <FaUserCircle className="text-[#F37021] w-12 h-12 mr-4" />
                      <div>
                        <p className="text-lg font-semibold text-[#000]">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">{item.department}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </Slider>
        </div>

        {/* Image Section - 40% */}
       {/* Image Section - 40% */}
<div className="md:w-2/5 hidden md:flex items-center justify-center">
  <img
    src={newImage}
    alt="Students"
    className="w-full h-full object-cover rounded-xl shadow-lg transform scale-x-[-1]"
  />
</div>

      </div>
    </div>
  );
}

export default Testimonials;

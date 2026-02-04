import Slider from "react-slick";
import { FaUserCircle } from "react-icons/fa";
import newImage from "../../assets/images/testimony.webp";

function Testimonials() {
  const testimonials = [
    {
      name: "Ritu Tripathi - Tax Consultant",
      department: "Organization : Deloitte",
      text: "My experience at Indira Global School of Business has meant career advancement to a highly responsible and challenging position in the corporate world. Along with that goes an increased sense of self-esteem and a feeling of accomplishment and personal satisfaction. The energy and enthusiasm driven by our Professors brought nothing but the best out of us.",
    },
    {
      name: "Akshay Shirke - Customer Service Manager",
      department: "Organization : Amazon",
      text: "I have always felt that I was so lucky to be a student at IGSB. The support I received from everyone at the campus was exceptional. It has imparted a perfect blend of technical and soft skills and made me industry-ready with global exposure.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="px-4 md:px-16 py-14 bg-[#10404A]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Students Testimonials
      </h2>

      <div className="max-w-6xl mx-auto bg-[#3AAFA9] backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* Slider Section */}
          <div className="w-full md:w-3/5">
            <Slider {...settings}>
              {testimonials.map((t, index) => (
                <div key={index} className="p-4 md:p-6">
                  <div className="flex items-center mb-4">
                    <FaUserCircle className="w-12 h-12 text-white mr-4" />
                    <div>
                      <p className="text-lg font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="text-sm text-white">
                        {t.department}
                      </p>
                    </div>
                  </div>

                  <p className="text-white text-sm md:text-base leading-relaxed border-l-4 border-white pl-4">
                    “{t.text}”
                  </p>
                </div>
              ))}
            </Slider>
          </div>

          {/* Image Section */}
          <div className="hidden md:block w-2/5">
            <img
              src={newImage}
              alt="Testimonials"
              className="w-full h-full object-cover rounded-xl shadow-xl transform scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

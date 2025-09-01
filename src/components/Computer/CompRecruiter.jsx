import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importing images
import logo1 from '../../assets/images/came/BAGIC.png';
import logo2 from '../../assets/images/came/Bank-of-New-York-Mellon.png';
import logo3 from '../../assets/images/came/Barclays.png';
import logo4 from '../../assets/images/came/FINCART.png';
import logo5 from '../../assets/images/came/Fin-destination.png';
import logo6 from '../../assets/images/came/HDFC-Sales-Pvt-Ltd.png';
import logo7 from '../../assets/images/came/Indigo-Paints.png';
import logo8 from '../../assets/images/came/Juspay.png';
import logo9 from '../../assets/images/came/Kohler.png';
import logo10 from '../../assets/images/came/LandMark-Group.png';
import logo11 from '../../assets/images/came/Master-Card.png';
import logo12 from '../../assets/images/came/Mr-Kitchen.png';
import logo13 from '../../assets/images/came/Nestle.png';
import logo14 from '../../assets/images/came/Patterns-Technologies.png';
import logo15 from '../../assets/images/came/Payatu.png';
import logo16 from '../../assets/images/came/Real-Estate-Mall.png';
import logo17 from '../../assets/images/came/Nestle.png';
import logo18 from '../../assets/images/came/Patterns-Technologies.png';
import logo19 from '../../assets/images/came/Payatu.png';
import logo20 from '../../assets/images/came/Real-Estate-Mall.png';


const sponsorsData = [
  {
    title: 'PARTICIPATING DELEGATES',
    logos: [
      logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,logo9, logo10,
    ],
  },
  {
    title: 'PARTICIPATING DELEGATES',
    logos: [
       logo11, logo12, logo13, logo14, logo15, logo16,logo17, logo18,logo19, logo20,
    ]
  },
];

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex poppins-regular flex-col justify-center overflow-hidden items-center py-6 md:py-12 bg-[#F7F3EF] px-0 md:px-16 font-poppins">
      {/* Heading above the slider */}
      <div className="text-xl md:text-3xl font-semibold text-gray-800 mb-6">
        Our Recruiters
      </div>
      
      <Slider {...settings} className="w-full">
        {sponsorsData.map((slide, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex flex-row justify-center items-center w-full px-4">
              <div
                className="grid grid-cols-5 md:grid-cols-8 gap-4 justify-items-center w-full px-6"
                style={{ gridTemplateRows: 'repeat(2, auto)' }} // Enforcing only two rows
              >
                {slide.logos.map((logo, idx) => (
                  <div key={idx} className="flex justify-center">
                    <img
                      src={logo}
                      alt={`Logo ${idx + 1}`}
                      className="rounded-none shadow-none w-auto h-auto object-contain" // Logos will scale dynamically without any background styling
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default App;

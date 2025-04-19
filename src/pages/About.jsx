import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const images = ["/about1.jpg", "/about2.webp", "/about3.jpg"];

const paragraphs = [
  "OUR SUCCESS IS DUE TO THE TALENTED ARCHITECTS, INTERIOR DESIGNERS, TECHNICIANS, AND ADMINISTRATORS WORKING AS AN EFFICIENT TEAM.",
  "THE COLLECTIVE POTENTIAL OF THE TALENTED AND COMMITTED INDIVIDUALS WHO WORK WITH WOW IS THE FIRM’S GREATEST ASSET.",
  "WE CAPITALIZE ON THE DIVERSITY OF CULTURE, CHARACTER AND TALENT THAT OUR TEAM BRINGS TO THE STUDIO.",
];

const clients = [
  "/clients/client1.jpg",
  "/clients/client2.jpg",
  "/clients/client3.jpg",
  "/clients/client4.jpg",
  "/clients/client5.jpg",
  "/clients/client6.jpg",
  "/clients/client7.jpg",
  "/clients/client8.jpg",
  "/clients/client9.jpg",
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Background Image Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Text Box */}
        <div className="absolute top-[40%] left-[2%] md:top-[40%] md:left-[34%] max-w-[370px] md:max-w-[550px] bg-black/60 p-6 rounded-md">
          <p className="text-white text-lg md:text-2xl font-semibold text-left">
            {paragraphs[currentIndex]}
          </p>
        </div>
      </div>

      {/* Clients Section (Now Separate from the Image) */}
      <div className="w-full py-10 bg-white">
        <h1 className="text-3xl md:text-5xl font-semibold text-center text-gray-700 mb-10">
          Our Clients and Partners
        </h1>
        <ClientCarousel />
      </div>
    </div>
  );
};

const ClientCarousel = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } }
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {[...clients, ...clients].map((image, index) => (
          <div key={index} className="px-4 flex justify-center items-center">
            <img
              src={image}
              alt={`Client ${index + 1}`}
              className="w-40 h-40 md:w-56 md:h-56 object-contain bg-white p-2 rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutUs;

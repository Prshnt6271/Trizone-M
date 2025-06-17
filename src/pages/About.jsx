import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const images = ["/about1.jpg", "/about2.jpg", "/about3.jpg", "/about4.jpg"];

const paragraphs = [
  `Profile
Vibhor Mehra is a registered architect (COA) and an Associate of the Indian Institute of Architects (IIA). As the Founding Partner and Principal Architect, he brings over 16 years of experience in the field of architecture, contributing significantly to the design and execution of complex building projects across India.`,

  `Experience
Vibhor has worked with firms like Ajoy Choudhury Associates, Neev, and Neel Ghia – Architect. These collaborations gave him hands-on experience in regional contexts, design development, and project coordination for residential and hospitality projects.`,

  `Specializations
He focuses on sustainable, climate-responsive design and site planning. His strength lies in integrating eco-conscious strategies with creative visualization to bring concepts to life through effective graphics and layouts.`,

  `Project Highlights
Major projects include Greenwood Elements (Kolkata), ILD Spire (Gurgaon), and Marriott Courtyard (Kolkata), all reflecting his attention to detail, innovation, and commitment to quality design solutions.`,
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

  const isEven = currentIndex % 2 === 0;
  const boxPosition = isEven
    ? "bottom-10 right-5 md:right-10"
    : "top-10 left-5 md:left-10";

  return (
    <div>
      {/* Background Image Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Paragraph Overlay */}
        <div
          className={`absolute ${boxPosition} w-[90%] md:w-[500px] max-h-[60vh] p-4 md:p-6 overflow-y-auto rounded-md z-10`}
        >
          <div className="absolute inset-0 bg-black rounded-md z-0" />
          <div className="relative z-10">
            <h2 className="text-white text-lg md:text-3xl font-bold uppercase mb-2">
              {paragraphs[currentIndex].split("\n")[0]}
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed text-justify whitespace-pre-line">
              {paragraphs[currentIndex].split("\n").slice(1).join("\n")}
            </p>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="w-full bg-white py-8">
        <h1 className="text-3xl md:text-5xl font-semibold text-center text-gray-700 mb-8">
          Our Clients and Partners
        </h1>
        <div className="w-full">
          <ClientCarousel />
        </div>
      </div>
    </div>
  );
};

const ClientCarousel = () => {
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {[...clients, ...clients].map((image, index) => (
          <div key={index} className="flex justify-center items-center px-4">
            <img
              src={image}
              alt={`Client ${index + 1}`}
              className="w-20 h-20 md:w-28 md:h-28 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutUs;

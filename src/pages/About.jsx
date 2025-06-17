import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const images = ["/about1.jpg", "/about2.jpg", "/about3.jpg", "/about4.jpg"];

const paragraphs = [
  `Profile
Vibhor Mehra, a registered architect (COA) and IIA Associate, is the Founding Partner and Principal Architect with over 16 years of experience. He excels in blending technical detail with creative design from concept to completion.`,

  `Experience
Vibhor has worked with reputed firms like Ajoy Choudhury Associates, Neev, and Neel Ghia. His experience spans residential, commercial, and hospitality projects, covering design, detailing, and coordination.`,

  `Project Highlights
His key projects include Greenwood Elements (Kolkata), ILD Spire (Gurgaon), and Marriott Courtyard (Kolkata). These reflect his strength in handling scale, complexity, and context-driven design.`,

  `Specializations
Focused on sustainable and climate-responsive design, Vibhor specializes in site planning and eco-conscious architecture. His strong visual communication skills bring clarity and impact to his presentations.`,
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

  return (
    <div>
      {/* Background Image Section */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Text Overlay Box */}
        <div
          className={`absolute ${
            isEven ? "bottom-10 right-0" : "top-16 left-0"
          } w-[90%] md:w-[500px] p-3 md:p-4 rounded-md`}
        >
          <div className="absolute inset-0 bg-black/80 rounded-md z-0" />
          <div className="relative z-10">
            <h2 className="text-white text-xl md:text-3xl font-bold uppercase mb-2">
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

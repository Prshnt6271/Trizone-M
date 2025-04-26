import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const images = ["/about1.jpg", "/about2.jpg", "/about3.jpg", "/about4.jpg"];

const paragraphs = [
  "Profile\nVibhor Mehra is a registered architect (COA) and an Associate of the Indian Institute of Architects (IIA). As the Founding Partner and Principal Architect, he brings over 16 years of experience in the field of architecture, contributing significantly to the design and execution of complex building projects across India. A graduate in architecture, Vibhor is known for his ability to blend technical precision with creative expression, making him a valuable asset in every phase of project development—from concept to completion.",

  "Experience\nOver the years, Vibhor has worked with esteemed architectural firms such as Ajoy Choudhury Associates (Gurgaon), Neev (Jodhpur, Rajasthan), and Neel Ghia – Architect (Ahmedabad, Gujarat). These collaborations have enriched his understanding of regional contexts, building typologies, and diverse client needs. His role has spanned across design development, detailing, and coordination of large-scale residential, commercial, and hospitality projects, giving him a well-rounded perspective on architectural practice.",

  "Specializations\nVibhor’s approach to architecture is deeply rooted in sustainability and responsiveness to climate. He specializes in site planning and the integration of environmentally conscious strategies into architecture and landscape design. His expertise lies in crafting spaces that are not only functional but also harmoniously tied to their environment. With a strong command over graphic representation and conceptual visualization, he adds an artistic flair to presentation drawings—bringing architectural ideas to life with clarity and impact.",

  "Project Highlights\nHis portfolio includes noteworthy projects like Greenwood Elements in Kolkata, ILD Spire Group Housing in Gurgaon, and Marriott Courtyard in Kolkata. These projects stand as a testament to his ability to manage scale, navigate complexity, and deliver contextually grounded design solutions. Whether working on luxury hospitality or urban residential developments, Vibhor’s focus remains on quality, innovation, and sustainability.",
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
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      w-[90%] md:w-[800px] bg-black/80 p-8 rounded-md border border-white"
        >
          <h2 className="text-white text-2xl md:text-4xl font-bold uppercase mb-4 text-center">
            {paragraphs[currentIndex].split("\n")[0]}
          </h2>
          <p className="text-white text-md md:text-xl font-normal leading-relaxed text-justify">
            {paragraphs[currentIndex].split("\n").slice(1).join("\n")}
          </p>
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

import React from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroPage = ({ content = {} }) => {
  const location = useLocation();
  const selectedProject = location.state?.selectedProject;
  const projects = location.state?.projects || [];

  if (!selectedProject || projects.length === 0) {
    return <div className="text-white text-center mt-20">No project selected.</div>;
  }

  const initialSlide = projects.findIndex((p) => p.id === selectedProject.id);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    initialSlide: initialSlide >= 0 ? initialSlide : 0,
  };

  return (
    <div className="w-full flex flex-col items-center bg-black">
      <div className="w-full h-screen">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-screen object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-white mt-6 px-4 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold">{selectedProject.title}</h2>
        <p className="text-gray-400 text-lg mt-2">{selectedProject.category}</p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row w-full p-4 mt-10">
        {/* Left Side - Project Details */}
        <div className="w-full md:w-1/3 p-6 rounded-lg text-white">
          <h3 className="text-lg font-semibold mb-4">Project Details</h3>
          <hr className="mb-4" />

          <p className="mb-2"><strong>Client:</strong> {selectedProject.client || "Not Available"}</p>
          <hr className="mb-4"/>
          <p className="mb-2"><strong>Location:</strong> {selectedProject.locationdata || "N/A"}</p>
          <hr className="mb-4"/>
          <p className="mb-2"><strong>Dates:</strong> {selectedProject.dates || "N/A"}</p>
          <hr className="mb-4"/>
          <p className="mb-2"><strong>Value:</strong> {selectedProject.value || "N/A"}</p>
          <hr className="mb-4"/>
          <p className="mb-2"><strong>Role:</strong> {selectedProject.role || "N/A"}</p>
          <hr className="mb-4"/>
          <p className="mb-2"><strong>Scope:</strong> {selectedProject.scope || "N/A"}</p>
          <hr className="mb-4"/>
          <p className="mb-2"><strong>Team:</strong></p>
          <ul className="list-none space-y-2">
            {selectedProject.team?.length ? (
              selectedProject.team.map((member, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {member.image && (
                    <img src={member.image} alt={member.name} className="w-10 h-10 rounded-full" />
                  )}
                  <span>{member.name} - {member.role}</span>
                </li>
              ))
            ) : (
              <li>N/A</li>
            )}
          </ul>
        </div>

        {/* Right Side - Project Description */}
        <div className="w-full md:w-2/3 p-6 rounded-lg ml-0 md:ml-6">
          <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
          <hr className="mb-4" />
          <p className="text-gray-300 leading-relaxed">{content[selectedProject.id] || "No additional content available."}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

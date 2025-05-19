// PropertiesPage.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import i1 from "../assets/interior/i1.jpg";
import i2 from "../assets/interior/i2.jpg";
import i3 from "../assets/interior/i3.jpg";
import i4 from "../assets/interior/i4.jpg";
import i5 from "../assets/interior/i5.jpg";
import i6 from "../assets/interior/i6.jpg";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Houses",
  "Architecture",
  "Interior",
  "Landscape",
];

const projects = [
  {
    img: i1,
    name: "Essel Tower Apartment",
    project: "Project: Apartment Interior",
    location: "Location: Essel Tower, Gurgaon, Haryana",
    year: "Year: 2015",
    team: "Team: Interior Design Studio",
    category: "Interior",
  },
  {
    img: i2,
    name: "MGI Office Interior",
    project: "Project: Corporate Office Interior",
    location: "Location: Jasola, New Delhi",
    year: "Year: 2018",
    team: "Team: Trizzone Design Studio",
    category: "Interior",
  },
  {
    img: i3,
    name: "Palm Residency Villas",
    project: "Project: Villa Interiors",
    location: "Location: Sector 66, Gurgaon",
    year: "Year: 2020",
    team: "Team: Luxe Interiors",
    category: "Interior",
  },
  {
    img: i4,
    name: "The Grand Hotel Lounge",
    project: "Project: Hotel Lounge Design",
    location: "Location: Aerocity, New Delhi",
    year: "Year: 2019",
    team: "Team: Grand Design Team",
    category: "Interior",
  },
  {
    img: i5,
    name: "Thumbnail Project One",
    project: "Project: Sample Interior",
    location: "Location: Mumbai",
    year: "Year: 2021",
    team: "Team: Thumbnail Designers",
    category: "Thumbnails",
  },
  {
    img: i6,
    name: "World Map Theme Interior",
    project: "Project: Themed Office",
    location: "Location: Cyber City, Gurgaon",
    year: "Year: 2017",
    team: "Team: Map Studios",
    category: "World Map",
  },
];

const propertiesData = categories.reduce((acc, category) => {
  acc[category] =
    category === "All"
      ? projects
      : projects.filter((project) => project.category === category);
  return acc;
}, {});

const PropertiesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  const handleCategoryClick = (category) => {
    if (category === "Architecture") {
      navigate("/arch");
    } else {
      // if clicking Interior (or any other), ensure you're on /properties
      if (category === "Interior" && location.pathname !== "/properties") {
        navigate("/properties");
      }
      setSelectedCategory(category);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col md:flex-row mt-28 p-4">
      {/* MOBILE VIEW */}
      <div className="md:hidden">
        <h2 className="text-3xl font-bold mb-4">Interiors</h2>
        <div className="flex overflow-x-auto gap-2 whitespace-nowrap pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`text-sm px-4 py-2 rounded-lg ${
                selectedCategory === category ? "text-black font-bold" : "text-gray-400"
              } hover:text-black`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:flex md:w-1/4 flex-col space-y-2 p-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`text-left p-2 rounded-lg text-gray-400 text-sm hover:text-black ${
              selectedCategory === category ? "text-black font-bold" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* IMAGES SECTION */}
      <div
        className={`w-full md:w-3/4 transition-all duration-1000 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-50"
        }`}
      >
        <h2 className="hidden md:block text-3xl font-bold mb-4">INTERIORS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {propertiesData[selectedCategory]?.map((property, idx) => (
            <Link
              key={idx}
              to={`/interior/${property.name.replace(/\s+/g, "-").toLowerCase()}`}
              state={{ projectName: property.name }}
              rel="noopener noreferrer"
            >
              <div className="group cursor-pointer overflow-hidden">
                <div className="h-[150px]">
                  <img
                    src={property.img}
                    alt={property.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="text-left mt-1">
                  <p className="text-black text-xs font-bold uppercase">{property.name}</p>
                  <p className="text-gray-600 text-[10px]">{property.project}</p>
                  <p className="text-gray-600 text-[10px]">{property.location}</p>
                  <p className="text-gray-600 text-[10px]">{property.year}</p>
                  <p className="text-gray-600 text-[10px]">{property.team}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;

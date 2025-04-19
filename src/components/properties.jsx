import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Houses",
  "Hospitality",
  "Thumbnails",
  "World Map",
];

// Generate 20 random image items
const generateRandomImages = (count) =>
  Array.from({ length: count }, (_, i) => ({
    img: `https://picsum.photos/seed/${Math.random() * 1000}/600/400`,
    name: `PROJECT ${i + 1}`,
    project: "project description",
    location: "location info",
    year: "Year: 2025",
    team: "Team: Trizzone",
    link: "/",
  }));

const propertiesData = categories.reduce((acc, category) => {
  acc[category] = generateRandomImages(20);
  return acc;
}, {});

const PropertiesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col md:flex-row mt-28 p-4">
      {/* MOBILE VIEW (Horizontal Scroll Buttons) */}
      <div className="md:hidden">
        <h2 className="text-3xl font-bold mb-4">Interiors</h2>
        <div className="flex overflow-x-auto gap-2 whitespace-nowrap pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm px-4 py-2 rounded-lg ${
                selectedCategory === category ? "text-black font-bold" : "text-gray-400"
              } hover:text-black`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW (Sidebar Buttons) */}
      <div className="hidden md:flex md:w-1/4 flex-col space-y-2 p-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
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
          {propertiesData[selectedCategory]?.map((property, index) => (
            <Link to={property.link} rel="noopener noreferrer" key={index}>
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

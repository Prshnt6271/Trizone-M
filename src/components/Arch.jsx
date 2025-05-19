import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Correct image imports
import ar1 from "../assets/Arch/ar1.jpg";
import ar2 from "../assets/Arch/ar2.jpg";
import i3 from "../assets/interior/i3.jpg";
import i4 from "../assets/interior/i4.jpg";
import i5 from "../assets/interior/i5.jpg";
import i6 from "../assets/interior/i6.jpg";
// 👉 Keep adding more imports if needed

// Categories
const categories = [
  "All",
  "Residential",
  "Commercial",
  "Houses",
  "Architecture", // This will now work because we added projects with this category
  "Interior",
  "Landscape",
];

// Projects with their individual properties
const projects = [
  {
    img: ar1,
    name: "Essel Tower",
    project: "Project: Apartment Interior",
    location: "Location: Essel Tower, Gurgaon, Haryana",
    year: "Year: 2015",
    team: "Team: Interior Design Team",
    category: "Architecture",
  },
  {
    img: ar2,
    name: "MGI OFFICE INTERIOR",
    project: "Project: Corporate Office Interior",
    location: "Location: Jasola, New Delhi",
    year: "Year: 2015",
    team: "Team: Trizzone Design Studio",
    category: "Architecture",
  },
  {
    img: i3,
    name: "Contemporary Villa",
    project: "Project: Modern Architecture Design",
    location: "Location: Pune, Maharashtra",
    year: "Year: 2023",
    team: "Team: Architecture Team",
    category: "Architecture", // ✅ Added a project with "Architecture" category
  },
];

// Generate fixed properties by category
const propertiesData = categories.reduce((acc, category) => {
  if (category === "All") {
    acc[category] = projects;
  } else {
    acc[category] = projects.filter((project) => project.category === category);
  }
  return acc;
}, {});

const Arch = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col md:flex-row mt-28 p-4">
      {/* MOBILE VIEW */}
      <div className="md:hidden">
        <h2 className="text-3xl font-bold mb-4">Architecture</h2>
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

      {/* DESKTOP VIEW */}
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
        <h2 className="hidden md:block text-3xl font-bold mb-4">ARCHITECTURE</h2>

        {/* Projects */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {propertiesData[selectedCategory]?.length > 0 ? (
            propertiesData[selectedCategory].map((property, index) => (
              <Link
                key={index}
                to={`/architecture/${property.name.replace(/\s+/g, "-").toLowerCase()}`}
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
            ))
          ) : (
            <p className="text-gray-500 text-sm">No projects found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Arch;

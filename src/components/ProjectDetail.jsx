import React from "react";
import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "NO. 40",
    category: "RESIDENTIAL",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9XTZJ_iQJubqUgivruOTXc3kymITA3Bbfg&s",
  },
  {
    id: 2,
    title: "MEWS HOUSE",
    category: "RESIDENTIAL",
    image: "https://minaleandmann.com/wp-content/uploads/2018/05/alexander_desktop.jpg",
  },
  {
    id: 3,
    title: "THORNTON",
    category: "RESIDENTIAL",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AQQBAcaEZKirUYWyUevw3FQ3i1xSWRLM-A&s",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  return (
    <div className="w-full flex flex-col items-center bg-black text-white ">
      <img
        src={project.image}
        alt={project.title}
        className="w-full  h-screen object-cover"
      />
      <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>
      <p className="text-gray-400 text-lg">{project.category}</p>
      <p className="mt-4 text-gray-300 text-center max-w-2xl">
        This is the static content about the project. The details remain the same for all projects, but the hero image changes based on the clicked project.
      </p>
    </div>
  );
};

export default ProjectDetail;

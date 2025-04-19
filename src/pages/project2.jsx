import React from "react";
import ProjectGallery from "../components/projects";

const projects = [
  { id: 1, title: "", category: "RESIDENTIAL", image: "/ESSEL/1" },
  { id: 2, title: "", category: "RESIDENTIAL", image: "/ESSEL/2" },
  { id: 3,title: "", category: "RESIDENTIAL", image: "/ESSEL/3" },
  { id: 4, title: "", category: "RESIDENTIAL", image: "/ESSEL/4" },
  { id: 5, title: "", category: "RESIDENTIAL", image: "/ESSEL/5" },
  { id: 6, title: "", category: "RESIDENTIAL", image: "/ESSEL/6" },
];

const Project2 = () => {
  return (
    <div>
      <ProjectGallery projects={projects} />
    </div>
  );
};

export default Project2;

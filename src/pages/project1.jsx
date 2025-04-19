import React from "react";
import ProjectGallery from "../components/projects";

const projects = [
    { id: 1, title: "", category: "RESIDENTIAL", image: "/ESSEL/1.png" },
    { id: 2, title: "", category: "RESIDENTIAL", image: "/ESSEL/2.png" },
    { id: 3,title: "", category: "RESIDENTIAL", image: "/ESSEL/3.png" },
    { id: 4, title: "", category: "RESIDENTIAL", image: "/ESSEL/4.png" },
    { id: 5, title: "", category: "RESIDENTIAL", image: "/ESSEL/5.png" },
    { id: 6, title: "", category: "RESIDENTIAL", image: "/ESSEL/6.png" },
  ];

const Project1 = () => {
  return (
    <div>
      <ProjectGallery projects={projects} />
    </div>
  );
};

export default Project1;

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProjectGallery = ({ projects }) => {
  return (
    <div className="w-full flex flex-col items-center bg-black py-10 relative">
      <div className="w-full overflow-x-auto custom-scrollbar px-4 pb-14 no-scrollbar mt-14 pt-14">
        <div className="flex gap-x-8 snap-x snap-mandatory">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} projects={projects} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, projects }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="cursor-pointer flex flex-col items-center min-w-[150px] md:min-w-[450px] snap-start"
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate("/hero", { state: { selectedProject: project, projects } })} // Pass all projects
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-[450px] h-80 md:h-60 object-cover"
      />
      <h3 className="text-white text-lg font-semibold mt-2">{project.title}</h3>
      <p className="text-gray-400 text-sm">{project.category}</p>
    </motion.div>
  );
};

export default ProjectGallery;

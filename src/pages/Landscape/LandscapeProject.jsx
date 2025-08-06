import React from "react";
import { useLocation } from "react-router-dom";

const LandscapeProject = () => {
  const location = useLocation();
  const projectName = location.state?.projectName || "Project";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">
        Landscape / {projectName}
      </h2>
      <div className="flex flex-col items-center gap-6 w-full px-4 md:px-10">
        <p>Landscape project details for {projectName} will be displayed here.</p>
      </div>
    </div>
  );
};

export default LandscapeProject;
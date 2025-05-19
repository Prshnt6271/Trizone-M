import React from "react";
import { useLocation } from "react-router-dom";

// --- Import all project images ---
// Images for Essel Tower (Architecture project)
import A1 from "../../assets/Arch/A1.jpg";
import A2 from "../../assets/Arch/A2.jpg";
import A3 from "../../assets/Arch/A3.jpg";
import A4 from "../../assets/Arch/A4.jpg";
import A5 from "../../assets/Arch/A5.jpg";
import A6 from "../../assets/Arch/A6.jpg";
import A7 from "../../assets/Arch/A7.jpg";
import A8 from "../../assets/Arch/A8.jpg";
import A9 from "../../assets/Arch/A9.jpg";
import A10 from "../../assets/Arch/A10.jpg";
import A11 from "../../assets/Arch/A11.jpg";

// Images for MGI Office Interior (Interior project) 
import i1 from "../../assets/interior/i1.jpg";
import i2 from "../../assets/interior/i2.jpg";
import i3 from "../../assets/interior/i3.jpg";
import i4 from "../../assets/interior/i4.jpg";
import i5 from "../../assets/interior/i5.jpg";

// --- Define images for each project ---
const projectImages = {
  "essel-tower": [A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11],
  "mgi-office-interior": [i1, i2, i3, i4, i5],
  // 👉 Add more projects here if needed
};

const Interior = () => {
  const location = useLocation();
  const projectName = location.state?.projectName || "Project";

  // Create a slug from projectName to match keys in projectImages
  const slug = projectName.toLowerCase().replace(/\s+/g, "-");

  // Find images for the project, fallback to empty array if not found
  const images = projectImages[slug] || [];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      
      {/* Breadcrumb */}
      <h2 className="text-2xl md:text-4xl font-bold mb-8">
        Architecture / {projectName}
      </h2>

      {/* Images */}
      <div className="flex flex-col items-center gap-6 w-full px-4 md:px-10">
        {images.length > 0 ? (
          images.map((img, index) => (
            <div key={index} className="w-full max-w-4xl">
              <img 
                src={img} 
                alt={`img-${index + 1}`} 
                className="w-full h-auto object-cover rounded-md shadow-lg"
              />
            </div>
          ))
        ) : (
          <p>No images available for this project.</p>
        )}
      </div>
    </div>
  );
};

export default Interior;

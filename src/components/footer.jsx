import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [selectedFirstCol, setSelectedFirstCol] = useState(null);
  const [selectedSecondCol, setSelectedSecondCol] = useState(null);
  const [language, setLanguage] = useState("ENGLISH");
  const navigate = useNavigate();

  const firstColumn = ["Practice", "Projects", "People", "Contact"];

  const secondColumnOptions = {
    Practice: ["Awards"],
    Projects: ["Architecture", "Interior Design", "Landscape"],
    People: ["Team", "Careers"],
    Contact: ["Support", "Inquiry", "Location"],
  };

  const thirdColumnOptions = {
    Ethos: ["Mission", "Values"],
    Publications: ["Research", "Articles"],
    Architecture: ["Commercial", "Residential"],
    "Interior Design": ["Luxury Homes", "Hotels"],
    Landscape: ["Urban Design"],
    Leadership: ["CEO", "Directors"],
    Careers: ["Open Positions", "Internships"],
    Support: ["FAQs", "Help Center"],
    Inquiry: ["Business", "General"],
    Location: [],
  };

  const toggleLanguage = () => {
    setLanguage(language === "ENGLISH" ? "HINDI" : "ENGLISH");
  };

  const handleFirstColClick = (item) => {
    if (selectedFirstCol === item) {
      setSelectedFirstCol(null);
      setSelectedSecondCol(null);
    } else {
      setSelectedFirstCol(item);
      setSelectedSecondCol(null);
    }
  };

  const handleSecondColClick = (item) => {
    if (item === "Team") {
      navigate("/team");
      return;
    }
    if (item === "Awards") {
  navigate("/awards");
  return;
}


    if (selectedSecondCol === item) {
      setSelectedSecondCol(null);
    } else {
      setSelectedSecondCol(item);
      if (item === "Location") {
        navigate("/contact#map");
      }
    }
  };

const handleThirdItemClick = (item) => {
  if (item === "Location") {
    navigate("/contact#map");
  } else if (item === "Help Center" || item === "General") {
    navigate("/contact");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  } else if (item === "Business") {
    navigate("/business");
  } else if (item === "Open Positions") {
    navigate("/open-positions");
  } else if (item === "Internships") {
    navigate("/internships");
  }
  else if (item === "FAQs") {
  navigate("/faqs");
}
};

  return (
    <div className="bg-black p-10 text-white relative">
      <div className="flex justify-between">
        {/* Left Expandable Menu */}
        <div className="flex space-x-5 md:space-x-28 text-[7px] md:text-xl">
          {/* First Column */}
          <div>
            <ul>
              {firstColumn.map((item) => (
                <motion.li
                  key={item}
                  className={`cursor-pointer py-2 md:mx-8 hover:text-gray-400 ${
                    selectedFirstCol === item ? "border-b-2 border-white" : ""
                  }`}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFirstColClick(item)}
                >
                  {item.toUpperCase()}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Second Column */}
          {selectedFirstCol && secondColumnOptions[selectedFirstCol] && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="pl-4 border-l border-gray-500"
            >
              <ul>
                {secondColumnOptions[selectedFirstCol].map((item) => (
                  <motion.li
                    key={item}
                    className={`cursor-pointer py-2 hover:text-gray-400 ${
                      selectedSecondCol === item ? "border-b-2 border-white" : ""
                    }`}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSecondColClick(item)}
                  >
                    {item.toUpperCase()}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Third Column */}
          {selectedSecondCol && thirdColumnOptions[selectedSecondCol] && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="pl-4 border-l border-gray-500"
            >
              <ul>
                {thirdColumnOptions[selectedSecondCol].map((item) => (
                  <motion.li
                    key={item}
                    className="cursor-pointer py-2 hover:text-gray-400"
                    onClick={() => handleThirdItemClick(item)}
                  >
                    {item.toUpperCase()}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Right Section */}
        <div className="text-right space-y-4">
          <div className="text-sm md:text-2xl font-bold">TRIZZONE</div>
          <div className="flex justify-end space-x-4 text-xs md:text-xl">
            <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
          </div>
          <div>
            <span className="hover:text-gray-400 cursor-pointer text-sm md:text-md" onClick={toggleLanguage}>{language}</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4 text-sm md:text-xl">
        © 2025 COPYRIGHT ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;

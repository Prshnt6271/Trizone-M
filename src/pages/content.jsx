import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "../components/HeroPage";
import Project1 from "./project1";

const projects = [
  { id: 1, title: "NO. 40", category: "RESIDENTIAL", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9XTZJ_iQJubqUgivruOTXc3kymITA3Bbfg&s", client:"ClientA",
    locationdata: "New York",
    dates: "2023-2024",
    team: [
      { name: "John Doe", role: "Designer", image: "/images/john.jpg" },
      { name: "Jane Smith", role: "Developer", image: "/images/jane.jpg" },
    ],
  },
  { id: 2, title: "MEWS HOUSE", category: "RESIDENTIAL", image: "https://minaleandmann.com/wp-content/uploads/2018/05/alexander_desktop.jpg" },
  { id: 3, title: "THORNTON", category: "RESIDENTIAL", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AQQBAcaEZKirUYWyUevw3FQ3i1xSWRLM-A&s" },
];


const content = {
  1: "Details about NO. 40 residential project.",
  2: "Mews House is an elegant residential project.",
  3: "Thornton is a luxurious residential development.",
};

function Content() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Project1 />} />
        <Route path="/hero" element={<HeroPage projects={projects} content={content}
        />} />
      </Routes>
    </Router>
  );
}

export default Content;

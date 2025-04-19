import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "../components/HeroPage";
import Project2 from "./project2";

const projects = [
  { id: 1, title: "Mnnnn", category: "RESIDENTIAL", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9XTZJ_iQJubqUgivruOTXc3kymITA3Bbfg&s" },
  { id: 2, title: "MEWS HOUSE", category: "RESIDENTIAL", image: "https://minaleandmann.com/wp-content/uploads/2018/05/alexander_desktop.jpg" },
  { id: 3, title: "NO. 40", category: "RESIDENTIAL", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9XTZJ_iQJubqUgivruOTXc3kymITA3Bbfg&s" },
  { id: 4, title: "THORNTON", category: "RESIDENTIAL", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AQQBAcaEZKirUYWyUevw3FQ3i1xSWRLM-A&s" },
  { id: 5, title: "THORNTON", category: "RESIDENTIAL", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AQQBAcaEZKirUYWyUevw3FQ3i1xSWRLM-A&s" },
  { id: 6, title: "THORNTON", category: "RESIDENTIAL", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AQQBAcaEZKirUYWyUevw3FQ3i1xSWRLM-A&s" },
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
        <Route path="/project2" element={<Project2 />} />
        <Route path="/hero" element={<HeroPage content={content} />} />
      </Routes>
    </Router>
  );
}

export default Content;

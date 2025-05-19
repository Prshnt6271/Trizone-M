import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import PropertiesPage from "./components/properties";
import Contact from "./pages/Contact";
import Header from "./components/header";
import Preloader from "./components/loading";
import Footer from "./components/footer";
import AboutUs from "./pages/About";
import ProjectGallery from "./components/projects";
import ProjectDetail from "./components/ProjectDetail";
import Project1 from "./pages/project1";
import HeroPage from "./components/Hero_Page";
import Project2 from "./pages/project2";
import Service from "./pages/service";
import Arch from "./components/Arch"
import Projectt1 from "./pages/Archecture/Projectt1";
import  Interior from "./pages/Interior/Interior";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const preloaderShown = sessionStorage.getItem("preloaderShown");

    if (!preloaderShown) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("preloaderShown", "true");
      }, 6000);
    }
  }, []);

  if (loading) {
    return <Preloader />; // Show Preloader only on first visit
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arch" element={<Arch />} />
        <Route path="/architecture/:EsselTower" element={<Projectt1 />} />
        <Route path="/Interior/:EsselTower" element={<Interior />} />


        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />

        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/hero" element={<HeroPage />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

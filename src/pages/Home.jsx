import { useEffect, useState } from "react";
import Hero from "../components/hero"; // Importing the Hero component

const Home = () => {
 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-[70px] md:text-[280px] font-bold relative">
  
     <Hero />
    </div>
  );
};

export default Home;

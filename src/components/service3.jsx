import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const Service3 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });
  
  // Split the text into individual letters
  const headingText = "Architecture";
  const letters = headingText.split("");

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-[#1b1b1b] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16"
    >
      {/* Left: Text Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-sm text-gray-300">✦ Website design with purpose.</p>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          {/* Map through each letter and animate individually */}
          {letters.map((letter, i) => {
            // Calculate individual progress for each letter
            const letterProgress = useTransform(
              scrollYProgress,
              [0, 1],
              [0, 1],
              { clamp: false }
            );
            
            const opacity = useTransform(
              letterProgress,
              [i / letters.length, (i + 0.5) / letters.length],
              [0.3, 1]
            );

            return (
              <motion.span 
                key={i}
                style={{ opacity }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            );
          })}
        </h1>
        
        <p className="text-gray-400 text-base md:text-lg max-w-lg">
        At Trizzone, architecture is more than building—it's about curating experiences. Our approach blends form and function through clean lines, intuitive spaces, and a deep respect for context. With a contemporary lens and minimalist soul, we design spaces that breathe, flow, and adapt—built to inspire, made to last.
        </p>
        
        <button className="mt-4 border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
          Get Started
        </button>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <div className="rounded-xl overflow-hidden bg-gray-800 p-2 shadow-xl">
          <img
            src=""
            alt="Website Mockup"
            className="rounded-md w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Service3;
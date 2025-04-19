import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedLetters = ({ text, scrollYProgress, startOffset = 0 }) => {
  const letters = text.split("");

  return (
    <>
      {letters.map((letter, i) => {
        const start = startOffset + (i / letters.length) * 0.5;
        const end = startOffset + ((i + 1) / letters.length) * 0.5;
        
        const opacity = useTransform(
          scrollYProgress,
          [start, end],
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
    </>
  );
};

const Service4 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  return (
    <section 
      ref={sectionRef}
      className="bg-[#1b1b1b] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Left: Image Section */}
      <div className="relative flex justify-center md:w-1/2">
        <div className="bg-[#f7d6d6] rounded-3xl p-4 w-fit">
          <img
            src=""
            alt="Mobile Mockup"
            className="w-[250px] md:w-[300px] rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Right: SEO and CMS Text */}
      <div className="md:w-1/2 space-y-12">
        {/* SEO */}
        <div>
          <h2 className="text-6xl font-extrabold">
            <AnimatedLetters text="Interior Design
              " scrollYProgress={scrollYProgress} startOffset={0} />
          </h2>
          <p className="mt-2 text-white font-medium">
            <span className="font-bold"></span> Our interior design philosophy is rooted in simplicity, light, and purpose. Every detail matters. From the texture of a wall to the way natural light moves through a room, we create interiors that are calm, refined, and effortlessly elegant. We believe in less—but better.

          </p>
        </div>

        {/* CMS */}
        <div>
          <h2 className="text-6xl font-extrabold">
            <AnimatedLetters text="Landscape Architecture
             " scrollYProgress={scrollYProgress} startOffset={0.5} />
          </h2>
          <p className="mt-2 text-white font-medium">
            <span className="font-bold"></span> Nature and design, in quiet harmony. Our landscape architecture creates serene outdoor environments where every element has intention—from native plant selections to subtle transitions between built and natural spaces. We sculpt landscapes that feel like a natural extension of the architecture—soft, balanced, and enduring.

          </p>
        </div>


          {/* Project mangement */}
          <div>
          <h2 className="text-6xl font-extrabold">
            <AnimatedLetters text="Landscape Architecture"
             scrollYProgress={scrollYProgress} startOffset={0.5} />
          </h2>
          <p className="mt-2 text-white font-medium">
            <span className="font-bold"></span>Precision meets design. With a streamlined project management system, Trizzone ensures every detail—from concept to completion—is handled with care, efficiency, and absolute clarity. We balance creativity with control, timelines with craftsmanship, and ideas with execution.

          </p>
        </div>
      </div>
    </section>
  );
};

export default Service4;
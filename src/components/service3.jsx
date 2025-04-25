import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import a1 from "../assets/services/a1.jpg";
import a2 from "../assets/services/a2.jpg";
import a3 from "../assets/services/a3.jpg";
import a4 from "../assets/services/a4.jpg";
import a5 from "../assets/services/a5.jpg";

const RotatingImages = ({ images }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const imageElements = images.map((img, index) => new Image().src = img);
    setLoaded(true);
  }, [images]);

  if (!loaded) return null;

  return (
    <div className="absolute inset-0 overflow-hidden bg-gray-800">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`img-${index}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: index * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const Service3 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

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
          {letters.map((letter, i) => {
            const letterProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
            const opacity = useTransform(
              letterProgress,
              [i / letters.length, (i + 0.5) / letters.length],
              [0.3, 1]
            );
            return (
              <motion.span key={i} style={{ opacity }} className="inline-block">
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            );
          })}
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-lg">
          At Trizzone, architecture is more than building—it's about curating experiences. Our approach blends form and function through clean lines, intuitive spaces, and a deep respect for context. With a contemporary lens and minimalist soul, we design spaces that breathe, flow, and adapt—built to inspire, made to last.
        </p>
      </div>

      {/* Right: Animated Images */}
      <div className="md:w-1/2 flex justify-center relative h-[400px]">
        <RotatingImages images={[a1, a2, a3, a4, a5]} />
      </div>
    </section>
  );
};

export default Service3;

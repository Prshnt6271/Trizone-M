import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import poster from "../assets/services/poster.webp"; // 🎯 Poster background image

import i1 from "../assets/services/i1.jpg";
import i2 from "../assets/services/i2.jpg";
import i3 from "../assets/services/i3.jpg";
import i4 from "../assets/services/i4.jpg";
import i5 from "../assets/services/i5.jpg";

import l1 from "../assets/services/l1.jpg";
import l2 from "../assets/services/l2.jpg";
import l3 from "../assets/services/l3.jpg";
import l4 from "../assets/services/l4.jpg";
import l5 from "../assets/services/l5.jpg";
import l6 from "../assets/services/l6.jpg";

import p1 from "../assets/services/p1.jpg";
import p2 from "../assets/services/p2.jpg";
import p3 from "../assets/services/p3.jpg";
import p4 from "../assets/services/p4.jpg";
import p5 from "../assets/services/p5.jpg";
import p6 from "../assets/services/p6.jpg";

const AnimatedLetters = ({ text, scrollYProgress, range = [0, 0.3] }) => {
  const letters = text.split("");
  return (
    <>
      {letters.map((letter, i) => {
        const [startRange, endRange] = range;
        const start = startRange + (i / letters.length) * (endRange - startRange);
        const end = start + (0.5 / letters.length) * (endRange - startRange);
        const opacity = useTransform(scrollYProgress, [start, end], [0.5, 1]);
        const color = useTransform(scrollYProgress, [start, end], ["#aaaaaa", "#ffffff"]);

        return (
          <motion.span 
            key={i}
            style={{ opacity, color }}
            className="inline-block will-change-transform"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </>
  );
};

const RotatingImages = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const preload = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preload();
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt="Service"
          className="absolute inset-0 w-full h-full object-cover rounded-xl will-change-transform"
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const Service4 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 space-y-20 md:space-y-32 overflow-hidden"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* 🎯 Interior Design Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Interior Design" scrollYProgress={scrollYProgress} range={[0, 0.25]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Our interior design philosophy is rooted in simplicity, light, and purpose. Every detail matters.
            From the texture of a wall to the way natural light moves through a room, we create interiors that
            are calm, refined, and effortlessly elegant.
          </p>
        </div>

        <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] rounded-2xl overflow-hidden flex items-center justify-center bg-gray-900">
          <img
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
          />
          <div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden z-10 shadow-lg">
            <RotatingImages images={[i1, i2, i3, i4, i5]} />
          </div>
        </div>
      </div>

      {/* 🎯 Landscape Architecture Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Landscape Architecture" scrollYProgress={scrollYProgress} range={[0.25, 0.5]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Nature and design, in quiet harmony. Our landscape architecture creates serene outdoor environments
            where every element has intention—from native plant selections to subtle transitions between built
            and natural spaces.
          </p>
        </div>

        <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center bg-gray-900">
          <img
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
          />
          <div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden z-10 shadow-lg">
            <RotatingImages images={[l1, l2, l3, l4, l5, l6]} />
          </div>
        </div>
      </div>

      {/* 🎯 Project Management Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Project Management" scrollYProgress={scrollYProgress} range={[0.5, 0.75]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Precision meets design. With a streamlined project management system, Trizzone ensures every
            detail—from concept to completion—is handled with care, efficiency, and absolute clarity.
          </p>
        </div>

        <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px]  overflow-hidden flex items-center justify-center bg-gray-900">
          <img
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
          />
          <div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden z-10 shadow-lg">
            <RotatingImages images={[p1, p2, p3, p4, p5, p6]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service4;

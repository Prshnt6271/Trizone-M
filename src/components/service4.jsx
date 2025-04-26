import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
        const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
        const color = useTransform(scrollYProgress, [start, end], ["#999999", "#ffffff"]);

        return (
          <motion.span key={i} style={{ opacity, color }} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </>
  );
};

const RotatingImages = ({ images }) => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 rounded-xl">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt="Rotating"
          className="absolute h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 2,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

const Service4 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  return (
    <section ref={sectionRef} className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 space-y-12 md:space-y-28 overflow-hidden">

      {/* Interior Design */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10 order-2">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Interior Design" scrollYProgress={scrollYProgress} range={[0, 0.25]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Our interior design philosophy is rooted in simplicity, light, and purpose. Every detail matters. From the texture of a wall to the way natural light moves through a room, we create interiors that are calm, refined, and effortlessly elegant. We believe in less—but better.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden rounded-xl order-1">
          <RotatingImages images={[i1, i2, i3, i4, i5]} />
        </div>
      </div>

      {/* Landscape Architecture */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10 order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Landscape Architecture" scrollYProgress={scrollYProgress} range={[0.25, 0.5]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Nature and design, in quiet harmony. Our landscape architecture creates serene outdoor environments where every element has intention—from native plant selections to subtle transitions between built and natural spaces.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden rounded-xl order-1 md:order-2">
          <RotatingImages images={[l1, l2, l3, l4, l5, l6]} />
        </div>
      </div>

      {/* Project Management */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10 order-2">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Project Management" scrollYProgress={scrollYProgress} range={[0.5, 0.75]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Precision meets design. With a streamlined project management system, Trizzone ensures every detail—from concept to completion—is handled with care, efficiency, and absolute clarity.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden rounded-xl order-1">
          <RotatingImages images={[p1, p2, p3, p4, p5, p6]} />
        </div>
      </div>

    </section>
  );
};

export default Service4;
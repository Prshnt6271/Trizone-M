import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import a1 from '../assets/services/a1.jpg';
import a2 from '../assets/services/a2.jpg';
import a3 from '../assets/services/a3.jpg';
import a4 from '../assets/services/a4.jpg';

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

const Service3 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  return (
    <section ref={sectionRef} className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 space-y-12 md:space-y-28 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10 order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Architecture" scrollYProgress={scrollYProgress} range={[0, 0.3]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Architecture is more than buildings; it's about form, light, and human connection. Our approach combines functionality and timeless aesthetics to create structures that resonate with their environment and purpose.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden rounded-xl order-1 md:order-2">
          <RotatingImages images={[a1, a2, a3, a4]} />
        </div>
      </div>
    </section>
  );
};

export default Service3;
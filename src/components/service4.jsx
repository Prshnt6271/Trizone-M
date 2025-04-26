import React, { useRef, useState, useEffect } from 'react';
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

// Preload images
const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

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

const OptimizedImage = ({ src, alt, className, loaded, onLoad }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      onLoad={onLoad}
      loading="lazy"
    />
  );
};

const RotatingImages = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    // Preload next image in sequence
    const preloadNext = () => {
      const nextIndex = (currentIndex + 1) % images.length;
      const img = new Image();
      img.src = images[nextIndex];
      img.onload = () => {
        setTimeout(() => {
          setCurrentIndex(nextIndex);
        }, 8000); // Match the animation duration
      };
    };

    const timer = setTimeout(preloadNext, 8000);
    return () => clearTimeout(timer);
  }, [currentIndex, images]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 rounded-xl will-change-transform">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="absolute h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentIndex ? [0, 1, 0] : 0 
          }}
          transition={{
            duration: 8,
            ease: 'easeInOut'
          }}
        >
          <OptimizedImage
            src={img}
            alt="Service"
            className="h-full w-full object-cover"
            loaded={loadedImages[index] || index === 0}
            onLoad={() => handleImageLoad(index)}
          />
        </motion.div>
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

  useEffect(() => {
    // Preload all images when component mounts
    preloadImages([i1, i2, i3, i4, i5, l1, l2, l3, l4, l5, l6, p1, p2, p3, p4, p5, p6]);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 space-y-12 md:space-y-28 overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Interior Design */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Interior Design" scrollYProgress={scrollYProgress} range={[0, 0.25]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Our interior design philosophy is rooted in simplicity, light, and purpose. Every detail matters. From the texture of a wall to the way natural light moves through a room, we create interiors that are calm, refined, and effortlessly elegant. We believe in less—but better.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden rounded-xl">
          <RotatingImages images={[i1, i2, i3, i4, i5]} />
        </div>
      </div>

      {/* Landscape Architecture */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Landscape Architecture" scrollYProgress={scrollYProgress} range={[0.25, 0.5]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Nature and design, in quiet harmony. Our landscape architecture creates serene outdoor environments where every element has intention—from native plant selections to subtle transitions between built and natural spaces.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden rounded-xl">
          <RotatingImages images={[l1, l2, l3, l4, l5, l6]} />
        </div>
      </div>

      {/* Project Management */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Project Management" scrollYProgress={scrollYProgress} range={[0.5, 0.75]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Precision meets design. With a streamlined project management system, Trizzone ensures every detail—from concept to completion—is handled with care, efficiency, and absolute clarity.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden rounded-xl">
          <RotatingImages images={[p1, p2, p3, p4, p5, p6]} />
        </div>
      </div>
    </section>
  );
};

export default Service4;
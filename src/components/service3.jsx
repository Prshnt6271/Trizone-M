import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import a1 from '../assets/services/a1.webp';
import a2 from '../assets/services/a2.webp';
import a3 from '../assets/services/a3.webp';
import poster from '../assets/services/poster.webp';

// Preload images with error handling
const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
    // Add error handling
    img.onerror = () => console.error(`Failed to load image: ${url}`);
    if (img.decode) {
      img.decode().catch(e => console.error(`Failed to decode image: ${url}`, e));
    }
  });
};

const AnimatedLetters = ({ text, scrollYProgress, range = [0, 0.3], startOffset = 0 }) => {
  const letters = text.split("");
  const [isVisible, setIsVisible] = useState(false);
  
  // Track when the letters enter the viewport
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const [start, end] = range;
      setIsVisible(latest >= start && latest <= end);
    });
    return () => unsubscribe();
  }, [scrollYProgress, range]);

  return (
    <>
      {letters.map((letter, i) => {
        const [startRange, endRange] = range;
        const letterStart = startRange + (i / letters.length) * (endRange - startRange);
        const letterEnd = letterStart + (0.5 / letters.length) * (endRange - startRange);
        
        // Only animate if the section is visible
        const opacity = useTransform(
          scrollYProgress, 
          [letterStart, letterEnd], 
          [isVisible ? 0.3 : 1, 1] // Start at full opacity if not visible yet
        );
        
        const color = useTransform(
          scrollYProgress, 
          [letterStart, letterEnd], 
          [isVisible ? "#999999" : "#ffffff", "#ffffff"]
        );

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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Preload all images before starting rotation
    const loadImages = async () => {
      await Promise.all(
        images.map(src => 
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve; // Continue even if some images fail
          })
        )
      );
      setLoaded(true);
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    if (!loaded) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length, loaded]);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt="Service"
          loading="eager"
          className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ease-in-out ${
            !loaded ? 'opacity-0' : ''
          }`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentIndex && loaded ? 1 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      ))}
      
      {/* Loading placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Loading images...</div>
        </div>
      )}
    </div>
  );
};

const Service3 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Preload images on component mount
  useEffect(() => {
    preloadImages([a1, a2, a3, poster]);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 space-y-12 md:space-y-28 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters 
              text="Architecture" 
              scrollYProgress={scrollYProgress} 
              range={[0.1, 0.4]} // Adjusted range to start animation later
              startOffset={0.1}
            />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Architecture is more than buildings; it's about form, light, and human connection. Our approach combines functionality and timeless aesthetics to create structures that resonate with their environment and purpose.
          </p>
        </div>

        {/* Poster + Rotating Images */}
        <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center bg-gray-900 rounded-2xl">
          <img 
            src={poster} 
            alt="Poster Background" 
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
            loading="eager"
          />
          <div className="relative w-[85%] h-[85%] overflow-hidden z-10 shadow-lg">
            <RotatingImages images={[a1, a2, a3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service3;
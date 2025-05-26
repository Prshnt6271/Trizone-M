import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Optimized image imports - Ensure these are smaller for mobile!
// If you have different sizes for desktop/mobile, use a solution like Netlify Image CDN, Cloudinary, or manual responsive images.
// For now, assume these WEBP images are already reasonably optimized for web.
import a1 from '../assets/services/a1.webp';
import a2 from '../assets/services/a2.webp';
import a3 from '../assets/services/a3.webp';
import poster from '../assets/services/poster.webp';

// Custom hook for image preloading
const useImagePreloader = (imageList) => {
  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(
        imageList.map(src =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            // Using decode() for better performance on some browsers
            img.onload = () => { img.decode().finally(resolve); };
            img.onerror = resolve; // Don't block if one fails
          })
        )
      );
    };
    preloadImages();
  }, [imageList]);
};

// Memoize AnimatedLetters for performance
const AnimatedLetters = React.memo(({ text, scrollYProgress, range = [0, 0.3] }) => {
  const letters = text.split("");
  return (
    <>
      {letters.map((letter, i) => {
        const [startRange, endRange] = range;
        // Adjust these values to control when the animation starts/ends relative to the scroll range
        const start = startRange + (i / letters.length) * (endRange - startRange);
        const end = start + (0.5 / letters.length) * (endRange - startRange);

        // useTransform is performant for direct style changes
        const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
        const color = useTransform(scrollYProgress, [start, end], ["#999999", "#ffffff"]);

        return (
          <motion.span
            key={i}
            // Apply styles directly to minimize DOM updates
            style={{ opacity, color }}
            className="inline-block will-change-transform"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </>
  );
});

// Memoize RotatingImages for performance
const RotatingImages = React.memo(({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Preload internal images for this component once
  useEffect(() => {
    const preload = async () => {
      await Promise.all(
        images.map(src =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => { img.decode().finally(resolve); };
            img.onerror = resolve;
          })
        )
      );
      setLoaded(true);
    };
    preload();
  }, [images]);

  useEffect(() => {
    if (!loaded) return; // Only start interval if images are loaded
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, loaded]);

  if (!loaded) {
    return (
      <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
        {/* Simple inline spinner for quick feedback */}
        <style jsx>{`
          .spinner-small {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid #fff;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <div className="spinner-small"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt="Service"
          // Eager loading for the currently visible image, lazy for others
          loading={index === currentIndex ? "eager" : "lazy"}
          className="absolute inset-0 w-full h-full object-cover rounded-xl will-change-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
});

const Service3 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'] // Tracks scroll progress when element enters/leaves viewport
  });

  // Preload all critical images for this component *early*
  // This hook ensures all these images are in cache before the component renders fully
  useImagePreloader([a1, a2, a3, poster]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 space-y-12 md:space-y-28 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Architecture" scrollYProgress={scrollYProgress} range={[0, 0.3]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Architecture is more than buildings; it's about form, light, and human connection. Our approach combines functionality and timeless aesthetics to create structures that resonate with their environment and purpose.
          </p>
        </div>

        {/* Poster + Rotating Images */}
        <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center bg-gray-900">
          <img
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
            loading="eager" // Keep eager for poster as it's the background
          />
          <div className="relative w-[85%] h-[85%] overflow-hidden z-10 shadow-lg">
            <RotatingImages images={[a1, a2, a3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Service3); // Export with capital S for convention
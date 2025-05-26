import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import desktop images
import a1_desktop from '../assets/services/a1.webp';
import a2_desktop from '../assets/services/a2.webp';
import a3_desktop from '../assets/services/a3.webp';
import poster_desktop from '../assets/services/poster.webp';

// Import mobile images (YOU MUST CREATE THESE SMALLER VERSIONS)
import a1_mobile from '../assets/services/mobile/a1-mobile.webp';
import a2_mobile from '../assets/services/mobile/a2-mobile.webp';
import a3_mobile from '../assets/services/mobile/a3-mobile.webp';
import poster_mobile from '../assets/services/mobile/poster-mobile.webp'; // 🎯 poster image for mobile

// Custom hook for responsive image loading
import useResponsiveImage from '../hooks/useResponsiveImage';

// Custom hook for image preloading (optimized with decode)
const useImagePreloader = (imageList) => {
  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(
        imageList.map(src =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => { img.decode().finally(resolve); };
            img.onerror = resolve;
          })
        )
      );
    };
    preloadImages();
  }, [imageList]);
};

// AnimatedLetters (no changes needed, it's already optimized)
const AnimatedLetters = React.memo(({ text, scrollYProgress, range = [0, 0.3] }) => {
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
});

// RotatingImages (updated to use responsive images and preloading)
const RotatingImages = React.memo(({ desktopImages, mobileImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Determine current image set based on screen width
  const currentImageSet = window.innerWidth < 768 ? mobileImages : desktopImages;

  // Preload internal images for this component once
  useEffect(() => {
    const preload = async () => {
      await Promise.all(
        currentImageSet.map(src =>
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
  }, [currentImageSet]); // Dependency on currentImageSet to re-preload if screen size changes

  useEffect(() => {
    if (!loaded) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % currentImageSet.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageSet.length, loaded]);

  if (!loaded) {
    return (
      <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
        <div className="spinner-small"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      {currentImageSet.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt="Service"
          // Eager load the first image, lazy load others
          loading={index === 0 ? "eager" : "lazy"}
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
    offset: ['start end', 'end start']
  });

  // Use the responsive image hook for the poster
  const posterSrc = useResponsiveImage(poster_desktop, poster_mobile);

  // Preload all desktop and mobile images for this component when it mounts
  // This ensures they are in cache before the component even needs to display them.
  useImagePreloader([
    poster_desktop, poster_mobile,
    a1_desktop, a2_desktop, a3_desktop,
    a1_mobile, a2_mobile, a3_mobile
  ]);

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

        <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center bg-gray-900">
          <img
            src={posterSrc} {/* Use the responsive poster source */}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
            loading="eager" // Keep eager for poster as it's a critical background
          />
          <div className="relative w-[85%] h-[85%] overflow-hidden z-10 shadow-lg">
            <RotatingImages
              desktopImages={[a1_desktop, a2_desktop, a3_desktop]}
              mobileImages={[a1_mobile, a2_mobile, a3_mobile]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Service3);
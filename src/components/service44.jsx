import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Static image imports
import poster from "../assets/services/poster.webp";
import i1 from "../assets/services/i1.webp";
import i2 from "../assets/services/i2.webp";
import i3 from "../assets/services/i3.webp";
import l1 from "../assets/services/l1.webp";
import l2 from "../assets/services/l2.webp";
import l3 from "../assets/services/l3.jpg";
import p1 from "../assets/services/p1.webp";
import p2 from "../assets/services/p2.webp";
import p3 from "../assets/services/p3.webp";

// Custom optimized scroll hook
const useOptimizedScroll = (ref) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let ticking = false;
    let animationFrameId = null;
    
    const handleScroll = () => {
      if (!ticking) {
        animationFrameId = requestAnimationFrame(() => {
          const { top, height } = element.getBoundingClientRect();
          const progress = Math.min(1, Math.max(0, (window.innerHeight - top) / height));
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [ref]);

  return scrollProgress;
};

const AnimatedLetters = React.memo(({ text, scrollProgress, range = [0, 0.3] }) => {
  const letters = text.split("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <span className="text-white">{text}</span>;
  }

  return (
    <>
      {letters.map((letter, i) => {
        // Calculate individual letter progress with staggered delay
        const letterDelay = i * 0.03; // Each letter starts slightly after the previous one
        const letterProgress = Math.min(1, Math.max(0, 
          (scrollProgress - range[0] - letterDelay) / (range[1] - range[0])
        ));
        
        // Smooth transition using easing function
        const easedProgress = letterProgress < 0.5 
          ? 2 * letterProgress * letterProgress 
          : 1 - Math.pow(-2 * letterProgress + 2, 2) / 2;
        
        // Start from gray (0.6 opacity) and transition to white (1 opacity)
        const opacity = 0.6 + (0.4 * easedProgress);
        const color = `rgba(255,255,255,${easedProgress})`;

        return (
          <span 
            key={i}
            style={{ 
              opacity,
              color,
              transition: 'color 0.3s ease-out, opacity 0.3s ease-out'
            }}
            className="inline-block will-change-transform"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        );
      })}
    </>
  );
});

const RotatingImages = React.memo(({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedIndices, setLoadedIndices] = useState(new Set([0]));

  const handleLoad = (index) => {
    setLoadedIndices(prev => new Set(prev).add(index));
  };

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
          className={`absolute inset-0 w-full h-full object-cover rounded-xl will-change-transform ${
            loadedIndices.has(index) ? 'opacity-100' : 'opacity-0'
          }`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentIndex && loadedIndices.has(index) ? 1 : 0,
            transition: { duration: 0.8 }
          }}
          onLoad={() => handleLoad(index)}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}
    </div>
  );
});

const service44 = () => {
  const sectionRef = useRef(null);
  const scrollProgress = useOptimizedScroll(sectionRef);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload first image of each set immediately
  useEffect(() => {
    [i1, l1, p1].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="service-section relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 space-y-20 md:space-y-32 overflow-hidden"
      style={{ contain: 'paint layout style' }}
    >
      {/* Interior Design Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Interior Design" scrollProgress={scrollProgress} range={[0, 0.25]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Our interior design philosophy is rooted in simplicity, light, and purpose. Every detail matters.
            From the texture of a wall to the way natural light moves through a room, we create interiors that
            are calm, refined, and effortlessly elegant.
          </p>
        </div>

        <div className="rotating-images-container relative w-full md:w-1/2 h-[320px] md:h-[420px] rounded-2xl overflow-hidden flex items-center justify-center bg-gray-900">
          <img
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
            loading="eager"
            decoding="sync"
          />
          <div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden z-10 shadow-lg">
            <RotatingImages images={[i1, i2, i3]} />
          </div>
        </div>
      </div>

      {/* Landscape Architecture Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Landscape Architecture" scrollProgress={scrollProgress} range={[0.25, 0.5]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Nature and design, in quiet harmony. Our landscape architecture creates serene outdoor environments
            where every element has intention—from native plant selections to subtle transitions between built
            and natural spaces.
          </p>
        </div>

        <div className="rotating-images-container relative w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center bg-gray-900">
          <img
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
            loading="eager"
            decoding="sync"
          />
          <div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden z-10 shadow-lg">
            <RotatingImages images={[l1, l2, l3]} />
          </div>
        </div>
      </div>

      {/* Project Management Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Project Management" scrollProgress={scrollProgress} range={[0.5, 0.75]} />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Precision meets design. With a streamlined project management system, Trizzone ensures every
            detail—from concept to completion—is handled with care, efficiency, and absolute clarity.
          </p>
        </div>

        <div className="rotating-images-container relative w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center bg-gray-900">
          <img
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
            loading="eager"
            decoding="sync"
          />
          <div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden z-10 shadow-lg">
            <RotatingImages images={[p1, p2, p3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(service44);
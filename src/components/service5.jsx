import React, { useRef, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import AnimatedLetters from './AnimatedLetters';
import RotatingImages from './RotatingImages';
import ImageLoader from './ImageLoader'; // New optimized image loader

import poster from "../assets/services/poster.webp";
import l1 from "../assets/services/l1.webp";
import l2 from "../assets/services/l2.webp";
import l3 from "../assets/services/l3.jpg";

const Service5 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Preload critical images
  useEffect(() => {
    const preloadImages = [poster, l1, l2, l3];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 overflow-hidden"
      style={{ contentVisibility: 'auto' }} // Improves scroll performance
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters 
              text="Landscape Architecture" 
              scrollYProgress={scrollYProgress} 
              range={[0.25, 0.5]} 
            />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Nature and design, in quiet harmony. Our landscape architecture creates serene outdoor environments
            where every element has intention—from native plant selections to subtle transitions between built
            and natural spaces.
          </p>
        </div>

        <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center bg-gray-900">
          <ImageLoader
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
            priority
            loading="eager"
          />
          <div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden z-10 shadow-lg">
            <RotatingImages 
              images={[l1, l2, l3]} 
              interval={3000} // Configurable rotation interval
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Service5);
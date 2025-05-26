import React, { useRef, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import AnimatedLetters from './AnimatedLetters';
import RotatingImages from './RotatingImages';
import ImageLoader from './ImageLoader';

import a1 from '../assets/services/a1.webp';
import a2 from '../assets/services/a2.webp';
import a3 from '../assets/services/a3.webp';
import poster from '../assets/services/poster.webp';

const Service3 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Preload critical images
  useEffect(() => {
    [poster, a1, a2, a3].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 space-y-12 md:space-y-28 overflow-hidden"
      style={{ contentVisibility: 'auto' }}
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
          <ImageLoader
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full rounded-2xl opacity-80"
            priority
          />
          <div className="relative w-[85%] h-[85%] overflow-hidden z-10 shadow-lg">
            <RotatingImages images={[a1, a2, a3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Service3);
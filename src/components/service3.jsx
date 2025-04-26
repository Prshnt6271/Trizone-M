import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import a1 from '../assets/services/a1.jpg';
import a2 from '../assets/services/a2.jpg';
import a3 from '../assets/services/a3.jpg';
import a4 from '../assets/services/a4.jpg';

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

const Service3 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  useEffect(() => {
    // Preload all images when component mounts
    preloadImages([a1, a2, a3, a4]);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 space-y-12 md:space-y-28 overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
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
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden rounded-xl">
          <RotatingImages images={[a1, a2, a3, a4]} />
        </div>
      </div>
    </section>
  );
};

export default Service3;
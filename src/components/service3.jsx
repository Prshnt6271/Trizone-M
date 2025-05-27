import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Static image imports
import a1 from '../assets/services/a1.webp';
import a2 from '../assets/services/a2.webp';
import a3 from '../assets/services/a3.webp';
import poster from '../assets/services/poster.webp';

// Custom hook for image preloading
const useImagePreloader = (imageList) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const preload = async () => {
      try {
        await Promise.all(
          imageList.map(src => 
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve;
            })
          )
        );
        if (isMounted) setImagesLoaded(true);
      } catch (e) {
        if (isMounted) setImagesLoaded(true);
      }
    };
    
    preload();
    
    return () => {
      isMounted = false;
    };
  }, [imageList]);

  return imagesLoaded;
};

const AnimatedLetters = React.memo(({ text }) => {
  const letters = text.split("");
  
  return (
    <>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.3, color: "#999999" }}
          animate={{ opacity: 1, color: "#ffffff" }}
          transition={{ duration: 0.5, delay: i * 0.03 }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </>
  );
});

const RotatingImages = React.memo(({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const preload = async () => {
      try {
        await Promise.all(
          images.map(src => 
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve;
            })
          )
        );
        if (isMounted) setLoaded(true);
      } catch (e) {
        if (isMounted) setLoaded(true);
      }
    };
    
    preload();
    
    return () => {
      isMounted = false;
    };
  }, [images]);

  useEffect(() => {
    if (!loaded) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length, loaded]);

  if (!loaded) {
    return (
      <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
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
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
});

const Service3 = () => {
  const imagesLoaded = useImagePreloader([a1, a2, a3, poster]);

  if (!imagesLoaded) {
    return (
      <div className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 min-h-[80vh] flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <section className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 space-y-12 md:space-y-28">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Architecture" />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Architecture is more than buildings; it's about form, light, and human connection. Our approach combines functionality and timeless aesthetics to create structures that resonate with their environment and purpose.
          </p>
        </div>

        <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center bg-gray-900">
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

export default React.memo(Service3);
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useWillChange } from 'framer-motion';

const Service3 = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const willChange = useWillChange();

  // Updated image paths
  const images = [
    '/assets/services/a1.webp',
    '/assets/services/a2.webp',
    '/assets/services/a3.webp'
  ];
  const poster = '/assets/services/poster.webp';

  // Simplified animation for Android compatibility
  const AnimatedLetters = React.memo(({ text }) => {
    return (
      <span className="inline-block">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0.3, color: '#999999' }}
            whileInView={{ opacity: 1, color: '#ffffff' }}
            viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
            transition={{ 
              duration: 0.5,
              delay: i * 0.03,
              ease: 'easeOut'
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
    );
  });

  const RotatingImages = React.memo(() => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(containerRef.current);
          }
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isVisible || !loaded) return;
      
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 3000);
      
      return () => clearInterval(interval);
    }, [images.length, loaded, isVisible]);

    useEffect(() => {
      if (!isVisible) return;
      
      // Simple image loading for Android
      let loadedCount = 0;
      const onLoad = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoaded(true);
        }
      };

      images.forEach(src => {
        const img = new Image();
        img.src = process.env.PUBLIC_URL + src;
        img.onload = onLoad;
      });
    }, [isVisible]);

    if (!loaded) {
      return (
        <div 
          className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center"
          style={{ willChange: 'opacity' }}
        >
          <div className="spinner-small"></div>
        </div>
      );
    }

    return (
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={process.env.PUBLIC_URL + img}
            alt="Service"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ willChange }}
          />
        ))}
      </div>
    );
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 space-y-12 md:space-y-28 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Architecture" />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Architecture is more than buildings; it's about form, light, and human connection. Our approach combines functionality and timeless aesthetics to create structures that resonate with their environment and purpose.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center bg-gray-900"
        >
          <img 
            src={process.env.PUBLIC_URL + poster} 
            alt="Poster Background" 
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          <div className="relative w-[85%] h-[85%] overflow-hidden z-10 shadow-lg">
            <RotatingImages />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Service3);
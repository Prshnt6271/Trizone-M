import React, { useRef, useState, useEffect } from 'react';
import { motion, useWillChange } from 'framer-motion';

const Service44 = () => {
  const willChange = useWillChange();
  const containerRefs = useRef([]);

  // Image paths
  const interiorImages = [
    '/services/i1.webp',
    '/services/i2.webp',
    '/services/i3.webp'
  ];
  
  const landscapeImages = [
    '/services/l1.webp',
    '/services/l2.webp',
    '/services/l3.webp'
  ];
  
  const projectImages = [
    '/services/p1.webp',
    '/services/p2.webp',
    '/services/p3.webp'
  ];
  
  const poster = '/services/poster.webp';

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

  const RotatingImages = React.memo(({ images, index }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(containerRefs.current[index]);
          }
        },
        { threshold: 0.1 }
      );

      if (containerRefs.current[index]) {
        observer.observe(containerRefs.current[index]);
      }

      return () => observer.disconnect();
    }, [index]);

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
        img.src = src;
        img.onload = onLoad;
      });
    }, [isVisible, images]);

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
        {images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt="Service"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ willChange }}
          />
        ))}
      </div>
    );
  });

  return (
    <section className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 space-y-20 md:space-y-32 overflow-hidden">
      {/* Interior Design Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Interior Design" />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Our interior design philosophy is rooted in simplicity, light, and purpose. Every detail matters.
            From the texture of a wall to the way natural light moves through a room, we create interiors that
            are calm, refined, and effortlessly elegant.
          </p>
        </div>

        <div 
          ref={el => containerRefs.current[0] = el}
          className="relative w-full md:w-1/2 h-[320px] md:h-[420px] rounded-2xl overflow-hidden flex items-center justify-center bg-gray-900"
        >
          <img
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          <div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden z-10 shadow-lg">
            <RotatingImages images={interiorImages} index={0} />
          </div>
        </div>
      </div>

      {/* Landscape Architecture Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Landscape Architecture" />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Nature and design, in quiet harmony. Our landscape architecture creates serene outdoor environments
            where every element has intention—from native plant selections to subtle transitions between built
            and natural spaces.
          </p>
        </div>

        <div 
          ref={el => containerRefs.current[1] = el}
          className="relative w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center bg-gray-900"
        >
          <img
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          <div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden z-10 shadow-lg">
            <RotatingImages images={landscapeImages} index={1} />
          </div>
        </div>
      </div>

      {/* Project Management Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <AnimatedLetters text="Project Management" />
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Precision meets design. With a streamlined project management system, Trizzone ensures every
            detail—from concept to completion—is handled with care, efficiency, and absolute clarity.
          </p>
        </div>

        <div 
          ref={el => containerRefs.current[2] = el}
          className="relative w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center bg-gray-900"
        >
          <img
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          <div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden z-10 shadow-lg">
            <RotatingImages images={projectImages} index={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Service44);
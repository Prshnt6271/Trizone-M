import React, { useRef, useState, useEffect } from 'react';
import { motion, useWillChange } from 'framer-motion';

// Static image imports
import poster from "../assets/services/poster.webp"; // 🎯 Poster background image

import i1 from "../assets/services/i1.webp";
import i2 from "../assets/services/i2.webp";
import i3 from "../assets/services/i3.webp";
// import i4 from "../assets/services/i4.jpg";
// import i5 from "../assets/services/i5.jpg";

import l1 from "../assets/services/l1.webp";
import l2 from "../assets/services/l2.webp";
import l3 from "../assets/services/l3.jpg";
// import l4 from "../assets/services/l4.jpg";
// import l5 from "../assets/services/l5.jpg";
// import l6 from "../assets/services/l6.jpg";

import p1 from "../assets/services/p1.webp";
import p2 from "../assets/services/p2.webp";
import p3 from "../assets/services/p3.webp";
// import p4 from "../assets/services/p4.jpg";
// import p5 from "../assets/services/p5.jpg";
// import p6 from "../assets/services/p6.jpg";

const Service44 = () => {
  const willChange = useWillChange();
  const containerRefs = useRef([]);

  const interiorImages = [i1, i2, i3];
  const landscapeImages = [l1, l2, l3];
  const projectImages = [p1, p2, p3];

  const AnimatedLetters = React.memo(({ text }) => (
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
  ));

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
        <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center" style={{ willChange: 'opacity' }}>
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

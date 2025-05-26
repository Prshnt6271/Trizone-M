import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

import poster from "../assets/services/poster.webp";

import i1 from "../assets/services/i1.webp";
import i2 from "../assets/services/i2.webp";
import i3 from "../assets/services/i3.webp";

import p1 from "../assets/services/p1.webp";
import p2 from "../assets/services/p2.webp";
import p3 from "../assets/services/p3.webp";

// Optional preloading function
const useImagePreloader = (images) => {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);
};

const useMobileOptimizations = (isMobile) => {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!isMobile) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isMobile]);

  return { shouldReduceMotion, isVisible, ref };
};

const MobileAnimatedLetters = React.memo(({ text, isMobile }) => {
  const [visible, setVisible] = useState(!isMobile);

  useEffect(() => {
    if (!isMobile) return;
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, [isMobile]);

  return (
    <span className={`inline-block transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {text}
    </span>
  );
});

const DesktopAnimatedLetters = React.memo(({ text, scrollYProgress, range }) => {
  const letters = text.split("");
  return (
    <>
      {letters.map((letter, i) => {
        const [startRange, endRange] = range;
        const start = startRange + (i / letters.length) * (endRange - startRange);
        const end = start + (0.5 / letters.length) * (endRange - startRange);
        const opacity = useTransform(scrollYProgress, [start, end], [0.5, 1]);
        const color = useTransform(scrollYProgress, [start, end], ["#aaaaaa", "#ffffff"]);

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

const RotatingImages = React.memo(({ images, isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const preload = async () => {
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
      setLoaded(true);
    };
    preload();
  }, [images]);

  useEffect(() => {
    if (!loaded || shouldReduceMotion || isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, loaded, shouldReduceMotion, isMobile]);

  if (!loaded) {
    return (
      <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isMobile || shouldReduceMotion) {
    return (
      <img
        src={images[0]}
        alt="Service"
        loading="lazy"
        className="w-full h-full object-cover rounded-xl"
      />
    );
  }

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt="Service"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover rounded-xl will-change-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
});

const Service4 = ({ isMobile }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const { shouldReduceMotion, isVisible, ref } = useMobileOptimizations(isMobile);

  useImagePreloader([poster, i1, i2, i3, p1, p2, p3]);

  if (!isVisible && isMobile) {
    return <div ref={ref} className="h-[1px]"></div>;
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1b1b1b] text-white py-16 px-6 md:px-20 space-y-20 md:space-y-32 overflow-hidden"
    >
      {/* Interior Design Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            {isMobile || shouldReduceMotion ? (
              <MobileAnimatedLetters text="Interior Design" isMobile={isMobile} />
            ) : (
              <DesktopAnimatedLetters text="Interior Design" scrollYProgress={scrollYProgress} range={[0, 0.25]} />
            )}
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
            Our interior design philosophy is rooted in simplicity, light, and purpose...
          </p>
        </div>

        <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] rounded-2xl overflow-hidden flex items-center justify-center bg-gray-900">
          <img
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
            loading={isMobile ? "eager" : "lazy"}
          />
          <div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden z-10 shadow-lg">
            <RotatingImages images={[i1, i2, i3]} isMobile={isMobile} />
          </div>
        </div>
      </div>

      {/* Project Management Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            {isMobile || shouldReduceMotion ? (
              <MobileAnimatedLetters text="Project Management" isMobile={isMobile} />
            ) : (
              <DesktopAnimatedLetters text="Project Management" scrollYProgress={scrollYProgress} range={[0.5, 0.75]} />
            )}
          </h2>
          <p className="text-white font-medium text-base md:text-lg">
           Precision meets design. With a streamlined project management system, Trizzone ensures every
            detail—from concept to completion—is handled with care, efficiency, and absolute clarity.
          </p>
        </div>

        <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] rounded-2xl overflow-hidden flex items-center justify-center bg-gray-900">
          <img
            src={poster}
            alt="Poster Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
            loading={isMobile ? "eager" : "lazy"}
          />
          <div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden z-10 shadow-lg">
            <RotatingImages images={[p1, p2, p3]} isMobile={isMobile} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Service4);

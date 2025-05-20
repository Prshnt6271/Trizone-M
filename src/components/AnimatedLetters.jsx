import React, { useEffect, useState } from 'react';
import { motion, useTransform } from 'framer-motion';

export const AnimatedLetters = ({ text, scrollYProgress, range = [0, 0.3], delay = 0 }) => {
  const letters = text.split("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setIsVisible(v >= range[0] && v <= range[1]);
    });
    return () => unsubscribe();
  }, [scrollYProgress, range]);

  return (
    <>
      {letters.map((letter, i) => {
        const [startRange, endRange] = range;
        const start = startRange + (i / letters.length) * (endRange - startRange);
        const end = start + (0.5 / letters.length) * (endRange - startRange);
        
        const opacity = useTransform(scrollYProgress, [start, end], [isVisible ? 0.3 : 1, 1]);
        const color = useTransform(scrollYProgress, [start, end], [isVisible ? "#999999" : "#ffffff", "#ffffff"]);

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
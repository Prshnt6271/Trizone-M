import React from 'react';
import { motion, useTransform } from 'framer-motion';

const AnimatedLetters = React.memo(({ text, scrollYProgress, range = [0, 0.3] }) => {
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

export default AnimatedLetters;
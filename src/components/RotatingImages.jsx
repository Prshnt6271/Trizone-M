import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImageLoader from './ImageLoader';

const RotatingImages = React.memo(({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
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

    preloadImages();
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
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <ImageLoader
            src={img}
            alt="Service"
            className="w-full h-full object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}
    </div>
  );
});

export default RotatingImages;
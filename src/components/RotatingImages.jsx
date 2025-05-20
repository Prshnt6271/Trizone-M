import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const RotatingImages = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Preload images
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
    if (!loaded) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [loaded, images.length]);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      {loaded ? (
        images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Service"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ))
      ) : (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Loading...</div>
        </div>
      )}
    </div>
  );
};
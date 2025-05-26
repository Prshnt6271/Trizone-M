import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImageLoader = ({ src, alt, className, priority = false }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(true); // Fallback if image fails

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="spinner-small"></div>
        </div>
      )}
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : 'low'}
      />
    </div>
  );
};

export default React.memo(ImageLoader);
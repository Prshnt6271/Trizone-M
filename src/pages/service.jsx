import React, { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Preload the poster image since it's used across multiple components
import poster from "../assets/services/poster.webp";

// Create a preload hook for critical images
const useImagePreloader = (imageList) => {
  useEffect(() => {
    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [imageList]);
};

// Lazy load components with prefetch
const Service1 = lazy(() => import('../components/service1'));
const Service3 = lazy(() => import('../components/service3'));
const Service4 = lazy(() => import('../components/service4'));
const Service5 = lazy(() => import('../components/service5'));
const Service7 = lazy(() => import('../components/service7'));
const Service6 = lazy(() => import('../components/service6'));

// Improved loading placeholder with animation
const LoadingPlaceholder = () => (
  <motion.div 
    className="min-h-[80vh] flex items-center justify-center bg-[#1b1b1b]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="spinner"></div>
  </motion.div>
);

const ServicesPage = () => {
  // Preload critical shared images
  useImagePreloader([poster]);

  return (
    <div className="bg-[#1b1b1b]">
      {/* Only suspend components when they're actually being loaded */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <Service1 />
        <Service3 />
      </Suspense>
      
      <Suspense fallback={<LoadingPlaceholder />}>
        <Service4 />
        <Service5 />
      </Suspense>
      
      <Suspense fallback={<LoadingPlaceholder />}>
        <Service7 />
        <Service6 />
      </Suspense>
    </div>
  );
};

export default React.memo(ServicesPage);
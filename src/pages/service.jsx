import React, { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Correct lazy + memo usage
const Service1 = React.memo(lazy(() => import('../components/service1')));
const Service3 = React.memo(lazy(() => import('../components/service3')));
const Service4 = React.memo(lazy(() => import('../components/service4')));
const Service6 = React.memo(lazy(() => import('../components/service6')));

const LoadingPlaceholder = () => (
  <div className="min-h-[80vh] flex items-center justify-center bg-[#1b1b1b]">
    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ServicesContainer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="bg-[#1b1b1b]">
      <Suspense fallback={<LoadingPlaceholder />}>
        <AnimatePresence mode="wait">
          <Service1 isMobile={isMobile} />
          <Service3 isMobile={isMobile} />
          <Service4 isMobile={isMobile} />
          <Service6 isMobile={isMobile} />
        </AnimatePresence>
      </Suspense>
    </div>
  );
};

export default React.memo(ServicesContainer);
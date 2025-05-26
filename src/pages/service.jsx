import React, { useEffect, lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';

// Static import for critical above-the-fold resources
import poster from "../assets/services/poster.webp";

// Image preloading hook with cleanup
const useImagePreloader = (imageList) => {
  useEffect(() => {
    const preloadedImages = imageList.map(src => {
      const img = new Image();
      img.src = src;
      return img;
    });

    return () => {
      preloadedImages.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageList]);
};

// Lazy-loaded service components
const Service1 = lazy(() => import('../components/service1'));
const Service3 = lazy(() => import('../components/service3'));
const Service4 = lazy(() => import('../components/service4'));
const Service5 = lazy(() => import('../components/service5'));
const Service6 = lazy(() => import('../components/service6'));
const Service7 = lazy(() => import('../components/service7'));

// Prefetch components during idle time (non-blocking)
if (typeof window !== 'undefined' && window.requestIdleCallback) {
  window.requestIdleCallback(() => {
    import('../components/service1');
    import('../components/service3');
  });
}

// Fallback loading component
const LoadingPlaceholder = () => (
  <motion.div
    className="min-h-[80vh] flex items-center justify-center bg-[#1b1b1b]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="spinner" aria-label="Loading content" />
  </motion.div>
);

const ServicesPage = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [visibleSections, setVisibleSections] = useState([0]); // Start with first section

  // Preload critical images
  useImagePreloader([poster]);

  // Avoid SSR mismatch
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Progressive loading using IntersectionObserver
  useEffect(() => {
    if (!isHydrated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-section-index') || '0');
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [isHydrated]);

  return (
    <div className="bg-[#1b1b1b]">
      {/* Section 1 */}
      <div data-section data-section-index={0}>
        {isHydrated && visibleSections.includes(0) && (
          <Suspense fallback={<LoadingPlaceholder />}>
            <Service1 />
          </Suspense>
        )}
      </div>

      {/* Section 2 */}
      <div data-section data-section-index={1}>
        {isHydrated && visibleSections.includes(1) && (
          <Suspense fallback={<LoadingPlaceholder />}>
            <Service3 />
          </Suspense>
        )}
      </div>

      {/* Section 3 */}
      <div data-section data-section-index={2}>
        {isHydrated && visibleSections.includes(2) && (
          <Suspense fallback={<LoadingPlaceholder />}>
            <Service4 />
          </Suspense>
        )}
      </div>

      {/* Section 4 */}
      <div data-section data-section-index={3}>
        {isHydrated && visibleSections.includes(3) && (
          <Suspense fallback={<LoadingPlaceholder />}>
            <Service5 />
          </Suspense>
        )}
      </div>

      {/* Section 5 */}
      <div data-section data-section-index={4}>
        {isHydrated && visibleSections.includes(4) && (
          <Suspense fallback={<LoadingPlaceholder />}>
            <Service7 />
          </Suspense>
        )}
      </div>

      {/* Section 6 */}
      <div data-section data-section-index={5}>
        {isHydrated && visibleSections.includes(5) && (
          <Suspense fallback={<LoadingPlaceholder />}>
            <Service6 />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default React.memo(ServicesPage);

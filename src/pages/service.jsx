import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Direct imports for better loading control
import Service1 from '../components/service1';
import Service3 from '../components/service3';
import Service44 from '../components/service44';
import Service6 from '../components/service6';

const ServicePage = () => {
  const [loadedComponents, setLoadedComponents] = useState({
    s1: false,
    s3: false,
    s4: false,
    s6: false
  });

  // Preload poster image that's used across components
  useEffect(() => {
    const img = new Image();
    img.src =  "../assets/services/poster.webp";

  }, []);

  const allLoaded = Object.values(loadedComponents).every(Boolean);

  return (
    <div className="bg-[#1b1b1b]">
      {/* Full page loading overlay */}
      {!allLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1b1b1b] z-50">
          <div className="spinner"></div>
        </div>
      )}

      {/* Main content with fade-in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: allLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: allLoaded ? 'auto' : 'none' }}
      >
        <Service1 onLoad={() => setLoadedComponents(prev => ({ ...prev, s1: true }))} />
        <Service3 onLoad={() => setLoadedComponents(prev => ({ ...prev, s3: true }))} />
        <Service44 onLoad={() => setLoadedComponents(prev => ({ ...prev, s4: true }))} />
        <Service6 onLoad={() => setLoadedComponents(prev => ({ ...prev, s6: true }))} />
      </motion.div>
    </div>
  );
};

export default React.memo(ServicePage);
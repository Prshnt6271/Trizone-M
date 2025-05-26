import React, { useRef, useState, useEffect, lazy, Suspense } from 'react';
// No need for motion, useScroll, useTransform here as they are used in child components

// Optimized image imports - these are handled by the components themselves now
// const poster = "/optimized/poster.webp"; // This line is not needed here anymore

// Lazy imports for components
const Service1 = lazy(() => import('../components/service1'));
const Service3 = lazy(() => import('../components/service3'));
const Service4 = lazy(() => import('../components/service4'));
const Service6 = lazy(() => import('../components/service6')); // Assuming this component also exists

const LoadingPlaceholder = () => (
  <div className="min-h-[80vh] flex items-center justify-center bg-[#1b1b1b]">
    {/* Simple inline spinner for quick feedback */}
    <style jsx>{`
      .spinner {
        border: 6px solid rgba(255, 255, 255, 0.3);
        border-top: 6px solid #fff;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
    <div className="spinner"></div>
  </div>
);

const ServicePage = () => { // Renamed to ServicePage for clarity
  return (
    <div className="bg-[#1b1b1b]">
      <Suspense fallback={<LoadingPlaceholder />}>
        <Service1 />
        <Service3 />
        <Service4 />
        <Service6 />
      </Suspense>
    </div>
  );
};

export default ServicePage;
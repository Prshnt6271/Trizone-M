import React, { lazy, Suspense } from 'react';

const Service1 = lazy(() => import('../components/service1'));
const Service3 = lazy(() => import('../components/service3'));
const Service44 = lazy(() => import('../components/service44'));
const Service6 = lazy(() => import('../components/service6'));

const LoadingPlaceholder = () => (
  <div className="min-h-[80vh] flex items-center justify-center bg-[#1b1b1b]">
    <div className="spinner"></div>
  </div>
);

const Services = () => {
  return (
    <div className="bg-[#1b1b1b]">
      <Suspense fallback={<LoadingPlaceholder />}>
        <Service1 />
        <Service3 />
        <Service44 />
        <Service6 />
      </Suspense>
    </div>
  );
};

export default Services;
import React, { lazy, Suspense } from 'react';

// Lazy imports for components only (not images)
const Service1 = lazy(() => import('../components/service1'));
const Service3 = lazy(() => import('../components/service3'));
const Service4 = lazy(() => import('../components/service4'));
const Service6 = lazy(() => import('../components/service6'));

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#1b1b1b]">
    <div className="text-white text-center py-20">Loading services...</div>
  </div>
);

const Service = () => {
  return (
    <div className="bg-[#1b1b1b]">
      <Suspense fallback={<Loading />}>
        <Service1 />
        {/* <Service3 /> */}
        <Service4 />
        <Service6 />
      </Suspense>
    </div>
  );
};

export default Service;
import React, { lazy, Suspense } from 'react';

const Service1 = lazy(() => import('../components/service1'));
const Service3 = lazy(() => import('../components/service3'));
const Service4 = lazy(() => import('../components/service4'));
const Service6 = lazy(() => import('../components/service6'));

const LoadingPlaceholder = () => (
  <div className="min-h-[80vh] flex items-center justify-center bg-[#1b1b1b]">
    <style jsx>{`
      .spinner, .spinner-small {
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top: 4px solid #fff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      .spinner {
        width: 50px;
        height: 50px;
      }
      .spinner-small {
        width: 30px;
        height: 30px;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
    <div className="spinner"></div>
  </div>
);

const ServicePage = () => {
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
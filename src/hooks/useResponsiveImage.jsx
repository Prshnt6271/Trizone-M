import { useState, useEffect } from 'react';

const useResponsiveImage = (desktopSrc, mobileSrc, breakpoint = 768) => {
  const [imageSrc, setImageSrc] = useState(desktopSrc); // Default to desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < breakpoint) {
        setImageSrc(mobileSrc);
      } else {
        setImageSrc(desktopSrc);
      }
    };

    // Set initial image
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [desktopSrc, mobileSrc, breakpoint]);

  return imageSrc;
};

export default useResponsiveImage;
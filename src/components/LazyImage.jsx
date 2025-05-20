// components/LazyImage.js
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ src, alt, className, wrapperClassName, ...props }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      className={className}
      wrapperClassName={wrapperClassName}
      threshold={300}
      loading="lazy"
      {...props}
    />
  );
};

export default LazyImage;
import React, { useEffect, useState } from "react";

const RotatingImages = ({ images, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 bg-[#1b1b1b] overflow-hidden z-0 rounded-xl">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Rotating"
          className={`absolute h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "opacity 1s ease-in-out" }}
        />
      ))}
    </div>
  );
};

export default RotatingImages;

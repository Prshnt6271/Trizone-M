import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const text = "Trizzone";
  const images = ["/h1.jpg", "/h2.jpg", "/h3.jpg"];
  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reverseText, setReverseText] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const [showBigText, setShowBigText] = useState(false); // Controls right-side "TRIZZONE"

  useEffect(() => {
    if (showAnimation) {
      // Start image transition every 3 seconds
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      // Start disappearing text effect after 2 seconds
      const timeout1 = setTimeout(() => {
        setReverseText(true);
      }, 2000);

      // Show big "TRIZZONE" after the reverse animation completes (2.2s delay)
      const timeout2 = setTimeout(() => {
        setShowBigText(true);
      }, 4000); // Adjust delay to sync with animation

      return () => {
        clearInterval(interval);
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [showAnimation]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen text-white font-bold">
      {/* Cover Animation (Plays on Every Render) */}
      {showAnimation && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full bg-black z-50"
        />
      )}

      {/* Background Image */}
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
      />

      {/* "Trizzone" Text with Reverse Disappear Effect */}
      {showAnimation && (
        <motion.div className="absolute text-[90px] md:text-[320px] top-[26%] left-[3%] md:top-[-4%] md:left-[8%] uppercase  font-heading">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{
                opacity: reverseText ? (index === 0 ? 0 : 0) : 1,
              }}
              transition={{
                delay: reverseText
                  ? index === 0
                    ? 2.2
                    : 0.2 * (text.length - index)
                  : 0,
                duration: 0.2,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* Left Side Buttons */}
      <div className="absolute right-8 md:left-12 bottom-28 md:bottom-20 flex flex-row md:space-x-4">
        {["ARCHITECTURE", "INTERIORS", "LANDSCAPE"].map((text, index) => (
          <button
            key={index}
            onClick={() => navigate("/properties")}
            className="px-3 md:px-6 py-1 md:py-2 text-white text-sm md:text-lg font-semibold font-body rounded-md hover:text-gray-400 transition duration-300"
          >
            {text}
          </button>
        ))}
      </div>

      {/* Right Side Big "TRIZZONE" (Appears After Animation Completes) */}
      {showBigText && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute right-12 bottom-1/4 md:bottom-20 text-white text-5xl md:text-7xl font-bold font-heading uppercase"
        >
          TRIZZONE
        </motion.div>
      )}
    </div>
  );
}

export default Hero;

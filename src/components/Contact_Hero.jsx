import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const Contact_Hero = ({ onAnimationComplete }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setHidden(latest > 100); // Hide when scrolled past 100px
    });
  }, [scrollY]);

  return (
    <motion.section
      className="relative h-[350px] md:h-[95vh] flex items-center justify-center overflow-hidden"
      initial={{ clipPath: "inset(50% 0 50% 0)" }}
      animate={{ clipPath: "inset(0% 0 0% 0)" }}
      transition={{ duration: 1, ease: "easeOut" }}
      onAnimationComplete={onAnimationComplete}
    >
      {/* Lazy Loaded Hero Image */}
      <img
        src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="absolute bottom-5 left-1 md:bottom-10 md:left-10 text-white px-6 text-left"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: hidden ? 0 : 1, y: hidden ? 20 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* <p className="text-sm uppercase tracking-wide font-semibold mb-2 opacity-80">
          Contact
        </p> */}
        <h1 className="text-3xl md:text-6xl font-bold">CONTACT</h1>
        <p className="text-lg mt-4 max-w-[400px]">
          Contact us and let us know about your project, or find out more about
          our award-winning services.
        </p>
        <button className="mt-6 px-6 py-3 border border-white text-white text-sm uppercase tracking-wider font-semibold transition-all hover:bg-white hover:text-black">
          Get In Touch
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Contact_Hero;

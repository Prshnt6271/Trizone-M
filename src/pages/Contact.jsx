import { useState, useEffect, useRef } from "react";
import Contact_Hero from "../components/Contact_Hero";
import Content from "../components/Content";
import Map from "../components/Map";
import { useLocation } from "react-router-dom";

function Contact() {
  const [showContent, setShowContent] = useState(false);
  const mapRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Check if URL has #map hash and content is shown
    if (location.hash === '#map' && showContent && mapRef.current) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        mapRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash, showContent]);

  return (
    <>
      <Contact_Hero onAnimationComplete={() => setShowContent(true)} />
      {showContent && (
        <>
          <Content />
          <div ref={mapRef}>
            <Map />
          </div>
        </>
      )}
    </>
  );
}

export default Contact;
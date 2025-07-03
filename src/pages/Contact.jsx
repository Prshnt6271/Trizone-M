import { useEffect, useState } from "react";
import Contact_Hero from "../components/Contact_Hero";
import Content from "../components/Content";
import Map from "../components/Map";

function Contact() {
  const [showContent, setShowContent] = useState(false);
  const [mapReady, setMapReady] = useState(false);

  // Scroll to map when both content and map are ready
  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToMap");

    if (showContent && mapReady && shouldScroll === "true") {
      // Timeout to ensure DOM is fully painted (especially for mobile)
      setTimeout(() => {
        const el = document.getElementById("map");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500); // adjust delay if needed

      sessionStorage.removeItem("scrollToMap");
    }
  }, [showContent, mapReady]);

  return (
    <>
      <Contact_Hero onAnimationComplete={() => setShowContent(true)} />
      {showContent && (
        <>
          <Content />
          <Map onMapLoad={() => setMapReady(true)} />
        </>
      )}
    </>
  );
}

export default Contact;

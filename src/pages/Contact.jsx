import { useEffect, useState } from "react";
import Contact_Hero from "../components/Contact_Hero";
import Content from "../components/Content";
import Map from "../components/Map";

function Contact() {
  const [showContent, setShowContent] = useState(false);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToMap");

    if (shouldScroll === "true" && mapReady) {
      const el = document.getElementById("map");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      sessionStorage.removeItem("scrollToMap");
    }
  }, [mapReady]);

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

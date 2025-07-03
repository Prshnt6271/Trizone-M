import { useEffect, useState } from "react";
import Contact_Hero from "../components/Contact_Hero";
import Content from "../components/Content";
import Map from "../components/Map";

function Contact() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (showContent) {
      const shouldScroll = sessionStorage.getItem("scrollToMap");

      if (shouldScroll === "true") {
        // Small delay to ensure Map component has rendered
        setTimeout(() => {
          const el = document.getElementById("map");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 300); // adjust delay if needed
        sessionStorage.removeItem("scrollToMap");
      }
    }
  }, [showContent]); // run when showContent becomes true

  return (
    <>
      <Contact_Hero onAnimationComplete={() => setShowContent(true)} />
      {showContent && (
        <>
          <Content />
          <Map />
        </>
      )}
    </>
  );
}

export default Contact;

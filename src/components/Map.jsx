import React from 'react';

const Map = () => {
  return (
    <section id="map" className="h-[400px]">
      <iframe
        title="Google Map"
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29507.3353901998!2d77.06274640526593!3d28.46018652228701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d185e46464da3%3A0x299ed746a62a0a26!2sTRIZZONE!5e0!3m2!1sen!2sin!4v1742608029238!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"

      ></iframe>
    </section>
  );
};

export default Map;

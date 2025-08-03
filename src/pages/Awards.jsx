import React, { useEffect } from "react";

const awards = [
  {
    year: "2024",
    title: "Best Architecture Firm",
    organization: "National Design Council",
    description: "Recognized as the top architecture firm for innovative commercial and sustainable designs that push the boundaries of modern architecture.",
    image: "https://images.unsplash.com/photo-1618477388954-0663f0eae6ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2023",
    title: "Interior Design Excellence Award",
    organization: "International Design Association",
    description: "Honored for creating interior spaces that perfectly blend luxury, functionality, and cutting-edge design principles.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2023",
    title: "Green Building Leadership",
    organization: "Global Sustainability Initiative",
    description: "Recognized for our leadership in eco-conscious architecture and commitment to reducing carbon footprint in all projects.",
    image: "https://images.unsplash.com/photo-1600585153903-0094c2ecaae9?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2022",
    title: "Innovation in Urban Design",
    organization: "Urban Planning Institute",
    description: "Awarded for our groundbreaking approach to urban spaces that enhance community living while maintaining aesthetic excellence.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2022",
    title: "Client Satisfaction Excellence",
    organization: "Builders Association",
    description: "Recognized for maintaining 98% client satisfaction across all projects for three consecutive years.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2021",
    title: "Best Residential Design",
    organization: "Architecture Today",
    description: "Honored for our revolutionary residential designs that combine functionality with breathtaking aesthetics.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
];

const Awards = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Awards & Recognition</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and organizations worldwide.
          </p>
        </div>
      </div>

      {/* Awards Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {award.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{award.title}</h3>
                <p className="text-indigo-600 font-medium mb-3">{award.organization}</p>
                <p className="text-gray-600">{award.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Achievements in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-indigo-600">50+</p>
              <p className="text-gray-600 mt-2">Industry Awards</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600">98%</p>
              <p className="text-gray-600 mt-2">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600">200+</p>
              <p className="text-gray-600 mt-2">Completed Projects</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600">15</p>
              <p className="text-gray-600 mt-2">Countries Served</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Want to work with an award-winning team?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our recognition is a testament to our commitment to excellence. Let's discuss how we can bring that excellence to your project.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Awards;
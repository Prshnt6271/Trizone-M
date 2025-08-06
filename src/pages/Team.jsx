import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Vibhor Mehra",
      title: "Founding Partner / Principal Architect",
      image: "https://static.wixstatic.com/media/2db2e6_36b874607f96483690c868c29e34d7d1~mv2.jpg/v1/crop/x_0,y_0,w_460,h_720/fill/w_485,h_864,al_c,lg_1,q_85,enc_avif,quality_auto/185755_10150094294254403_6031041_n.jpg", // Store this locally or replace with an external URL
      bio: "Vibhor Mehra is a graduate in architecture with over 10 years of experience in design, detailing, and coordination of large-scale buildings. His work spans across firms like Ajoy Choudhury Associates, Neev, and Neel Ghia – Architect. He specializes in site planning, climate-responsive strategies, and landscape design, bringing artistic quality to conceptual presentations.",
      experience: "Greenwood Elements Kolkata, ILD Spire Group Housing Gurgaon, Marriot Courtyard Kolkata",
      email: "vmehra@trizzone.com",
    },
    {
      name: "Abhinandan Mandal",
      title: "Founding Partner / Principal Architect",
      image: "https://static.wixstatic.com/media/2db2e6_0b0dfd1061844102a8f8d8b3657ef778~mv2.jpg/v1/crop/x_176,y_0,w_416,h_669/fill/w_499,h_803,al_c,lg_1,q_85,enc_avif,quality_auto/IMG_2740%20p.jpg", // Store locally or use a valid online link
      bio: "Abhinandan Mandal has extensive experience in architecture, urban design, and interiors. He has worked at M:OFA Studios, Anagram Architects, and Nirman Consultants on projects ranging from residential to institutional master planning. Known for his spatial sensibilities and detailing at every scale.",
      experience: "ITM Global School Gwalior MP, NIFT Kangra Himachal Pradesh, National Institute of Watersports Goa, Gairola House Gurgaon",
      email: "m.abhinandan@trizzone.com",
    },
    {
      name: "Khushhal Gupta",
      title: "Associate Partner / Principal Architect",
      image: "https://static.wixstatic.com/media/2db2e6_bac739464fe3450b9da0e011a7a74c0e~mv2.jpg/v1/crop/x_150,y_0,w_566,h_960/fill/w_566,h_960,al_c,q_85,enc_avif,quality_auto/15319167_1349406625091208_4296925906809612140_n.jpg", // Add this image as well
      bio: "Khushhal Gupta brings a strong techno-managerial edge with an MBA in Finance and Strategy. He has worked extensively across feasibility, planning, construction, investment strategy, and valuations, especially in the hospitality and real estate sectors.",
      experience: "Hotel Country Inn & Suites Gurgaon, Marriott Courtyard Noida, IT-SEZ/IT Parks (Gurgaon & Kolkata), Nirvana Country II Gurgaon, Uniworld City Kolkata",
      email: "kgupta@trizzone.com",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-indigo-600 tracking-wide uppercase">Our Leadership</h1>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Principal Architects
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
            Discover the minds behind our vision – seasoned architects with a passion for excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative shadow-md rounded-lg p-4 bg-white">
              <div className="w-full h-80 bg-gray-200 overflow-hidden rounded-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="mt-1 text-sm text-indigo-600 font-medium">{member.title}</p>
                <p className="mt-3 text-sm text-black font-bold">{member.bio}</p>
                <p className="mt-2 text-sm text-gray-500 font-semibold">Project Experience:</p>
                <p className="text-sm text-black font-bold italic">{member.experience}</p>
                <a href={`mailto:${member.email}`} className="mt-3 inline-block text-sm text-indigo-600 hover:underline">
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

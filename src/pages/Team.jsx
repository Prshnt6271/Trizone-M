import React from "react";

const Team = () => {
  const teamMembers = [
    { 
      name: "Alex Chen", 
      title: "CEO & Founder", 
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      bio: "Visionary leader with 15+ years of industry experience",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    { 
      name: "Sarah Williams", 
      title: "Creative Director", 
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      bio: "Award-winning designer passionate about user experience",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    { 
      name: "James Rodriguez", 
      title: "Lead Developer", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      bio: "Full-stack wizard with expertise in modern frameworks",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    { 
      name: "Priya Patel", 
      title: "Marketing Director", 
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      bio: "Growth strategist with a data-driven approach",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Team</h2>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            The people behind the magic
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
            Meet our talented team of professionals dedicated to delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-center text-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-indigo-600">{member.title}</p>
                </div>
                <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                <div className="mt-4 flex space-x-3">
                  <a href={member.social.twitter} className="text-gray-400 hover:text-indigo-600">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-indigo-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
import React from "react";

const Internships = () => {
  const internships = [
    {
      title: "Marketing Intern",
      type: "Summer Internship",
      location: "Remote or New York, NY",
      duration: "12 weeks (June - August)",
      description: "Gain hands-on experience in digital marketing strategies and campaign execution for global brands.",
      responsibilities: [
        "Assist in developing social media content and campaigns",
        "Conduct market research and competitor analysis",
        "Support email marketing initiatives",
        "Help analyze campaign performance metrics"
      ],
      qualifications: [
        "Currently pursuing a degree in Marketing, Communications, or related field",
        "Strong written and verbal communication skills",
        "Familiarity with social media platforms and digital marketing concepts",
        "Creative thinking and attention to detail"
      ],
      perks: [
        "Mentorship from senior marketing leaders",
        "Stipend: $5,000/month",
        "Networking events with industry professionals",
        "Potential for full-time offer"
      ]
    },
    {
      title: "Software Engineering Intern",
      type: "Summer Internship",
      location: "San Francisco, CA or Remote",
      duration: "12 weeks (June - August)",
      description: "Work on real projects that impact millions of users while learning from top engineering mentors.",
      responsibilities: [
        "Develop and maintain web applications using modern frameworks",
        "Collaborate with product teams on feature implementation",
        "Write clean, maintainable code with test coverage",
        "Participate in code reviews and team standups"
      ],
      qualifications: [
        "Pursuing BS/MS in Computer Science or related technical field",
        "Experience with JavaScript/TypeScript and React",
        "Understanding of data structures and algorithms",
        "Passion for problem-solving and learning new technologies"
      ],
      perks: [
        "1:1 mentorship with senior engineers",
        "Stipend: $7,500/month + housing allowance",
        "Tech talks and workshops",
        "High conversion rate to full-time roles"
      ]
    },
    {
      title: "UX Design Intern",
      type: "Summer Internship",
      location: "Chicago, IL",
      duration: "10 weeks (June - August)",
      description: "Shape user experiences for our products while building your design portfolio with real work.",
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Participate in user research sessions",
        "Collaborate with product managers and engineers",
        "Contribute to design system components"
      ],
      qualifications: [
        "Pursuing degree in Design, HCI, or related field",
        "Portfolio showing design process and thinking",
        "Familiarity with Figma or similar tools",
        "User-centered design mindset"
      ],
      perks: [
        "Design critique sessions with creative directors",
        "Stipend: $6,000/month",
        "Access to premium design resources",
        "Showcase project at company demo day"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Internship Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Launch your career with hands-on experience, mentorship, and meaningful projects that make an impact.
          </p>
        </div>

        {/* Internship Listings */}
        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{internship.title}</h2>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {internship.type}
                      </span>
                      <span className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {internship.location}
                      </span>
                      <span className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {internship.duration}
                      </span>
                    </div>
                    <p className="text-gray-700">{internship.description}</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full whitespace-nowrap transition">
                    Apply Now
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Responsibilities</h3>
                    <ul className="space-y-2">
                      {internship.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Qualifications</h3>
                    <ul className="space-y-2">
                      {internship.qualifications.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Perks & Benefits</h3>
                    <ul className="space-y-2">
                      {internship.perks.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Program Benefits Section */}
        <div className="mt-20 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Internship Program</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real Projects</h3>
              <p className="text-gray-600">Work on meaningful projects that impact our business and users</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mentorship</h3>
              <p className="text-gray-600">1:1 guidance from experienced professionals in your field</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-gray-600">Potential for full-time offers and strong career foundation</p>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Application Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex-1 text-center">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-600">Complete our online application form with your resume and portfolio</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex-1 text-center">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Screening</h3>
              <p className="text-gray-600">Phone interview with our recruiting team</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex-1 text-center">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Technical Interview</h3>
              <p className="text-gray-600">Skills assessment with potential team members</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex-1 text-center">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Offer</h3>
              <p className="text-gray-600">Receive decision within 2 weeks of final interview</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
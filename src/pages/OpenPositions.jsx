import React from "react";

const OpenPositions = () => {
  const positions = [
    {
      title: "Senior UI/UX Designer",
      type: "Full-time",
      location: "San Francisco, CA (Remote possible)",
      description: "Lead the design of intuitive, beautiful digital experiences across our product suite.",
      responsibilities: [
        "Create user flows, wireframes, and high-fidelity prototypes",
        "Conduct user research and usability testing",
        "Collaborate with product and engineering teams",
        "Maintain and evolve our design system"
      ],
      requirements: [
        "5+ years of UI/UX design experience",
        "Expertise in Figma and prototyping tools",
        "Strong portfolio demonstrating problem-solving",
        "Experience with design systems and accessibility standards"
      ],
      posted: "2 days ago",
      applicants: "24 applicants"
    },
    {
      title: "Frontend Engineer (React)",
      type: "Full-time",
      location: "New York, NY (Hybrid)",
      description: "Build performant, accessible web applications using modern React.",
      responsibilities: [
        "Develop new user-facing features",
        "Optimize components for maximum performance",
        "Collaborate with UX designers and backend engineers",
        "Write clean, maintainable, and tested code"
      ],
      requirements: [
        "3+ years professional React experience",
        "Proficient with TypeScript and Next.js",
        "Experience with state management (Redux, Context API)",
        "Familiarity with CI/CD pipelines"
      ],
      posted: "1 week ago",
      applicants: "56 applicants"
    },
    {
      title: "Product Manager",
      type: "Full-time",
      location: "Remote (US time zones)",
      description: "Drive product strategy and execution for our core platform.",
      responsibilities: [
        "Define product vision and roadmap",
        "Gather and prioritize product requirements",
        "Work cross-functionally with engineering, design, and marketing",
        "Analyze metrics to inform product decisions"
      ],
      requirements: [
        "4+ years in product management",
        "Technical background with SaaS products",
        "Strong analytical and problem-solving skills",
        "Excellent communication and leadership abilities"
      ],
      posted: "3 days ago",
      applicants: "38 applicants"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the future with exceptional talent. Find your perfect role and grow with us.
          </p>
        </div>

        {/* Positions Grid */}
        <div className="space-y-6">
          {positions.map((position, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{position.title}</h2>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-gray-600">{position.type}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-600">{position.location}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{position.posted}</span>
                </div>

                <p className="text-gray-700 mb-5">{position.description}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Responsibilities</h3>
                    <ul className="space-y-2">
                      {position.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Requirements</h3>
                    <ul className="space-y-2">
                      {position.requirements.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{position.applicants}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Career Growth</h3>
                <p className="text-gray-600">Clear promotion paths and professional development opportunities</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Competitive Compensation</h3>
                <p className="text-gray-600">Salary, bonuses, and equity packages that reward your contributions</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Work</h3>
                <p className="text-gray-600">Remote options and flexible hours to support work-life balance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;
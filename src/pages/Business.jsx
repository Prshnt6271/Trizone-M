import React from "react";

const Business = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Business Inquiry</h1>
        <p className="text-gray-600 mb-6">
          We're always looking to partner with like-minded businesses. Fill out the form below and our team will get back to you within 24–48 hours.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Company Name</label>
            <input
              type="text"
              placeholder="Your company name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Business Proposal</label>
            <textarea
              rows="4"
              placeholder="Tell us about your business opportunity..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Business;


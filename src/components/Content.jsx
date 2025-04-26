import React from "react";

const Content = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row justify-between items-start p-6 md:p-20 gap-10">
      <div className="md:w-2/5 space-y-6">
        <p className="text-gray-400 tracking-widest uppercase">
          Connect with us
        </p>
        <h1 className="text-7xl font-light leading-tight">
          Together, we can{" "}
          <strong className="font-bold">do extraordinary things.</strong>
        </h1>
        <p>
          <a
            href="mailto:contact@trizzone.com"
            className="text-lime-300 text-lg hover:underline"
          >
            contact@trizzone.com
          </a>
        </p>
      </div>

      <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-xl md:w-1/2 w-full">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Full Name"
            required
            className="w-full p-3 bg-white-800 rounded-md text-black placeholder-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 bg-white-800 rounded-md text-black placeholder-black focus:outline-none"
          />

          <div>
            <label className="text-sm text-gray-400 font-medium">
              WHAT ARE YOU INTERESTED IN? *
            </label>
            <div className="space-y-3 mt-3">
              {[
                "Architectural Design and Planning",
                "Interior Design Solutions",
                "Landscape Architecture and Open Space Planning",
                "Project Management and Coordination",
                "Sustainable and Climate-Responsive Design",
                "Something else",
              ].map((option, index) => (
                <label key={index} className="flex items-start space-x-3">
                  <input
                    type="radio"
                    name="interest"
                    required
                    className="mt-1"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <textarea
            placeholder="Write a message"
            className="w-full p-3 h-24 resize-none bg-white rounded-md text-white placeholder-black focus:outline-none"
          ></textarea>

          <label className="text-sm text-gray-400 flex items-start space-x-3">
            <input type="checkbox" required className="mt-1" />
            <span>
              I understand that ISI will securely hold my data in accordance
              with their
              <a href="#" className="underline text-gray-300 ml-1">
                privacy policy
              </a>
              .*
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-md border border-gray-300 hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Content;

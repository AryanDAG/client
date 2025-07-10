import React from 'react';

const AboutUs = () => {
  return (
    <section className="relative bg-white py-20 px-4 overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 z-0 hidden md:block"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 z-0 hidden md:block"></div>

      {/* Image grid */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Left image */}
        <div className="relative">
          <img
            src="/assets/pexels-brett-sayles-2881232.svg"
            alt="Real Estate Agent"
            className="w-40 h-auto rounded-md shadow-lg"
          />
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-orange-500"></div>
        </div>

        {/* Center image */}
        <div className="relative">
          <img
            src="/assets/pexels-fauxels-3182834.svg"
            alt="Presentation"
            className="w-52 h-auto rounded-md shadow-lg"
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 border-t-4 border-r-4 border-blue-600"></div>
        </div>

        {/* Right image */}
        <div className="relative">
          <img
            src="/assets/pexels-andres-ayrton-6578391.svg"
            alt="Team Meeting"
            className="w-40 h-auto rounded-md shadow-lg"
          />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-orange-500"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-16 max-w-3xl mx-auto text-center z-20 relative">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-3">About Us</h2>
        <div className="w-16 h-1 mx-auto bg-blue-500 mb-4 rounded-full"></div>
        <p className="text-gray-600 text-sm sm:text-base px-4 sm:px-8 leading-relaxed">
          Fifteen years of experience in real estate, excellent customer service and a commitment to work that is honest and client-focused.
          We provide quality services to build relationships with clients and, more importantly, maintain those relationships by communicating effectively.
        </p>

        <button className="mt-6 px-6 py-2 border border-blue-500 text-blue-600 rounded-full text-sm hover:bg-blue-50 transition">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
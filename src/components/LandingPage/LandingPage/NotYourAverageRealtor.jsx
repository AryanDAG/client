import React from "react";

export default function NotYourAverageRealtor() {
  return (
    <section className="w-full py-20 px-4 bg-white flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto relative overflow-hidden">
      {/* Left Text Block */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Not Your Average Realtor
        </h2>
        <p className="text-gray-600 max-w-md leading-relaxed">
          Real trust is a new era of real estate projects, advanced asset building design and effective marketing to get the maximum output with better value.
        </p>
      </div>

      {/* Right Circle Images Group */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center">
        {/* Main big circle */}
        <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
          <img
            src="/assets/Ellipse 11.svg"
            alt="Main Agent"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top-right small circle */}
        <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-md z-30">
          <img
            src="/assets/Ellipse 12.svg"
            alt="Clients"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom-right small circle */}
        <div className="absolute bottom-0 right-0 transform translate-x-12 translate-y-12 w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-md z-10">
          <img
            src="/assets/Ellipse 13.svg"
            alt="Smiling Agent"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative blue dot */}
        <div className="absolute -top-4 -left-4 w-4 h-4 bg-blue-600 rounded-full"></div>

        {/* Decorative orange dot */}
        <div className="absolute top-16 left-0 w-2 h-2 bg-orange-500 rounded-full"></div>

        {/* Decorative light blue dot */}
        <div className="absolute bottom-8 right-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
      </div>
    </section>
  );
}
import React from "react";
import { FaHome, FaPenNib, FaDollarSign } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
           <img src="/assets/home.svg" alt="Potential ROI" className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Potential ROI</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Whether you're looking to skyrocket your
              revenue or save more time & costs, we craft your
              roadmap for the ultimate success.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <img src="/assets/paintbrush-2.svg" alt="Potential ROI" className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Design</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Our strategic, detail-oriented design ensures the product
              guides through your design experience and branding,
              satisfaction guaranteed in the final results.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <img src="/assets/circle-dollar-sign.svg" alt="Potential ROI" className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Marketing</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Bringing your product, content and services to a
              sophisticated digital marketing plan and connecting
              everything to meet today’s buyers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
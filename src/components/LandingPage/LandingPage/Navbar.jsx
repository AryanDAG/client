import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow">
      <div className="flex items-center justify-between px-8 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.svg" alt="Logo" className="w-48 h-8" />
        </div>

        {/* Desktop Menu */}
        <div className="items-center hidden space-x-6 md:flex">
          <Link to="home" smooth duration={500} className="text-sm font-medium text-gray-700 cursor-pointer hover:text-blue-600">
            HOME
          </Link>
          <Link to="services" smooth duration={500} className="text-sm font-medium text-gray-700 cursor-pointer hover:text-blue-600">
            SERVICES
          </Link>
          <Link to="about" smooth duration={500} className="text-sm font-medium text-gray-700 cursor-pointer hover:text-blue-600">
            ABOUT PROJECTS
          </Link>
          <Link to="featured" smooth duration={500} className="text-sm font-medium text-gray-700 cursor-pointer hover:text-blue-600">
            TESTIMONIALS
          </Link>
          <Link to="contact" smooth duration={500}>
            <button className="px-4 py-2 ml-4 text-sm font-semibold text-white bg-orange-500 rounded shadow hover:bg-orange-600">
              CONTACT
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed left-0 z-40 flex flex-col items-center w-full h-screen px-4 py-8 space-y-6 bg-white md:hidden top-16">
          <Link onClick={toggleMenu} to="home" smooth duration={500} className="text-lg text-gray-700 hover:text-blue-600">
            HOME
          </Link>
          <Link onClick={toggleMenu} to="services" smooth duration={500} className="text-lg text-gray-700 hover:text-blue-600">
            SERVICES
          </Link>
          <Link onClick={toggleMenu} to="about" smooth duration={500} className="text-lg text-gray-700 hover:text-blue-600">
            ABOUT PROJECTS
          </Link>
          <Link onClick={toggleMenu} to="featured" smooth duration={500} className="text-lg text-gray-700 hover:text-blue-600">
            TESTIMONIALS
          </Link>
          <Link onClick={toggleMenu} to="contact" smooth duration={500} className="flex justify-center w-full">
            <button className="w-full px-6 py-3 text-sm font-semibold text-white bg-orange-500 rounded shadow hover:bg-orange-600">
              CONTACT
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
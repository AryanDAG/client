import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function BottomFooter() {
  return (
    <footer className="bg-[#151929] text-white py-4 px-6">
      <div className="flex flex-col items-center justify-between mx-auto text-sm max-w-7xl md:flex-row">
        {/* Left - Copyright */}
        <div className="mb-2 md:mb-0">
          © All rights Reserved 2023
        </div>

        {/* Center - Logo + Text */}
        <div className="flex items-center mb-2 space-x-2 md:mb-0">
          <img src="/logo.png" alt="Logo" className="w-5 h-5" />
          <span className="font-medium">Real</span>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-500"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // for mobile toggle

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">TurfZone</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Book Now</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          <li className="hover:text-blue-600 cursor-pointer">Login</li>
        </ul>

        {/* Hamburger Icon (only visible on mobile) */}
        <div
          className="md:hidden flex flex-col cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-[3px] bg-gray-800 mb-1 rounded"></span>
          <span className="w-6 h-[3px] bg-gray-800 mb-1 rounded"></span>
          <span className="w-6 h-[3px] bg-gray-800 rounded"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col md:hidden bg-white shadow-md border-t border-gray-200">
          <li className="py-3 px-6 hover:bg-gray-100">Home</li>
          <li className="py-3 px-6 hover:bg-gray-100">Book Now</li>
          <li className="py-3 px-6 hover:bg-gray-100">Contact</li>
          <li className="py-3 px-6 hover:bg-gray-100">Login</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

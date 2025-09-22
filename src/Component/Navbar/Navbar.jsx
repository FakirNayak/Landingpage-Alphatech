import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import mainlogo from "../../assets/mlogo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative">
        {/* Logo + Number */}
        <div className="flex items-center space-x-4">
          <img
            src={mainlogo}
            alt="Logo"
            className="h-16 md:h-20 w-auto object-contain -mt-2"
          />
          <span className="text-black font-bold text-lg md:text-xl">
            +91 7451879273
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-yellow-500 hover:text-black transition duration-300 cursor-pointer">
            Call Us Now
          </li>
          <li className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-yellow-500 hover:text-black transition duration-300 cursor-pointer">
            Get Quote
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 px-6 py-4">
          <ul className="flex flex-col space-y-4 text-white font-medium">
            <li
              className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-yellow-500 hover:text-black transition duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Call Us Now
            </li>
            <li
              className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-yellow-500 hover:text-black transition duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

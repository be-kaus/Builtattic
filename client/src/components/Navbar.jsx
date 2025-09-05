import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-gray-900">
          Builtattic
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/amazon" className="text-gray-600 hover:text-black">
            Studio
          </NavLink>
          <NavLink to="/urban" className="text-gray-600 hover:text-black">
            Firm
          </NavLink>
          <NavLink to="/associates" className="text-gray-600 hover:text-black">
            Associates
          </NavLink>
          <NavLink to="/blinkit" className="text-gray-600 hover:text-black">
            WareHouse
          </NavLink>
          <NavLink to="/login" className="text-gray-600 hover:text-black">
            Login
          </NavLink>
          <NavLink to="/ai" className="text-gray-600 hover:text-black">
            AI
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 hover:text-black"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
          <NavLink
            to="/amazon"
            className="text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Studio
          </NavLink>
          <NavLink
            to="/urban"
            className="text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Firm
          </NavLink>
          <NavLink
            to="/associates"
            className="text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Associates
          </NavLink>
          <NavLink
            to="/blinkit"
            className="text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            WareHouse
          </NavLink>
          <NavLink
            to="/login"
            className="text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

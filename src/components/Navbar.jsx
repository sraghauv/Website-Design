import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Users/raghauvsaravanan/Documents/NeuroTECH/Interface/Website Design/src/assets/Picture1.png";

const Navbar = () => {
  return (
    <div className="w-full h-20 border-b-2 border-gray-300 text-black shadow-md  fixed top-0 left-0 z-50 flex items-center justify-between px-2">
      {/* Left Side: Logo */}
      <img
        src={Logo}
        className="w-20 h-auto ml-3"
        alt="Description of the image"
      />

      {/* Right Side: Links */}
      <div className="flex space-x-8">
        <Link to="/" className="hover:underline text-2xl">
          Home
        </Link>

        <Link to="/about" className="hover:underline text-2xl">
          About
        </Link>

        <Link to="/projects" className="hover:underline text-2xl">
          Projects
        </Link>

        <Link to="/contact" className="hover:underline text-2xl">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

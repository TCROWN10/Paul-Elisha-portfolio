import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleWalletConnect = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <div>
      <nav className="flex justify-between items-center mb-8">
        <h1 className="text-xl md:text-2xl font-bold flex items-center">
          <img
            src="/paul.jpeg"
            alt="Profile"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-3"
          />
          Paul Elisha
          <span className="hidden sm:inline text-xs md:text-sm font-normal text-gray-500 ml-2">
            (Software Engineer)
          </span>
        </h1>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-gray-600">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/about" className="hover:text-black">
            About
          </Link>
          <Link to="/Articles" className="hover:text-black">
            Articles
          </Link>
          <Link to="/project" className="hover:text-black">
            Projects
          </Link>
        </div>
        <button
          onClick={handleWalletConnect}
          className={`border md:flex hidden border-b-4 border-gray-500 font-semibold bg-white text-xs py-1 px-3 rounded-lg cursor-pointer ${
            isWalletConnected ? "bg-green-200 text-green-700" : ""
          }`}
        >
          {isWalletConnected ? "CONNECTED" : "CONNECT WALLET"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden space-y-4 text-gray-600 mb-4 h-screen">
          <Link
            to="/"
            className="block hover:text-black"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-black"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            to="/Articles"
            className="block hover:text-black"
            onClick={toggleMobileMenu}
          >
            Articles
          </Link>
          <Link
            to="/project"
            className="block hover:text-black"
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          <button
            onClick={handleWalletConnect}
            className={`bg-gray-200 text-xs py-1 px-3 rounded-lg cursor-pointer font-semibold -ml-2 ${
              isWalletConnected ? "bg-green-200 text-green-700" : ""
            }`}
          >
            {isWalletConnected ? "CONNECTED" : "CONNECT WALLET"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-lg font-semibold hover:text-gray-300">
              React Router v7
            </a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
            <a href="/services" className="hover:text-gray-300">
              Services
            </a>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

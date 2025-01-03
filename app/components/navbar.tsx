import React from "react";
import { Link } from "react-router";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-semibold hover:text-gray-300">
              React Router v7
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link to="/dashboard/finance" className="hover:text-gray-300">
              Finances
            </Link>
            <Link to="/dashboard/analytics" className="hover:text-gray-300">
              Analytics
            </Link>
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

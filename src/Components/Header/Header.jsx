import React from "react";
import { Link, NavLink } from "react-router-dom";
import { House } from "lucide-react";
export default function Header() {
  return (
    <header className="header-main ">
      <div className="header-content">
      <Link
          to="/"
          className="flex items-center space-x-2 text-white hover:text-gray-400"
        >
        <House />
        </Link>

        <Link to="/OurWork" className="text-white hover:text-gray-400">
          Our Work
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-400">
          Client Review
        </Link>

        <Link
          to="https://calendly.com/info-rendergfx/consultation"
          className="schedul-button"

        >
          <button>schedule a call</button>
        </Link>
      </div>
    </header>
  );
}
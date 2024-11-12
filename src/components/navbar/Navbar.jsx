// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b-2 border-black">
      {/* Logo */}
      <div className="text-2xl font-bold text-black">
        <Link to="/">TiGuLeNi</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-sm font-semibold text-gray-700">
        <Link to="/" className="hover:text-black">
          Home
        </Link>
        <Link to="/contact" className="hover:text-black">
          Contact
        </Link>
        <Link to="/about" className="hover:text-black">
          About
        </Link>
        <Link to="/products" className="hover:text-black">
          Products
        </Link>
        <Link to="/login" className="hover:text-black">
          Login
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-gray-700">
        <FiHeart className="w-5 h-5 cursor-pointer hover:text-black" />
        <div className="relative">
          <FiShoppingCart className="w-5 h-5 cursor-pointer hover:text-black" />
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            2
          </span>
        </div>
        <FiUser className="w-5 h-5 cursor-pointer hover:text-black" />
      </div>
    </nav>
  );
};

export default Navbar;

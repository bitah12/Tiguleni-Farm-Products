// src/components/Header.jsx
import React from "react";

const Header = () => (
  <header className="flex items-center justify-between p-4 border-b">
    <h1 className="text-xl font-semibold">TiGuLeNi</h1>
    <nav className="space-x-4">
      <a href="#" className="text-gray-600">Home</a>
      <a href="#" className="text-gray-600">Contact</a>
      <a href="#" className="text-gray-600">About</a>
      <a href="#" className="text-gray-600">Products</a>
      <a href="#" className="text-gray-600">Services</a>
      <a href="#" className="text-gray-600">Login</a>
    </nav>
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Looking for what?"
        className="border rounded-full px-4 py-1"
      />
      <button className="text-gray-600">❤️</button>
      <button className="text-gray-600">🛒</button>
      <button className="text-gray-600">👤</button>
    </div>
  </header>
);

export default Header;

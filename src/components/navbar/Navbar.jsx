import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "/src/store/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth); // For user authentication
  const [uniqueProductCount, setUniqueProductCount] = useState(0); // Unique product count
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Function to calculate unique product count from localStorage
    const updateProductCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const uniqueIds = new Set(cart.map((item) => item.productId));
      setUniqueProductCount(uniqueIds.size); // Count of unique product IDs
    };

    updateProductCount();

    // Listen for localStorage changes
    window.addEventListener("storage", updateProductCount);

    return () => {
      window.removeEventListener("storage", updateProductCount);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

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
        {!user ? (
          <Link to="/login" className="hover:text-black">
            Login
          </Link>
        ) : null}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-gray-700 relative">
        <FiHeart className="w-5 h-5 cursor-pointer hover:text-black" />
        <div className="relative">
          <Link to="/cart">
            <FiShoppingCart className="w-5 h-5 cursor-pointer hover:text-black" />
            {/* Notification Badge */}
            {uniqueProductCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {uniqueProductCount}
              </span>
            )}
          </Link>
        </div>
        {user ? (
          <div className="relative">
            <FiUser
              className="w-5 h-5 cursor-pointer hover:text-black"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md text-sm">
                <button
                  onClick={() => navigate("/profile")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={() => navigate("/messages")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Messages
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <p className="w-5 h-5 opacity-0">---</p>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

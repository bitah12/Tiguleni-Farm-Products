import React from "react";
import { NavLink } from "react-router-dom";
import dashboardIcon from "/src/assets/dashboardIcon.png";
import salesIcon from "/src/assets/Sales.png";
import manageProductsIcon from "/src/assets/ManageProducts.png";
import paymentIcon from "/src/assets/Payment.png";
import profileIcon from "/src/assets/Profile.png";
import sellerIcon from "/src/assets/seller.png";

const Sidebar = () => {
  const activeStyle = "text-gray-300  h-8 rounded-md bg-gray-800"; 

  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-200">
      <div className="flex items-center justify-center h-20">
        <h1 className="text-4xl font-bold">TiGuLeNi</h1>
      </div>
      <nav className="flex flex-col p-4">
        <div className="mb-3 text-gray-400 uppercase">Menu</div>

        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `mb-4 flex items-center ${isActive ? activeStyle : ""}`
          }
        >
          <img src={dashboardIcon} alt="dashboard" />
          <span className="ml-3">Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/sales"
          className={({ isActive }) =>
            `mb-4 flex items-center ${isActive ? activeStyle : ""}`
          }
        >
          <img src={salesIcon} alt="sales" />
          <span className="ml-3">Sales</span>
        </NavLink>

        <NavLink
          to="/admin/manage-products"
          className={({ isActive }) =>
            `mb-4 flex items-center ${isActive ? activeStyle : ""}`
          }
        >
          <img src={manageProductsIcon} alt="products" />
          <span className="ml-3">Manage Products</span>
        </NavLink>

      

        <div className="mt-10 text-gray-400 uppercase">Others</div>

        <NavLink
          to="/admin/payment"
          className={({ isActive }) =>
            `mb-4 flex items-center mt-2 ${isActive ? activeStyle : ""}`
          }
        >
          <img src={paymentIcon} alt="payment" />
          <span className="ml-3">Payment</span>
        </NavLink>

        <NavLink
          to="/admin/profile"
          className={({ isActive }) =>
            `mb-4 flex items-center ${isActive ? activeStyle : ""}`
          }
        >
          <img src={profileIcon} alt="profile" />
          <span className="ml-3">Profile</span>
        </NavLink>

       

        <div className="absolute bottom-0 left-0 p-4 flex items-center w-full">
          <img
            src={sellerIcon}
            alt="user"
            className="rounded-full w-10 h-10 mr-3"
          />
          <div>
            <h3 className="text-sm">RobertoBitah</h3>
            <p className="text-xs text-gray-400">admin</p>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
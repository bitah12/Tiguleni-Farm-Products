import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import dashboardIcon from "/src/assets/dashboardIcon.png";
import salesIcon from "/src/assets/Sales.png";
import manageProductsIcon from "/src/assets/ManageProducts.png";
import messagesIcon from "/src/assets/Messages.png";
import paymentIcon from "/src/assets/Payment.png";
import profileIcon from "/src/assets/Profile.png";
import helpIcon from "/src/assets/Help.png";
import sellerIcon from "/src/assets/Seller.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "/src/store/authSlice";

const Sidebar = () => {

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    //navigate("/");
  };

  const activeStyle = "text-gray-300  h-8 rounded-md bg-gray-800"; 

  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-200">
      <div className="flex items-center justify-center h-20">
        <h1 className="text-4xl font-bold">TiGuLeNi</h1>
      </div>
      <nav className="flex flex-col p-4">
        <div className="mb-3 text-gray-400 uppercase">Menu</div>

        <NavLink
          to="/seller/dashboard"
          className={({ isActive }) =>
            `mb-4 flex items-center ${isActive ? activeStyle : ""}`
          }
        >
          <img src={dashboardIcon} alt="dashboard" />
          <span className="ml-3">Dashboard</span>
        </NavLink>

        <NavLink
          to="/seller/sales"
          className={({ isActive }) =>
            `mb-4 flex items-center ${isActive ? activeStyle : ""}`
          }
        >
          <img src={salesIcon} alt="sales" />
          <span className="ml-3">Sales</span>
        </NavLink>

        <NavLink
          to="/seller/manage-products"
          className={({ isActive }) =>
            `mb-4 flex items-center ${isActive ? activeStyle : ""}`
          }
        >
          <img src={manageProductsIcon} alt="products" />
          <span className="ml-3">Manage Products</span>
        </NavLink>

        <NavLink
          to="/seller/messages"
          className={({ isActive }) =>
            `mb-4 flex items-center ${isActive ? activeStyle : ""}`
          }
        >
          <img src={messagesIcon} alt="messages" />
          <span className="ml-3">Messages</span>
        </NavLink>

        <div className="mt-10 text-gray-400 uppercase">Others</div>

        <NavLink
          to="/seller/payment"
          className={({ isActive }) =>
            `mb-4 flex items-center mt-2 ${isActive ? activeStyle : ""}`
          }
        >
          <img src={paymentIcon} alt="payment" />
          <span className="ml-3">Payment</span>
        </NavLink>

        <NavLink
          to="/seller/profile"
          className={({ isActive }) =>
            `mb-4 flex items-center ${isActive ? activeStyle : ""}`
          }
        >
          <img src={profileIcon} alt="profile" />
          <span className="ml-3">Profile</span>
        </NavLink>

        <NavLink
          to="/help"
          className={({ isActive }) =>
            `mb-4 flex items-center ${isActive ? activeStyle : ""}`
          }
        >
          <img src={helpIcon} alt="help" />
          <span className="ml-3">Help</span>
        </NavLink>
       {user && <NavLink
       onClick={handleLogout}
          to="/login"
          className={({ isActive }) =>
            `mb-4 flex items-center ${isActive ? activeStyle : ""}`
          }
        >
          <img src={helpIcon} alt="help" />
          <span className="ml-3">Logout</span>
        </NavLink>}

        <div className="absolute bottom-0 left-0 p-4 flex items-center w-full">
          <img
            src={sellerIcon}
            alt="user"
            className="rounded-full w-10 h-10 mr-3"
          />
          <div>
            <h3 className="text-sm">RobertoBitah</h3>
            <p className="text-xs text-gray-400">Seller</p>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

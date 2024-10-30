import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import SellerDashboard from "./SellerDashboard";
import Sales from "./Sales";
import ManageProducts from "./ManageProducts";
import SellerPayments from "./SellerPayments";
import Messaging from "./Messaging";
import Profile from "./Profile";

const SellerLayout = () => {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="flex-1 bg-white mb-28">
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" />} />

          <Route path="dashboard" element={<SellerDashboard />} />

          <Route path="sales" element={<Sales />} />

          <Route path="manage-products" element={<ManageProducts />} />

          <Route path="payment" element={<SellerPayments />} />

          <Route path="messages" element={<Messaging />} />

          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default SellerLayout;

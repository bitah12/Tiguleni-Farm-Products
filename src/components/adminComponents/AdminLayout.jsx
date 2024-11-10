import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminDashboard from "./AdminDashboard";
import Sales from "./Sales";
import Profile from "./Profile";
import AdminPayments from "./AdminPayments";
import ManageProducts from "./ManageProducts";

const AdminLayout = () => {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="flex-1 bg-white mb-28">
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" />} />

          <Route path="dashboard" element={<AdminDashboard />} />

          <Route path="sales" element={<Sales />} />

          <Route path="payment" element={<AdminPayments />} />
          <Route path="manage-products" element={<ManageProducts />} />

          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;

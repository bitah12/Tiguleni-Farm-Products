import React from "react";
import ControlledSwitches from "./ControlledSwitches";

const ManageProducts = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-semibold">Manage Products</h2>
        <div className="flex items-center">
          <span className="text-sm mr-2">Switch to buy</span>
          <ControlledSwitches />
        </div>
      </div>
      <button className="mb-4 px-4 py-2 bg-black text-white rounded">
        Add Product
      </button>
      <div className="bg-white p-4 border rounded-lg">
       
      </div>
    </div>
  );
};

export default ManageProducts;
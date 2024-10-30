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
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="pb-2">#</th>
              <th className="pb-2">Product</th>
              <th className="pb-2">Available</th>
              <th className="pb-2">Sold</th>
              <th className="pb-2">Price</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="py-2">1</td>
              <td className="py-2">Beef</td>
              <td className="py-2">1000kg</td>
              <td className="py-2">500kg</td>
              <td className="py-2">MWK 7000</td>
              <td className="py-2 text-green-500">Available</td>
              <td className="py-2">2024/10/18</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;

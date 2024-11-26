import React, { useEffect, useState } from "react";
import axios from "axios";

const Sales = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/sales/allsalesAdmin`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setSalesData(response.data);
        if (Array.isArray(response.data)) {
          setSalesData(response.data);
        } else if (response.data && Array.isArray(response.data.sales)) {
          setSalesData(response.data.sales);
        } else {
          setSalesData([]);
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch sales data.");
        setLoading(false);
      }
    };

    fetchSalesData();
  }, [accessToken]);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  // if (error) {
  //   return <div className="p-6 text-red-500">{error}</div>;
  // }

  return (
    <div className="p-6 w-[75%] relative -right-[300px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-semibold">Sales</h2>
        <div className="flex items-center">
          <span className="text-sm mr-2">Switch to buy</span>
        </div>
      </div>
      {/* Recent Transactions */}
      <div className="bg-white p-4 border rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="pb-2">SN</th>
              <th className="pb-2">Customer</th>
              <th className="pb-2">Product</th>
              <th className="pb-2">Quantity</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Date</th>
            </tr>
          </thead>
          {salesData.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center py-4">
                No sales data available.
              </td>
            </tr>
          ) : (
            salesData.map((sale, index) => (
              <tr key={sale.payment_Id}>
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{sale.customerEmail}</td>
                <td className="py-2">{sale.product_name}</td>
                <td className="py-2">{sale.quantityBought}</td>
                <td className="py-2">{sale.amount}</td>
                <td className="py-2">{sale.status}</td>
                <td className="py-2">
                  {new Date(sale.date).toLocaleDateString()}
                </td>
              </tr>
            ))
          )}
        </table>
      </div>
    </div>
  );
};

export default Sales;

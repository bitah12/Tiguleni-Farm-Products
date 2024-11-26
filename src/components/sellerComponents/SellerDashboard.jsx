import React, { useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ControlledSwitches from "./ControlledSwitches";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const SellerDashboard = () => {
  const [lineChartData, setLineChartData] = useState({ labels: [], datasets: [] });
  const [walletData, setWalletData] = useState(null);
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const accessToken = localStorage.getItem("token");

  const fetchSellerWallet = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/sellerwallet`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch wallet data");
      }
      const data = await response.json();
      setWalletData(data.sellerwallet);
    } catch (err) {
      setError("Error fetching wallet data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchMonthlySalesData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/sales/dashboard/seller`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch monthly sales data");
      }
      const data = await response.json();
      setLineChartData(data);
    } catch (err) {
      setError("Error fetching monthly sales data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSalesData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/sales/sellersales`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = response.data;
      if (Array.isArray(data)) {
        setSalesData(data);
      } else if (data?.sales && Array.isArray(data.sales)) {
        setSalesData(data.sales);
      } else {
        setSalesData([]);
      }
    } catch (err) {
      setError("Error fetching sales data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchSellerWallet();
      fetchMonthlySalesData();
      fetchSalesData();
    } else {
      setError("Access token is missing. Please log in.");
    }
  }, [accessToken]);

  const pieChartData = {
    labels: ["Beef", "Goat", "Chicken", "Pork"],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex bg-white">
      <div className="flex-1 p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-semibold">Dashboard</h2>
          <div className="flex items-center">
            <span className="text-sm mr-2">Switch to buy</span>
            <ControlledSwitches />
          </div>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-200 p-4 rounded-lg">
            <h3 className="text-sm font-medium">Main Balance</h3>
            <p className="text-3xl font-bold">
              MWK {walletData?.mainWalletBalance?.toLocaleString()}
            </p>
          </div>
          <div className="bg-blue-200 p-4 rounded-lg">
            <h3 className="text-sm font-medium">Total Sales</h3>
            <p className="text-3xl font-bold">
              MWK {walletData?.totalSales?.toLocaleString()}
            </p>
            <p className="text-xs">
              Total Products: {walletData?.totalNumberOfSales}
            </p>
          </div>
          <div className="bg-blue-200 p-4 rounded-lg">
            <h3 className="text-sm font-medium">Cash Out</h3>
            <p className="text-3xl font-bold">
              MWK {walletData?.totalCashOut?.toLocaleString()}
            </p>
            <p className="text-xs">
              {walletData?.totalNumberOfWithdrawals} Times
            </p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 border rounded-lg">
            <h3 className="text-sm font-medium">Sales Progress</h3>
            <div className="h-48">
              <Line data={lineChartData} />
            </div>
          </div>

          <div className="bg-white p-4 border rounded-lg">
            <h3 className="text-sm font-medium">Best Sales Distribution</h3>
            <div className="h-48">
              <Pie data={pieChartData} />
            </div>
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
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;

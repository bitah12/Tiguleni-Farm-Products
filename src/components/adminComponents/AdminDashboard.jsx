import React, { useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  
  const [lineChartData, setLineChartData] = useState({
    labels: [],
    datasets: [],
  });

  const fetchMonthlySalesData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/sales/allsalesAdmin`);
      const data = await response.json();
      setLineChartData(data);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    }
  };

  useEffect(() => {
    fetchMonthlySalesData();
  }, []);

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
    <div className="flex min-h-screen bg-white">
      <div className="flex-1 p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-semibold">Dashboard</h2>
          <div className="flex items-center">
            <span className="text-sm mr-2  opacity-0">Switch to buy</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-200 p-4 rounded-lg">
            <h3 className="text-sm font-medium">Main Balance</h3>
            <p className="text-3xl font-bold">MWK 5,001,623</p>
          </div>
          <div className="bg-blue-200 p-4 rounded-lg">
            <h3 className="text-sm font-medium">Total Sales</h3>
            <p className="text-3xl font-bold">MWK 10,001,623</p>
            <p className="text-xs">Total Products: 400</p>
          </div>
          <div className="bg-blue-200 p-4 rounded-lg">
            <h3 className="text-sm font-medium">Cash Out</h3>
            <p className="text-3xl font-bold">MWK 5,000,000</p>
            <p className="text-xs">20 Times</p>
          </div>
        </div>

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
              <tr>
                <td className="py-2">1</td>
                <td className="py-2">Ronald@gmail.com</td>
                <td className="py-2">Beef</td>
                <td className="py-2">20kg</td>
                <td className="py-2">MWK400000</td>
                <td className="py-2">Success</td>
                <td className="py-2">2024/10/18</td>
              </tr>
              <tr>
                <td className="py-2">2</td>
                <td className="py-2">isipho@gmail.com</td>
                <td className="py-2">Goat</td>
                <td className="py-2">7</td>
                <td className="py-2">MWK749995</td>
                <td className="py-2">Success</td>
                <td className="py-2">2024/10/18</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

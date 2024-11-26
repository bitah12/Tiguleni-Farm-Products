import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import dayjs from "dayjs";

const MyBag = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("token");

  const fetchSalesData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/sales/purchases`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = response.data;
      if (Array.isArray(data)) {
        setPurchases(data);
      } else if (data?.sales && Array.isArray(data.sales)) {
        setPurchases(data.sales);
      } else {
        setPurchases([]);
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
      fetchSalesData();
    } else {
      setError("Access token is missing. Please log in.");
    }
  }, [accessToken]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">My Bag</h1>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchases.filter((purchase) => purchase.status === "success").length === 0 ? (
              <div className="text-center col-span-full">
                You have no successful purchases yet.
              </div>
            ) : (
              purchases
                .filter((purchase) => purchase.status === "success")
                .map((purchase) => (
                  <div
                    key={purchase.payment_Id}
                    className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                  >
                    {purchase.productImage && (
                      <img
                        src={purchase.productImage}
                        alt={purchase.product_name}
                        className="w-full h-40 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <div className="flex justify-between">
                        <span className="font-semibold text-lg">
                          {purchase.product_name}
                        </span>
                        <span className="text-sm text-gray-600">
                          {purchase.quantityBought || "N/A"}{" "}
                          {purchase.quantity_metric || ""}
                        </span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="font-medium text-gray-800">Amount:</span>
                        <span className="text-lg text-black">
                          {purchase.amount} MKW
                        </span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="font-medium text-gray-800">Date:</span>
                        <span className="text-sm text-gray-600">
                          {dayjs(purchase.date).format("MMM D, YYYY h:mm A")}
                        </span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="font-medium text-gray-800">Status:</span>
                        <span className="text-black font-semibold">PAID</span>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBag;

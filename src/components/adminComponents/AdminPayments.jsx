import React, { useState,useEffect} from "react";
import axios from "axios";

const AdminPayments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentsData, setPaymentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/payments`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setPaymentsData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch payments data.");
        setLoading(false);
      }
    };

    fetchPayments();
  }, [accessToken]);

  useEffect(() => {
    const fetchPaymentsData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/withdrawals/all-withdrwals`, {
          headers: {
            Authorization: `Bearer ${accessToken}`, 
          },
        });

        setPaymentsData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPaymentsData();
  }, []);

  
  
  const filteredPayments = paymentsData.filter((payment) => {
    return (
      payment.transID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.number.includes(searchTerm) ||
      payment.amount.toString().includes(searchTerm)
    );
  });

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  // if (error) {
  //   return <div className="p-6 text-red-500">{error}</div>;
  // }


  return (
    <div className="p-6 w-[75%] relative -right-[300px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-semibold">Payments</h2>
        <div className="flex items-center"></div>
      </div>

      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search"
          className="border ml-64 border-gray-300 rounded-lg px-4 py-2 w-64 text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="w-full table-auto text-left">
        <thead className="bg-gray-200 text-sm text-gray-600">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Prduct Name</th>
            <th className="p-3">Status</th>
            <th className="p-3">Number</th>
            <th className="p-3">transID</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {filteredPayments.length > 0 ? (
            filteredPayments.map((payment, index) => (
              <tr key={allSellerwithdrwals.withdrawal_Id} className="border-t border-gray-300">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{allSellerwithdrwals.amountCashedOut}</td>
                <td className="p-3">{allSellerwithdrwals.fee}</td>
                <td className="p-3">{allSellerwithdrwals.status}</td>
                <td className="p-3">{allSellerwithdrwals.mobile}</td>
                <td className="p-3">{allSellerwithdrwals.transID}</td>
                <td className="p-3">{allSellerwithdrwals.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="p-3 text-center">
                No matching payments found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPayments;

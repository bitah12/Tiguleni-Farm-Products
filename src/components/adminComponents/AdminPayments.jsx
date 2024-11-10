import React, { useState } from "react";

const AdminPayments = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const paymentsData = [
    {
      id: 1,
      amount: 90000,
      fee: "4%",
      status: "success",
      number: "994543849",
      transID: "vigothrgrpjtg9f",
      date: "2024/10/18",
    },
    {
      id: 2,
      amount: 489363,
      fee: "4%",
      status: "success",
      number: "994543849",
      transID: "vigothrgrpjtg9f",
      date: "2024/10/18",
    },
    {
      id: 3,
      amount: 750000,
      fee: "4%",
      status: "success",
      number: "994543849",
      transID: "vigothrgrpjtg9f",
      date: "2024/10/18",
    },
    {
      id: 4,
      amount: 30000,
      fee: "4%",
      status: "success",
      number: "994543849",
      transID: "vigothrgrpjtg9f",
      date: "2024/10/18",
    },
  ];

  const filteredPayments = paymentsData.filter((payment) => {
    return (
      payment.transID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.number.includes(searchTerm) ||
      payment.amount.toString().includes(searchTerm)
    );
  });

  return (
    <div className="p-6 w-full">
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
            <th className="p-3">Fee</th>
            <th className="p-3">Status</th>
            <th className="p-3">Number</th>
            <th className="p-3">transID</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {filteredPayments.length > 0 ? (
            filteredPayments.map((payment, index) => (
              <tr key={payment.id} className="border-t border-gray-300">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{payment.amount}</td>
                <td className="p-3">{payment.fee}</td>
                <td className="p-3">{payment.status}</td>
                <td className="p-3">{payment.number}</td>
                <td className="p-3">{payment.transID}</td>
                <td className="p-3">{payment.date}</td>
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

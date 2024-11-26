import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Tomato", price: 6500, unit: "kg", quantity: 1 },
    { id: 2, name: "Fresh Beef", price: 6500, unit: "each", quantity: 1 },
    { id: 3, name: "Red Pepper", price: 2578, unit: "5 liters", quantity: 2 },
  ]);

  const handleBuyNow = (itemId) => {
    const item = cartItems.find((product) => product.id === itemId);
    alert(`You have chosen to buy ${item.name} for Mwk${item.price * item.quantity}`);
  };

  const handleQuantityChange = (itemId, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: quantity } : item
    );
    setCartItems(updatedCart);
  };

  const calculateSubtotal = (item) => item.price * item.quantity;
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Product</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Subtotal</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border border-gray-300">
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                Mwk{item.price}/{item.unit}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="border border-gray-300 rounded px-2 py-1"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Mwk{calculateSubtotal(item)}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleBuyNow(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Buy Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={() => alert("Returning to product list...")}
        >
          Go back to Products
        </button>
        <div className="text-right">
          <p className="text-lg font-bold">Total: Mwk{calculateTotal()}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

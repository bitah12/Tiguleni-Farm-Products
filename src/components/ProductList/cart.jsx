import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { buyNow } from "../../store/paymentsSlice";

const Cart = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const handleBuyNow = (itemId) => {
    if (!user) {
      navigate("/login");
      return;
    }

    const accessToken = localStorage.getItem("token");
    const item = cartItems.find((product) => product.id === itemId);

    if (!item) {
      alert("Item not found!");
      return;
    }

    const payload = {
      quantity: item.quantity,
      productId: `:${item.productId}`,
      accessToken,
    };
    console.log(payload)

    dispatch(buyNow(payload))
      .unwrap()
      .then((response) => {
        if (response?.checkout_url) {
          window.location.href = response.checkout_url;
        }
      })
      .catch((error) => {
        console.error("Buy Now Error:", error);
        alert("Failed to initiate payment. Please try again.");
      });
  };

  const handleQuantityChange = (itemId, quantity) => {
    if (quantity < 1) return;
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  const calculateSubtotal = (item) => item.price * item.quantity;
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);

  return (
    <div className="">
      <Navbar />
      <div className="container h-screen mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <table className="table-auto w-full mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2">Product</th>
              <th className="text-left px-4 py-2">Price</th>
              <th className="text-left px-4 py-2">Quantity</th>
              <th className="text-left px-4 py-2">Subtotal</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <tr key={item.productId} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{item.products_name || "Unnamed Product"}</td>
                  <td className="px-4 py-2">
                    Mwk{item.price}/{item.unit}
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                      min="1"
                      className="border border-gray-300 rounded px-2 py-1 w-16 text-center"
                    />
                  </td>
                  <td className="px-4 py-2">Mwk{calculateSubtotal(item)}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleBuyNow(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Buy Now
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  Your cart is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex justify-between items-center">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => navigate("/products")}
          >
            Go back to Products
          </button>
          <div className="text-right">
            <p className="text-lg font-bold">Total: Mwk{calculateTotal()}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

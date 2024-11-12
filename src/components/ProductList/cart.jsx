
import React, { useState } from "react"; 
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Cart = () => {
    const [cart, setCart] = useState([]);

    // Calculate total price of cart items
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <div>
            <Navbar />
            <div className="container h-screen mx-auto p-8">
                <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
                <div className="space-y-6">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center p-4 bg-white shadow rounded-lg space-x-4"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded"
                            />
                            <div className="flex-1">
                                <h4 className="font-semibold text-lg">{item.name}</h4>
                                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                <p className="text-gray-800 font-semibold">
                                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 font-semibold hover:text-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-lg font-semibold">
                    Total: ${calculateTotal()}
                </div>
            </div>
            <Footer /> 
        </div>
    );
};

export default Cart;

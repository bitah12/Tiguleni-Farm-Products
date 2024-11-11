import React, { useState } from "react";

const Cart = () => {
    // Sample cart items
    const [cart, setCart] = useState([
        { id: 1, name: "Organic Apples", price: 2.5, quantity: 3, image: "https://via.placeholder.com/80" },
        { id: 2, name: "Farm Fresh Eggs", price: 4, quantity: 2, image: "https://via.placeholder.com/80" },
        { id: 3, name: "Honey", price: 7.5, quantity: 1, image: "https://via.placeholder.com/80" }
    ]);

    // Calculate total price of cart items
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        cart
    );
};

export default Cart;

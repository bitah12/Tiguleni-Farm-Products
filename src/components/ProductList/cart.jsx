import React, { useState } from "react";

const Cart = () => {
    // Sample cart items
    const [cart, setCart] = useState([
        { id: 1, name: "Organic Apples", price: 2.5, quantity: 3, image: "https://via.placeholder.com/80" },
        { id: 2, name: "Farm Fresh Eggs", price: 4, quantity: 2, image: "https://via.placeholder.com/80" },
        { id: 3, name: "Honey", price: 7.5, quantity: 1, image: "https://via.placeholder.com/80" }
    ]);

    

    return (
        cart
    );
};

export default Cart;

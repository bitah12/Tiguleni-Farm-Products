import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductsPage = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    

    const handleEnquire = (product) => {
        alert(`Enquiry for: ${product.name}`);
        // Placeholder for more complex enquiry logic
    };

    return (
        <div className="container mx-auto p-8 bg-white text-black">
            <h2 className="text-2xl font-bold mb-6">Available Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg shadow-md p-4 bg-white">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-black mb-2">Price: ${product.price}</p>
                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={() => handleEnquire(product)}
                                className="text-white bg-red-500 hover:bg-red-600 font-semibold py-1 px-4 rounded"
                            >
                                Enquire
                            </button>
                            <button
                                onClick={() => addToCart(product)}
                                className="text-white bg-red-500 hover:bg-red-600 rounded-full p-2"
                            >
                                <FaShoppingCart size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;

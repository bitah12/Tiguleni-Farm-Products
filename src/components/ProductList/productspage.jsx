import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";

const ProductsPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  // Fetch products from the database when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://my-api-url.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleEnquire = (product) => {
    alert(`Enquiry for: ${product.name}`);
    // Placeholder for more complex enquiry logic
  };

  return (
    <div>
      <NavBar />
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
      <Footer />
    </div>
  );
};

export default ProductsPage;


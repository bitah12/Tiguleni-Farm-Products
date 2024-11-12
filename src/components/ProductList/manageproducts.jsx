
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ControlledSwitches from "./ControlledSwitches";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products"); 
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-semibold text-black">Manage Products</h2>
          <div className="flex items-center">
            <span className="text-sm mr-2 text-black">Switch to buy</span>
            <ControlledSwitches />
          </div>
        </div>

        <button
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => navigate("/add-product")}
        >
          Add Product
        </button>

        <div className="bg-white p-4 border rounded-lg shadow">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2">#</th>
                <th className="py-2">Product</th>
                <th className="py-2">Available</th>
                <th className="py-2">Sold</th>
                <th className="py-2">Price</th>
                <th className="py-2">Status</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} className="border-b">
                  <td className="py-2 text-black">{index + 1}</td>
                  <td className="py-2 text-black">{product.name}</td>
                  <td className="py-2 text-black">{product.available} kg</td>
                  <td className="py-2 text-black">{product.sold} kg</td>
                  <td className="py-2 text-black">MWK {product.price}</td>
                  <td className={`py-2 ${product.status === "Available" ? "text-green-500" : "text-red-500"}`}>
                    {product.status}
                  </td>
                  <td className="py-2 text-black">{new Date(product.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManageProducts;

import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    available: "",
    sold: "",
    price: "",
    status: "",
  });
  const accessToken = localStorage.getItem("token");

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/products`, // Update the API endpoint
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [accessToken]);

  const handleEdit = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setUpdatedProduct({
      name: productToEdit.name,
      available: productToEdit.available,
      sold: productToEdit.sold,
      price: productToEdit.price,
      status: productToEdit.status,
    });
    setEditingProductId(productId);
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSave = async (productId) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/products/${productId}`,
        updatedProduct,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setEditingProductId(null);
      setUpdatedProduct({
        name: "",
        available: "",
        sold: "",
        price: "",
        status: "",
      });
     
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/products`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="p-6 w-[75%] relative -right-[300px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-semibold">Manage Products</h2>
      </div>

      <div className="bg-white p-4 border rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="pb-2">#</th>
              <th className="pb-2">Product</th>
              <th className="pb-2">Available</th>
              <th className="pb-2">Sold</th>
              <th className="pb-2">Price</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Date</th>
              <th className="pb-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="bg-white border-b">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">
                  {editingProductId === product.productId ? (
                    <input
                      type="text"
                      name="name"
                      value={updatedProduct.name}
                      onChange={handleChange}
                      className="border p-2"
                    />
                  ) : (
                    product.name
                  )}
                </td>
                <td className="py-2">
                  {editingProductId === product.id ? (
                    <input
                      type="number"
                      name="available"
                      value={updatedProduct.available}
                      onChange={handleChange}
                      className="border p-2"
                    />
                  ) : (
                    product.available
                  )}
                </td>
                <td className="py-2">
                  {editingProductId === product.id ? (
                    <input
                      type="number"
                      name="sold"
                      value={updatedProduct.sold}
                      onChange={handleChange}
                      className="border p-2"
                    />
                  ) : (
                    product.sold
                  )}
                </td>
                <td className="py-2">
                  {editingProductId === product.id ? (
                    <input
                      type="number"
                      name="price"
                      value={updatedProduct.price}
                      onChange={handleChange}
                      className="border p-2"
                    />
                  ) : (
                    `MWK ${product.price}`
                  )}
                </td>
                <td className="py-2">
                  {editingProductId === product.id ? (
                    <select
                      name="status"
                      value={updatedProduct.status}
                      onChange={handleChange}
                      className="border p-2"
                    >
                      <option value="Available">Available</option>
                      <option value="Out of Stock">Out of Stock</option>
                    </select>
                  ) : (
                    product.status
                  )}
                </td>
                <td className="py-2">{new Date(product.date).toLocaleDateString()}</td>
                <td className="py-2">
                  {editingProductId === product.id ? (
                    <button
                      onClick={() => handleSave(product.id)}
                      className="text-white bg-blue-500 px-4 py-2 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="text-white bg-green-500 px-4 py-2 rounded"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;

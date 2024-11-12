import React, { useState } from "react";
import ControlledSwitches from "../sellerComponents/ControlledSwitches";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [tempImage, setTempImage] = useState(null);
  const [editingIndex, setEditingIndex] = useState(-1);

  // Submit function to handle form submission and send data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      price: price,
      quantity: quantity,
      image: tempImage || (image ? URL.createObjectURL(image) : null),
    };

    try {
      const response = await fetch("http://my-api-url.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const savedProduct = await response.json();
        setProducts([...products, savedProduct]);
        setProductName("");
        setPrice("");
        setQuantity("");
        setImage(null);
        setTempImage(null);
      } else {
        console.error("Failed to save product to database");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleEdit = (index) => {
    const productToEdit = products[index];
    setProductName(productToEdit.name);
    setPrice(productToEdit.price);
    setQuantity(productToEdit.quantity);
    setTempImage(productToEdit.image);
    setEditingIndex(index);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setTempImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <div className="flex justify-between items-center  mb-6">
        <h2 className="text-4xl font-semibold text-black">Add Products</h2>
        <div className="flex items-center">
          <span className="text-sm mr-2 text-black">Switch to buy</span>
          <ControlledSwitches />
        </div>
      </div>
      <div className="flex justify-center bg-white">
        <form
          onSubmit={handleSubmit}
          className="mt-8 bg-white w-1/2 h-3/4 p-6 m-8 rounded-lg"
        >
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Price
            </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Quantity
            </label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Product Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="shadow appearance-none border w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {editingIndex !== -1 ? "Update Product" : "Add Product"}
          </button>
        </form>
        <div className="mt-8 w-full px-8">
          <h2 className="text-lg font-bold mb-4">Products</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <li
                key={index}
                className="border p-4 rounded-lg flex flex-col justify-between"
              >
                <div>
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover mb-2"
                      onClick={() => handleEdit(index)}
                    />
                  )}
                  <div className="mb-2">
                    {product.name} - {product.price} - {product.marketplace} -{" "}
                    {product.quantity}
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleEdit(index)}
                    className="mr-2 text-sm text-red-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-sm text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;

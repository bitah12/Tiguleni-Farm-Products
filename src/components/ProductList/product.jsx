import React, { useState } from "react";
import ControlledSwitches from "../sellerComponents/ControlledSwitches";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [tempImage, setTempImage] = useState(null);
  const [location, setLocation] = useState("");
  const accessToken = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("products_name", productName);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("quantity_amount", quantity);
    formData.append("category", category);
    formData.append("quantity_metric", "kg");
    formData.append("image", image);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/products/post`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const savedProduct = await response.json();
        setProducts([...products, savedProduct]);
        setProductName("");
        setPrice("");
        setQuantity("");
        setLocation("");
        setCategory("");
        setImage(null);
        setTempImage(null);

        alert("Product successfully added!");
      } else {
        console.error("Failed to save product to database");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setImage(file);
      setTempImage(URL.createObjectURL(file));
      console.log("File selected:", file.name);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
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
          encType="multipart/form-data"
        >
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-black text-sm font-bold mb-2"
            >
              Product Name
            </label>
            <input
              id="productName"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-black text-sm font-bold mb-2"
            >
              Price
            </label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-black text-sm font-bold mb-2"
            >
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-black text-sm font-bold mb-2"
            >
              Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-black text-sm font-bold mb-2"
            >
              Category
            </label>
            <input
              id="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="productImage"
              className="block text-black text-sm font-bold mb-2"
            >
              Product Image
            </label>
            <input
              id="productImage"
              type="file"
              onChange={handleImageChange}
              className="shadow appearance-none border w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              accept="image/*"
              required
            />
            {tempImage && (
              <img
                src={tempImage}
                alt="Preview"
                className="mt-4 w-32 h-32 object-cover rounded"
              />
            )}
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Product;
